/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/checkout/checkout.js":
/*!*********************************************!*\
  !*** ./src/components/checkout/checkout.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeCheckoutModal: () => (/* binding */ closeCheckoutModal)\n/* harmony export */ });\n/* harmony import */ var _utils_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/localStorage */ \"./src/utils/localStorage.js\");\n/* harmony import */ var _createCheckoutElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createCheckoutElements */ \"./src/components/checkout/createCheckoutElements.js\");\n/* harmony import */ var _utils_formatCurrency__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/formatCurrency */ \"./src/utils/formatCurrency.js\");\n/* harmony import */ var _validation_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validation/validation */ \"./src/components/validation/validation.js\");\n\n\n\n\n\nconst checkoutBtnOrder = document.querySelector('.checkout__block-btn');\nconst checkoutModalBtnClose = document.querySelector('.cross_checkout-modal');\ncheckoutBtnOrder.addEventListener('click', getOrder);\ncheckoutModalBtnClose.addEventListener('click', closeCheckoutModal);\nfunction getDishesOnCheckoutPage() {\n  const dataFromLocalStorage = (0,_utils_localStorage__WEBPACK_IMPORTED_MODULE_0__.getOrdersDataFromStorage)('Orders');\n  dataFromLocalStorage.forEach(obj => (0,_createCheckoutElements__WEBPACK_IMPORTED_MODULE_1__.addItemToCheckoutList)(obj));\n}\nfunction getCheckoutTotalPrice() {\n  const totalPriceValue = document.querySelector('.checkout__block-totalPrice-value');\n  const dataFromLocalStorage = (0,_utils_localStorage__WEBPACK_IMPORTED_MODULE_0__.getOrdersDataFromStorage)(\"Orders\");\n  const checkoutTotalPrice = dataFromLocalStorage.reduce((acc, item) => acc + item.price * item.count, 0);\n  totalPriceValue.textContent = (0,_utils_formatCurrency__WEBPACK_IMPORTED_MODULE_2__.getFormatCurrency)(checkoutTotalPrice);\n}\nfunction getOrder() {\n  const validateFormCall = (0,_validation_validation__WEBPACK_IMPORTED_MODULE_3__.validateForm)();\n  if (validateFormCall) {\n    const checkoutModal = document.querySelector('.checkout__modal');\n    const overlay = document.querySelector('.overlay');\n    const body = document.querySelector('body');\n    checkoutModal.style.display = 'block';\n    overlay.style.display = 'block';\n    overlay.addEventListener('click', closeCheckoutModal);\n    body.classList.add('hideScroll');\n  }\n}\nfunction closeCheckoutModal() {\n  window.location.href = \"menu.html\";\n  (0,_utils_localStorage__WEBPACK_IMPORTED_MODULE_0__.removeItemToStorage)('Orders');\n}\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  getDishesOnCheckoutPage();\n  getCheckoutTotalPrice();\n});\n\n//# sourceURL=webpack://taste_vista/./src/components/checkout/checkout.js?");

/***/ }),

/***/ "./src/components/checkout/createCheckoutElements.js":
/*!***********************************************************!*\
  !*** ./src/components/checkout/createCheckoutElements.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addItemToCheckoutList: () => (/* binding */ addItemToCheckoutList)\n/* harmony export */ });\n/* harmony import */ var _utils_formatCurrency__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../utils/formatCurrency */ \"./src/utils/formatCurrency.js\");\n\nconst checkoutList = document.querySelector('.checkout__block-list');\nfunction addItemToCheckoutList(data) {\n  checkoutList.append(createCheckoutListItem(data));\n}\nfunction createCheckoutListItem(data) {\n  const checkoutListItem = document.createElement('li');\n  checkoutListItem.classList.add('checkout__block-list-item');\n  checkoutListItem.append(createCheckoutItemName(data), createCheckoutItemCount(data), createCheckoutItemTotalPrice(data));\n  return checkoutListItem;\n}\nfunction createCheckoutItemName(data) {\n  const checkoutItemName = document.createElement('span');\n  checkoutItemName.classList.add('checkout__block-list-item-name');\n  checkoutItemName.textContent = data.name;\n  return checkoutItemName;\n}\nfunction createCheckoutItemCount(data) {\n  const checkoutItemCount = document.createElement('span');\n  checkoutItemCount.classList.add('checkout__block-list-item-count');\n  checkoutItemCount.textContent = data.count;\n  return checkoutItemCount;\n}\nfunction createCheckoutItemTotalPrice(data) {\n  const checkoutItemTotalPrice = document.createElement('span');\n  checkoutItemTotalPrice.classList.add('checkout__block-list-item-price');\n  checkoutItemTotalPrice.textContent = (0,_utils_formatCurrency__WEBPACK_IMPORTED_MODULE_0__.getFormatCurrency)(data.price * data.count);\n  return checkoutItemTotalPrice;\n}\n\n//# sourceURL=webpack://taste_vista/./src/components/checkout/createCheckoutElements.js?");

/***/ }),

/***/ "./src/components/validation/validation.js":
/*!*************************************************!*\
  !*** ./src/components/validation/validation.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   validateForm: () => (/* binding */ validateForm)\n/* harmony export */ });\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/constants */ \"./src/constants/constants.js\");\n\nfunction validateName() {\n  const nameValue = document.getElementById('name').value;\n  const messageName = document.getElementById('messageName');\n  if (!_constants_constants__WEBPACK_IMPORTED_MODULE_0__.REGNAME.test(nameValue)) {\n    return messageInvalidInput(messageName, 'name');\n  } else {\n    return messsageValidInput(messageName);\n  }\n}\nfunction validatePhone() {\n  const phoneValue = document.getElementById('phone').value;\n  const messagePhone = document.getElementById('messagePhone');\n  if (!_constants_constants__WEBPACK_IMPORTED_MODULE_0__.REGPHONE.test(phoneValue)) {\n    return messageInvalidInput(messagePhone, 'phone');\n  } else {\n    return messsageValidInput(messagePhone);\n  }\n}\nfunction validateEmail() {\n  const emailValue = document.getElementById('email').value;\n  const messageEmail = document.getElementById('messageEmail');\n  if (!_constants_constants__WEBPACK_IMPORTED_MODULE_0__.REGEMAIL.test(emailValue)) {\n    return messageInvalidInput(messageEmail, 'email');\n  } else {\n    return messsageValidInput(messageEmail);\n  }\n}\nfunction validateCity() {\n  const cityValue = document.getElementById('city').value;\n  const messageCity = document.getElementById('messageCity');\n  if (!_constants_constants__WEBPACK_IMPORTED_MODULE_0__.REGCITY.test(cityValue)) {\n    return messageInvalidInput(messageCity, 'city');\n  } else {\n    return messsageValidInput(messageCity);\n  }\n}\nfunction validateStreet() {\n  const streetValue = document.getElementById('street').value;\n  const messageStreet = document.getElementById('messageStreet');\n  if (!_constants_constants__WEBPACK_IMPORTED_MODULE_0__.REGSTREET.test(streetValue)) {\n    return messageInvalidInput(messageStreet, 'street');\n  } else {\n    return messsageValidInput(messageStreet);\n  }\n}\nfunction validateHouse() {\n  const houseValue = document.getElementById('house').value;\n  const messageHouse = document.getElementById('messageHouse');\n  if (!_constants_constants__WEBPACK_IMPORTED_MODULE_0__.REGHOUSE.test(houseValue)) {\n    return messageInvalidInput(messageHouse, 'house');\n  } else {\n    return messsageValidInput(messageHouse);\n  }\n}\nfunction validateApartment() {\n  const apartmentValue = document.getElementById('apartment').value;\n  const messageApartment = document.getElementById('messageApartment');\n  if (!_constants_constants__WEBPACK_IMPORTED_MODULE_0__.REGAPARTMENT.test(apartmentValue)) {\n    return messageInvalidInput(messageApartment, 'apartment');\n  } else {\n    return messsageValidInput(messageApartment);\n  }\n}\nfunction messageInvalidInput(messageValue, inputValue) {\n  messageValue.textContent = 'Please enter a valid ' + inputValue;\n  return false;\n}\nfunction messsageValidInput(messageCorrectValue) {\n  messageCorrectValue.textContent = '';\n  return true;\n}\nfunction validateForm() {\n  const arrayCalls = [validateName(), validatePhone(), validateEmail(), validateCity(), validateStreet(), validateHouse(), validateApartment()];\n  const isValidForm = arrayCalls.every(item => item === true);\n  return isValidForm;\n}\n\n//# sourceURL=webpack://taste_vista/./src/components/validation/validation.js?");

/***/ }),

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   REGAPARTMENT: () => (/* binding */ REGAPARTMENT),\n/* harmony export */   REGCITY: () => (/* binding */ REGCITY),\n/* harmony export */   REGEMAIL: () => (/* binding */ REGEMAIL),\n/* harmony export */   REGHOUSE: () => (/* binding */ REGHOUSE),\n/* harmony export */   REGNAME: () => (/* binding */ REGNAME),\n/* harmony export */   REGPHONE: () => (/* binding */ REGPHONE),\n/* harmony export */   REGSTREET: () => (/* binding */ REGSTREET)\n/* harmony export */ });\nconst REGNAME = /^[A-Za-zА-Яа-яЁё]{3,15}(?:[-\\s'][A-Za-zА-Яа-яЁё]{1,19})?$/;\nconst REGPHONE = /^\\+375\\d{9}$/;\nconst REGEMAIL = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\nconst REGCITY = /^[a-zA-Zа-яА-Я\\-]{3,20}$/;\nconst REGSTREET = /^[a-zA-Zа-яА-Я\\s\\-]+$/;\nconst REGHOUSE = /^\\d{1,4}[A-Za-z]?(\\/\\d+)?$/;\nconst REGAPARTMENT = /^\\d{1,4}[A-Za-z]?(\\/\\d+)?$/;\n\n//# sourceURL=webpack://taste_vista/./src/constants/constants.js?");

/***/ }),

/***/ "./src/utils/formatCurrency.js":
/*!*************************************!*\
  !*** ./src/utils/formatCurrency.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getFormatCurrency: () => (/* binding */ getFormatCurrency)\n/* harmony export */ });\nfunction getFormatCurrency(price) {\n  const dollar = new Intl.NumberFormat(\"en-US\", {\n    style: \"currency\",\n    currency: \"USD\"\n  });\n  return dollar.format(price);\n}\n\n//# sourceURL=webpack://taste_vista/./src/utils/formatCurrency.js?");

/***/ }),

/***/ "./src/utils/localStorage.js":
/*!***********************************!*\
  !*** ./src/utils/localStorage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getOrdersDataFromStorage: () => (/* binding */ getOrdersDataFromStorage),\n/* harmony export */   removeItemToStorage: () => (/* binding */ removeItemToStorage),\n/* harmony export */   setOrdersDataToStorage: () => (/* binding */ setOrdersDataToStorage)\n/* harmony export */ });\nfunction setOrdersDataToStorage(data) {\n  localStorage.setItem('Orders', JSON.stringify(data));\n}\nfunction getOrdersDataFromStorage(key) {\n  const orders = localStorage.getItem(key);\n  return JSON.parse(orders);\n}\nfunction removeItemToStorage(itemName) {\n  localStorage.removeItem(itemName);\n}\n\n//# sourceURL=webpack://taste_vista/./src/utils/localStorage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/components/checkout/checkout.js");
/******/ 	
/******/ })()
;