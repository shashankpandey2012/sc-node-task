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

var _collection = require('lodash/collection');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Shashank on 5/4/2017.
 */
var api_auth = function api_auth(req, res, next) {
    console.log(req.url);
    var token = req.header('Authorization');
    if (token) {
        console.log("INSIDE");
        try {
            var decoded = _jsonwebtoken2.default.verify(token, _PrivateKey2.default.secret, { issuer: _PrivateKey2.default.issuer });
            var user = (0, _collection.find)(_users2.default, { user_id: decoded.sub });
            if (user) {

                req.decoded = user;
                next();
            } else {
                return res.status(403).json({
                    data: null,
                    message: 'Invalid LoginId or Password',
                    status: 403
                });
            }
        } catch (err) {
            // err
            console.log(err);
            return res.status(403).json({
                data: null,
                message: 'FORBIDDEN',
                status: 403
            });
        }
    } else {
        // if there is no token
        // return an error
        return res.status(403).json({
            data: null,
            message: 'FORBIDDEN',
            status: 403
        });
    }
};

exports.default = api_auth;
//# sourceMappingURL=Secured.js.map