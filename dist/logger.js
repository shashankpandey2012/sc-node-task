'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = new _winston2.default.Logger({
    transports: [new _winston2.default.transports.Console(), new _winston2.default.transports.File({ filename: 'log_file.log' })]
}); /**
     * Created by Shashank on 5/10/2017.
     */
exports.default = logger;
//# sourceMappingURL=logger.js.map