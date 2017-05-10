'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _passwordHash = require('password-hash');

var _passwordHash2 = _interopRequireDefault(_passwordHash);

var _users = require('../data/users');

var _users2 = _interopRequireDefault(_users);

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

var _PrivateKey = require('../utility/PrivateKey');

var _PrivateKey2 = _interopRequireDefault(_PrivateKey);

var _collection = require('lodash/collection');

var _APIResponse = require('./APIResponse');

var _APIResponse2 = _interopRequireDefault(_APIResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * UserController.js
* */

exports.default = {

    /**
     * UserController.login(req,res)
     * Controller Function for Login
     * */
    login: function login(req, res) {

        if (req.body.user_id === undefined || req.body.password === undefined) {
            _logger2.default.log('error', 'MISSING USER ID OR PASSWORD');
            (0, _APIResponse2.default)(res, null, 'FORBIDDEN', 403);
        } else {
            var user_id = req.body.user_id;
            var password = req.body.password;
            var user = (0, _collection.find)(_users2.default, { user_id: user_id });
            if (user) {
                if (_passwordHash2.default.verify(password, user.password_hash)) {
                    var token = _jsonwebtoken2.default.sign({}, _PrivateKey2.default.secret, { algorithm: 'HS512', issuer: _PrivateKey2.default.issuer, subject: user_id, expiresIn: 5184000 });
                    _logger2.default.log('info', 'Logged In Successfully');
                    (0, _APIResponse2.default)(res, { user_id: user_id, token: token }, 'OK', 200);
                } else {
                    _logger2.default.log('error', 'WRONG CREDENTIALS');
                    (0, _APIResponse2.default)(res, null, 'Invalid UserId or Password', 403);
                }
            } else {
                _logger2.default.log('error', 'USER NOT FOUND');
                (0, _APIResponse2.default)(res, null, 'Invalid UserId or Password', 403);
            }
        }
    }
}; /**
    * Created by Shashank on 5/4/2017.
    */
//# sourceMappingURL=UserController.js.map