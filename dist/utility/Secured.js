'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _PrivateKey = require('./PrivateKey');

var _PrivateKey2 = _interopRequireDefault(_PrivateKey);

var _users = require('../data/users');

var _users2 = _interopRequireDefault(_users);

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

var _collection = require('lodash/collection');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var api_auth = function api_auth(req, res, next) {
    var token = req.header('Authorization');
    if (token) {

        try {
            var decoded = _jsonwebtoken2.default.verify(token, _PrivateKey2.default.secret, { issuer: _PrivateKey2.default.issuer });
            var user = (0, _collection.find)(_users2.default, { user_id: decoded.sub });
            if (user) {
                _logger2.default.log('info', 'INSIDE');
                req.decoded = user;
                next();
            } else {
                _logger2.default.log('error', 'USER NOT FOUND');
                return res.status(403).json({
                    data: null,
                    message: 'Invalid LoginId or Password',
                    status: 403
                });
            }
        } catch (err) {
            // err
            _logger2.default.log('error', err);
            return res.status(403).json({
                data: null,
                message: 'FORBIDDEN',
                status: 403
            });
        }
    } else {
        // if there is no token
        // return an error
        _logger2.default.log('error', 'NO TOKEN FOUND');
        return res.status(403).json({
            data: null,
            message: 'FORBIDDEN',
            status: 403
        });
    }
}; /**
    * Created by Shashank on 5/4/2017.
    */
exports.default = api_auth;
//# sourceMappingURL=Secured.js.map