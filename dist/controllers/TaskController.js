'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fastJsonPatch = require('fast-json-patch');

var _fastJsonPatch2 = _interopRequireDefault(_fastJsonPatch);

var _jimp = require('jimp');

var _jimp2 = _interopRequireDefault(_jimp);

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

var _string = require('lodash/string');

var _APIResponse = require('./APIResponse');

var _APIResponse2 = _interopRequireDefault(_APIResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * TaskController.js
 * */

exports.default = {

    /**
     * TaskController.apply_json_patch(req,res)
     * Function for JSON PATCH
     * */
    apply_json_patch: function apply_json_patch(req, res) {
        var json = req.body.json;
        _logger2.default.log('info', 'JSON Object ', json);
        var patch_object = req.body.patch;
        _logger2.default.log('info', 'PATCH Object ', patch_object);
        var patch_array = [];
        patch_array[0] = patch_object;
        try {
            _fastJsonPatch2.default.apply(json, patch_array);
            _logger2.default.log('info', 'MODIFIED JSON Object ', json);
            (0, _APIResponse2.default)(res, json, 'OK', 200);
        } catch (err) {
            _logger2.default.log('error', err);
            (0, _APIResponse2.default)(res, null, 'INVALID', 400);
        }
    },

    /**
     * TaskController.create_thumbnail(req,res)
     * Function for Creating Thumbnail of Size 50/50
     * */
    create_thumbnail: function create_thumbnail(req, res) {
        var image_url = req.query.image_url;
        _logger2.default.log('info', 'Image Url ', image_url);
        _jimp2.default.read(image_url, function (err, image) {
            if (err || !image) {
                _logger2.default.log('error', err);
                (0, _APIResponse2.default)(res, null, 'UNABLE TO DOWNLOAD IMAGE', 422);
            } else {
                image.resize(50, 50).write('public/ena-small-bw.jpg', function (err, img) {
                    if (err || !img) {
                        _logger2.default.log('error', err);
                        (0, _APIResponse2.default)(res, null, 'UNABLE TO PROCESS THE IMAGE', 422);
                    } else {
                        var dir = (0, _string.split)(__dirname, 'dist\\');
                        var dirname = dir[0];
                        res.sendFile(dirname + '\\public\\ena-small-bw.jpg', {}, function (err) {
                            if (err) {
                                _logger2.default.log('error', err);
                                (0, _APIResponse2.default)(res, err, 'ERROR OCCURRED', 500);
                            } else {
                                _logger2.default.log('info', 'Sent : ena-small-bw');
                            }
                        });
                    }
                });
            }
        });
    }
}; /**
    * Created by Shashank on 5/4/2017.
    */
//# sourceMappingURL=TaskController.js.map