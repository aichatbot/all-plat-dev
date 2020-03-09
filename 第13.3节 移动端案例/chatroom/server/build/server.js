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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api/threads.js":
/*!****************************!*\
  !*** ./src/api/threads.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _model_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/User */ "./src/model/User.js");
/* harmony import */ var _model_Thread__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/Thread */ "./src/model/Thread.js");
/* harmony import */ var _model_Comment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/Comment */ "./src/model/Comment.js");







var threadAPIs = function threadAPIs(app) {
  app.post('/api/threads',
  /*#__PURE__*/
  // 新增帖子
  function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res) {
      var _req$body, username, token, title, content, user, newThread, thread;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _req$body = req.body, username = _req$body.username, token = _req$body.token, title = _req$body.title, content = _req$body.content;

              if (username) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", res.status(400).json({
                message: '没有获取到用户名'
              }));

            case 4:
              if (token) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return", res.status(400).json({
                message: '没有获取到身份凭证'
              }));

            case 6:
              if (title) {
                _context.next = 8;
                break;
              }

              return _context.abrupt("return", res.status(400).json({
                message: '没有输入帖子标题'
              }));

            case 8:
              if (content) {
                _context.next = 10;
                break;
              }

              return _context.abrupt("return", res.status(400).json({
                message: '没有输入帖子内容'
              }));

            case 10:
              _context.next = 12;
              return _model_User__WEBPACK_IMPORTED_MODULE_3__["default"].findOne({
                username: username,
                token: token
              });

            case 12:
              user = _context.sent;

              if (user) {
                _context.next = 15;
                break;
              }

              return _context.abrupt("return", res.status(400).json({
                message: 'token已过期，请重新登陆'
              }));

            case 15:
              newThread = {
                title: title,
                content: content,
                author: user
              };
              thread = new _model_Thread__WEBPACK_IMPORTED_MODULE_4__["default"](newThread);
              _context.next = 19;
              return thread.save();

            case 19:
              user.threads.push(thread);
              _context.next = 22;
              return user.save();

            case 22:
              return _context.abrupt("return", res.json({
                message: '新增帖子成功'
              }));

            case 25:
              _context.prev = 25;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", res.status(400).json({
                message: _context.t0.message
              }));

            case 28:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 25]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
  app.post('/api/comments/:tid',
  /*#__PURE__*/
  // 新增回复
  function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(req, res) {
      var tid, _req$body2, username, token, content, user, thread, newComment, comment;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              tid = req.params.tid;
              _req$body2 = req.body, username = _req$body2.username, token = _req$body2.token, content = _req$body2.content;

              if (tid) {
                _context2.next = 5;
                break;
              }

              return _context2.abrupt("return", res.status(400).json({
                message: '没有输入帖子ID'
              }));

            case 5:
              if (username) {
                _context2.next = 7;
                break;
              }

              return _context2.abrupt("return", res.status(400).json({
                message: '没有输入用户名'
              }));

            case 7:
              if (token) {
                _context2.next = 9;
                break;
              }

              return _context2.abrupt("return", res.status(400).json({
                message: '没有输入身份凭证'
              }));

            case 9:
              if (content) {
                _context2.next = 11;
                break;
              }

              return _context2.abrupt("return", res.status(400).json({
                message: '没有输入回复内容'
              }));

            case 11:
              _context2.next = 13;
              return _model_User__WEBPACK_IMPORTED_MODULE_3__["default"].findOne({
                username: username,
                token: token
              });

            case 13:
              user = _context2.sent;

              if (user) {
                _context2.next = 16;
                break;
              }

              return _context2.abrupt("return", res.status(400).json({
                message: 'token已过期，请重新登陆'
              }));

            case 16:
              _context2.next = 18;
              return _model_Thread__WEBPACK_IMPORTED_MODULE_4__["default"].findById(tid);

            case 18:
              thread = _context2.sent;

              if (thread) {
                _context2.next = 21;
                break;
              }

              return _context2.abrupt("return", res.status(400).json({
                message: '该帖子不存在'
              }));

            case 21:
              newComment = {
                content: content,
                author: user,
                target: tid
              };
              comment = new _model_Comment__WEBPACK_IMPORTED_MODULE_5__["default"](newComment);
              _context2.next = 25;
              return comment.save();

            case 25:
              return _context2.abrupt("return", res.json({
                message: '新增回复成功'
              }));

            case 28:
              _context2.prev = 28;
              _context2.t0 = _context2["catch"](0);
              return _context2.abrupt("return", res.status(400).json({
                message: _context2.t0.message
              }));

            case 31:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 28]]);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
  app.get('/api/threads',
  /*#__PURE__*/
  function () {
    var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(req, res) {
      var threads;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _model_Thread__WEBPACK_IMPORTED_MODULE_4__["default"].find().populate('author', 'username avatar');

            case 3:
              threads = _context3.sent;
              return _context3.abrupt("return", res.json({
                data: threads
              }));

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](0);
              return _context3.abrupt("return", res.status(400).json({
                message: _context3.t0.message
              }));

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 7]]);
    }));

    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
  app.get('/api/threads/:tid',
  /*#__PURE__*/
  function () {
    var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(req, res) {
      var tid, thread, comments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              tid = req.params.tid;

              if (tid) {
                _context4.next = 4;
                break;
              }

              return _context4.abrupt("return", res.status(400).json({
                message: '没有输入帖子ID'
              }));

            case 4:
              _context4.next = 6;
              return _model_Thread__WEBPACK_IMPORTED_MODULE_4__["default"].findById(tid).populate('author', 'username description avatar');

            case 6:
              thread = _context4.sent;

              if (thread) {
                _context4.next = 9;
                break;
              }

              return _context4.abrupt("return", res.status(400).json({
                message: '该帖子不存在'
              }));

            case 9:
              _context4.next = 11;
              return _model_Comment__WEBPACK_IMPORTED_MODULE_5__["default"].find({
                target: tid
              }).populate('author', 'username avatar description');

            case 11:
              comments = _context4.sent;
              return _context4.abrupt("return", res.json({
                data: {
                  thread: thread,
                  comments: comments
                }
              }));

            case 15:
              _context4.prev = 15;
              _context4.t0 = _context4["catch"](0);
              return _context4.abrupt("return", res.status(400).json({
                message: _context4.t0.message
              }));

            case 18:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 15]]);
    }));

    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
  app.patch('/api/threads/:tid',
  /*#__PURE__*/
  function () {
    var _ref5 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(req, res) {
      var tid, _req$body3, username, token, title, content, user, thread;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              tid = req.params.tid;
              _req$body3 = req.body, username = _req$body3.username, token = _req$body3.token, title = _req$body3.title, content = _req$body3.content;

              if (tid) {
                _context5.next = 5;
                break;
              }

              return _context5.abrupt("return", res.status(400).json({
                message: '没有获取到帖子ID'
              }));

            case 5:
              if (username) {
                _context5.next = 7;
                break;
              }

              return _context5.abrupt("return", res.status(400).json({
                message: '没有获取到用户名'
              }));

            case 7:
              if (token) {
                _context5.next = 9;
                break;
              }

              return _context5.abrupt("return", res.status(400).json({
                message: '没有输入token'
              }));

            case 9:
              if (title) {
                _context5.next = 11;
                break;
              }

              return _context5.abrupt("return", res.status(400).json({
                message: '没有输入修改标题'
              }));

            case 11:
              if (content) {
                _context5.next = 13;
                break;
              }

              return _context5.abrupt("return", res.status(400).json({
                message: '没有输入修改内容'
              }));

            case 13:
              _context5.next = 15;
              return _model_User__WEBPACK_IMPORTED_MODULE_3__["default"].findOne({
                username: username,
                token: token
              });

            case 15:
              user = _context5.sent;

              if (user) {
                _context5.next = 18;
                break;
              }

              return _context5.abrupt("return", res.status(400).json({
                message: 'token已过期，请重新登陆'
              }));

            case 18:
              _context5.next = 20;
              return _model_Thread__WEBPACK_IMPORTED_MODULE_4__["default"].findById(tid);

            case 20:
              thread = _context5.sent;

              if (thread) {
                _context5.next = 23;
                break;
              }

              return _context5.abrupt("return", res.status(400).json({
                message: '该帖子不存在'
              }));

            case 23:
              if (!(String(user._id) !== String(thread.author))) {
                _context5.next = 25;
                break;
              }

              return _context5.abrupt("return", res.status(400).json({
                message: '你不是该贴的作者'
              }));

            case 25:
              thread.title = title;
              thread.content = content;
              _context5.next = 29;
              return thread.save();

            case 29:
              return _context5.abrupt("return", res.json({
                message: '修改帖子内容成功'
              }));

            case 32:
              _context5.prev = 32;
              _context5.t0 = _context5["catch"](0);
              return _context5.abrupt("return", res.status(400).json({
                message: _context5.t0.message
              }));

            case 35:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 32]]);
    }));

    return function (_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }());
  app["delete"]('/api/threads/:tid',
  /*#__PURE__*/
  function () {
    var _ref6 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(req, res) {
      var tid, _req$body4, username, token, user, thread;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              tid = req.params.tid;

              if (tid) {
                _context6.next = 4;
                break;
              }

              return _context6.abrupt("return", res.status(400).json({
                message: '没有输入帖子ID'
              }));

            case 4:
              _req$body4 = req.body, username = _req$body4.username, token = _req$body4.token;

              if (username) {
                _context6.next = 7;
                break;
              }

              return _context6.abrupt("return", res.status(400).json({
                message: '没有获取到用户名'
              }));

            case 7:
              if (token) {
                _context6.next = 9;
                break;
              }

              return _context6.abrupt("return", res.status(400).json({
                message: '没有获取到token'
              }));

            case 9:
              _context6.next = 11;
              return _model_User__WEBPACK_IMPORTED_MODULE_3__["default"].findOne({
                username: username,
                token: token
              });

            case 11:
              user = _context6.sent;

              if (user) {
                _context6.next = 14;
                break;
              }

              return _context6.abrupt("return", res.status(400).json({
                message: 'token已过期，请重新登陆'
              }));

            case 14:
              _context6.next = 16;
              return _model_Thread__WEBPACK_IMPORTED_MODULE_4__["default"].findById(tid);

            case 16:
              thread = _context6.sent;

              if (thread) {
                _context6.next = 19;
                break;
              }

              return _context6.abrupt("return", res.status(400).json({
                message: '该帖子不存在'
              }));

            case 19:
              if (!(String(user._id) !== String(thread.author))) {
                _context6.next = 21;
                break;
              }

              return _context6.abrupt("return", res.status(400).json({
                message: '你不是该贴的作者'
              }));

            case 21:
              _context6.next = 23;
              return _model_Comment__WEBPACK_IMPORTED_MODULE_5__["default"].deleteMany({
                target: mongoose__WEBPACK_IMPORTED_MODULE_2___default.a.Types.ObjectId(tid)
              });

            case 23:
              user.threads.pull(thread);
              _context6.next = 26;
              return user.save();

            case 26:
              _context6.next = 28;
              return thread.remove();

            case 28:
              return _context6.abrupt("return", res.json({
                message: '删除帖子成功'
              }));

            case 31:
              _context6.prev = 31;
              _context6.t0 = _context6["catch"](0);
              return _context6.abrupt("return", res.status(400).json({
                message: _context6.t0.message
              }));

            case 34:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[0, 31]]);
    }));

    return function (_x11, _x12) {
      return _ref6.apply(this, arguments);
    };
  }());
};

/* harmony default export */ __webpack_exports__["default"] = (threadAPIs);

/***/ }),

/***/ "./src/api/users.js":
/*!**************************!*\
  !*** ./src/api/users.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! multer */ "multer");
/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _model_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/User */ "./src/model/User.js");






var upload = multer__WEBPACK_IMPORTED_MODULE_4___default()({
  dest: './static/upload'
});

var userAPIs = function userAPIs(app) {
  app.get('/api/users',
  /*#__PURE__*/
  function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res) {
      var users;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _model_User__WEBPACK_IMPORTED_MODULE_5__["default"].find();

            case 3:
              users = _context.sent;
              return _context.abrupt("return", res.json({
                data: users
              }));

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", res.status(400).json({
                message: _context.t0.message
              }));

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
  app.post('/api/users',
  /*#__PURE__*/
  function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(req, res) {
      var _req$body, username, password, confirmpass, user, passwordCryp, newUser, newuser;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _req$body = req.body, username = _req$body.username, password = _req$body.password, confirmpass = _req$body.confirmpass;

              if (username) {
                _context2.next = 4;
                break;
              }

              return _context2.abrupt("return", res.status(400).json({
                message: '没有输入用户名'
              }));

            case 4:
              if (password) {
                _context2.next = 6;
                break;
              }

              return _context2.abrupt("return", res.status(400).json({
                message: '没有输入密码'
              }));

            case 6:
              if (confirmpass) {
                _context2.next = 8;
                break;
              }

              return _context2.abrupt("return", res.status(400).json({
                message: '没有输入确认密码'
              }));

            case 8:
              if (!(password !== confirmpass)) {
                _context2.next = 10;
                break;
              }

              return _context2.abrupt("return", res.status(400).json({
                message: '密码与确认密码不一致',
                data: 'confirmpass'
              }));

            case 10:
              _context2.next = 12;
              return _model_User__WEBPACK_IMPORTED_MODULE_5__["default"].findOne({
                username: username
              });

            case 12:
              user = _context2.sent;

              if (!user) {
                _context2.next = 15;
                break;
              }

              return _context2.abrupt("return", res.status(400).json({
                message: '该用户名已被使用'
              }));

            case 15:
              passwordCryp = crypto__WEBPACK_IMPORTED_MODULE_2___default.a.createHash('sha1').update(password).digest('hex'); // 使用sha1算法给密码加密

              newUser = {
                username: username,
                password: passwordCryp
              };
              newuser = new _model_User__WEBPACK_IMPORTED_MODULE_5__["default"](newUser);
              _context2.next = 20;
              return newuser.save();

            case 20:
              return _context2.abrupt("return", res.json({
                message: '新增用户成功'
              }));

            case 23:
              _context2.prev = 23;
              _context2.t0 = _context2["catch"](0);
              return _context2.abrupt("return", res.status(400).json({
                message: _context2.t0.message
              }));

            case 26:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 23]]);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
  app.post('/api/users/login',
  /*#__PURE__*/
  function () {
    var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(req, res) {
      var _req$body2, username, password, passwordCryp, user, tokenstr, token;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _req$body2 = req.body, username = _req$body2.username, password = _req$body2.password;

              if (username) {
                _context3.next = 4;
                break;
              }

              return _context3.abrupt("return", res.status(400).json({
                message: '没有输入用户名'
              }));

            case 4:
              if (password) {
                _context3.next = 6;
                break;
              }

              return _context3.abrupt("return", res.status(400).json({
                message: '没有输入密码'
              }));

            case 6:
              passwordCryp = crypto__WEBPACK_IMPORTED_MODULE_2___default.a.createHash('sha1').update(password).digest('hex'); // 加密密码

              _context3.next = 9;
              return _model_User__WEBPACK_IMPORTED_MODULE_5__["default"].findOne({
                username: username
              });

            case 9:
              user = _context3.sent;

              if (user) {
                _context3.next = 12;
                break;
              }

              return _context3.abrupt("return", res.status(400).json({
                message: '该用户不存在'
              }));

            case 12:
              if (!(user.password !== passwordCryp)) {
                _context3.next = 14;
                break;
              }

              return _context3.abrupt("return", res.status(400).json({
                message: '密码错误，请重新输入'
              }));

            case 14:
              tokenstr = uuid__WEBPACK_IMPORTED_MODULE_3___default.a.v4(); // 生成标识符

              token = crypto__WEBPACK_IMPORTED_MODULE_2___default.a.createHash('sha1').update(tokenstr).digest('hex'); // 加密标识符

              user.token = token; // 将用户的token修改为当前加密凭证

              _context3.next = 19;
              return user.save();

            case 19:
              return _context3.abrupt("return", res.json({
                message: '成功登陆',
                data: {
                  username: user.username,
                  token: user.token
                }
              }));

            case 22:
              _context3.prev = 22;
              _context3.t0 = _context3["catch"](0);
              return _context3.abrupt("return", res.status(400).json({
                message: _context3.t0.message
              }));

            case 25:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 22]]);
    }));

    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
  app.post('/api/users/auth',
  /*#__PURE__*/
  function () {
    var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(req, res) {
      var _req$body3, username, token, user;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _req$body3 = req.body, username = _req$body3.username, token = _req$body3.token;

              if (username) {
                _context4.next = 4;
                break;
              }

              return _context4.abrupt("return", res.status(400).json({
                message: '没有输入用户名'
              }));

            case 4:
              if (token) {
                _context4.next = 6;
                break;
              }

              return _context4.abrupt("return", res.status(400).json({
                message: '没有输入token'
              }));

            case 6:
              _context4.next = 8;
              return _model_User__WEBPACK_IMPORTED_MODULE_5__["default"].findOne({
                username: username,
                token: token
              });

            case 8:
              user = _context4.sent;

              if (user) {
                _context4.next = 11;
                break;
              }

              return _context4.abrupt("return", res.status(400).json({
                message: 'token已过期，请重新登陆'
              }));

            case 11:
              user.password = null;
              user.token = null;
              return _context4.abrupt("return", res.json({
                message: '成功验证',
                data: user
              }));

            case 16:
              _context4.prev = 16;
              _context4.t0 = _context4["catch"](0);
              return _context4.abrupt("return", res.status(400).json({
                message: _context4.t0.message
              }));

            case 19:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 16]]);
    }));

    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
  app.post('/api/users/logout',
  /*#__PURE__*/
  function () {
    var _ref5 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(req, res) {
      var _req$body4, username, token, user;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _req$body4 = req.body, username = _req$body4.username, token = _req$body4.token;

              if (username) {
                _context5.next = 4;
                break;
              }

              return _context5.abrupt("return", res.status(400).json({
                message: '没有输入用户名'
              }));

            case 4:
              if (token) {
                _context5.next = 6;
                break;
              }

              return _context5.abrupt("return", res.status(400).json({
                message: '没有输入token'
              }));

            case 6:
              _context5.next = 8;
              return _model_User__WEBPACK_IMPORTED_MODULE_5__["default"].findOne({
                username: username,
                token: token
              });

            case 8:
              user = _context5.sent;

              if (user) {
                _context5.next = 11;
                break;
              }

              return _context5.abrupt("return", res.status(400).json({
                message: 'token已过期，请重新登陆'
              }));

            case 11:
              user.token = null;
              _context5.next = 14;
              return user.save();

            case 14:
              return _context5.abrupt("return", res.json({
                message: '退出成功'
              }));

            case 17:
              _context5.prev = 17;
              _context5.t0 = _context5["catch"](0);
              return _context5.abrupt("return", res.status(400).json({
                message: _context5.t0.message
              }));

            case 20:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 17]]);
    }));

    return function (_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }());
  app.patch('/api/users', upload.single('avatar'),
  /*#__PURE__*/
  function () {
    var _ref6 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(req, res) {
      var _req$body5, username, token, description, user;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _req$body5 = req.body, username = _req$body5.username, token = _req$body5.token, description = _req$body5.description;

              if (username) {
                _context6.next = 4;
                break;
              }

              return _context6.abrupt("return", res.status(400).json({
                message: '没有输入用户名'
              }));

            case 4:
              if (token) {
                _context6.next = 6;
                break;
              }

              return _context6.abrupt("return", res.status(400).json({
                message: '没有输入token'
              }));

            case 6:
              _context6.next = 8;
              return _model_User__WEBPACK_IMPORTED_MODULE_5__["default"].findOne({
                username: username,
                token: token
              });

            case 8:
              user = _context6.sent;

              if (user) {
                _context6.next = 11;
                break;
              }

              return _context6.abrupt("return", res.status(400).json({
                message: 'token已过期，请重新登陆'
              }));

            case 11:
              if (req.file) {
                user.avatar = req.file.filename;
              }

              user.description = description;
              _context6.next = 15;
              return user.save();

            case 15:
              return _context6.abrupt("return", res.json({
                message: '修改用户资料成功'
              }));

            case 18:
              _context6.prev = 18;
              _context6.t0 = _context6["catch"](0);
              return _context6.abrupt("return", res.status(400).json({
                message: _context6.t0.message
              }));

            case 21:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[0, 18]]);
    }));

    return function (_x11, _x12) {
      return _ref6.apply(this, arguments);
    };
  }());
  app.get('/api/users/:username',
  /*#__PURE__*/
  function () {
    var _ref7 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(req, res) {
      var username, user;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              username = req.params.username;

              if (username) {
                _context7.next = 4;
                break;
              }

              return _context7.abrupt("return", res.status(400).json({
                message: '没有输入用户名'
              }));

            case 4:
              _context7.next = 6;
              return _model_User__WEBPACK_IMPORTED_MODULE_5__["default"].findOne({
                username: username
              }).populate('threads', 'title posttime');

            case 6:
              user = _context7.sent;

              if (user) {
                _context7.next = 9;
                break;
              }

              return _context7.abrupt("return", res.status(400).json({
                message: '该用户不存在'
              }));

            case 9:
              user.password = null;
              user.token = null;
              return _context7.abrupt("return", res.json({
                data: user
              }));

            case 14:
              _context7.prev = 14;
              _context7.t0 = _context7["catch"](0);
              return _context7.abrupt("return", res.status(400).json({
                message: _context7.t0.message
              }));

            case 17:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[0, 14]]);
    }));

    return function (_x13, _x14) {
      return _ref7.apply(this, arguments);
    };
  }());
};

/* harmony default export */ __webpack_exports__["default"] = (userAPIs);

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: HOST, PORT, DOMAIN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOST", function() { return HOST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PORT", function() { return PORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAIN", function() { return DOMAIN; });
var HOST = 'http://10.0.1.196';
var PORT = 3000;
var DOMAIN = 'BBS';

/***/ }),

/***/ "./src/jsx/App.jsx":
/*!*************************!*\
  !*** ./src/jsx/App.jsx ***!
  \*************************/
/*! exports provided: userContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userContext", function() { return userContext; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Header */ "./src/jsx/Header.jsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Footer */ "./src/jsx/Footer.jsx");
/* harmony import */ var _HomePage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./HomePage */ "./src/jsx/HomePage.jsx");
/* harmony import */ var _ThreadListPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ThreadListPage */ "./src/jsx/ThreadListPage.jsx");
/* harmony import */ var _ProfilePage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ProfilePage */ "./src/jsx/ProfilePage.jsx");
/* harmony import */ var _SettingPage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SettingPage */ "./src/jsx/SettingPage.jsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../config */ "./src/config.js");













var userContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["createContext"])({
  user: {},
  setUser: function setUser() {},
  auth: false,
  setAuth: function setAuth() {}
});

var App = function App() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      user = _useState2[0],
      setUser = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),
      auth = _useState4[0],
      setAuth = _useState4[1];

  var authenticate =
  /*#__PURE__*/
  function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var body, res, result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return JSON.parse(localStorage.getItem(_config__WEBPACK_IMPORTED_MODULE_12__["DOMAIN"]));

            case 3:
              body = _context.sent;
              _context.next = 6;
              return fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_12__["HOST"], ":").concat(_config__WEBPACK_IMPORTED_MODULE_12__["PORT"], "/api/users/auth"), {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
              });

            case 6:
              res = _context.sent;
              _context.next = 9;
              return res.json();

            case 9:
              result = _context.sent;

              if (res.ok) {
                setUser(result.data);
                setAuth(true);
              } else {
                alert(result.message);
              }

              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](0);
              throw _context.t0;

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 13]]);
    }));

    return function authenticate() {
      return _ref.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    authenticate();
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(userContext.Provider, {
    value: {
      user: user,
      setUser: setUser,
      auth: auth,
      setAuth: setAuth
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_5__["Helmet"], {
    titleTemplate: "%s | xxBBS \u2014\u2014 \u8FDE\u63A5\u4F60\u548C\u6211",
    meta: [{
      name: 'charset',
      content: 'utf-8'
    }, {
      name: 'description',
      content: '全世界最不为人所知的电子留言板'
    }]
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
    exact: true,
    path: "/",
    component: _HomePage__WEBPACK_IMPORTED_MODULE_8__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
    path: "/home",
    component: _HomePage__WEBPACK_IMPORTED_MODULE_8__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
    path: "/threads",
    component: _ThreadListPage__WEBPACK_IMPORTED_MODULE_9__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
    path: "/profile/:username",
    component: _ProfilePage__WEBPACK_IMPORTED_MODULE_10__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
    path: "/setting",
    component: _SettingPage__WEBPACK_IMPORTED_MODULE_11__["default"]
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], null));
};


/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/jsx/DeleteButton.jsx":
/*!**********************************!*\
  !*** ./src/jsx/DeleteButton.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./src/config.js");







var DeleteButton = function DeleteButton(props) {
  var tid = props.tid,
      history = props.history;

  var handle =
  /*#__PURE__*/
  function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(body) {
      var res, result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_5__["HOST"], ":").concat(_config__WEBPACK_IMPORTED_MODULE_5__["PORT"], "/api/threads/").concat(tid), {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
              });

            case 3:
              res = _context.sent;
              _context.next = 6;
              return res.json();

            case 6:
              result = _context.sent;

              if (res.ok) {
                alert(result.message);
                history.push('/threads');
              } else {
                alert(result.message);
              }

              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              alert(_context.t0.message);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));

    return function handle(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var handleDelete =
  /*#__PURE__*/
  function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var _JSON$parse, username, token, body;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (confirm('确认删除该贴子吗？')) {
                _JSON$parse = JSON.parse(localStorage.getItem(_config__WEBPACK_IMPORTED_MODULE_5__["DOMAIN"])), username = _JSON$parse.username, token = _JSON$parse.token;
                body = {
                  username: username,
                  token: token,
                  tid: tid
                };
                handle(body);
              }

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleDelete() {
      return _ref2.apply(this, arguments);
    };
  }();

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "outline-danger",
    size: "sm",
    onClick: function onClick() {
      return handleDelete();
    }
  }, "\u5220\u9664");
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(DeleteButton));

/***/ }),

/***/ "./src/jsx/Footer.jsx":
/*!****************************!*\
  !*** ./src/jsx/Footer.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "mt-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", null, "Copyright \xA9 2019 xxBBs", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "All Rights Reserved"));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/jsx/Header.jsx":
/*!****************************!*\
  !*** ./src/jsx/Header.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-bootstrap */ "react-router-bootstrap");
/* harmony import */ var react_router_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config */ "./src/config.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./App */ "./src/jsx/App.jsx");









var Header = function Header(props) {
  var history = props.history;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_App__WEBPACK_IMPORTED_MODULE_7__["userContext"]),
      user = _useContext.user,
      setUser = _useContext.setUser,
      auth = _useContext.auth,
      setAuth = _useContext.setAuth;

  var Avatar = function Avatar() {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      src: user.avatar ? "/upload/".concat(user.avatar) : '/img/avatar.png',
      alt: "\u5934\u50CF",
      width: 32,
      height: 32,
      className: "rounded"
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      style: {
        color: 'white'
      },
      onClick: function onClick() {
        return logout();
      }
    }, "  \u9000\u51FA"));
  };

  var logout =
  /*#__PURE__*/
  function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var data, res, result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.t0 = JSON;
              _context.next = 4;
              return localStorage.getItem(_config__WEBPACK_IMPORTED_MODULE_6__["DOMAIN"]);

            case 4:
              _context.t1 = _context.sent;
              data = _context.t0.parse.call(_context.t0, _context.t1);
              _context.next = 8;
              return fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_6__["HOST"], ":").concat(_config__WEBPACK_IMPORTED_MODULE_6__["PORT"], "/api/users/logout"), {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
              });

            case 8:
              res = _context.sent;
              _context.next = 11;
              return res.json();

            case 11:
              result = _context.sent;

              if (res.ok) {
                alert(result.message);
                setAuth(false);
                setUser({});
                history.push('/');
              } else {
                alert(result.message);
              }

              _context.next = 18;
              break;

            case 15:
              _context.prev = 15;
              _context.t2 = _context["catch"](0);
              throw _context.t2;

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 15]]);
    }));

    return function logout() {
      return _ref.apply(this, arguments);
    };
  }();

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"], {
    bg: "primary",
    variant: "dark",
    expand: "lg"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"].Brand, {
    href: "#"
  }, "BBS"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"].Toggle, {
    "aria-controls": "basic-navbar-nav"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"].Collapse, {
    id: "basic-navbar-nav"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"], {
    className: "mr-auto"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_4__["LinkContainer"], {
    to: "/home/"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, null, "\u9996\u9875")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_4__["LinkContainer"], {
    to: "/threads/"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, null, "\u5E16\u5B50")), auth ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"], {
    title: "\u4E2A\u4EBA\u4E2D\u5FC3",
    id: "basic-nav-dropdown"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_4__["LinkContainer"], {
    to: "/profile/".concat(user.username)
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"].Item, {
    href: "#"
  }, "\u4E2A\u4EBA\u4FE1\u606F")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_4__["LinkContainer"], {
    to: "/setting/"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"].Item, {
    href: "#"
  }, "\u4FEE\u6539\u4FE1\u606F"))) : null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "ml-auto"
  }, auth ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Avatar, null) : null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(Header));

/***/ }),

/***/ "./src/jsx/HomePage.jsx":
/*!******************************!*\
  !*** ./src/jsx/HomePage.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Introduction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Introduction */ "./src/jsx/Introduction.jsx");
/* harmony import */ var _RegisterForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RegisterForm */ "./src/jsx/RegisterForm.jsx");
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LoginForm */ "./src/jsx/LoginForm.jsx");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./App */ "./src/jsx/App.jsx");









var RegLogForm = function RegLogForm() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('login'),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      mode = _useState2[0],
      setMode = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Tabs"], {
    id: "homeTabs",
    activeKey: mode,
    onSelect: function onSelect(mode) {
      return setMode(mode);
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
    eventKey: "login",
    title: "\u767B\u9646"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LoginForm__WEBPACK_IMPORTED_MODULE_6__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
    eventKey: "register",
    title: "\u6CE8\u518C"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_RegisterForm__WEBPACK_IMPORTED_MODULE_5__["default"], null)));
};

var HomePage = function HomePage() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_App__WEBPACK_IMPORTED_MODULE_7__["userContext"]),
      auth = _useContext.auth;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    fluid: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"], {
    title: "\u9996\u9875"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: 12,
    md: 7,
    className: "pr-1"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Introduction__WEBPACK_IMPORTED_MODULE_4__["Demo"], null)), auth ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: 12,
    md: 5,
    className: "pl-0 d-flex align-items-stretch"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Introduction__WEBPACK_IMPORTED_MODULE_4__["Slogan"], null)) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: 12,
    md: 5,
    className: "pl-0"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RegLogForm, null))));
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./src/jsx/Introduction.jsx":
/*!**********************************!*\
  !*** ./src/jsx/Introduction.jsx ***!
  \**********************************/
/*! exports provided: Demo, Slogan, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Demo", function() { return Demo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slogan", function() { return Slogan; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);



var Demo = function Demo() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "d-block w-100",
    src: "/img/demo1.jpeg",
    alt: "First slide"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Caption, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "\u5915\u9633"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u4E00\u540C\u6B23\u8D4F\u7F8E\u666F"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "d-block w-100",
    src: "/img/demo2.jpeg",
    alt: "Third slide"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Caption, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "\u767D\u4E91"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u4E00\u540C\u6B23\u8D4F\u7F8E\u666F"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "d-block w-100",
    src: "/img/demo3.jpeg",
    alt: "Third slide"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Caption, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "\u6D77\u6EE8"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u4E00\u540C\u6B23\u8D4F\u7F8E\u666F"))));
};

var Slogan = function Slogan() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Jumbotron"], {
    className: "flex-fill m-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "xxBBS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u6B22\u8FCE\u6765\u5230xxBBS\u7CFB\u7EDF\u3002", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\u8BF7\u7545\u6240\u6B32\u8A00\uFF01"));
};

var Introduction = function Introduction() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Demo, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Slogan, null));
};


/* harmony default export */ __webpack_exports__["default"] = (Introduction);

/***/ }),

/***/ "./src/jsx/LoginForm.jsx":
/*!*******************************!*\
  !*** ./src/jsx/LoginForm.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ "./src/jsx/App.jsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./src/config.js");







var LoginForm = function LoginForm() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_App__WEBPACK_IMPORTED_MODULE_4__["userContext"]),
      setUser = _useContext.setUser,
      setAuth = _useContext.setAuth;

  var login =
  /*#__PURE__*/
  function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(body) {
      var res, result, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_5__["HOST"], ":").concat(_config__WEBPACK_IMPORTED_MODULE_5__["PORT"], "/api/users/login"), {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
              });

            case 3:
              res = _context.sent;
              _context.next = 6;
              return res.json();

            case 6:
              result = _context.sent;

              if (!res.ok) {
                _context.next = 16;
                break;
              }

              alert(result.message);
              data = {
                username: result.data.username,
                token: result.data.token
              };
              _context.next = 12;
              return localStorage.setItem(_config__WEBPACK_IMPORTED_MODULE_5__["DOMAIN"], JSON.stringify(data));

            case 12:
              setAuth(true);
              setUser({
                username: result.data.username
              });
              _context.next = 17;
              break;

            case 16:
              alert(result.message);

            case 17:
              _context.next = 22;
              break;

            case 19:
              _context.prev = 19;
              _context.t0 = _context["catch"](0);
              throw _context.t0.message;

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 19]]);
    }));

    return function login(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var handleLogin = function handleLogin(e) {
    e.preventDefault();
    var form = document.forms.loginForm;
    var username = form.username.value;
    var password = form.password.value;
    var body = {
      username: username,
      password: password
    };
    login(body);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    id: "loginForm"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    controlId: "username"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, null, "\u7528\u6237\u540D"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
    type: "text",
    placeholder: "\u8BF7\u8F93\u5165\u7528\u6237\u540D"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    controlId: "password"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, null, "\u5BC6\u7801"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
    type: "password",
    placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "primary",
    type: "submit",
    onClick: function onClick(e) {
      return handleLogin(e);
    }
  }, "\u767B\u9646"));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ }),

/***/ "./src/jsx/ModifyButton.jsx":
/*!**********************************!*\
  !*** ./src/jsx/ModifyButton.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./src/config.js");







var ModifyForm = function ModifyForm(props) {
  var tid = props.tid;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      title = _useState2[0],
      setTitle = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),
      content = _useState4[0],
      setContent = _useState4[1];

  var loadThread =
  /*#__PURE__*/
  function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res, result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_5__["HOST"], ":").concat(_config__WEBPACK_IMPORTED_MODULE_5__["PORT"], "/api/threads/").concat(tid), {
                method: 'GET'
              });

            case 3:
              res = _context.sent;
              _context.next = 6;
              return res.json();

            case 6:
              result = _context.sent;

              if (res.ok) {
                setTitle(result.data.thread.title);
                setContent(result.data.thread.content);
              } else {
                alert(result.message);
              }

              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              alert(_context.t0.message);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));

    return function loadThread() {
      return _ref.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    loadThread();
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    id: "modifyForm"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    controlId: "title"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, null, "\u6807\u9898"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "text",
    placeholder: "\u8BF7\u8F93\u5165\u5E16\u5B50\u6807\u9898",
    defaultValue: title
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    controlId: "content"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, null, "\u5185\u5BB9"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    as: "textarea",
    rows: "3",
    defaultValue: content
  })));
};

var ModifyButton = function ModifyButton(props) {
  var tid = props.tid,
      loadThread = props.loadThread;

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState5, 2),
      show = _useState6[0],
      setShow = _useState6[1];

  var showModal = function showModal() {
    return setShow(true);
  };

  var closeModal = function closeModal() {
    return setShow(false);
  };

  var modify =
  /*#__PURE__*/
  function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(body) {
      var res, result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_5__["HOST"], ":").concat(_config__WEBPACK_IMPORTED_MODULE_5__["PORT"], "/api/threads/").concat(tid), {
                method: 'PATCH',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
              });

            case 3:
              res = _context2.sent;
              _context2.next = 6;
              return res.json();

            case 6:
              result = _context2.sent;

              if (res.ok) {
                alert(result.message);
                closeModal();
                loadThread();
              } else {
                alert(result.message);
              }

              _context2.next = 13;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](0);
              alert(_context2.t0.message);

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 10]]);
    }));

    return function modify(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleModify =
  /*#__PURE__*/
  function () {
    var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var _JSON$parse, username, token, form, title, content, body;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.t0 = JSON;
              _context3.next = 3;
              return localStorage.getItem(_config__WEBPACK_IMPORTED_MODULE_5__["DOMAIN"]);

            case 3:
              _context3.t1 = _context3.sent;
              _JSON$parse = _context3.t0.parse.call(_context3.t0, _context3.t1);
              username = _JSON$parse.username;
              token = _JSON$parse.token;
              form = document.forms.modifyForm;
              title = form.title.value;
              content = form.content.value;
              body = {
                username: username,
                token: token,
                title: title,
                content: content
              };
              modify(body);

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleModify() {
      return _ref3.apply(this, arguments);
    };
  }();

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "outline-warning",
    size: "sm",
    onClick: function onClick() {
      return showModal();
    }
  }, "\u4FEE\u6539"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    show: show,
    onHide: function onHide() {
      return closeModal();
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Header, {
    closeButton: true
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Title, null, "\u4FEE\u6539\u5E16\u5B50")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Body, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ModifyForm, {
    tid: tid
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Footer, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "secondary",
    onClick: function onClick() {
      return closeModal();
    }
  }, "\u5173\u95ED"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "primary",
    onClick: function onClick() {
      return handleModify();
    }
  }, "\u63D0\u4EA4"))));
};

/* harmony default export */ __webpack_exports__["default"] = (ModifyButton);

/***/ }),

/***/ "./src/jsx/PostButton.jsx":
/*!********************************!*\
  !*** ./src/jsx/PostButton.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./src/config.js");







var PostForm = function PostForm() {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    id: "postForm"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    controlId: "title"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, null, "\u6807\u9898"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "text",
    placeholder: "\u8BF7\u8F93\u5165\u5E16\u5B50\u6807\u9898"
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    controlId: "content"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, null, "\u5185\u5BB9"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    as: "textarea",
    rows: "3"
  })));
};

var PostButton = function PostButton(props) {
  // 新增props
  var loadThreads = props.loadThreads; // 新增

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var showModal = function showModal() {
    return setShow(true);
  };

  var closeModal = function closeModal() {
    return setShow(false);
  };

  var post =
  /*#__PURE__*/
  function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(body) {
      var res, result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_5__["HOST"], ":").concat(_config__WEBPACK_IMPORTED_MODULE_5__["PORT"], "/api/threads"), {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
              });

            case 3:
              res = _context.sent;
              _context.next = 6;
              return res.json();

            case 6:
              result = _context.sent;

              if (res.ok) {
                alert(result.message);
                closeModal();
                loadThreads();
              } else {
                alert(result.message);
              }

              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              alert(_context.t0.message);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));

    return function post(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var handlePost =
  /*#__PURE__*/
  function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var _JSON$parse, username, token, form, title, content, body;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.t0 = JSON;
              _context2.next = 3;
              return localStorage.getItem(_config__WEBPACK_IMPORTED_MODULE_5__["DOMAIN"]);

            case 3:
              _context2.t1 = _context2.sent;
              _JSON$parse = _context2.t0.parse.call(_context2.t0, _context2.t1);
              username = _JSON$parse.username;
              token = _JSON$parse.token;
              form = document.forms.postForm;
              title = form.title.value;
              content = form.content.value;
              body = {
                username: username,
                token: token,
                title: title,
                content: content
              };
              post(body);

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handlePost() {
      return _ref2.apply(this, arguments);
    };
  }();

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "outline-success",
    size: "sm",
    onClick: function onClick() {
      return showModal();
    }
  }, "\u53D1\u5E03\u65B0\u5E16"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    show: show,
    onHide: function onHide() {
      return closeModal();
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Header, {
    closeButton: true
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Title, null, "\u53D1\u5E03\u65B0\u5E16")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Body, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(PostForm, null)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Footer, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "secondary",
    onClick: function onClick() {
      return closeModal();
    }
  }, "\u5173\u95ED"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "primary",
    onClick: function onClick() {
      return handlePost();
    }
  }, "\u63D0\u4EA4"))));
};

/* harmony default export */ __webpack_exports__["default"] = (PostButton);

/***/ }),

/***/ "./src/jsx/ProfilePage.jsx":
/*!*********************************!*\
  !*** ./src/jsx/ProfilePage.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UserInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserInfo */ "./src/jsx/UserInfo.jsx");





var ProfilePage = function ProfilePage(props) {
  var username = props.match.params.username;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"], {
    title: "".concat(username, "\u7684\u4E2A\u4EBA\u4FE1\u606F")
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserInfo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    username: username
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ProfilePage);

/***/ }),

/***/ "./src/jsx/RegisterForm.jsx":
/*!**********************************!*\
  !*** ./src/jsx/RegisterForm.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ "./src/jsx/App.jsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./src/config.js");







var RegisterForm = function RegisterForm() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_App__WEBPACK_IMPORTED_MODULE_4__["userContext"]),
      setAuth = _useContext.setAuth;

  var login =
  /*#__PURE__*/
  function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(body) {
      var res, result, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_5__["HOST"], ":").concat(_config__WEBPACK_IMPORTED_MODULE_5__["PORT"], "/api/users/login"), {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
              });

            case 3:
              res = _context.sent;
              _context.next = 6;
              return res.json();

            case 6:
              result = _context.sent;

              if (!res.ok) {
                _context.next = 16;
                break;
              }

              alert(result.message);
              data = {
                username: result.data.username,
                token: result.data.token
              };
              _context.next = 12;
              return localStorage.setItem(DOMAIN, JSON.stringify(data));

            case 12:
              setAuth(true);
              setUser({
                username: result.data.username
              });
              _context.next = 17;
              break;

            case 16:
              alert(result.message);

            case 17:
              _context.next = 22;
              break;

            case 19:
              _context.prev = 19;
              _context.t0 = _context["catch"](0);
              throw _context.t0.message;

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 19]]);
    }));

    return function login(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var register =
  /*#__PURE__*/
  function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(body) {
      var res, result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_5__["HOST"], ":").concat(_config__WEBPACK_IMPORTED_MODULE_5__["PORT"], "/api/users"), {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
              });

            case 3:
              res = _context2.sent;
              _context2.next = 6;
              return res.json();

            case 6:
              result = _context2.sent;

              if (res.ok) {
                alert(result.message);
                login(body);
              } else {
                alert(result.message);
              }

              _context2.next = 13;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](0);
              alert(_context2.t0.message);

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 10]]);
    }));

    return function register(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleRegister = function handleRegister(e) {
    e.preventDefault();
    var form = document.forms.registerForm;
    var username = form.username.value;
    var password = form.password.value;
    var confirmpass = form.confirmpass.value;
    var body = {
      username: username,
      password: password,
      confirmpass: confirmpass
    };
    register(body);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    id: "registerForm"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    controlId: "username"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, null, "\u7528\u6237\u540D"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
    type: "text",
    placeholder: "\u8BF7\u8F93\u5165\u7528\u6237\u540D"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    controlId: "password"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, null, "\u5BC6\u7801"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
    type: "password",
    placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    controlId: "confirmpass"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, null, "\u786E\u8BA4\u5BC6\u7801"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
    type: "password",
    placeholder: "\u8BF7\u518D\u8F93\u5165\u4E00\u904D\u5BC6\u7801"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "primary",
    type: "submit",
    onClick: function onClick(e) {
      return handleRegister(e);
    }
  }, "\u6CE8\u518C"));
};

/* harmony default export */ __webpack_exports__["default"] = (RegisterForm);

/***/ }),

/***/ "./src/jsx/ReplyForm.jsx":
/*!*******************************!*\
  !*** ./src/jsx/ReplyForm.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/config.js");






var ReplyForm = function ReplyForm(props) {
  var tid = props.tid,
      loadThread = props.loadThread;

  var reply =
  /*#__PURE__*/
  function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(body) {
      var res, result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_4__["HOST"], ":").concat(_config__WEBPACK_IMPORTED_MODULE_4__["PORT"], "/api/comments/").concat(tid), {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
              });

            case 3:
              res = _context.sent;
              _context.next = 6;
              return res.json();

            case 6:
              result = _context.sent;

              if (res.ok) {
                alert(result.message);
                loadThread();
                document.forms.replyForm.content.value = '';
              } else {
                alert(result.message);
              }

              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              alert(_context.t0.message);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));

    return function reply(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var handleReply =
  /*#__PURE__*/
  function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {
      var _JSON$parse, username, token, form, content, body;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              _context2.t0 = JSON;
              _context2.next = 4;
              return localStorage.getItem(_config__WEBPACK_IMPORTED_MODULE_4__["DOMAIN"]);

            case 4:
              _context2.t1 = _context2.sent;
              _JSON$parse = _context2.t0.parse.call(_context2.t0, _context2.t1);
              username = _JSON$parse.username;
              token = _JSON$parse.token;
              form = document.forms.replyForm;
              content = form.content.value;
              body = {
                username: username,
                token: token,
                content: content
              };
              reply(body);

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleReply(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    id: "replyForm",
    className: "p-3"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    controlId: "content"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, null, "\u56DE\u590D"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
    as: "textarea",
    rows: "3"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "primary",
    type: "submit",
    onClick: function onClick(e) {
      return handleReply(e);
    }
  }, "\u63D0\u4EA4"));
};

/* harmony default export */ __webpack_exports__["default"] = (ReplyForm);

/***/ }),

/***/ "./src/jsx/SettingForm.jsx":
/*!*********************************!*\
  !*** ./src/jsx/SettingForm.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./src/config.js");







var SettingForm = function SettingForm() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      settings = _useState2[0],
      setSettings = _useState2[1];

  var loadSettings =
  /*#__PURE__*/
  function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var storage, _JSON$parse, username, token, res, result;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return localStorage.getItem(_config__WEBPACK_IMPORTED_MODULE_5__["DOMAIN"]);

            case 3:
              storage = _context.sent;
              _JSON$parse = JSON.parse(storage), username = _JSON$parse.username, token = _JSON$parse.token;
              _context.next = 7;
              return fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_5__["HOST"], ":").concat(_config__WEBPACK_IMPORTED_MODULE_5__["PORT"], "/api/users/").concat(username), {
                method: 'GET'
              });

            case 7:
              res = _context.sent;
              _context.next = 10;
              return res.json();

            case 10:
              result = _context.sent;

              if (res.ok) {
                setSettings(result.data);
              } else {
                alert(result.message);
              }

              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](0);
              alert(_context.t0.message);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 14]]);
    }));

    return function loadSettings() {
      return _ref.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    loadSettings();
  }, []);

  var setting =
  /*#__PURE__*/
  function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(body) {
      var _JSON$parse2, username, token, description, formData, res, result;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.t0 = JSON;
              _context2.next = 4;
              return localStorage.getItem(_config__WEBPACK_IMPORTED_MODULE_5__["DOMAIN"]);

            case 4:
              _context2.t1 = _context2.sent;
              _JSON$parse2 = _context2.t0.parse.call(_context2.t0, _context2.t1);
              username = _JSON$parse2.username;
              token = _JSON$parse2.token;
              description = body.description;
              formData = new FormData();
              _context2.next = 12;
              return formData.append('username', username);

            case 12:
              _context2.next = 14;
              return formData.append('token', token);

            case 14:
              _context2.next = 16;
              return formData.append('description', description);

            case 16:
              _context2.next = 18;
              return formData.append('avatar', document.querySelector('#uploader').files[0]);

            case 18:
              _context2.next = 20;
              return fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_5__["HOST"], ":").concat(_config__WEBPACK_IMPORTED_MODULE_5__["PORT"], "/api/users"), {
                method: 'PATCH',
                body: formData
              });

            case 20:
              res = _context2.sent;
              _context2.next = 23;
              return res.json();

            case 23:
              result = _context2.sent;

              if (res.ok) {
                alert(result.message);
                loadSettings();
              } else {
                alert(result.message);
              }

              _context2.next = 30;
              break;

            case 27:
              _context2.prev = 27;
              _context2.t2 = _context2["catch"](0);
              alert(_context2.t2.message);

            case 30:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 27]]);
    }));

    return function setting(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleSetting = function handleSetting(e) {
    e.preventDefault();
    var form = document.forms.settingForm;
    var description = form.description.value;
    var body = {
      description: description
    };
    setting(body);
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    id: "settingForm"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    controlId: "description"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, null, "\u4E2A\u4EBA\u63CF\u8FF0"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "text",
    placeholder: "\u8BF7\u8F93\u5165\u4E2A\u4EBA\u63CF\u8FF0",
    defaultValue: settings.description
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    controlId: "uploader"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, null, "\u5934\u50CF"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: settings.avatar ? "/upload/".concat(settings.avatar) : '/img/avatar.png',
    alt: "\u5934\u50CF",
    className: "rounded img-thumbnail"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "file",
    placeholder: "\u8BF7\u4E0A\u4F20\u5934\u50CF"
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "primary",
    type: "submit",
    onClick: function onClick(e) {
      return handleSetting(e);
    }
  }, "\u786E\u5B9A"));
};

/* harmony default export */ __webpack_exports__["default"] = (SettingForm);

/***/ }),

/***/ "./src/jsx/SettingPage.jsx":
/*!*********************************!*\
  !*** ./src/jsx/SettingPage.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SettingForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SettingForm */ "./src/jsx/SettingForm.jsx");




var SettingPage = function SettingPage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "d-flex justify-content-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12,
    md: 6
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SettingForm__WEBPACK_IMPORTED_MODULE_2__["default"], null))));
};

/* harmony default export */ __webpack_exports__["default"] = (SettingPage);

/***/ }),

/***/ "./src/jsx/Thread.jsx":
/*!****************************!*\
  !*** ./src/jsx/Thread.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);



var TPart = function TPart(props) {
  var thread = props.thread;
  if (!thread.author) return null;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
    className: "rounded border p-3 mb-3 mt-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserCard, {
    author: thread.author
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Media"].Body, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContentCard, {
    floor: thread
  })));
};

var CPart = function CPart(props) {
  var comments = props.comments;
  var floors = comments.map(function (comment, idx) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Floor, {
      key: idx,
      comment: comment
    });
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, floors);
};

var Floor = function Floor(props) {
  var comment = props.comment;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
    className: "rounded border p-3 mb-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserCard, {
    author: comment.author
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Media"].Body, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContentCard, {
    floor: comment
  })));
};

var UserCard = function UserCard(props) {
  var author = props.author;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    width: 64,
    height: 64,
    className: "mr-3 img-thumbnail round",
    src: author.avatar ? "/upload/".concat(author.avatar) : '/img/avatar.png',
    alt: author.username
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", null, author.username));
};

var ContentCard = function ContentCard(props) {
  var floor = props.floor;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, floor.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, floor.content), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "d-flex justify-content-end text-muted"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, "\u53D1\u8868\u4E8E", ' ', new Date(floor.posttime).toLocaleString())), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "d-flex justify-content-end m-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, floor.author.description)));
};

var Thread = function Thread(props) {
  var thread = props.thread,
      comments = props.comments,
      loadThread = props.loadThread;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    loadThread();
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TPart, {
    thread: thread
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CPart, {
    comments: comments
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Thread);

/***/ }),

/***/ "./src/jsx/ThreadList.jsx":
/*!********************************!*\
  !*** ./src/jsx/ThreadList.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);




var Row = function Row(props) {
  var thread = props.thread;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/threads/".concat(thread._id)
  }, thread.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, thread.author.username), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, new Date(thread.posttime).toLocaleString()));
};

var ThreadList = function ThreadList(props) {
  var loadThreads = props.loadThreads,
      threads = props.threads;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    loadThreads();
  }, []);
  var rows = threads.map(function (thread, idx) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Row, {
      key: idx,
      thread: thread
    });
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    striped: true,
    bordered: true,
    hover: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "\u6807\u9898"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "\u4F5C\u8005"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "\u53D1\u5E03\u65F6\u95F4"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, rows));
};

/* harmony default export */ __webpack_exports__["default"] = (ThreadList);

/***/ }),

/***/ "./src/jsx/ThreadListPage.jsx":
/*!************************************!*\
  !*** ./src/jsx/ThreadListPage.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./App */ "./src/jsx/App.jsx");
/* harmony import */ var _PostButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PostButton */ "./src/jsx/PostButton.jsx");
/* harmony import */ var _ThreadList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ThreadList */ "./src/jsx/ThreadList.jsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../config */ "./src/config.js");
/* harmony import */ var _ThreadPage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ThreadPage */ "./src/jsx/ThreadPage.jsx");













var ThreadListTable = function ThreadListTable() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      threads = _useState2[0],
      setThreads = _useState2[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_App__WEBPACK_IMPORTED_MODULE_7__["userContext"]),
      auth = _useContext.auth;

  var loadThreads =
  /*#__PURE__*/
  function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res, result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_10__["HOST"], ":").concat(_config__WEBPACK_IMPORTED_MODULE_10__["PORT"], "/api/threads"), {
                method: 'GET'
              });

            case 3:
              res = _context.sent;
              _context.next = 6;
              return res.json();

            case 6:
              result = _context.sent;

              if (res.ok) {
                setThreads(result.data);
              } else {
                alert(result.message);
              }

              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              alert(_context.t0.message);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));

    return function loadThreads() {
      return _ref.apply(this, arguments);
    };
  }();

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_6__["Helmet"], {
    title: "\u5E16\u5B50\u5217\u8868"
  }), auth ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_PostButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    loadThreads: loadThreads
  }) : null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ThreadList__WEBPACK_IMPORTED_MODULE_9__["default"], {
    loadThreads: loadThreads,
    threads: threads
  }));
};

var ThreadListPage = function ThreadListPage() {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], {
    exact: true,
    path: "/threads",
    component: ThreadListTable
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], {
    exact: true,
    path: "/threads/:tid",
    component: _ThreadPage__WEBPACK_IMPORTED_MODULE_11__["default"]
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ThreadListPage);

/***/ }),

/***/ "./src/jsx/ThreadPage.jsx":
/*!********************************!*\
  !*** ./src/jsx/ThreadPage.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App */ "./src/jsx/App.jsx");
/* harmony import */ var _Thread__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Thread */ "./src/jsx/Thread.jsx");
/* harmony import */ var _ReplyForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ReplyForm */ "./src/jsx/ReplyForm.jsx");
/* harmony import */ var _ModifyButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ModifyButton */ "./src/jsx/ModifyButton.jsx");
/* harmony import */ var _DeleteButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DeleteButton */ "./src/jsx/DeleteButton.jsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../config */ "./src/config.js");













var ThreadPage = function ThreadPage(props) {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_App__WEBPACK_IMPORTED_MODULE_6__["userContext"]),
      user = _useContext.user,
      auth = _useContext.auth;

  var tid = props.match.params.tid;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      thread = _useState2[0],
      setThread = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),
      comments = _useState4[0],
      setComments = _useState4[1];

  var loadThread =
  /*#__PURE__*/
  function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res, result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_11__["HOST"], ":").concat(_config__WEBPACK_IMPORTED_MODULE_11__["PORT"], "/api/threads/").concat(tid));

            case 3:
              res = _context.sent;
              _context.next = 6;
              return res.json();

            case 6:
              result = _context.sent;

              if (res.ok) {
                setThread(result.data.thread);
                setComments(result.data.comments);
              } else {
                alert(result.message);
              }

              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              alert(_context.t0.message);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));

    return function loadThread() {
      return _ref.apply(this, arguments);
    };
  }();

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_5__["Helmet"], {
    title: thread.title
  }), thread.author && user.username === thread.author.username ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    className: "m-0"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"], {
    className: "ml-auto"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ModifyButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    tid: tid,
    loadThread: loadThread
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_DeleteButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    tid: tid
  }))) : null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Thread__WEBPACK_IMPORTED_MODULE_7__["default"], {
    tid: tid,
    thread: thread,
    comments: comments,
    loadThread: loadThread
  }), auth ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ReplyForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
    tid: tid,
    loadThread: loadThread
  }) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (ThreadPage);

/***/ }),

/***/ "./src/jsx/UserInfo.jsx":
/*!******************************!*\
  !*** ./src/jsx/UserInfo.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./src/config.js");







var ProfileInfo = function ProfileInfo(props) {
  var user = props.user;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Header, null, "\u4E2A\u4EBA\u4FE1\u606F"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Img, {
    variant: "top",
    src: user.avatar ? "/upload/".concat(user.avatar) : '/img/avatar.png',
    className: "rounded img-thumbnail"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Body, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Title, null, "\u7528\u6237\u540D"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Text, null, user.username), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Title, null, "\u4E2A\u4EBA\u63CF\u8FF0"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Text, null, user.description)));
};

var ThreadsInfo = function ThreadsInfo(props) {
  var threads = props.threads;
  var lines = threads.map(function (thread, idx) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ListGroup"].Item, {
      key: idx,
      className: "d-flex justify-content-between"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, thread.title), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("small", {
      className: "text-muted"
    }, new Date(thread.posttime).toLocaleString()));
  });
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Header, null, "\u53D1\u5E16\u4FE1\u606F"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ListGroup"], {
    variant: "flush"
  }, lines));
};

var UserInfo = function UserInfo(props) {
  var username = props.username;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      user = _useState2[0],
      setUser = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),
      threads = _useState4[0],
      setThreads = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var getUser =
    /*#__PURE__*/
    function () {
      var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_5__["HOST"], ":").concat(_config__WEBPACK_IMPORTED_MODULE_5__["PORT"], "/api/users/").concat(username), {
                  method: 'GET'
                });

              case 3:
                res = _context.sent;
                _context.next = 6;
                return res.json();

              case 6:
                result = _context.sent;

                if (res.ok) {
                  setUser(result.data);
                  setThreads(result.data.threads);
                }

                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                alert(_context.t0.message);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 10]]);
      }));

      return function getUser() {
        return _ref.apply(this, arguments);
      };
    }();

    getUser();
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    sm: 12,
    md: 4
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ProfileInfo, {
    user: user
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    sm: 12,
    md: 8
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ThreadsInfo, {
    threads: threads
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (UserInfo);

/***/ }),

/***/ "./src/model/Comment.js":
/*!******************************!*\
  !*** ./src/model/Comment.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User */ "./src/model/User.js");


var CommentSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  content: {
    type: String,
    required: true,
    trim: true
  },
  posttime: {
    type: Date,
    "default": Date.now()
  },
  author: {
    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.SchemaTypes.ObjectId,
    required: true,
    ref: 'User'
  },
  target: {
    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.SchemaTypes.ObjectId,
    required: true,
    ref: 'Thread'
  }
});
var Comment = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Comment', CommentSchema);
/* harmony default export */ __webpack_exports__["default"] = (Comment);

/***/ }),

/***/ "./src/model/Thread.js":
/*!*****************************!*\
  !*** ./src/model/Thread.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User */ "./src/model/User.js");


var ThreadSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true,
    trim: true
  },
  posttime: {
    type: Date,
    "default": Date.now()
  },
  author: {
    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.SchemaTypes.ObjectId,
    required: true,
    ref: 'User'
  }
});
var Thread = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Thread', ThreadSchema);
/* harmony default export */ __webpack_exports__["default"] = (Thread);

/***/ }),

/***/ "./src/model/User.js":
/*!***************************!*\
  !*** ./src/model/User.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Thread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Thread */ "./src/model/Thread.js");


var UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  avatar: String,
  description: {
    type: String,
    trim: true
  },
  token: String,
  threads: [{
    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.SchemaTypes.ObjectId,
    ref: 'Thread'
  }]
});
var User = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('User', UserSchema);
/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _jsx_App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./jsx/App */ "./src/jsx/App.jsx");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! socket.io */ "socket.io");
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _api_users__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./api/users */ "./src/api/users.js");
/* harmony import */ var _api_threads__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./api/threads */ "./src/api/threads.js");












var DB = 'mongodb://localhost:27017/bbs';

var template = function template(markup, helmet) {
  return "<!DOCTYPE html>\n    <html>\n      <head>\n        ".concat(helmet.meta.toString(), "\n        ").concat(helmet.title.toString(), "\n        <link rel=\"stylesheet\" href=\"/css/bootstrap.min.css\"/>\n      </head>\n      <body>\n        <div id=\"root\">").concat(markup, "</div>\n        <script src=\"/client.js\" async></script>\n      </body>\n    </html>");
};

var serverRender = function serverRender(req, res, next) {
  var markup = react_dom_server__WEBPACK_IMPORTED_MODULE_1___default.a.renderToString(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["StaticRouter"], {
    location: req.url,
    context: {}
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_jsx_App__WEBPACK_IMPORTED_MODULE_7__["default"], null)));
  var helmet = react_helmet__WEBPACK_IMPORTED_MODULE_6__["Helmet"].renderStatic();
  res.status(200).send(template(markup, helmet));
  next();
};

mongoose__WEBPACK_IMPORTED_MODULE_3___default.a.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true
}, function (err) {
  if (err) throw err;
  console.log('已连接到数据库...');
  var app = express__WEBPACK_IMPORTED_MODULE_4___default()();
  app.use(body_parser__WEBPACK_IMPORTED_MODULE_5___default.a.json());
  app.use(express__WEBPACK_IMPORTED_MODULE_4___default.a["static"]('static'));
  Object(_api_users__WEBPACK_IMPORTED_MODULE_10__["default"])(app);
  Object(_api_threads__WEBPACK_IMPORTED_MODULE_11__["default"])(app);
  app.use(serverRender);
  var server = http__WEBPACK_IMPORTED_MODULE_8___default.a.Server(app);
  var io = socket_io__WEBPACK_IMPORTED_MODULE_9___default()(server);
  server.listen(3000);
  var comments = [];
  io.on('connection', function (socket) {
    socket.on('join', function (data) {
      var rid = data.rid,
          username = data.username;
      socket.join(rid);
      io.to(rid).emit('system', "".concat(username, "\u8FDB\u5165\u4E86\u623F\u95F4"));
      io.to(rid).emit('comments', comments);
    });
    socket.on('comments', function (data) {
      var comment = data.comment,
          username = data.username,
          rid = data.rid;
      comments.unshift({
        comment: comment,
        username: username,
        posttime: Date()
      });
      if (comments.length > 30) comments.pop();
      io.to(rid).emit('comments', comments);
    });
  });
});

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/helpers/slicedToArray":
/*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/slicedToArray" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("multer");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-router-bootstrap":
/*!*****************************************!*\
  !*** external "react-router-bootstrap" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-bootstrap");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map