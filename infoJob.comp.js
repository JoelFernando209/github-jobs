/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/infoJob.js":
/*!***************************!*\
  !*** ./src/js/infoJob.js ***!
  \***************************/
/*! namespace exports */
/*! export setInfoJob [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setInfoJob\": () => /* binding */ setInfoJob\n/* harmony export */ });\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/main.scss */ \"./src/sass/main.scss\");\n\nvar mainApplyInfo = document.querySelector('.main__apply-info');\nvar mainInfoTitle = document.querySelector('.main__info-title-text');\nvar mainTypeJob = document.querySelector('.main__type-job');\nvar mainInfoDate = document.querySelector('.main__info-date-text');\nvar mainInfoPortrait = document.querySelector('.main__info-job-portrait');\nvar mainInfoName = document.querySelector('.main__info-job-name');\nvar mainInfoUbication = document.querySelector('.main__info-ubication-text');\nvar mainInfoDesc = document.querySelector('.main__info-desc');\nvar title = document.querySelector('title');\nvar locationId = location.hash.replace('#', '');\nvar setInfoJob = function setInfoJob(appyInfo, descInfo, logoUrl, titleJob, jobType, jobDate, companyName, jobLocation) {\n  mainApplyInfo.innerHTML = appyInfo;\n  mainInfoTitle.innerHTML = titleJob;\n  mainTypeJob.innerHTML = jobType;\n  mainInfoDate.innerHTML = jobDate.split(' ').slice(0, 3).join(' ');\n  mainInfoPortrait.setAttribute('src', logoUrl);\n  mainInfoName.innerHTML = companyName;\n  mainInfoUbication.innerHTML = jobLocation;\n  mainInfoDesc.innerHTML = descInfo;\n  title.innerHTML = \"Github Jobs | \".concat(companyName, \" job in \").concat(jobLocation);\n};\nfetch(\"https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/\".concat(locationId, \".json\")).then(function (res) {\n  return res.json();\n}).then(function (obj) {\n  setInfoJob(obj.how_to_apply, obj.description, obj.company_logo, obj.title, obj.type, obj.created_at, obj.company, obj.location);\n});\n\n//# sourceURL=webpack://webpack-app-change-this/./src/js/infoJob.js?");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-app-change-this/./src/sass/main.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/infoJob.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;