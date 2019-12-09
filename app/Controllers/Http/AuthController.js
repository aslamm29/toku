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
            password: 'required',
            confirm_password: 'required'
          })

        //check if passwords match
        if(request.input('password') === request.input('confirm_password')){
            //check if it fails validation
            if (validation.fails()) {
                // session
                //     .withErrors(validation.messages())
                //     .flashExcept(['password'])
            
                //   return response.redirect('back')
                    return `error: there is a problem with email error`
                }else{
                    try{
                        let newUser = await User.create({
                            email: request.input('email'),
                            password: request.input('password')
                        })
                    }catch(error){
                        console.log('error')
                        return 'problems with database'
                    }
                    return 'Validation passed'
                }
        }else{
           return `passwords dont match`
        }
    }
    async login({response, request, view}){
        return view.render('auth/login')
    }
    async forgotPassword({response, request, view}){
        return view.render('auth/forgotPassword')
    }
}

module.exports = AuthController
