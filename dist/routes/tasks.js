'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _Secured = require('../utility/Secured');

var _Secured2 = _interopRequireDefault(_Secured);

var _controllers = require('../controllers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router(); /**
                                          * Created by Shashank on 5/4/2017.
                                          */

router.use(_Secured2.default);

router.patch('/patch', function (req, res) {
    _controllers.TaskController.patch(req, res);
});

router.put('/generateThumb', function (req, res) {
    _controllers.TaskController.generateThumb(req, res);
});

exports.default = router;
//# sourceMappingURL=tasks.js.map