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

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\nconst taskInput = document.getElementById('taskInput');\r\nconst taskList = document.getElementById('taskList');\r\n\r\nfunction addTask() {\r\n  const taskText = taskInput.value.trim();\r\n  if (taskText === '') {\r\n    alert('Please enter a task!');\r\n    return;\r\n  }\r\n  \r\n  const existingTasks = document.querySelectorAll('#taskList span');\r\n  for (let task of existingTasks) {\r\n    if (task.textContent.toLowerCase() === taskText.toLowerCase()) {\r\n      alert('Task already exists!');\r\n      return;\r\n    }\r\n  }\r\n\r\n  const listItem = document.createElement('li');\r\n  listItem.className = 'flex items-center justify-between bg-white p-3 rounded shadow';\r\n\r\n  const taskContent = document.createElement('span');\r\n  taskContent.textContent = taskText;\r\n  taskContent.className = 'flex-1 cursor-pointer';\r\n  taskContent.onclick = () => {\r\n    taskContent.classList.toggle('line-through');\r\n    taskContent.classList.toggle('text-green-500');\r\n  };\r\n\r\n  const deleteButton = document.createElement('button');\r\n  deleteButton.textContent = '🗑️';\r\n  deleteButton.className = 'ml-4 text-red-500 hover:text-red-700';\r\n  deleteButton.onclick = () => {\r\n    if (taskContent.classList.contains('line-through')) {\r\n      listItem.remove();\r\n    } else {\r\n      alert('Please mark the task as done first!');\r\n    }\r\n  };\r\n\r\n  listItem.appendChild(taskContent);\r\n  listItem.appendChild(deleteButton);\r\n  taskList.appendChild(listItem);\r\n\r\n  taskInput.value = '';\r\n}\r\n\r\nfunction resetTasks() {\r\n  const confirmation = confirm('Are you sure you want to reset the list?');\r\n  if (confirmation) {\r\n    taskList.innerHTML = '';\r\n  }\r\n}\r\n\r\n// Expose to window\r\nwindow.addTask = addTask;\r\nwindow.resetTasks = resetTasks;\n\n//# sourceURL=webpack:///./src/script.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/style.css?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;