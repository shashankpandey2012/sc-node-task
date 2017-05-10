'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var _routes = require('./routes');

var _controllers = require('./controllers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Shashank on 5/4/2017.
 */
var app = (0, _express2.default)();
app.use(_bodyParser2.default.json());
app.use((0, _morgan2.default)('combined'));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Request-Method', '*');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET , PUT , POST , PATCH , DELETE');
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.status(200);
        res.end();
        return;
    }
    next();
});

app.post('/api/login', function (req, res) {
    _controllers.UserController.login(req, res);
});
app.use('/api/v1', _routes.task);

app.listen(3000, function () {
    _logger2.default.log('info', 'Express app Started on port 3000 !');
});
//# sourceMappingURL=app.js.map