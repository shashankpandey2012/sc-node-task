/**
 * Created by Shashank on 5/4/2017.
 */
import jwt from 'jsonwebtoken';
import PrivateKey from './PrivateKey';
import user_data from '../data/users';
import logger from '../logger';
import { find } from 'lodash/collection';

let api_auth = (req , res , next)=>{
    let token = req.header('Authorization');
    if(token){

        try {
            let decoded = jwt.verify(token, PrivateKey.secret , {issuer : PrivateKey.issuer } );
            let user = find(user_data , { user_id : decoded.sub });
            if(user){
                logger.log('info' , 'INSIDE');
                req.decoded = user;
                next();
            }
            else{
                logger.log('error' , 'USER NOT FOUND');
                return res.status(403).json({
                    data : null,
                    message: 'Invalid LoginId or Password',
                    status: 403
                });
            }

        } catch(err) {
            // err
            logger.log('error' , err);
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
        logger.log('error' , 'NO TOKEN FOUND');
        return res.status(403).json({
            data: null,
            message: 'FORBIDDEN',
            status : 403
        });
    }
};

export default api_auth;




