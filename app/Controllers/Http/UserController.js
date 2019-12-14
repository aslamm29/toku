'use strict'
const User = use('App/Models/User')

class UserController {
    async profile({auth, request, response}){
        try{
            const user = await User.query().where('id', '=', request.params.id).fetch()
            console.log(user.toJSON())
            return user.toJSON()
        }catch(error){
            console.log(error)
        }    
    }
}

module.exports = UserController
