'use strict'
const { validate, sanitize } = use('Validator')
const Hash = use('Hash')
const User = use('App/Models/User')

class AuthController {
    async register({response, request, view}){
        return view.render('auth/register')
    }
    async storeUser ({ request, session, response, auth }) {
        
        //validation rules
        const validation = await validate(request.all(), {
            email: 'required|email|unique:users,email',
            password: 'required|min:6|max:40',
            confirm_password: 'required'
          })

        //check if passwords match
        if(request.input('password') === request.input('confirm_password')){
            //check if it fails validation
            if (validation.fails()) {
                session
                    .withErrors(validation.messages())
                    .flashExcept(['password'])
            
                  return response.redirect('back')
                }else{
                    //save user to database
                    try{
                        let newUser = await User.create({
                            email: request.input('email'),
                            password: request.input('password')
                        })
                    }catch(error){
                        //show errors if problems with database
                        console.log('error')
                        session
                            .withErrors([
                                {field: 'database', message: 'problem with database try again later'},
                            ])
                            .flashExcept(['password'])
                    
                        return response.redirect('back')
                    }
                    session.flash({ notification: 'Welcome to Toku'})
                    return response.redirect('/home')
                }
        }else{
            //show errors if password dont match
            session
                .withErrors([
                    {field: 'password', message: 'need to confirm password'},
                    {field: 'confirm_password', message: 'need to confirm password'}
                ])
                .flashExcept(['password'])
            
            return response.redirect('back')
           return `passwords dont match`
        }
    }
    async login({response, request, view}){
        return view.render('auth/login')
    }
    async loginUser({response, request, view, auth, session}){
        //capture the data from the form
        const postData = request.post()

        //find the user in the database by their email
        const user = await User.query().where('email', postData.email).first()
        if(user){
         //verify the password
         const passwordVerified = await Hash.verify(postData.password, user.password)

         if(passwordVerified){
            //login the user
            await auth.login(user)
            session.flash({ notification: 'Welcome to Toku'})
            return response.redirect('/home')
         }else{
             //password incorrect
             session
                .withErrors([
                 {field: 'password', message: `Incorrect Password`},
                ])
                .flashExcept(['password'])        
            return response.redirect('back')
         }
        }else{
            //cant find user with that email
            session
                .withErrors([
                 {field: 'email', message: `Can't find user with that email`},
                ])
                .flashExcept(['password'])        
            return response.redirect('back')
        }

    }
    async forgotPassword({response, request, view}){
        return view.render('auth/forgotPassword')
    }
    async logout({response, request, view, auth}){
        try{
            await auth.logout()
            return response.redirect('/')
        }catch(error){
            console.log(error)
            return 'Error could not logout'
        }
    }
}

module.exports = AuthController
