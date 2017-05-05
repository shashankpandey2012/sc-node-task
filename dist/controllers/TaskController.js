'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fastJsonPatch = require('fast-json-patch');

var _fastJsonPatch2 = _interopRequireDefault(_fastJsonPatch);

var _APIResponse = require('./APIResponse');

var _APIResponse2 = _interopRequireDefault(_APIResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Shashank on 5/4/2017.
 */
exports.default = {

    patch: function patch(req, res) {
        var json = req.body.json;
        var patch_object = req.body.patch;
        var patch_array = [];
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
        try {
            _fastJsonPatch2.default.apply(json, patch_array);
            console.log(json);
            (0, _APIResponse2.default)(res, { json: json }, 'OK', 200);
        } catch (err) {
            (0, _APIResponse2.default)(res, null, 'INVALID', 400);
        }
    },

    generateThumb: function generateThumb(req, res) {
        (0, _APIResponse2.default)(res, "UNDER DEVELOPMENT.THANKS FOR PATIENCE", 'OK', 200);
    }
};
//# sourceMappingURL=TaskController.js.map