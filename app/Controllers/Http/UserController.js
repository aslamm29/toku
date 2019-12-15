'use strict'
const User = use('App/Models/User')
const Database = use('Database')

class UserController {
    async profile({auth, request, response}){
        try{
            const user = await User.query().where('id', '=', request.params.id).fetch()
            const following = await Database.from('followers').where({ user_id: auth.user.id, follow_id: request.params.id })

            console.log('=========')
            console.log(following)
            console.log('=========')
            return {
                user: user.toJSON(),
                following: (following === undefined || following.length == 0) ? false : true
            }
        }catch(error){
            console.log(error)
        }    
    }

    async follow({auth, request, response}){
        if(auth.user){
            try{
                const followedUser = await Database.table('followers').insert({
                    user_id: auth.user.id,
                    follow_id: request.params.id
                })
                console.log(followedUser)
                return 'saved successfully'
            }catch(error){
                console.log(error)
            }
        }else{
            return 'You are not logged in'
        }  
    }

    async unfollow({auth, request, response}){
        if(auth.user){
            try{
                const followedUser = await Database.table('followers').where({
                    user_id: auth.user.id,
                    follow_id: request.params.id
                }).delete()
    
                console.log(followedUser)
                return 'Deleted successfully'
            }catch(error){
                console.log(error)
            }
        } else {
            return 'You are not logged in'
        }       
    }
}

module.exports = UserController
