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

/***/ "./src/car.js":
/*!********************!*\
  !*** ./src/car.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Car: () => (/* binding */ Car)\n/* harmony export */ });\n// this is the object/bluepring\nclass Car{\n    constructor (id, make, model, year) {\n        this.id = id;\n        this.make = make;\n        this.model = model;\n        this.year = year;\n    }\n}\n    \n\n/*\nexport obj:\n    id:\"\"\n    make:\"\"\n    model:\"\"\n    year:\"\"\n}\n*/\n\n//# sourceURL=webpack://es6_modules/./src/car.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wishlist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist.js */ \"./src/wishlist.js\");\nconsole.log(\"Hello World\");\n\n// TODO\n\n// Select the form element\nconst form = document.getElementById('submitForm');\n\n// for make, model, and year input elements\nconst makeInput = document.getElementById('makeInput');\nconst modelInput = document.getElementById('modelInput');\nconst yearInput = document.getElementById('yearInput');\n\n// For car details Paragraph elements\nconst carMakeP = document.getElementById('car-make');\nconst carModelP = document.getElementById('car-model');\nconst carYearP = document.getElementById('car-year');\nconst removeBtn = document.querySelector(\".removeBtn\");\nconst wishlist = new _wishlist_js__WEBPACK_IMPORTED_MODULE_0__.wishList();\n// for remove button\nform.addEventListener('submit', addCar);\nremoveBtn.addEventListener(\"click\", removeCar);\n\n// for UL  wishlist\nconst wishListUL = document.querySelector('#wishListContainer > ul');\n\nfunction showCarDetails(car) {\n    carMakeP.textContent = car.make;\n    carModelP.textContent = car.model;\n    carYearP.textContent = car.year;\n    //enables the button - makes it clickable\n    removeBtn.disabled = false;\n    //saving the id for later use\n    removeBtn.setAttribute('data-carId', car.id);\n}\n\n//creating the visual representation of our wishlist data\nfunction updatedDOMList(){\n    wishListUL.innerHTML = \"\";\n    //iterate over the list\n    wishlist.list.forEach((car, index, array) => {\n        //create element\n       const newLI = document.createElement(\"li\");\n       const newMake = document.createElement(\"p\");\n       const newModel = document.createElement(\"p\");\n\n        //modify the element\n        newMake.textContent = `${car.make}` ;\n        newModel.textContent = `${car.model}`;\n        newLI.addEventListener(\"click\",() => {\n            showCarDetails(car);\n        });\n        //Append the element\n        newLI.append(newMake, newModel);\n        wishListUL.append(newLI);\n    });\n}\n\n//This is an event handler function\nfunction addCar(event) {\n    event.preventDefault();\n    wishlist.add(\n        makeInput.value,\n        modelInput.value,\n        yearInput.value,\n    );\nupdatedDOMList();\n}\nfunction removeCar(){\n    //this gets the car's id on what to remove\n    const carId = Number(removeBtn.getAttribute('data-carId'));\n    wishlist.remove(carId);\n    updatedDOMList();\n    carMakeP.textContent = '';\n    carModelP.textContent = '';\n    carYearP.textContent = '';\n    removeBtn.disabled = true;\n}\n\n//# sourceURL=webpack://es6_modules/./src/index.js?");

/***/ }),

/***/ "./src/wishlist.js":
/*!*************************!*\
  !*** ./src/wishlist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   wishList: () => (/* binding */ wishList)\n/* harmony export */ });\n/* harmony import */ var _car_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car.js */ \"./src/car.js\");\n\n\nclass wishList{\n    constructor(){\n    this.list = [];\n    this.newxtId = 0;\n    }\nadd(make, model, year) {\n    const car = new _car_js__WEBPACK_IMPORTED_MODULE_0__.Car(++this.newxtId, make, model, year);\n    this.list.push(car);\n}\nremove(carId){\n    this.list = this.list.filter((car) => car.Id !== carId);\n}\n}\n\n//# sourceURL=webpack://es6_modules/./src/wishlist.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;