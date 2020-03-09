/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main/createWindow.js":
/*!**********************************!*\
  !*** ./src/main/createWindow.js ***!
  \**********************************/
/*! exports provided: win, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "win", function() { return win; });
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);


let win;
const createWindow = () => {
  win = new electron__WEBPACK_IMPORTED_MODULE_0__["BrowserWindow"]({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  win.loadURL(`file://${__dirname}/../index.html`);
  //win.webContents.openDevTools();
  win.on('closed', () => {
    win = null;
  });
};


/* harmony default export */ __webpack_exports__["default"] = (createWindow);


/***/ }),

/***/ "./src/main/index.js":
/*!***************************!*\
  !*** ./src/main/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/main/menu.js");
/* harmony import */ var _createWindow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createWindow */ "./src/main/createWindow.js");




electron__WEBPACK_IMPORTED_MODULE_0__["app"].on('ready', () => {
  Object(_createWindow__WEBPACK_IMPORTED_MODULE_2__["default"])();
  electron__WEBPACK_IMPORTED_MODULE_0__["Menu"].setApplicationMenu(_menu__WEBPACK_IMPORTED_MODULE_1__["default"]);
  const item = _menu__WEBPACK_IMPORTED_MODULE_1__["default"].getMenuItemById('logout');
  electron__WEBPACK_IMPORTED_MODULE_0__["ipcMain"].on('logoutMenuItem', (e, msg) => {
    item.enabled = !!msg;
  });
});

electron__WEBPACK_IMPORTED_MODULE_0__["app"].on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    electron__WEBPACK_IMPORTED_MODULE_0__["app"].quit();
  }
});

electron__WEBPACK_IMPORTED_MODULE_0__["app"].on('activate', (_e, hasVisibleWindows) => {
  if (!hasVisibleWindows) {
    Object(_createWindow__WEBPACK_IMPORTED_MODULE_2__["default"])();
  }
});


/***/ }),

/***/ "./src/main/menu.js":
/*!**************************!*\
  !*** ./src/main/menu.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createWindow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createWindow */ "./src/main/createWindow.js");



const load = () => {
  _createWindow__WEBPACK_IMPORTED_MODULE_1__["win"].webContents.send('menu', 'load');
};

const save = () => {
  _createWindow__WEBPACK_IMPORTED_MODULE_1__["win"].webContents.send('menu', 'save');
};

const template = [
  {
    label: '文件',
    submenu: [
      {
        label: '打开',
        click: load,
        accelerator: 'CmdOrCtrl+O',
        id: 'load',
      },
      {
        label: '另存为',
        click: save,
        accelerator: 'CmdOrCtrl+S',
        id: 'save',
      },
      { type: 'separator' },
      {
        role: 'close',
        label: '关闭',
      },
    ],
  }];


if (process.platform === 'darwin') {
  template.unshift({
    label: electron__WEBPACK_IMPORTED_MODULE_0__["app"].getName(),
    submenu: [
      { role: 'about' },
      { type: 'separator' },
      { role: 'services' },
      { type: 'separator' },
      { role: 'hide' },
      { role: 'hideothers' },
      { role: 'unhide' },
      { type: 'separator' },
      { role: 'quit' },
    ],
  });
}
const menu = electron__WEBPACK_IMPORTED_MODULE_0__["Menu"].buildFromTemplate(template);

/* harmony default export */ __webpack_exports__["default"] = (menu);


/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ })

/******/ });
//# sourceMappingURL=main.js.map