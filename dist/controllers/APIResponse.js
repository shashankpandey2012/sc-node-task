'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by Shashank on 5/4/2017.
 */

function apiResponse(res, data, message, status) {
  return res.status(status).json({ 'data': data, 'message': message, 'status': status });
}

exports.default = apiResponse;
//# sourceMappingURL=APIResponse.js.map