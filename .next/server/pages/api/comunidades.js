"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/comunidades";
exports.ids = ["pages/api/comunidades"];
exports.modules = {

/***/ "datocms-client":
/*!*********************************!*\
  !*** external "datocms-client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("datocms-client");

/***/ }),

/***/ "(api)/./pages/api/comunidades.js":
/*!**********************************!*\
  !*** ./pages/api/comunidades.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ recebedorDaRequests)\n/* harmony export */ });\n/* harmony import */ var datocms_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! datocms-client */ \"datocms-client\");\n/* harmony import */ var datocms_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(datocms_client__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function recebedorDaRequests(request, response) {\n    if (request.method === \"POST\") {\n        const TOKEN = \"072a2e1106f04e97b3418da1419fcb\";\n        const client = new datocms_client__WEBPACK_IMPORTED_MODULE_0__.SiteClient(TOKEN);\n        const registroCriado = await client.items.create({\n            itemType: \"967682\",\n            ...request.body\n        });\n        console.log(registroCriado);\n        response.json({\n            dados: \"Algum dado qualquer\",\n            registroCriado: registroCriado\n        });\n        return;\n    }\n    response.status(404).json({\n        message: \"Ainda n\\xe3o temos nada no GET, mas no POST tem!\"\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29tdW5pZGFkZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTRDO0FBRTdCLGVBQWVDLG1CQUFtQixDQUFDQyxPQUFPLEVBQUVDLFFBQVEsRUFBRTtJQUVqRSxJQUFJRCxPQUFPLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDN0IsTUFBTUMsS0FBSyxHQUFHLGdDQUFnQztRQUM5QyxNQUFNQyxNQUFNLEdBQUcsSUFBSU4sc0RBQVUsQ0FBQ0ssS0FBSyxDQUFDO1FBRXBDLE1BQU1FLGNBQWMsR0FBRyxNQUFNRCxNQUFNLENBQUNFLEtBQUssQ0FBQ0MsTUFBTSxDQUFDO1lBQy9DQyxRQUFRLEVBQUUsUUFBUTtZQUNsQixHQUFHUixPQUFPLENBQUNTLElBQUk7U0FDaEIsQ0FBQztRQUVGQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sY0FBYyxDQUFDLENBQUM7UUFFNUJKLFFBQVEsQ0FBQ1csSUFBSSxDQUFDO1lBQ1pDLEtBQUssRUFBRSxxQkFBcUI7WUFDNUJSLGNBQWMsRUFBRUEsY0FBYztTQUMvQixDQUFDLENBQUM7UUFDSCxPQUFPO0tBQ1I7SUFDREosUUFBUSxDQUFDYSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNGLElBQUksQ0FBQztRQUN0QkcsT0FBTyxFQUFFLGtEQUErQztLQUMzRCxDQUFDO0NBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXN0eWxlZC1jb21wb25lbnRzLy4vcGFnZXMvYXBpL2NvbXVuaWRhZGVzLmpzPzI4YjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2l0ZUNsaWVudCB9IGZyb20gJ2RhdG9jbXMtY2xpZW50JztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gcmVjZWJlZG9yRGFSZXF1ZXN0cyhyZXF1ZXN0LCByZXNwb25zZSkge1xuXG4gICAgaWYgKHJlcXVlc3QubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICAgIGNvbnN0IFRPS0VOID0gXCIwNzJhMmUxMTA2ZjA0ZTk3YjM0MThkYTE0MTlmY2JcIjtcbiAgICAgIGNvbnN0IGNsaWVudCA9IG5ldyBTaXRlQ2xpZW50KFRPS0VOKTtcblxuICAgICAgY29uc3QgcmVnaXN0cm9DcmlhZG8gPSBhd2FpdCBjbGllbnQuaXRlbXMuY3JlYXRlKHtcbiAgICAgICAgaXRlbVR5cGU6IFwiOTY3NjgyXCIsIC8vIG1vZGVsIElEIGNyaWFkbyBwZWxvIERhdG9cbiAgICAgICAgLi4ucmVxdWVzdC5ib2R5LFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKHJlZ2lzdHJvQ3JpYWRvKTtcblxuICAgICAgcmVzcG9uc2UuanNvbih7XG4gICAgICAgIGRhZG9zOiBcIkFsZ3VtIGRhZG8gcXVhbHF1ZXJcIixcbiAgICAgICAgcmVnaXN0cm9DcmlhZG86IHJlZ2lzdHJvQ3JpYWRvLFxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJlc3BvbnNlLnN0YXR1cyg0MDQpLmpzb24oe1xuICAgICAgICBtZXNzYWdlOiAnQWluZGEgbsOjbyB0ZW1vcyBuYWRhIG5vIEdFVCwgbWFzIG5vIFBPU1QgdGVtISdcbiAgICB9KVxufSJdLCJuYW1lcyI6WyJTaXRlQ2xpZW50IiwicmVjZWJlZG9yRGFSZXF1ZXN0cyIsInJlcXVlc3QiLCJyZXNwb25zZSIsIm1ldGhvZCIsIlRPS0VOIiwiY2xpZW50IiwicmVnaXN0cm9DcmlhZG8iLCJpdGVtcyIsImNyZWF0ZSIsIml0ZW1UeXBlIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwiZGFkb3MiLCJzdGF0dXMiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/comunidades.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/comunidades.js"));
module.exports = __webpack_exports__;

})();