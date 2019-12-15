'use strict'
const User = use('App/Models/User')
const Database = use('Database')

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

    async follow({auth, request, response}){
        try{
            const followedUser = await Database.table('followers').insert({
                user_id: 1,
                follow_id: request.params.id
            })
            console.log(followedUser)
            return 'saved succesfully'
        }catch(error){
            console.log(error)
        }
    }
}

module.exports = UserController
