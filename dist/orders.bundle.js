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

/***/ "./src/components/orders/createOrderElements.js":
/*!******************************************************!*\
  !*** ./src/components/orders/createOrderElements.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addOrders: () => (/* binding */ addOrders)\n/* harmony export */ });\n/* harmony import */ var _utils_formatCurrency__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/formatCurrency */ \"./src/utils/formatCurrency.js\");\n/* harmony import */ var _orders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/orders/orders */ \"./src/components/orders/orders.js\");\n\n\n\nconst ordersCards = document.querySelector('.orders__cards');\nfunction addOrders(data) {\n  ordersCards.append(createOrderCard(data));\n}\nfunction createOrderCard(data) {\n  const orderCard = document.createElement('div');\n  orderCard.classList.add('order-card');\n  orderCard.id = data.id;\n  orderCard.append(createOrderImage(data), createOrderName(data), createOrderInfo(data), createOrderBtnCloseContainer());\n  orderCard.addEventListener('click', _orders__WEBPACK_IMPORTED_MODULE_1__.incrementCounter);\n  orderCard.addEventListener('click', _orders__WEBPACK_IMPORTED_MODULE_1__.decrementCounter);\n  return orderCard;\n}\nfunction createOrderImage(data) {\n  const orderImage = document.createElement('div');\n  orderImage.classList.add('order-card__image');\n  orderImage.append(createImage(data));\n  return orderImage;\n}\nfunction createImage(data) {\n  const cardImg = document.createElement('img');\n  cardImg.src = data.image;\n  return cardImg;\n}\nfunction createOrderName(data) {\n  const orderName = document.createElement('div');\n  orderName.classList.add('order-card__name');\n  orderName.append(createName(data));\n  return orderName;\n}\nfunction createName(data) {\n  const name = document.createElement('span');\n  name.textContent = data.name;\n  return name;\n}\nfunction createOrderInfo(data) {\n  const info = document.createElement('div');\n  info.classList.add('order-card__info');\n  info.append(createOrderCounter(data), createOrderPriceContainer(data));\n  return info;\n}\nfunction createOrderCounter(data) {\n  const counter = document.createElement('div');\n  counter.classList.add('order-card__counter');\n  counter.append(createOrderMinus(), createOrderCount(data), createOrderPlus());\n  return counter;\n}\nfunction createOrderMinus() {\n  const orderMinus = document.createElement('div');\n  orderMinus.classList.add('order-card__container-minus');\n  orderMinus.append(createMinus());\n  return orderMinus;\n}\nfunction createMinus() {\n  const btnMinus = document.createElement('button');\n  btnMinus.classList.add('order-card__btn-minus');\n  btnMinus.textContent = \"-\";\n  return btnMinus;\n}\nfunction createOrderCount(data) {\n  const orderCount = document.createElement('div');\n  orderCount.classList.add('order-card__count');\n  orderCount.append(createCount(data));\n  return orderCount;\n}\nfunction createCount(data) {\n  const count = document.createElement('span');\n  count.classList.add('order-card__count-value');\n  count.textContent = data.count;\n  return count;\n}\nfunction createOrderPlus() {\n  const orderPlus = document.createElement('div');\n  orderPlus.classList.add('order-card__container-plus');\n  orderPlus.append(createPlus());\n  return orderPlus;\n}\nfunction createPlus() {\n  const btnPlus = document.createElement('button');\n  btnPlus.classList.add('order-card__btn-plus');\n  btnPlus.textContent = \"+\";\n  return btnPlus;\n}\nfunction createOrderPriceContainer(data) {\n  const orderPriceContainer = document.createElement('div');\n  orderPriceContainer.classList.add('order-card__price');\n  orderPriceContainer.append(createOrderPriceValue(data));\n  return orderPriceContainer;\n}\nfunction createOrderPriceValue(data) {\n  const orderPriceValue = document.createElement('span');\n  orderPriceValue.classList.add('order-card__price-value');\n  const totalPriceDish = data.price * data.count;\n  orderPriceValue.textContent = (0,_utils_formatCurrency__WEBPACK_IMPORTED_MODULE_0__.getFormatCurrency)(totalPriceDish);\n  return orderPriceValue;\n}\nfunction createOrderBtnCloseContainer() {\n  const orderBtnCloseContainer = document.createElement('div');\n  orderBtnCloseContainer.classList.add('order-card__btnClose-container');\n  orderBtnCloseContainer.append(createOrderBtnClose());\n  return orderBtnCloseContainer;\n}\nfunction createOrderBtnClose() {\n  const orderBtnClose = document.createElement('button');\n  orderBtnClose.classList.add('order-card__btnClose');\n  orderBtnClose.addEventListener('click', _orders__WEBPACK_IMPORTED_MODULE_1__.removeOrderCardByBtnCLose);\n  return orderBtnClose;\n}\n\n//# sourceURL=webpack://taste_vista/./src/components/orders/createOrderElements.js?");

/***/ }),

/***/ "./src/components/orders/orders.js":
/*!*****************************************!*\
  !*** ./src/components/orders/orders.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   decrementCounter: () => (/* binding */ decrementCounter),\n/* harmony export */   incrementCounter: () => (/* binding */ incrementCounter),\n/* harmony export */   removeOrderCardByBtnCLose: () => (/* binding */ removeOrderCardByBtnCLose)\n/* harmony export */ });\n/* harmony import */ var _utils_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/localStorage */ \"./src/utils/localStorage.js\");\n/* harmony import */ var _createOrderElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createOrderElements */ \"./src/components/orders/createOrderElements.js\");\n/* harmony import */ var _utils_formatCurrency__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/formatCurrency */ \"./src/utils/formatCurrency.js\");\n\n\n\nfunction addDishToOrdersPage() {\n  const dataFromLocalStorage = (0,_utils_localStorage__WEBPACK_IMPORTED_MODULE_0__.getOrdersDataFromStorage)('Orders');\n  dataFromLocalStorage && dataFromLocalStorage.forEach(obj => (0,_createOrderElements__WEBPACK_IMPORTED_MODULE_1__.addOrders)(obj));\n}\nfunction getTotalPrice() {\n  const totalPriceValue = document.querySelector('.orders__footer-totalPrice-value');\n  const dataFromLocalStorage = (0,_utils_localStorage__WEBPACK_IMPORTED_MODULE_0__.getOrdersDataFromStorage)('Orders');\n  const ordersMessage = document.querySelector('.orders__message');\n  const ordersFooter = document.querySelector('.orders__footer');\n  if (dataFromLocalStorage !== null && dataFromLocalStorage.length !== 0) {\n    ordersMessage.style.display = 'none';\n    ordersFooter.style.display = 'block';\n    const totalPriceDishes = dataFromLocalStorage.reduce((acc, item) => acc + item.price * item.count, 0);\n    totalPriceValue.textContent = (0,_utils_formatCurrency__WEBPACK_IMPORTED_MODULE_2__.getFormatCurrency)(totalPriceDishes);\n  } else {\n    ordersMessage.style.display = 'block';\n    ordersFooter.style.display = 'none';\n  }\n}\nfunction incrementCounter(event) {\n  if (event.target.classList.contains('order-card__btn-plus')) {\n    const dataFromLocalStorage = (0,_utils_localStorage__WEBPACK_IMPORTED_MODULE_0__.getOrdersDataFromStorage)('Orders');\n    const orderCard = event.currentTarget;\n    const orderCardId = +orderCard.id;\n    const valueCount = orderCard.children[2].children[0].childNodes[1].children[0];\n    const valueTotalPriceDish = orderCard.children[2].children[1].children[0];\n    dataFromLocalStorage.forEach(item => {\n      if (item.id === orderCardId) {\n        item.count += 1;\n        valueCount.textContent = item.count;\n        (0,_utils_localStorage__WEBPACK_IMPORTED_MODULE_0__.setOrdersDataToStorage)(dataFromLocalStorage);\n        getTotalPriceForOneDish(valueTotalPriceDish, item);\n        getTotalPrice();\n      }\n    });\n  }\n}\nfunction decrementCounter(event) {\n  if (event.target.classList.contains('order-card__btn-minus')) {\n    const dataFromLocalStorage = (0,_utils_localStorage__WEBPACK_IMPORTED_MODULE_0__.getOrdersDataFromStorage)('Orders');\n    const orderCard = event.currentTarget;\n    const orderCardId = +orderCard.id;\n    const valueCount = orderCard.children[2].children[0].children[1].children[0];\n    const valueTotalPriceDish = orderCard.children[2].children[1].children[0];\n    dataFromLocalStorage.forEach(item => {\n      if (item.id === orderCardId) {\n        if (item.count > 1) {\n          item.count -= 1;\n          valueCount.textContent = item.count;\n          (0,_utils_localStorage__WEBPACK_IMPORTED_MODULE_0__.setOrdersDataToStorage)(dataFromLocalStorage);\n          getTotalPriceForOneDish(valueTotalPriceDish, item);\n          getTotalPrice();\n        } else {\n          removeOrderCard(orderCard, orderCardId);\n          getTotalPrice();\n        }\n      }\n    });\n  }\n}\nfunction getTotalPriceForOneDish(valueTotalPriceDish, item) {\n  const resultPriceDish = item.price * item.count;\n  valueTotalPriceDish.textContent = (0,_utils_formatCurrency__WEBPACK_IMPORTED_MODULE_2__.getFormatCurrency)(resultPriceDish);\n}\nfunction removeOrderCard(orderCard, orderCardId) {\n  const dataFromLocalStorage = (0,_utils_localStorage__WEBPACK_IMPORTED_MODULE_0__.getOrdersDataFromStorage)('Orders');\n  orderCard.remove();\n  const delElemFromLStorage = dataFromLocalStorage.filter(item => item.id !== orderCardId);\n  (0,_utils_localStorage__WEBPACK_IMPORTED_MODULE_0__.setOrdersDataToStorage)(delElemFromLStorage);\n}\nfunction removeOrderCardByBtnCLose(event) {\n  const orderCard = event.target.parentNode.parentNode;\n  const orderCardId = +orderCard.id;\n  removeOrderCard(orderCard, orderCardId);\n  getTotalPrice();\n}\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  addDishToOrdersPage();\n  getTotalPrice();\n});\n\n//# sourceURL=webpack://taste_vista/./src/components/orders/orders.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/components/orders/orders.js");
/******/ 	
/******/ })()
;