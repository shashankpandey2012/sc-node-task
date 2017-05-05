/**
 * Created by Shashank on 5/4/2017.
 */
import jwt from 'jsonwebtoken';
import passwordHash from 'password-hash';
import user_data from '../data/users';
import privateKey from '../utility/PrivateKey';
import { find } from 'lodash/collection';
import APIResponse from './APIResponse';

export default {

    login : (req,res)=>{

        if(req.body.user_id === undefined || req.body.password === undefined){
            APIResponse(res , null, 'FORBIDDEN' , 403);
        }
        else{
            let user_id = req.body.user_id;
            let password = req.body.password;
            let user = find(user_data , {user_id : user_id});
            console.log(user);
            if(user){
                if(passwordHash.verify(password , user.password_hash)){
                    console.log('Inside');
                    let token = jwt.sign({} ,privateKey.secret , {algorithm : 'HS512' ,  issuer : privateKey.issuer , subject : user_id , expiresIn:5184000} );
                    APIResponse(res , {user_id : user_id , token : token} , 'OK' , 200);
                }
                else{
                    APIResponse(res, null, 'Invalid UserId or Password' , 403);
                }
            }
            else{
                APIResponse(res, null, 'Invalid UserId or Password' , 403);
            }
        }


    }
};