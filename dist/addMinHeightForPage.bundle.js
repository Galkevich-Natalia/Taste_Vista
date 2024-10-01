/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/utils/addMinHeightForPage.js":
/*!******************************************!*\
  !*** ./src/utils/addMinHeightForPage.js ***!
  \******************************************/
/***/ (() => {

eval("function addMinHeightForPage(selector) {\n  const element = document.querySelector(selector);\n  if (!element) {\n    console.warn(`Element with selector \"${selector}\" not found.`);\n    return;\n  }\n  let minHeightPage = window.innerHeight - 180;\n  element.style.minHeight = minHeightPage + 'px';\n}\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  addMinHeightForPage(\".socialMedia\");\n  addMinHeightForPage(\".workingHours\");\n  addMinHeightForPage(\".orders\");\n});\n\n//# sourceURL=webpack://taste_vista/./src/utils/addMinHeightForPage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/utils/addMinHeightForPage.js"]();
/******/ 	
/******/ })()
;