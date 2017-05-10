/**
 * Created by Shashank on 5/4/2017.
 */
import express from 'express';
import secured from '../utility/Secured';
import { TaskController } from '../controllers';

let router = express.Router();
router.use(secured);


/**
 * PATCH JSON Route
 * */
router.patch('/apply_json_patch' , (req,res)=>{
    TaskController.apply_json_patch(req,res);
});


/**
 * GET thumbnail Route
 * */
router.get('/create_thumbnail' , (req,res)=>{
    TaskController.create_thumbnail(req,res);
});

export default router;


