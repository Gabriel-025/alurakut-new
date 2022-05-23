"use strict";
(() => {
var exports = {};
exports.id = 712;
exports.ids = [712];
exports.modules = {

/***/ 5342:
/***/ ((module) => {

module.exports = require("datocms-client");

/***/ }),

/***/ 8411:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ recebedorDaRequests)
/* harmony export */ });
/* harmony import */ var datocms_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5342);
/* harmony import */ var datocms_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(datocms_client__WEBPACK_IMPORTED_MODULE_0__);

async function recebedorDaRequests(request, response) {
    if (request.method === "POST") {
        const TOKEN = "072a2e1106f04e97b3418da1419fcb";
        const client = new datocms_client__WEBPACK_IMPORTED_MODULE_0__.SiteClient(TOKEN);
        const registroCriado = await client.items.create({
            itemType: "967682",
            ...request.body
        });
        console.log(registroCriado);
        response.json({
            dados: "Algum dado qualquer",
            registroCriado: registroCriado
        });
        return;
    }
    response.status(404).json({
        message: "Ainda n\xe3o temos nada no GET, mas no POST tem!"
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8411));
module.exports = __webpack_exports__;

})();