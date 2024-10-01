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

/***/ "./src/api/getApi.js":
/*!***************************!*\
  !*** ./src/api/getApi.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCardDatabById: () => (/* binding */ getCardDatabById),\n/* harmony export */   getMenu: () => (/* binding */ getMenu)\n/* harmony export */ });\nasync function getMenu() {\n  return fetch(\"https://65bcf37fb51f9b29e932a09e.mockapi.io/API/Menu\").then(responce => responce.json()).then(data => {\n    return data;\n  }).catch(error => {\n    throw error;\n  });\n}\nasync function getCardDatabById(id) {\n  return fetch(\"https://65bcf37fb51f9b29e932a09e.mockapi.io/API/Menu\").then(responce => responce.json()).then(data => {\n    let result;\n    for (let key in data[0]) {\n      data[0][key].forEach(item => {\n        if (item.id === id) {\n          result = {\n            ...item\n          };\n        }\n      });\n    }\n    return result;\n  }).catch(error => {\n    throw error;\n  });\n}\n\n//# sourceURL=webpack://taste_vista/./src/api/getApi.js?");

/***/ }),

/***/ "./src/components/card/card.js":
/*!*************************************!*\
  !*** ./src/components/card/card.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addDish: () => (/* binding */ addDish),\n/* harmony export */   getCardsData: () => (/* binding */ getCardsData)\n/* harmony export */ });\n/* harmony import */ var _api_getApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/getApi */ \"./src/api/getApi.js\");\n/* harmony import */ var _createCards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createCards */ \"./src/components/card/createCards.js\");\n/* harmony import */ var _utils_localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/localStorage */ \"./src/utils/localStorage.js\");\n\n\n\n\nasync function getCardsData(value) {\n  try {\n    const data = await (0,_api_getApi__WEBPACK_IMPORTED_MODULE_0__.getMenu)();\n    const nameCategory = value.toLowerCase();\n    const arrCardsByCategory = data[0][nameCategory];\n    deleteCardsByCategory();\n    arrCardsByCategory.forEach(obj => (0,_createCards__WEBPACK_IMPORTED_MODULE_1__.addMenu)(obj, 'ordinary'));\n  } catch (e) {\n    console.error(\"error\", e);\n    throw e;\n  }\n}\nfunction deleteCardsByCategory() {\n  const cards = document.querySelectorAll(\".card\");\n  cards.forEach(item => item.remove());\n}\nfunction deleteStylesBtnsCategories() {\n  const allBtnsMenu = document.querySelectorAll(\".menu__item-button\");\n  allBtnsMenu.forEach(item => item.classList.remove(\"menu__item-button_active\"));\n}\nfunction getMenuByCategory() {\n  const itemMenu = document.querySelectorAll(\".menu__item-button\");\n  Array.from(itemMenu).forEach(item => item.addEventListener(\"click\", selectedCategory));\n}\nfunction selectedCategory(event) {\n  const btnCategory = event.target;\n  const dataCategory = event.target.textContent;\n  deleteStylesBtnsCategories();\n  btnCategory.classList.add(\"menu__item-button_active\");\n  getCardsData(dataCategory);\n}\nfunction addDish(event) {\n  if (event.target.classList.contains('card__btn')) {\n    const cardId = +event.currentTarget.id;\n    try {\n      (0,_api_getApi__WEBPACK_IMPORTED_MODULE_0__.getCardDatabById)(cardId).then(dataOrder => {\n        const dataCard = (0,_utils_localStorage__WEBPACK_IMPORTED_MODULE_2__.getOrdersDataFromStorage)('Orders');\n        if (dataCard === null) {\n          dataOrder.count = 1;\n          (0,_utils_localStorage__WEBPACK_IMPORTED_MODULE_2__.setOrdersDataToStorage)([dataOrder]);\n        } else {\n          const dataFromLocalStorage = (0,_utils_localStorage__WEBPACK_IMPORTED_MODULE_2__.getOrdersDataFromStorage)(\"Orders\");\n          const isObject = dataFromLocalStorage.find(item => item.id === dataOrder.id);\n          if (isObject === undefined) {\n            dataOrder.count = 1;\n            dataFromLocalStorage.push(dataOrder);\n          } else {\n            dataFromLocalStorage.forEach(item => {\n              if (item.id === dataOrder.id) {\n                item.count += 1;\n              }\n            });\n          }\n          (0,_utils_localStorage__WEBPACK_IMPORTED_MODULE_2__.setOrdersDataToStorage)(dataFromLocalStorage);\n        }\n      });\n    } catch (error) {\n      throw error;\n    }\n  }\n}\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const navBtnsCategories = document.querySelectorAll(\".menu__item-button\");\n  const defaultCategoryBtn = navBtnsCategories[0];\n  defaultCategoryBtn.classList.add(\"menu__item-button_active\");\n  getCardsData(\"snacks\");\n  getMenuByCategory();\n});\n\n//# sourceURL=webpack://taste_vista/./src/components/card/card.js?");

/***/ }),

/***/ "./src/components/card/createCards.js":
/*!********************************************!*\
  !*** ./src/components/card/createCards.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addMenu: () => (/* binding */ addMenu)\n/* harmony export */ });\n/* harmony import */ var _utils_formatCurrency__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/formatCurrency */ \"./src/utils/formatCurrency.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ \"./src/components/card/modal.js\");\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card */ \"./src/components/card/card.js\");\n\n\n\nconst cardsContainer = document.querySelector('.cards__container');\nfunction addMenu(data, type) {\n  cardsContainer.append(crtCard(data, type));\n}\nfunction crtCard(data, type) {\n  const card = document.createElement('div');\n  const chooseClass = type === \"ordinary\" ? \"card\" : \"card_modal\";\n  card.classList.add(chooseClass);\n  card.id = data.id;\n  card.append(crtCardContainer(data, type));\n  if (type === \"ordinary\") {\n    card.addEventListener('click', _modal__WEBPACK_IMPORTED_MODULE_1__.addModal);\n  }\n  card.addEventListener('click', _card__WEBPACK_IMPORTED_MODULE_2__.addDish);\n  return card;\n}\nfunction crtCardContainer(data, type) {\n  const cardContainer = document.createElement('div');\n  cardContainer.classList.add('card__container');\n  cardContainer.append(crtCardWrapper(data, type));\n  return cardContainer;\n}\nfunction crtCardWrapper(data, type) {\n  const cardWrapper = document.createElement('div');\n  const chooseClass = type === \"ordinary\" ? \"card__wrapper\" : \"card__wrapper_modal\";\n  cardWrapper.classList.add(chooseClass);\n  cardWrapper.append(crtCardContImage(data, type), crtCardContent(data, type));\n  return cardWrapper;\n}\nfunction crtCardContImage(data, type) {\n  const cardContImage = document.createElement('div');\n  const chooseClass = type === \"ordinary\" ? \"card__image\" : \"card__image_modal\";\n  cardContImage.classList.add(chooseClass);\n  cardContImage.append(crtCardImg(data));\n  return cardContImage;\n}\nfunction crtCardImg(value) {\n  const cardImg = document.createElement('img');\n  cardImg.classList.add('img');\n  cardImg.src = value.image;\n  cardImg.alt = value.name;\n  return cardImg;\n}\nfunction crtCardContent(data, type) {\n  const cardContent = document.createElement('div');\n  if (type === \"ordinary\") {\n    cardContent.classList.add(\"card__content\");\n    cardContent.append(crtCardName(data, type));\n    data.ingredients && cardContent.append(crtCardIngredients(data));\n    cardContent.append(crtCardFooter(data));\n  } else if (type === \"modal\") {\n    cardContent.classList.add(\"card__content_modal\");\n    cardContent.append(crtContainerBtnClose(), crtCardName(data, type));\n    data.description && cardContent.append(crtCardDescription(data));\n    cardContent.append(crtCardFooter(data));\n  }\n  return cardContent;\n}\nfunction crtContainerBtnClose() {\n  const btnContainerClose = document.createElement('div');\n  btnContainerClose.classList.add('card__containerCross');\n  btnContainerClose.append(crtBtnClose());\n  return btnContainerClose;\n}\nfunction crtBtnClose() {\n  const btnClose = document.createElement('button');\n  btnClose.classList.add('cross', 'cross_menu-card-modal');\n  btnClose.addEventListener('click', _modal__WEBPACK_IMPORTED_MODULE_1__.closeModal);\n  return btnClose;\n}\nfunction crtCardName(data, type) {\n  const container = document.createElement('div');\n  container.classList.add('card__name');\n  container.append(crtTextName(data, type));\n  return container;\n}\nfunction crtTextName(value, type) {\n  const textName = document.createElement('span');\n  const chooseClass = type === \"ordinary\" ? \"card__text\" : \"card__text_modal\";\n  textName.classList.add(chooseClass);\n  textName.textContent = value.name + ' ' + '-' + ' ';\n  textName.append(crtTextSize(value));\n  return textName;\n}\nfunction crtTextSize(value) {\n  const textSize = document.createElement('span');\n  textSize.classList.add('card__sizeValue');\n  textSize.textContent = value.size;\n  return textSize;\n}\nfunction crtCardIngredients(value) {\n  const cardIngredients = document.createElement('div');\n  cardIngredients.classList.add('card__ingredients');\n  const cardIngredientsText = document.createElement('span');\n  cardIngredientsText.textContent = value.ingredients.join(', ') + \".\";\n  cardIngredients.append(cardIngredientsText);\n  return cardIngredients;\n}\nfunction crtCardDescription(value) {\n  const cardDescription = document.createElement('div');\n  cardDescription.classList.add('card__description');\n  const cardDescriptionText = document.createElement('span');\n  cardDescriptionText.textContent = value.description;\n  cardDescription.append(cardDescriptionText);\n  return cardDescription;\n}\nfunction crtCardFooter(data) {\n  const cardFooter = document.createElement('div');\n  cardFooter.classList.add('card__footer');\n  cardFooter.append(crtCardContainerCost(data), crtCardConteinerBtn());\n  return cardFooter;\n}\nfunction crtCardContainerCost(data) {\n  const cardContainerCost = document.createElement('div');\n  cardContainerCost.classList.add('card__cost');\n  cardContainerCost.append(crtCardCost(data));\n  return cardContainerCost;\n}\nfunction crtCardCost(value) {\n  const cardCost = document.createElement('p');\n  cardCost.classList.add('card__cost-price');\n  cardCost.textContent = (0,_utils_formatCurrency__WEBPACK_IMPORTED_MODULE_0__.getFormatCurrency)(value.price);\n  return cardCost;\n}\nfunction crtCardConteinerBtn() {\n  const cardContainerBtn = document.createElement('div');\n  cardContainerBtn.classList.add('card__container-btn');\n  cardContainerBtn.append(crtCardBtn());\n  return cardContainerBtn;\n}\nfunction crtCardBtn() {\n  const cardBtn = document.createElement('button');\n  cardBtn.classList.add('card__btn');\n  cardBtn.textContent = '+';\n  return cardBtn;\n}\n\n//# sourceURL=webpack://taste_vista/./src/components/card/createCards.js?");

/***/ }),

/***/ "./src/components/card/modal.js":
/*!**************************************!*\
  !*** ./src/components/card/modal.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addModal: () => (/* binding */ addModal),\n/* harmony export */   closeModal: () => (/* binding */ closeModal)\n/* harmony export */ });\n/* harmony import */ var _api_getApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/getApi */ \"./src/api/getApi.js\");\n/* harmony import */ var _createCards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createCards */ \"./src/components/card/createCards.js\");\n\n\nfunction addModal(event) {\n  if (!event.target.classList.contains('card__btn')) {\n    const cardId = +event.currentTarget.id;\n    const overlay = document.querySelector('.overlay');\n    const body = document.querySelector('body');\n    try {\n      (0,_api_getApi__WEBPACK_IMPORTED_MODULE_0__.getCardDatabById)(cardId).then(cardData => {\n        (0,_createCards__WEBPACK_IMPORTED_MODULE_1__.addMenu)(cardData, 'modal');\n        overlay.style.display = 'block';\n        overlay.addEventListener('click', closeModal);\n        body.classList.add('hideScroll');\n      });\n    } catch (error) {\n      throw error;\n    }\n  }\n}\nfunction closeModal() {\n  const card = document.querySelector('.card_modal');\n  const overlay = document.querySelector('.overlay');\n  const body = document.querySelector('body');\n  card.remove();\n  overlay.style.display = 'none';\n  body.classList.remove('hideScroll');\n}\n\n//# sourceURL=webpack://taste_vista/./src/components/card/modal.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/components/card/card.js");
/******/ 	
/******/ })()
;