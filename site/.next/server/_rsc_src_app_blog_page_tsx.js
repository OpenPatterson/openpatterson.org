"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "_rsc_src_app_blog_page_tsx";
exports.ids = ["_rsc_src_app_blog_page_tsx"];
exports.modules = {

/***/ "(rsc)/./src/app/blog/page.tsx":
/*!*******************************!*\
  !*** ./src/app/blog/page.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Blog),\n/* harmony export */   metadata: () => (/* binding */ metadata)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(rsc)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(rsc)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Border__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Border */ \"(rsc)/./src/components/Border.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Button */ \"(rsc)/./src/components/Button.tsx\");\n/* harmony import */ var _components_ContactSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ContactSection */ \"(rsc)/./src/components/ContactSection.tsx\");\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Container */ \"(rsc)/./src/components/Container.tsx\");\n/* harmony import */ var _components_FadeIn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/FadeIn */ \"(rsc)/./src/components/FadeIn.tsx\");\n/* harmony import */ var _components_PageIntro__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/PageIntro */ \"(rsc)/./src/components/PageIntro.tsx\");\n/* harmony import */ var _lib_formatDate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/lib/formatDate */ \"(rsc)/./src/lib/formatDate.ts\");\n/* harmony import */ var _lib_mdx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/lib/mdx */ \"(rsc)/./src/lib/mdx.ts\");\n\n\n\n\n\n\n\n\n\n\n\nconst metadata = {\n    title: \"Blog\",\n    description: \"Stay up-to-date with the latest industry news as our marketing teams finds new ways to re-purpose old CSS tricks articles.\"\n};\nasync function Blog() {\n    let articles = await (0,_lib_mdx__WEBPACK_IMPORTED_MODULE_10__.loadArticles)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageIntro__WEBPACK_IMPORTED_MODULE_8__.PageIntro, {\n                eyebrow: \"Blog\",\n                title: \"The latest articles and news\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Stay up-to-date with the latest industry news as our marketing teams finds new ways to re-purpose old CSS tricks articles.\"\n                }, void 0, false, {\n                    fileName: \"/Users/carlosortega/Documents/GitHub/openpatterson.org/site/src/app/blog/page.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/carlosortega/Documents/GitHub/openpatterson.org/site/src/app/blog/page.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_6__.Container, {\n                className: \"mt-24 sm:mt-32 lg:mt-40\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"space-y-24 lg:space-y-32\",\n                    children: articles.map((article)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FadeIn__WEBPACK_IMPORTED_MODULE_7__.FadeIn, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Border__WEBPACK_IMPORTED_MODULE_3__.Border, {\n                                    className: \"pt-16\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"relative lg:-mx-4 lg:flex lg:justify-end\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    className: \"font-display text-2xl font-semibold text-neutral-950\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                        href: article.href,\n                                                        children: article.title\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/carlosortega/Documents/GitHub/openpatterson.org/site/src/app/blog/page.tsx\",\n                                                        lineNumber: 41,\n                                                        columnNumber: 25\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/carlosortega/Documents/GitHub/openpatterson.org/site/src/app/blog/page.tsx\",\n                                                    lineNumber: 40,\n                                                    columnNumber: 23\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n                                                    className: \"lg:absolute lg:left-0 lg:top-0 lg:w-1/3 lg:px-4\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                                            className: \"sr-only\",\n                                                            children: \"Published\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/carlosortega/Documents/GitHub/openpatterson.org/site/src/app/blog/page.tsx\",\n                                                            lineNumber: 44,\n                                                            columnNumber: 25\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                                            className: \"absolute left-0 top-0 text-sm text-neutral-950 lg:static\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n                                                                dateTime: article.date,\n                                                                children: (0,_lib_formatDate__WEBPACK_IMPORTED_MODULE_9__.formatDate)(article.date)\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/carlosortega/Documents/GitHub/openpatterson.org/site/src/app/blog/page.tsx\",\n                                                                lineNumber: 46,\n                                                                columnNumber: 27\n                                                            }, this)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/carlosortega/Documents/GitHub/openpatterson.org/site/src/app/blog/page.tsx\",\n                                                            lineNumber: 45,\n                                                            columnNumber: 25\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                                            className: \"sr-only\",\n                                                            children: \"Author\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/carlosortega/Documents/GitHub/openpatterson.org/site/src/app/blog/page.tsx\",\n                                                            lineNumber: 50,\n                                                            columnNumber: 25\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                                            className: \"mt-6 flex gap-x-4\",\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                    className: \"flex-none overflow-hidden rounded-xl bg-neutral-100\",\n                                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                                        alt: \"\",\n                                                                        ...article.author.image,\n                                                                        className: \"h-12 w-12 object-cover grayscale\"\n                                                                    }, void 0, false, {\n                                                                        fileName: \"/Users/carlosortega/Documents/GitHub/openpatterson.org/site/src/app/blog/page.tsx\",\n                                                                        lineNumber: 53,\n                                                                        columnNumber: 29\n                                                                    }, this)\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/carlosortega/Documents/GitHub/openpatterson.org/site/src/app/blog/page.tsx\",\n                                                                    lineNumber: 52,\n                                                                    columnNumber: 27\n                                                                }, this),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                    className: \"text-sm text-neutral-950\",\n                                                                    children: [\n                                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                            className: \"font-semibold\",\n                                                                            children: article.author.name\n                                                                        }, void 0, false, {\n                                                                            fileName: \"/Users/carlosortega/Documents/GitHub/openpatterson.org/site/src/app/blog/page.tsx\",\n                                                                            lineNumber: 60,\n                                                                            columnNumber: 29\n                                                                        }, this),\n                                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                            children: article.author.role\n                                                                        }, void 0, false, {\n                                                                            fileName: \"/Users/carlosortega/Documents/GitHub/openpatterson.org/site/src/app/blog/page.tsx\",\n                                                                            lineNumber: 63,\n                                                                            columnNumber: 29\n                                                                        }, this)\n                                                                    ]\n                                                                }, void 0, true, {\n                                                                    fileName: \"/Users/carlosortega/Documents/GitHub/openpatterson.org/site/src/app/blog/page.tsx\",\n                                                                    lineNumber: 59,\n                                                                    columnNumber: 27\n                                                                }, this)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/carlosortega/Documents/GitHub/openpatterson.org/site/src/app/blog/page.tsx\",\n                                                            lineNumber: 51,\n                                                            columnNumber: 25\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/carlosortega/Documents/GitHub/openpatterson.org/site/src/app/blog/page.tsx\",\n                                                    lineNumber: 43,\n                                                    columnNumber: 23\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"mt-6 max-w-2xl text-base text-neutral-600\",\n                                                    children: article.description\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/carlosortega/Documents/GitHub/openpatterson.org/site/src/app/blog/page.tsx\",\n                                                    lineNumber: 67,\n                                                    columnNumber: 23\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                                    href: article.href,\n                                                    \"aria-label\": `Read more: ${article.title}`,\n                                                    className: \"mt-8\",\n                                                    children: \"Read more\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/carlosortega/Documents/GitHub/openpatterson.org/site/src/app/blog/page.tsx\",\n                                                    lineNumber: 70,\n                                                    columnNumber: 23\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/carlosortega/Documents/GitHub/openpatterson.org/site/src/app/blog/page.tsx\",\n                                            lineNumber: 39,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/carlosortega/Documents/GitHub/openpatterson.org/site/src/app/blog/page.tsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/carlosortega/Documents/GitHub/openpatterson.org/site/src/app/blog/page.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/carlosortega/Documents/GitHub/openpatterson.org/site/src/app/blog/page.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 15\n                            }, this)\n                        }, article.href, false, {\n                            fileName: \"/Users/carlosortega/Documents/GitHub/openpatterson.org/site/src/app/blog/page.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/carlosortega/Documents/GitHub/openpatterson.org/site/src/app/blog/page.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/carlosortega/Documents/GitHub/openpatterson.org/site/src/app/blog/page.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContactSection__WEBPACK_IMPORTED_MODULE_5__.ContactSection, {}, void 0, false, {\n                fileName: \"/Users/carlosortega/Documents/GitHub/openpatterson.org/site/src/app/blog/page.tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2Jsb2cvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDOEI7QUFDRjtBQUVnQjtBQUNBO0FBQ2dCO0FBQ1Y7QUFDTjtBQUNNO0FBQ0w7QUFDTDtBQUVqQyxNQUFNVSxXQUFxQjtJQUNoQ0MsT0FBTztJQUNQQyxhQUNFO0FBQ0osRUFBQztBQUVjLGVBQWVDO0lBQzVCLElBQUlDLFdBQVcsTUFBTUwsdURBQVlBO0lBRWpDLHFCQUNFOzswQkFDRSw4REFBQ0YsNERBQVNBO2dCQUFDUSxTQUFRO2dCQUFPSixPQUFNOzBCQUM5Qiw0RUFBQ0s7OEJBQUU7Ozs7Ozs7Ozs7OzBCQU1MLDhEQUFDWCw0REFBU0E7Z0JBQUNZLFdBQVU7MEJBQ25CLDRFQUFDQztvQkFBSUQsV0FBVTs4QkFDWkgsU0FBU0ssR0FBRyxDQUFDLENBQUNDLHdCQUNiLDhEQUFDZCxzREFBTUE7c0NBQ0wsNEVBQUNjOzBDQUNDLDRFQUFDbEIsc0RBQU1BO29DQUFDZSxXQUFVOzhDQUNoQiw0RUFBQ0M7d0NBQUlELFdBQVU7a0RBQ2IsNEVBQUNDOzRDQUFJRCxXQUFVOzs4REFDYiw4REFBQ0k7b0RBQUdKLFdBQVU7OERBQ1osNEVBQUNoQixrREFBSUE7d0RBQUNxQixNQUFNRixRQUFRRSxJQUFJO2tFQUFHRixRQUFRVCxLQUFLOzs7Ozs7Ozs7Ozs4REFFMUMsOERBQUNZO29EQUFHTixXQUFVOztzRUFDWiw4REFBQ087NERBQUdQLFdBQVU7c0VBQVU7Ozs7OztzRUFDeEIsOERBQUNROzREQUFHUixXQUFVO3NFQUNaLDRFQUFDUztnRUFBS0MsVUFBVVAsUUFBUVEsSUFBSTswRUFDekJwQiwyREFBVUEsQ0FBQ1ksUUFBUVEsSUFBSTs7Ozs7Ozs7Ozs7c0VBRzVCLDhEQUFDSjs0REFBR1AsV0FBVTtzRUFBVTs7Ozs7O3NFQUN4Qiw4REFBQ1E7NERBQUdSLFdBQVU7OzhFQUNaLDhEQUFDQztvRUFBSUQsV0FBVTs4RUFDYiw0RUFBQ2pCLG1EQUFLQTt3RUFDSjZCLEtBQUk7d0VBQ0gsR0FBR1QsUUFBUVUsTUFBTSxDQUFDQyxLQUFLO3dFQUN4QmQsV0FBVTs7Ozs7Ozs7Ozs7OEVBR2QsOERBQUNDO29FQUFJRCxXQUFVOztzRkFDYiw4REFBQ0M7NEVBQUlELFdBQVU7c0ZBQ1pHLFFBQVFVLE1BQU0sQ0FBQ0UsSUFBSTs7Ozs7O3NGQUV0Qiw4REFBQ2Q7c0ZBQUtFLFFBQVFVLE1BQU0sQ0FBQ0csSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhEQUkvQiw4REFBQ2pCO29EQUFFQyxXQUFVOzhEQUNWRyxRQUFRUixXQUFXOzs7Ozs7OERBRXRCLDhEQUFDVCxzREFBTUE7b0RBQ0xtQixNQUFNRixRQUFRRSxJQUFJO29EQUNsQlksY0FBWSxDQUFDLFdBQVcsRUFBRWQsUUFBUVQsS0FBSyxDQUFDLENBQUM7b0RBQ3pDTSxXQUFVOzhEQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBdkNFRyxRQUFRRSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7MEJBbUQvQiw4REFBQ2xCLHNFQUFjQTs7Ozs7OztBQUdyQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RhaWx3aW5kdWktc3R1ZGlvLy4vc3JjL2FwcC9ibG9nL3BhZ2UudHN4Pzg3ODEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdHlwZSBNZXRhZGF0YSB9IGZyb20gJ25leHQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuaW1wb3J0IHsgQm9yZGVyIH0gZnJvbSAnQC9jb21wb25lbnRzL0JvcmRlcidcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0AvY29tcG9uZW50cy9CdXR0b24nXG5pbXBvcnQgeyBDb250YWN0U2VjdGlvbiB9IGZyb20gJ0AvY29tcG9uZW50cy9Db250YWN0U2VjdGlvbidcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0AvY29tcG9uZW50cy9Db250YWluZXInXG5pbXBvcnQgeyBGYWRlSW4gfSBmcm9tICdAL2NvbXBvbmVudHMvRmFkZUluJ1xuaW1wb3J0IHsgUGFnZUludHJvIH0gZnJvbSAnQC9jb21wb25lbnRzL1BhZ2VJbnRybydcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tICdAL2xpYi9mb3JtYXREYXRlJ1xuaW1wb3J0IHsgbG9hZEFydGljbGVzIH0gZnJvbSAnQC9saWIvbWR4J1xuXG5leHBvcnQgY29uc3QgbWV0YWRhdGE6IE1ldGFkYXRhID0ge1xuICB0aXRsZTogJ0Jsb2cnLFxuICBkZXNjcmlwdGlvbjpcbiAgICAnU3RheSB1cC10by1kYXRlIHdpdGggdGhlIGxhdGVzdCBpbmR1c3RyeSBuZXdzIGFzIG91ciBtYXJrZXRpbmcgdGVhbXMgZmluZHMgbmV3IHdheXMgdG8gcmUtcHVycG9zZSBvbGQgQ1NTIHRyaWNrcyBhcnRpY2xlcy4nLFxufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBCbG9nKCkge1xuICBsZXQgYXJ0aWNsZXMgPSBhd2FpdCBsb2FkQXJ0aWNsZXMoKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxQYWdlSW50cm8gZXllYnJvdz1cIkJsb2dcIiB0aXRsZT1cIlRoZSBsYXRlc3QgYXJ0aWNsZXMgYW5kIG5ld3NcIj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgU3RheSB1cC10by1kYXRlIHdpdGggdGhlIGxhdGVzdCBpbmR1c3RyeSBuZXdzIGFzIG91ciBtYXJrZXRpbmcgdGVhbXNcbiAgICAgICAgICBmaW5kcyBuZXcgd2F5cyB0byByZS1wdXJwb3NlIG9sZCBDU1MgdHJpY2tzIGFydGljbGVzLlxuICAgICAgICA8L3A+XG4gICAgICA8L1BhZ2VJbnRybz5cblxuICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJtdC0yNCBzbTptdC0zMiBsZzptdC00MFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMjQgbGc6c3BhY2UteS0zMlwiPlxuICAgICAgICAgIHthcnRpY2xlcy5tYXAoKGFydGljbGUpID0+IChcbiAgICAgICAgICAgIDxGYWRlSW4ga2V5PXthcnRpY2xlLmhyZWZ9PlxuICAgICAgICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgICAgICA8Qm9yZGVyIGNsYXNzTmFtZT1cInB0LTE2XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGxnOi1teC00IGxnOmZsZXggbGc6anVzdGlmeS1lbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0xMCBsZzp3LTIvMyBsZzpmbGV4LW5vbmUgbGc6cHgtNCBsZzpwdC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtZGlzcGxheSB0ZXh0LTJ4bCBmb250LXNlbWlib2xkIHRleHQtbmV1dHJhbC05NTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2FydGljbGUuaHJlZn0+e2FydGljbGUudGl0bGV9PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRsIGNsYXNzTmFtZT1cImxnOmFic29sdXRlIGxnOmxlZnQtMCBsZzp0b3AtMCBsZzp3LTEvMyBsZzpweC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZHQgY2xhc3NOYW1lPVwic3Itb25seVwiPlB1Ymxpc2hlZDwvZHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGQgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0wIHRvcC0wIHRleHQtc20gdGV4dC1uZXV0cmFsLTk1MCBsZzpzdGF0aWNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpbWUgZGF0ZVRpbWU9e2FydGljbGUuZGF0ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdERhdGUoYXJ0aWNsZS5kYXRlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aW1lPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkdCBjbGFzc05hbWU9XCJzci1vbmx5XCI+QXV0aG9yPC9kdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkZCBjbGFzc05hbWU9XCJtdC02IGZsZXggZ2FwLXgtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtbm9uZSBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC14bCBiZy1uZXV0cmFsLTEwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5hcnRpY2xlLmF1dGhvci5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTIgdy0xMiBvYmplY3QtY292ZXIgZ3JheXNjYWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtbmV1dHJhbC05NTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthcnRpY2xlLmF1dGhvci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2FydGljbGUuYXV0aG9yLnJvbGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kZD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2RsPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTYgbWF4LXctMnhsIHRleHQtYmFzZSB0ZXh0LW5ldXRyYWwtNjAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YXJ0aWNsZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YXJ0aWNsZS5ocmVmfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17YFJlYWQgbW9yZTogJHthcnRpY2xlLnRpdGxlfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC04XCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFkIG1vcmVcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0JvcmRlcj5cbiAgICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgICAgPC9GYWRlSW4+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgIDxDb250YWN0U2VjdGlvbiAvPlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJMaW5rIiwiQm9yZGVyIiwiQnV0dG9uIiwiQ29udGFjdFNlY3Rpb24iLCJDb250YWluZXIiLCJGYWRlSW4iLCJQYWdlSW50cm8iLCJmb3JtYXREYXRlIiwibG9hZEFydGljbGVzIiwibWV0YWRhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiQmxvZyIsImFydGljbGVzIiwiZXllYnJvdyIsInAiLCJjbGFzc05hbWUiLCJkaXYiLCJtYXAiLCJhcnRpY2xlIiwiaDIiLCJocmVmIiwiZGwiLCJkdCIsImRkIiwidGltZSIsImRhdGVUaW1lIiwiZGF0ZSIsImFsdCIsImF1dGhvciIsImltYWdlIiwibmFtZSIsInJvbGUiLCJhcmlhLWxhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/blog/page.tsx\n");

/***/ }),

/***/ "(rsc)/./src/components/PageIntro.tsx":
/*!**************************************!*\
  !*** ./src/components/PageIntro.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PageIntro: () => (/* binding */ PageIntro)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"(rsc)/./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Container */ \"(rsc)/./src/components/Container.tsx\");\n/* harmony import */ var _components_FadeIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/FadeIn */ \"(rsc)/./src/components/FadeIn.tsx\");\n\n\n\n\nfunction PageIntro({ eyebrow, title, children, centered = false }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_2__.Container, {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"mt-24 sm:mt-32 lg:mt-40\", centered && \"text-center\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FadeIn__WEBPACK_IMPORTED_MODULE_3__.FadeIn, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"block font-display text-base font-semibold text-neutral-950\",\n                            children: eyebrow\n                        }, void 0, false, {\n                            fileName: \"/Users/carlosortega/Documents/GitHub/openpatterson.org/site/src/components/PageIntro.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"sr-only\",\n                            children: \" - \"\n                        }, void 0, false, {\n                            fileName: \"/Users/carlosortega/Documents/GitHub/openpatterson.org/site/src/components/PageIntro.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl\", centered && \"mx-auto\"),\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/Users/carlosortega/Documents/GitHub/openpatterson.org/site/src/components/PageIntro.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/carlosortega/Documents/GitHub/openpatterson.org/site/src/components/PageIntro.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"mt-6 max-w-3xl text-xl text-neutral-600\", centered && \"mx-auto\"),\n                    children: children\n                }, void 0, false, {\n                    fileName: \"/Users/carlosortega/Documents/GitHub/openpatterson.org/site/src/components/PageIntro.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/carlosortega/Documents/GitHub/openpatterson.org/site/src/components/PageIntro.tsx\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/carlosortega/Documents/GitHub/openpatterson.org/site/src/components/PageIntro.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvY29tcG9uZW50cy9QYWdlSW50cm8udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBdUI7QUFFMkI7QUFDTjtBQUVyQyxTQUFTRyxVQUFVLEVBQ3hCQyxPQUFPLEVBQ1BDLEtBQUssRUFDTEMsUUFBUSxFQUNSQyxXQUFXLEtBQUssRUFNakI7SUFDQyxxQkFDRSw4REFBQ04sNERBQVNBO1FBQ1JPLFdBQVdSLGdEQUFJQSxDQUFDLDJCQUEyQk8sWUFBWTtrQkFFdkQsNEVBQUNMLHNEQUFNQTs7OEJBQ0wsOERBQUNPOztzQ0FDQyw4REFBQ0M7NEJBQUtGLFdBQVU7c0NBQ2JKOzs7Ozs7c0NBRUgsOERBQUNNOzRCQUFLRixXQUFVO3NDQUFVOzs7Ozs7c0NBQzFCLDhEQUFDRTs0QkFDQ0YsV0FBV1IsZ0RBQUlBLENBQ2IsMEhBQ0FPLFlBQVk7c0NBR2JGOzs7Ozs7Ozs7Ozs7OEJBR0wsOERBQUNNO29CQUNDSCxXQUFXUixnREFBSUEsQ0FDYiwyQ0FDQU8sWUFBWTs4QkFHYkQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWlsd2luZHVpLXN0dWRpby8uL3NyYy9jb21wb25lbnRzL1BhZ2VJbnRyby50c3g/YzVmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xuXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvQ29udGFpbmVyJ1xuaW1wb3J0IHsgRmFkZUluIH0gZnJvbSAnQC9jb21wb25lbnRzL0ZhZGVJbidcblxuZXhwb3J0IGZ1bmN0aW9uIFBhZ2VJbnRybyh7XG4gIGV5ZWJyb3csXG4gIHRpdGxlLFxuICBjaGlsZHJlbixcbiAgY2VudGVyZWQgPSBmYWxzZSxcbn06IHtcbiAgZXllYnJvdzogc3RyaW5nXG4gIHRpdGxlOiBzdHJpbmdcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxuICBjZW50ZXJlZD86IGJvb2xlYW5cbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goJ210LTI0IHNtOm10LTMyIGxnOm10LTQwJywgY2VudGVyZWQgJiYgJ3RleHQtY2VudGVyJyl9XG4gICAgPlxuICAgICAgPEZhZGVJbj5cbiAgICAgICAgPGgxPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtZGlzcGxheSB0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCB0ZXh0LW5ldXRyYWwtOTUwXCI+XG4gICAgICAgICAgICB7ZXllYnJvd31cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPiAtIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgICAgICAnbXQtNiBibG9jayBtYXgtdy01eGwgZm9udC1kaXNwbGF5IHRleHQtNXhsIGZvbnQtbWVkaXVtIHRyYWNraW5nLXRpZ2h0IHRleHQtbmV1dHJhbC05NTAgW3RleHQtd3JhcDpiYWxhbmNlXSBzbTp0ZXh0LTZ4bCcsXG4gICAgICAgICAgICAgIGNlbnRlcmVkICYmICdteC1hdXRvJyxcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgICAgICdtdC02IG1heC13LTN4bCB0ZXh0LXhsIHRleHQtbmV1dHJhbC02MDAnLFxuICAgICAgICAgICAgY2VudGVyZWQgJiYgJ214LWF1dG8nLFxuICAgICAgICAgICl9XG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9GYWRlSW4+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJjbHN4IiwiQ29udGFpbmVyIiwiRmFkZUluIiwiUGFnZUludHJvIiwiZXllYnJvdyIsInRpdGxlIiwiY2hpbGRyZW4iLCJjZW50ZXJlZCIsImNsYXNzTmFtZSIsImgxIiwic3BhbiIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/components/PageIntro.tsx\n");

/***/ }),

/***/ "(rsc)/./src/lib/formatDate.ts":
/*!*******************************!*\
  !*** ./src/lib/formatDate.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formatDate: () => (/* binding */ formatDate)\n/* harmony export */ });\nfunction formatDate(dateString) {\n    let parts = dateString.split(\"-\");\n    let hasDay = parts.length > 2;\n    return new Date(`${dateString}Z`).toLocaleDateString(\"en-US\", {\n        day: hasDay ? \"numeric\" : undefined,\n        month: \"long\",\n        year: \"numeric\",\n        timeZone: \"UTC\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2Zvcm1hdERhdGUudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLFNBQVNBLFdBQVdDLFVBQWtCO0lBQzNDLElBQUlDLFFBQVFELFdBQVdFLEtBQUssQ0FBQztJQUM3QixJQUFJQyxTQUFTRixNQUFNRyxNQUFNLEdBQUc7SUFFNUIsT0FBTyxJQUFJQyxLQUFLLENBQUMsRUFBRUwsV0FBVyxDQUFDLENBQUMsRUFBRU0sa0JBQWtCLENBQUMsU0FBUztRQUM1REMsS0FBS0osU0FBUyxZQUFZSztRQUMxQkMsT0FBTztRQUNQQyxNQUFNO1FBQ05DLFVBQVU7SUFDWjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFpbHdpbmR1aS1zdHVkaW8vLi9zcmMvbGliL2Zvcm1hdERhdGUudHM/YzQ5MSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlU3RyaW5nOiBzdHJpbmcpIHtcbiAgbGV0IHBhcnRzID0gZGF0ZVN0cmluZy5zcGxpdCgnLScpXG4gIGxldCBoYXNEYXkgPSBwYXJ0cy5sZW5ndGggPiAyXG5cbiAgcmV0dXJuIG5ldyBEYXRlKGAke2RhdGVTdHJpbmd9WmApLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnLCB7XG4gICAgZGF5OiBoYXNEYXkgPyAnbnVtZXJpYycgOiB1bmRlZmluZWQsXG4gICAgbW9udGg6ICdsb25nJyxcbiAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgdGltZVpvbmU6ICdVVEMnLFxuICB9KVxufVxuIl0sIm5hbWVzIjpbImZvcm1hdERhdGUiLCJkYXRlU3RyaW5nIiwicGFydHMiLCJzcGxpdCIsImhhc0RheSIsImxlbmd0aCIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJkYXkiLCJ1bmRlZmluZWQiLCJtb250aCIsInllYXIiLCJ0aW1lWm9uZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/formatDate.ts\n");

/***/ })

};
;