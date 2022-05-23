"use strict";
exports.id = 130;
exports.ids = [130];
exports.modules = {

/***/ 130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IQ": () => (/* binding */ OrkutNostalgicIconSet),
/* harmony export */   "RB": () => (/* binding */ AlurakutMenu),
/* harmony export */   "TZ": () => (/* binding */ AlurakutStyles),
/* harmony export */   "m7": () => (/* binding */ AlurakutProfileSidebarMenuDefault)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3053);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_5__);






const BASE_URL = "https://alurakut.vercel.app/";
const v = "1";
function Link({ href , children , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: href,
        passHref: true,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            ...props,
            children: children
        })
    });
}
// Menu
// ================================================================================================================
function AlurakutMenu({ githubUser  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const [isMenuOpen, setMenuState] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(AlurakutMenu.Wrapper, {
        isMenuOpen: isMenuOpen,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AlurakutMenu.Logo, {
                        src: `${BASE_URL}/logo.svg`,
                        alt: "Logo Alurakut"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                        style: {
                            flex: 1
                        },
                        children: [
                            {
                                name: "Inicio",
                                slug: "/"
                            },
                            {
                                name: "Amigos",
                                slug: "/amigos"
                            },
                            {
                                name: "Comunidades",
                                slug: "/comunidades"
                            }
                        ].map((menuItem)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Link, {
                                href: `${menuItem.slug.toLocaleLowerCase()}`,
                                children: menuItem.name
                            }, `key__${menuItem.name.toLocaleLowerCase()}`)
                        )
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "/",
                                onClick: ()=>{
                                    // const cookies = nookies.get('/')
                                    nookies__WEBPACK_IMPORTED_MODULE_5___default().destroy(null, "USER_TOKEN");
                                    router.push("/login");
                                },
                                children: "Sair"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    placeholder: "Pesquisar no Orkut"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        type: "button",
                        title: "Menu",
                        onClick: ()=>setMenuState(!isMenuOpen)
                        ,
                        children: [
                            isMenuOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: `${BASE_URL}/icons/menu-open.svg?v=${v}`,
                                alt: "Fechar menu"
                            }),
                            !isMenuOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: `${BASE_URL}/icons/menu-closed.svg?v=${v}`,
                                alt: "Abrir menu"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AlurakutMenuProfileSidebar, {
                githubUser: githubUser
            })
        ]
    });
}
AlurakutMenu.Wrapper = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().header)`
  width: 100%;
  background-color: rgb(48, 139, 197);
  position: fixed;
  z-index: 150;

  .alurakutMenuProfileSidebar {
    background: white;
    position: fixed;
    z-index: 100;
    padding: 46px;
    bottom: 0;
    left: 0;
    right: 0;
    top: 48px;
    transition: 0.3s;
    pointer-events: ${({ isMenuOpen  })=>isMenuOpen ? "all" : "none"
};
    opacity: ${({ isMenuOpen  })=>isMenuOpen ? "1" : "0"
};
    transform: ${({ isMenuOpen  })=>isMenuOpen ? "translateY(0)" : "translateY(calc(-100% - 48px))"
};
    @media (min-width: 860px) {
      display: none;
    }
    > div {
      max-width: 400px;
      margin: auto;
    }
    a {
      font-size: 18px;
    }
    .boxLink {
      font-size: 18px;
      color: #2e7bb4;
      -webkit-text-decoration: none;
      text-decoration: none;
      font-weight: 800;
    }
    hr {
      margin-top: 12px;
      margin-bottom: 8px;
      border-color: transparent;
      border-bottom-color: #ecf2fa;
    }
  }
  .container {
    background-color: rgb(48, 139, 197);
    padding: 7px 16px;
    max-width: 1110px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 101;
    @media (min-width: 860px) {
      justify-content: flex-start;
    }
    button {
      cursor: pointer;
      border: 0;
      background: transparent;
      align-self: center;
      display: inline-block;
      @media (min-width: 860px) {
        display: none;
      }
    }
    nav {
      display: none;
      @media (min-width: 860px) {
        display: flex;
        padding-left: 5px;
      }
      a {
        font-size: 12px;
        color: white;
        padding: 10px 14px;
        position: relative;
        text-decoration: none;
        &:after {
          content: " ";
          background-color: #5292c1;
          display: block;
          position: absolute;
          width: 1px;
          height: 12px;
          margin: auto;
          left: 0;
          top: 0;
          bottom: 0;
        }
      }
    }
    input {
      color: #ffffff;
      background: #5579a1;
      padding: 10px 42px;
      border: 0;
      background-image: url(${`${BASE_URL}/icons/search.svg`});
      background-position: 15px center;
      background-repeat: no-repeat;
      border-radius: 1000px;
      font-size: 12px;
      ::placeholder {
        color: #ffffff;
        opacity: 1;
      }
    }
  }
`;
AlurakutMenu.Logo = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().img)`
  background-color: #ffffff;
  padding: 9px 14px;
  border-radius: 1000px;
  height: 34px;
`;
function AlurakutMenuProfileSidebar({ githubUser  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "alurakutMenuProfileSidebar",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: `https://github.com/${githubUser}.png`,
                    style: {
                        borderRadius: "8px"
                    },
                    alt: "Foto do Usu\xe1rio",
                    style: {
                        width: "50%",
                        margin: "0 auto"
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        className: "boxLink",
                        href: `/user/${githubUser}`,
                        children: [
                            "@",
                            githubUser
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AlurakutProfileSidebarMenuDefault, {})
            ]
        })
    });
}
// ================================================================================================================
// AlurakutProfileSidebarMenuDefault
// ================================================================================================================
function AlurakutProfileSidebarMenuDefault() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(AlurakutProfileSidebarMenuDefault.Wrapper, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        href: "/",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: `${BASE_URL}/icons/user.svg`,
                                alt: "\xcdcone Perfil"
                            }),
                            "Perfil"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        href: "/amigos",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: `${BASE_URL}/icons/book.svg`,
                                alt: "\xcdcone Recados"
                            }),
                            "Amigos"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        href: "/comunidades",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: `${BASE_URL}/icons/sun.svg`,
                                alt: "\xcdcone Depoimentos"
                            }),
                            "Comunidades"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        href: "https://github.com/trending",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        title: "Github Trends",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: `${BASE_URL}/icons/plus.svg`,
                                alt: "\xcdcone Github Trends"
                            }),
                            "GitHub Trends"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        href: "/",
                        onClick: ()=>{
                            // const cookies = nookies.get('/')
                            nookies__WEBPACK_IMPORTED_MODULE_5___default().destroy(null, "USER_TOKEN");
                            router.push("/login");
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: `${BASE_URL}//icons/logout.svg`,
                                alt: "\xcdcone Sair"
                            }),
                            "Sair"
                        ]
                    })
                ]
            })
        ]
    });
}
AlurakutProfileSidebarMenuDefault.Wrapper = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  a {
    font-size: 12px;
    color: #2E7BB4;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    img {
      width: 16px;
      height: 16px;
      margin-right: 5px; 
    }
  }
`;
// ================================================================================================================
// OrkutNostalgicIconSet
// ================================================================================================================
function OrkutNostalgicIconSet(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(OrkutNostalgicIconSet.List, {
        children: [
            [
                {
                    name: "Recados",
                    slug: "recados",
                    icon: "book",
                    number: `${props.number}`
                },
                {
                    name: "Fotos",
                    slug: "fotos",
                    icon: "camera"
                },
                {
                    name: "Videos",
                    slug: "videos",
                    icon: "video-camera"
                },
                {
                    name: "F\xe3s",
                    slug: "fas",
                    icon: "star",
                    number: `${props.number}`
                },
                {
                    name: "Mensagens",
                    slug: "mensagens",
                    icon: "email"
                }, 
            ].map(({ name , slug , icon , number  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            style: {
                                gridArea: "title"
                            },
                            className: "OrkutNostalgicIconSet__title",
                            children: name
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: "OrkutNostalgicIconSet__number",
                            style: {
                                gridArea: "number"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "OrkutNostalgicIconSet__iconSample",
                                    src: `https://alurakut.vercel.app/icons/${icon}.svg`,
                                    alt: "\xcdcones"
                                }, `orkut__icon_set__${slug}_img`),
                                number ? number : 0
                            ]
                        })
                    ]
                }, `orkut__icon_set__${slug}`)
            ),
            [
                {
                    name: "Confi\xe1vel",
                    slug: "confiavel",
                    icon: "smile"
                },
                {
                    name: "Legal",
                    slug: "legal",
                    icon: "cool"
                },
                {
                    name: "Sexy",
                    slug: "sexy",
                    icon: "heart"
                }, 
            ].map(({ name , slug , icon  })=>{
                const total = props[slug] ? props[slug] : 2;
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "OrkutNostalgicIconSet__title",
                            children: name
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "OrkutNostalgicIconSet__iconComplex",
                            className: "OrkutNostalgicIconSet__number",
                            style: {
                                gridArea: "number"
                            },
                            children: [
                                0,
                                1,
                                2
                            ].map((_, index)=>{
                                const isHeartActive = index <= total - 1;
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: `https://alurakut.vercel.app/icons/${icon}.svg`,
                                    style: {
                                        marginRight: "2px",
                                        opacity: isHeartActive ? 1 : "1"
                                    },
                                    alt: "\xcdcones"
                                }, `orkut__icon_set__${slug}_img_${index}`);
                            })
                        })
                    ]
                }, `orkut__icon_set__${slug}`);
            })
        ]
    });
}
OrkutNostalgicIconSet.List = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().ul)`
  margin-top: 32px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  li {
    font-size: 12px;
    color: #5A5A5A;
    display: grid;
    grid-template-areas:
      "title title"
      "number number"; 
    
    &:not(:last-child) {
      margin-right: 5px;
    }
    .OrkutNostalgicIconSet__title {
      display: block;
      font-style: italic; 
    }
    .OrkutNostalgicIconSet__number {
      min-width: 15px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .OrkutNostalgicIconSet__iconSample {
        margin-right: 7px;
      }
    }
  }
`;
// ================================================================================================================
// Login Page
// ================================================================================================================
const AlurakutLoginScreen = styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
  :root {
    --backgroundPrimary: #D9E6F6;
    --backgroundSecondary: #F1F9FE;
    --backgroundTertiary: #FFFFFF;
    --backgroundQuarternary: #BBCDE8;
    --colorPrimary: #2E7BB4;
    --colorSecondary: #388BB0;
    --colorTertiary: #2F4A71;
    --colorQuarternary: #D81D99;
    --textPrimaryColor: #333333;
    --textSecondaryColor: #FFFFFF;
    --textTertiaryColor: #5A5A5A;
    --textQuarternaryColor: #C5C6CA;
    --commonRadius: 8px;
  }
  .loginScreen {
    padding: 16px;
    max-width: 1110px;
    display: grid;
    --gap: 12px;
    --gutter: 16px;
    grid-gap: var(--gap);
    grid-template-areas: 
      "logoArea"
      "formArea"
      "footerArea";
    @media(min-width: 860px) {
      grid-template-columns: 2fr 1fr;
      grid-template-areas: 
              "logoArea formArea"
              "logoArea formArea"
              "footerArea footerArea";
    }
    .logoArea {
      grid-area: logoArea;
      background-color: var(--backgroundTertiary);
      border-radius: var(--commonRadius);
      padding: var(--gutter);
      text-align: center;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      min-height: 263px;
      @media(min-width: 860px) {
        min-height: 368px;
      }
      p {
        font-size: 12px;
        line-height: 1.2;
        &:not(:last-child) {
          margin-bottom: 12px;
        }
        strong {
          color: var(--colorQuarternary);
        }
      }
      img {
        max-height: 45px;
        margin-bottom: 36px;
      }
    }
    .formArea {
      grid-area: formArea;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      .box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: var(--gutter);
        padding-left: 50px;
        padding-right: 50px;
        background-color: var(--backgroundSecondary);
        border-radius: var(--commonRadius);
        flex: 1;
        &:not(:last-child) {
          margin-bottom: var(--gap);
        }
        &:first-child {
          min-height: 224px;
          @media(min-width: 860px) {
            min-height: 282px;
          }
        }
        p {
          font-size: 14px;
        }
        a {
          text-decoration: none;
          color: var(--colorPrimary);
        }
        input {
          width: 100%;
          display: block;
          border: 1px solid var(--textQuarternaryColor);
          padding: 12px;
          background-color: var(--backgroundTertiary);
          border-radius: var(--commonRadius);
          margin-top: 24px;
          margin-bottom: 16px;
        }
        button {
          width: 100%;
          cursor: pointer;
          display: block;
          border: 0;
          padding: 12px;
          border-radius: var(--commonRadius);
          background-color: var(--colorPrimary);
          color: var(--textSecondaryColor);
        }
      }
    }
    .footerArea {
      grid-area: footerArea;
      background-color: var(--backgroundQuarternary);
      border-radius: var(--commonRadius);
      padding: 8px;
      p {
        font-size: 12px;
        text-align: center;
        a {
          text-decoration: none;
          color: #0a2994;
        }
      }
    }
  }
`;
// ================================================================================================================
// Reset Styles
// ================================================================================================================
const AlurakutStyles = styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
  *::-webkit-scrollbar {
    width: 8px;
  }
  *::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
  *::-webkit-scrollbar-thumb {
    background: #888; 
    border-radius: 10px;
  }
  *::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
  a,
  button {
    cursor: pointer;
    transition: .3s;
    outline: 0;
    &:hover,
    &:focus {
      opacity: .8;
    }
    &:disabled {
      cursor: not-allowed;
      opacity: .5;
    }
  }
  input {
    transition: .3s;
    outline: 0;
    &:disabled {
      cursor: not-allowed;
      opacity: .5;
    }
    &:hover,
    &:focus {
      box-shadow: 0px 0px 5px #33333357;
    }
  }
  ${AlurakutLoginScreen}
`;


/***/ })

};
;