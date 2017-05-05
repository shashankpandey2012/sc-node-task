/**
 * Created by Shashank on 5/4/2017.
 */
import express from 'express';
import secured from '../utility/Secured';
import { TaskController } from '../controllers';

let router = express.Router();
router.use(secured);


router.patch('/patch' , (req,res)=>{
    TaskController.patch(req,res);
});

router.put('/generateThumb' , (req,res)=>{
    TaskController.generateThumb(req,res);
});

export default router;


