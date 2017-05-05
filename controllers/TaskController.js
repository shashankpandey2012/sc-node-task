/**
 * Created by Shashank on 5/4/2017.
 */
import jsonpatch from 'fast-json-patch';
import APIResponse from './APIResponse';

export default {

    patch : (req,res)=>{
        let json = req.body.json;
        let patch_object = req.body.patch;
        let patch_array = [];
        patch_array[0] = patch_object;

        // let errors = jsonpatch.validate(patch_array, json);
        // let has_error = false;
        // if(errors){
        //     if(errors.length !== 0){
        //         for (let i=0; i < errors.length; i++) {
        //             if (errors[i]) {
        //                 console.error("Invalid patch at index", i, errors[i], patch_array[i]);
        //                 has_error = true;
        //             }
        //         }
        //     }
        //     if(has_error){
        //         APIResponse(res , {error : errors} , 'INVALID DATA' , 400);
        //     }
        //     else{
        try{
            jsonpatch.apply( json, patch_array );
            console.log(json);
            APIResponse(res , {json : json} , 'OK' , 200);
        }
        catch (err){
            APIResponse(res , null , 'INVALID' , 400);
        }
    },

    generateThumb : (req,res)=>{
        APIResponse(res,"UNDER DEVELOPMENT.THANKS FOR PATIENCE" , 'OK' , 200);
    }
};
