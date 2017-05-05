/**
 * Created by Shashank on 5/4/2017.
 */
import jwt from 'jsonwebtoken';
import PrivateKey from './PrivateKey';
import user_data from '../data/users';
import { find } from 'lodash/collection';

let api_auth = (req , res , next)=>{
    console.log(req.url);
    let token = req.header('Authorization');
    if(token){
        console.log("INSIDE");
        try {
            let decoded = jwt.verify(token, PrivateKey.secret , {issuer : PrivateKey.issuer } );
            let user = find(user_data , { user_id : decoded.sub });
            if(user){

                req.decoded = user;
                next();
            }
            else{
                return res.status(403).json({
                    data : null,
                    message: 'Invalid LoginId or Password',
                    status: 403
                });
            }

        } catch(err) {
            // err
            console.log(err);
            return res.status(403).json({
                data: null,
                message: 'FORBIDDEN',
                status : 403
            });
        }
    }
    else {
        // if there is no token
        // return an error
        return res.status(403).json({
            data: null,
            message: 'FORBIDDEN',
            status : 403
        });
    }
};

export default api_auth;




