/**
 * Created by Shashank on 5/4/2017.
 */
import jsonpatch from 'fast-json-patch';
import Jimp from 'jimp';
import logger from '../logger';
import { split } from 'lodash/string';
import APIResponse from './APIResponse';

/**
 * TaskController.js
 * */

export default {

    /**
     * TaskController.apply_json_patch(req,res)
     * Function for JSON PATCH
     * */
    apply_json_patch: (req, res) => {
        let json = req.body.json;
        logger.log('info', 'JSON Object ' ,json);
        let patch_object = req.body.patch;
        logger.log('info', 'PATCH Object ' , patch_object);
        let patch_array = [];
        patch_array[0] = patch_object;
        try {
            jsonpatch.apply(json, patch_array);
            logger.log('info', 'MODIFIED JSON Object ' , json);
            APIResponse(res, json, 'OK', 200);
        }
        catch (err) {
            logger.log('error', err);
            APIResponse(res, null, 'INVALID', 400);
        }
    },

    /**
     * TaskController.create_thumbnail(req,res)
     * Function for Creating Thumbnail of Size 50/50
     * */
    create_thumbnail: (req, res) => {
        let image_url = req.query.image_url;
        logger.log('info', 'Image Url ' , image_url);
        Jimp.read(image_url, (err, image) => {
            if (err || !image) {
                logger.log('error', err);
                APIResponse(res, null, 'UNABLE TO DOWNLOAD IMAGE', 422);
            }
            else {
                image.resize(50, 50)
                    .write(`public/ena-small-bw.jpg`, (err, img) => {
                        if (err || !img) {
                            logger.log('error', err);
                            APIResponse(res, null, 'UNABLE TO PROCESS THE IMAGE', 422);
                        }
                        else {
                            let dir = split(__dirname, 'dist\\');
                            let dirname = dir[0];
                            res.sendFile(`${dirname}\\public\\ena-small-bw.jpg`, {}, function (err) {
                                if (err) {
                                    logger.log('error', err);
                                    APIResponse(res, err, 'ERROR OCCURRED', 500);
                                } else {
                                    logger.log('info', 'Sent : ena-small-bw');
                                }
                            });
                        }
                    });
            }
        });
    }
}
