"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fetchWithProxy;

var _isomorphicFetch = _interopRequireDefault(require("isomorphic-fetch"));

var _httpsProxyAgent = _interopRequireDefault(require("https-proxy-agent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fetchWithProxy(url, options) {
  var instanceOptions = Object.assign({}, options);

  if (!instanceOptions.agent && process.env.HTTPS_PROXY) {
    instanceOptions.agent = new _httpsProxyAgent.default(process.env.HTTPS_PROXY);
  }

  return (0, _isomorphicFetch.default)(url, instanceOptions);
}