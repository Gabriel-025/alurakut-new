"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "nookies"
var external_nookies_ = __webpack_require__(3053);
var external_nookies_default = /*#__PURE__*/__webpack_require__.n(external_nookies_);
// EXTERNAL MODULE: external "jsonwebtoken"
var external_jsonwebtoken_ = __webpack_require__(9344);
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_);
// EXTERNAL MODULE: ./src/components/MainGrid/index.js
var MainGrid = __webpack_require__(584);
// EXTERNAL MODULE: ./src/components/Box/index.js
var Box = __webpack_require__(1022);
;// CONCATENATED MODULE: ./src/components/CustomizedInput/index.js

function CustomizedInput(propriedades) {
    return /*#__PURE__*/ jsx_runtime_.jsx("input", {
        placeholder: propriedades.placeholder,
        name: propriedades.name,
        "aria-label": propriedades.ariaLabel,
        type: "text",
        value: propriedades.value,
        onChange: (e)=>propriedades.onValueChange(e.target.value)
        ,
        required: true
    });
}
/* harmony default export */ const components_CustomizedInput = (CustomizedInput);

// EXTERNAL MODULE: ./src/components/IndexPage/index.js
var IndexPage = __webpack_require__(6741);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/PostBox/index.js


const PostBox = external_styled_components_default()(Box/* default */.Z)`
  ul {
    display: flex;
    flex-direction: column;
    height: auto;
    list-style: none;
  }
  img {
    object-fit: cover;
    background-position: center center;
    width: 100%;
    height: 100%;
    position: relative;
  }
  li {
    display: flex;
    padding: 10px 0;
  }
  a {
    display: inline-block;
    height: 70px;
    width: 70px;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-indeX: 1;
      background-image: linear-gradient(0deg,#00000073,transparent);
    }
  }
  div {
    padding-left: 10px;
  }
  span {
    display: block;
    font-size: 12px;
    margin-bottom: 10px;
  }
  p {
    font-size: 14px;
  }
`;
/* harmony default export */ const components_PostBox = (PostBox);

// EXTERNAL MODULE: ./src/lib/alurakutCommons.js
var alurakutCommons = __webpack_require__(130);
// EXTERNAL MODULE: ./src/components/ProfileRelations/index.js
var ProfileRelations = __webpack_require__(8225);
;// CONCATENATED MODULE: ./pages/index.js













const Loading = (external_styled_components_default()).div`
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-left-color: #f4f4f4;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
const CenterLoading = (external_styled_components_default()).div`
  padding:20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 140px;
`;
function Home(props1) {
    // USUÁRIO GITHUB
    const githubUser = props1.githubUser;
    // NUMEROS SEGUIDORES-SEGUINDO
    const [numerosSegui, setNumerosSegui] = external_react_default().useState([]);
    // SEGUIDORES
    const [seguidores, setSeguidores] = external_react_default().useState([]);
    // SEGUINDO
    const [seguindo, setSeguindo] = external_react_default().useState([]);
    // COMUNIDADES
    const [comunidades, setComunidades] = external_react_default().useState([]);
    // NOME COMUNIDADES
    const [comunidadesTitle, setComunidadesTitle] = external_react_default().useState([]);
    // IMAGE COMUNIDADES
    const [comunidadesImage, setComunidadesImage] = external_react_default().useState([]);
    // URL COMUNIDADES
    const [comunidadesUrl, setComunidadesUrl] = external_react_default().useState([]);
    // POST
    const [posts, setPosts] = external_react_default().useState([]);
    // NOME POST
    const [nameValue, setNameValue] = external_react_default().useState("");
    // TEXTO POST
    const [textValue, setTextValue] = external_react_default().useState("");
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(false);
    const { 0: loadingC , 1: setLoadingC  } = (0,external_react_.useState)(false);
    function ProfileSidebar(props) {
        // console.log(propriedades); 
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box/* default */.Z, {
            as: "aside",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: `https://github.com/${props.githubUser}.png`,
                    alt: "Foto do usu\xe1rio",
                    style: {
                        borderRadius: "8px"
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
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
                /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                /*#__PURE__*/ jsx_runtime_.jsx(alurakutCommons/* AlurakutProfileSidebarMenuDefault */.m7, {})
            ]
        });
    }
    function ProfileRelationsBox(props) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ProfileRelations/* ProfileRelationsBoxWrapper */.M, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                    className: "smallTitle",
                    children: [
                        props.title,
                        " (",
                        props.total,
                        ")"
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    children: props.items.slice(0, 6).map((itemAtual)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: itemAtual.html_url,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                title: "Site do usu\xe1rio",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: itemAtual.avatar_url,
                                        alt: "Avatar do usu\xe1rio"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: itemAtual.login
                                    })
                                ]
                            })
                        }, itemAtual.id);
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "boxLink",
                        href: `/amigos`,
                        children: "Ver todos"
                    })
                })
            ]
        });
    }
    external_react_default().useEffect(function() {
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
        // API DATOCMS GraphQL Comunidades
        fetch("https://graphql.datocms.com/", {
            method: "POST",
            headers: {
                Authorization: "072a2e1106f04e97b3418da1419fcb",
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                query: `query {
          allCommunities {
            title
            id
            imageUrl
            creatorSlug
          }
        }`
            })
        }).then((resposta)=>resposta.json()
        ).then((respostaCompleta)=>{
            const comunidadesVindasDoDato = respostaCompleta.data.allCommunities;
            // console.log(comunidadesVindasDoDato);
            setComunidades(comunidadesVindasDoDato);
        });
        // API DATOCMS GraphQL Post
        fetch("https://graphql.datocms.com/", {
            method: "POST",
            headers: {
                Authorization: "072a2e1106f04e97b3418da1419fcb",
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                query: `query {
          allPosts {
            id
            name
            text
          }
        }`
            })
        }).then((resposta)=>resposta.json()
        ).then((respostaCompletaPost)=>{
            const postVindosDoDato = respostaCompletaPost.data.allPosts;
            // console.log(postVindosDoDato);
            setPosts(postVindosDoDato);
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(IndexPage/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(alurakutCommons/* AlurakutMenu */.RB, {
                githubUser: githubUser
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MainGrid/* default */.Z, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "profileArea",
                        style: {
                            gridArea: "profileArea"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ProfileSidebar, {
                            githubUser: githubUser
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "welcomeArea",
                        style: {
                            gridArea: "welcomeArea"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box/* default */.Z, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                        className: "title",
                                        children: [
                                            "Bem vindo(a), ",
                                            githubUser,
                                            "!"
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(alurakutCommons/* OrkutNostalgicIconSet */.IQ, {
                                        number: posts.length
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box/* default */.Z, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "subTitle",
                                        children: "Crie sua comunidade"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                        onSubmit: function handleCriaComunidade(e) {
                                            e.preventDefault();
                                            const dadosDoForm = new FormData(e.target);
                                            setLoadingC(true);
                                            const comunidade1 = {
                                                title: dadosDoForm.get("title"),
                                                imageUrl: dadosDoForm.get("image"),
                                                creatorSlug: githubUser
                                            };
                                            fetch("/api/comunidades", {
                                                method: "POST",
                                                headers: {
                                                    "Content-Type": "application/json"
                                                },
                                                body: JSON.stringify(comunidade1)
                                            }).then(async (response)=>{
                                                const dados = await response.json();
                                                // console.log(dados.registroCriado);
                                                const comunidade = dados.registroCriado;
                                                const comunidadesAtualizadas = [
                                                    ...comunidades,
                                                    comunidade
                                                ];
                                                setComunidades(comunidadesAtualizadas);
                                                setLoadingC(null);
                                                setComunidadesTitle("");
                                                setComunidadesImage("");
                                                setComunidadesUrl("");
                                            });
                                        },
                                        children: loadingC ? /*#__PURE__*/ jsx_runtime_.jsx(CenterLoading, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Loading, {})
                                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_CustomizedInput, {
                                                        placeholder: "Qual vai ser o nome da sua comunidade?",
                                                        name: "title",
                                                        "aria-label": "Qual vai ser o nome da sua comunidade?",
                                                        value: comunidadesTitle,
                                                        onValueChange: setComunidadesTitle
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    style: {
                                                        display: "flex"
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_CustomizedInput, {
                                                        placeholder: "Coloque a URL da imagem da capa",
                                                        name: "image",
                                                        "aria-label": "Coloque a URL da imagem da capa",
                                                        value: comunidadesImage,
                                                        onValueChange: setComunidadesImage
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    type: "submit",
                                                    "aria-label": "Criar comunidade",
                                                    style: {
                                                        background: "#2E7BB4"
                                                    },
                                                    children: "Criar comunidade"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box/* default */.Z, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "subTitle",
                                        children: "Deixe seu comentario"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                        onSubmit: function handleCriaPost(e) {
                                            e.preventDefault();
                                            const dadosDoForm = new FormData(e.target);
                                            setLoading(true);
                                            const post1 = {
                                                name: dadosDoForm.get("name"),
                                                text: dadosDoForm.get("text")
                                            };
                                            fetch("/api/post", {
                                                method: "POST",
                                                headers: {
                                                    "Content-Type": "application/json"
                                                },
                                                body: JSON.stringify(post1)
                                            }).then(async (response)=>{
                                                const dadosPost = await response.json();
                                                // console.log(dados.registroCriado);
                                                const post = dadosPost.registroCriado;
                                                const postAtualizados = [
                                                    post,
                                                    ...posts
                                                ];
                                                setPosts(postAtualizados);
                                                setLoading(false);
                                                setNameValue("");
                                                setTextValue("");
                                            });
                                        },
                                        children: loading ? /*#__PURE__*/ jsx_runtime_.jsx(CenterLoading, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Loading, {})
                                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_CustomizedInput, {
                                                        style: {
                                                            display: "none"
                                                        },
                                                        placeholder: "Usu\xe1rio Github",
                                                        name: "name",
                                                        "aria-label": "Usu\xe1rio Github",
                                                        value: nameValue,
                                                        onValueChange: setNameValue
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_CustomizedInput, {
                                                        placeholder: "Deixei seu comentario",
                                                        name: "text",
                                                        "aria-label": "Deixei seu comentario",
                                                        value: textValue,
                                                        onValueChange: setTextValue
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    type: "submit",
                                                    "aria-label": "Criar comentario",
                                                    style: {
                                                        background: "#2E7BB4"
                                                    },
                                                    children: "Criar comentario"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_PostBox, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                        className: "smallTitle",
                                        children: [
                                            "Comentarios (",
                                            posts.length,
                                            ")"
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: posts.map((itemAtual)=>{
                                            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: `https://github.com/${itemAtual.name}`,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        title: "Site do usu\xe1rio",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: `https://github.com/${itemAtual.name}.png`,
                                                            alt: "Foto usu\xe1rio"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        style: {
                                                            flexGrow: "2"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                children: [
                                                                    "@",
                                                                    itemAtual.name
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: itemAtual.text
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, itemAtual.id);
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "profileRelationsArea",
                        style: {
                            gridArea: "profileRelationsArea"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(ProfileRelationsBox, {
                                title: "Seguidores",
                                items: seguidores,
                                total: numerosSegui.followers
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ProfileRelations/* ProfileRelationsBoxWrapper */.M, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                        className: "smallTitle",
                                        children: [
                                            "Comunidades (",
                                            comunidades.length,
                                            ")"
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: comunidades.slice(0, 6).map((itemAtual)=>{
                                            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    href: itemAtual.paginaUrl,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    title: "Site da comunidade",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: itemAtual.imageUrl,
                                                            alt: "Capa da comunidade"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: itemAtual.title
                                                        })
                                                    ]
                                                })
                                            }, itemAtual.id);
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "boxLink",
                                            href: `/comunidades`,
                                            children: "Ver todos"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ProfileRelationsBox, {
                                title: "Seguindo",
                                items: seguindo,
                                total: numerosSegui.following
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
async function getServerSideProps(context) {
    const cookies = external_nookies_default().get(context);
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
    const { githubUser  } = external_jsonwebtoken_default().decode(token);
    return {
        props: {
            githubUser
        }
    };
}


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
var __webpack_exports__ = __webpack_require__.X(0, [505,664,130,741,225], () => (__webpack_exec__(750)));
module.exports = __webpack_exports__;

})();