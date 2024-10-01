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

/***/ "./src/components/navigation-menu/navigation-menu.js":
/*!***********************************************************!*\
  !*** ./src/components/navigation-menu/navigation-menu.js ***!
  \***********************************************************/
/***/ (() => {

eval("const burgerMenu = document.querySelector('.burger-menu');\nconst sideBarCross = document.querySelector('.side-bar__cross');\nconst sideBar = document.querySelector('.side-bar');\nconst overlay = document.querySelector('.overlay');\nconst body = document.querySelector('body');\nburgerMenu.addEventListener('click', openSideBar);\nsideBarCross.addEventListener('click', closeSideBar);\nfunction openSideBar() {\n  sideBar.style.display = 'block';\n  overlay.style.display = 'block';\n  overlay.addEventListener('click', closeSideBar);\n  body.classList.add('hideScroll');\n}\nfunction closeSideBar() {\n  sideBar.style.display = 'none';\n  overlay.style.display = 'none';\n  body.classList.remove('hideScroll');\n}\n\n//# sourceURL=webpack://taste_vista/./src/components/navigation-menu/navigation-menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/components/navigation-menu/navigation-menu.js"]();
/******/ 	
/******/ })()
;