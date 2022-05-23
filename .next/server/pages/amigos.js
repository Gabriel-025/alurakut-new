"use strict";
(() => {
var exports = {};
exports.id = 914;
exports.ids = [914];
exports.modules = {

/***/ 8754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuAmigos),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3053);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_components_IndexPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6741);
/* harmony import */ var _src_components_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1022);
/* harmony import */ var _src_components_MainGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(584);
/* harmony import */ var _src_lib_alurakutCommons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(130);
/* harmony import */ var _src_components_ProfileRelations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8225);
/* harmony import */ var _src_components_ComunidadeGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2641);










function ProfileSidebar(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_Box__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        as: "aside",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: `https://github.com/${props.githubUser}.png`,
                alt: "Foto do usu\xe1rio",
                style: {
                    borderRadius: "8px"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    className: "boxLink",
                    href: `https://github.com/${props.githubUser}`,
                    title: "Nome do usu\xe1rio",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: [
                        "@",
                        props.githubUser
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_lib_alurakutCommons__WEBPACK_IMPORTED_MODULE_7__/* .AlurakutProfileSidebarMenuDefault */ .m7, {})
        ]
    });
}
function menuAmigos(props) {
    // USUÁRIO GITHUB
    const githubUser = props.githubUser;
    // NUMEROS SEGUIDORES-SEGUINDO
    const [numerosSegui, setNumerosSegui] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    // SEGUIDORES
    const [seguidores, setSeguidores] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    // SEGUINDO
    const [seguindo, setSeguindo] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function() {
        const urlNumeros = `https://api.github.com/users/${githubUser}`;
        fetch(urlNumeros).then((resposta)=>resposta.json()
        ).then((respostaJson)=>setNumerosSegui(respostaJson)
        );
        const urlFollowers = `https://api.github.com/users/${githubUser}/followers`;
        fetch(urlFollowers).then(function(respostaDoServidor) {
            return respostaDoServidor.json();
        }).then(function(respostaCompleta) {
            setSeguidores(respostaCompleta);
        });
        const urlFollowing = `https://api.github.com/users/${githubUser}/following`;
        fetch(urlFollowing).then(function(respostaDoServidor) {
            return respostaDoServidor.json();
        }).then(function(respostaCompleta) {
            setSeguindo(respostaCompleta);
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_IndexPage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_lib_alurakutCommons__WEBPACK_IMPORTED_MODULE_7__/* .AlurakutMenu */ .RB, {
                githubUser: githubUser
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_ComunidadeGrid__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "profileArea",
                        style: {
                            gridArea: "profileArea"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProfileSidebar, {
                            githubUser: githubUser
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            gridArea: "comunidadeArea"
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_ProfileRelations__WEBPACK_IMPORTED_MODULE_8__/* .ProfileRelationsBoxWrapper */ .M, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                    className: "smallTitle",
                                    children: [
                                        "Seguidores (",
                                        seguidores.length,
                                        ")"
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                    children: seguidores.map((itemAtual)=>{
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                href: itemAtual.html_url,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                title: "Site da comunidade",
                                                style: {
                                                    height: "200px",
                                                    width: "100%"
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: itemAtual.avatar_url,
                                                        alt: "Capa da comunidade"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        style: {
                                                            fontSize: "16px"
                                                        },
                                                        children: itemAtual.login
                                                    })
                                                ]
                                            })
                                        }, itemAtual.id);
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
async function getServerSideProps(context) {
    const cookies = nookies__WEBPACK_IMPORTED_MODULE_2___default().get(context);
    if (!cookies.USER_TOKEN) {
        return {
            redirect: {
                destination: "/login",
                permanent: false
            }
        };
    }
    const token = cookies.USER_TOKEN;
    const { isAuthenticated  } = await fetch("https://alurakut.vercel.app/api/auth", {
        headers: {
            Authorization: token
        }
    }).then((resposta)=>resposta.json()
    );
    // if(!isAuthenticated) {
    //   return {
    //     redirect: {
    //       destination: '/login',
    //       permanent: false,
    //     }
    //   }
    // }
    const { githubUser  } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().decode(token);
    return {
        props: {
            githubUser
        }
    };
}


/***/ }),

/***/ 2641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ComunidadeGrid = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().main)`
  width: 100%;
  grid-gap: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 46px;
  max-width: 500px;
  padding: 16px;
  .profileArea {
    display: none;
    @media(min-width: 860px) {
      display: block;
    }
  }
  @media(min-width: 860px) {
    max-width: 1110px;
    display: grid;
    grid-template-areas: 
      "profileArea comunidadeArea";
    grid-template-columns: 160px 2fr;
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComunidadeGrid);


/***/ }),

/***/ 584:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const MainGrid = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().main)`
  width: 100%;
  grid-gap: 10px;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  margin-top: 46px;
  padding: 16px;
  .profileArea {
    display: none;
    @media(min-width: 860px) {
      display: block;
    }
  }
  @media(min-width: 860px) {
    max-width: 1110px;
    display: grid;
    grid-template-areas: 
      "profileArea welcomeArea profileRelationsArea";
    grid-template-columns: 160px 1fr 312px;
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainGrid);


/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 3053:
/***/ ((module) => {

module.exports = require("nookies");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,130,741,225], () => (__webpack_exec__(8754)));
module.exports = __webpack_exports__;

})();