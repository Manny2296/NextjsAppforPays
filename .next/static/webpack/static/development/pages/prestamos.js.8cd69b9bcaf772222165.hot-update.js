webpackHotUpdate("static\\development\\pages\\prestamos.js",{

/***/ "./actions/userAction.js":
/*!*******************************!*\
  !*** ./actions/userAction.js ***!
  \*******************************/
/*! exports provided: _createUser, _updateUser, _deleteUser, _getUserbyid, _updateImageUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_createUser", function() { return _createUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_updateUser", function() { return _updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_deleteUser", function() { return _deleteUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getUserbyid", function() { return _getUserbyid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_updateImageUser", function() { return _updateImageUser; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__);




function _createUser(data) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()('http://localhost:8080/users/', {
    method: 'POST',
    body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(function (res) {
    console.log("Reponse" + _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(res));
    return res;
  })["catch"](function (err) {
    return err;
  });
}
function _updateUser(data) {
  //  console.log("toPut> " + JSON.stringify(data))
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()('http://localhost:8080/users/', {
    method: 'PUT',
    body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(function (res) {
    console.log("Reponse" + _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(res));
    return res;
  })["catch"](function (err) {
    return err;
  });
}
function _deleteUser(data) {
  console.log('datadelete' + data.idusuario);
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()('http://localhost:8080/users/' + data.idusuario, {
    method: 'DELETE',
    body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(function (res) {
    //console.log("Reponse" + JSON.stringify(res))
    return res;
  })["catch"](function (err) {
    return err;
  });
}
function _getUserbyid(_x) {
  return _getUserbyid2.apply(this, arguments);
}

function _getUserbyid2() {
  _getUserbyid2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
    var res, responseJson;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('getUserData>' + data);
            _context.next = 3;
            return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()('http://localhost:8080/users/' + data);

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            responseJson = _context.sent;
            console.log("return" + _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(responseJson));
            return _context.abrupt("return", responseJson);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getUserbyid2.apply(this, arguments);
}

function _updateImageUser(_x2, _x3) {
  return _updateImageUser2.apply(this, arguments);
}

function _updateImageUser2() {
  _updateImageUser2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(file, id) {
    var formData;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            formData = new FormData();
            formData.append("file", file);
            formData.append('name', 'nametest');
            formData.append('description', 'some value test'); // console.log(this.state.selectedFile);
            //console.log('http://localhost:8080/users/'+this.state.idusuario+ '/avatar')

            return _context2.abrupt("return", isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()('http://localhost:8080/users/' + id + '/avatar', {
              method: 'POST',
              body: formData
            }).then(function (res) {
              //console.log("Reponse" + res)
              return res;
            })["catch"](function (err) {
              return err;
            }));

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _updateImageUser2.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js":
/*!***************************************************************!*\
  !*** ./node_modules/isomorphic-fetch/fetch-npm-browserify.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(/*! whatwg-fetch */ "./node_modules/next/dist/build/polyfills/fetch/whatwg-fetch.js");
module.exports = self.fetch.bind(self);


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/fetch/whatwg-fetch.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/fetch/whatwg-fetch.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* globals self */exports.Headers=self.Headers;exports.Request=self.Request;exports.Response=self.Response;exports.fetch=self.fetch;

/***/ }),

/***/ "./pages/prestamos.js":
/*!****************************!*\
  !*** ./pages/prestamos.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_Table_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Table.scss */ "./components/Table.scss");
/* harmony import */ var _components_Table_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_components_Table_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _actions_userAction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../actions/userAction */ "./actions/userAction.js");






var _jsxFileName = "C:\\Users\\Riano\\Repo\\PagosApp\\pages\\prestamos.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;








var pagos =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(pagos, _Component);

  function pagos(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, pagos);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(pagos).call(this, props));
    _this.state = {
      queryval: _this.props.queryval,
      userdata: [],
      noDocument: ''
    };
    _this._handleNoDocChange = _this._handleNoDocChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(pagos, [{
    key: "_handleNoDocChange",
    value: function _handleNoDocChange(event) {
      this.setState({
        noDocument: event.target.value
      });
    }
  }, {
    key: "_handleLoadUser",
    value: function _handleLoadUser() {}
  }, {
    key: "_renderbasedonQueryvalue",
    value: function _renderbasedonQueryvalue() {
      var _this2 = this;

      if (this.state.queryval.user == undefined) {
        return __jsx("div", {
          className: "divPrestamos",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Box"], {
          className: "containerDataUser",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["TextField"], {
          value: this.state.noDocument,
          onChange: this._handleNoDocChange,
          label: "Numero de Documento",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Button"], {
          variant: "contained",
          color: "primary",
          onClick: function onClick() {
            return console.log('valor ' + _this2.state.noDocument);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, "Consultar ")), __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Box"], {
          className: "containerDataUser",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, "dddd"));
      } else return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "Render with value ", query);
    }
  }, {
    key: "_doclick",
    value: function _doclick() {
      var href = "/prestamos?user=15155";
      next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push(href, href, {
        shallow: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), this._renderbasedonQueryvalue());
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var query = _ref.query;
      console.log("valor" + query.user);

      if (query.user == undefined) {
        console.log("Render normal");
      } else console.log("Render based on user " + query.user);

      return {
        queryval: query
      };
    }
  }]);

  return pagos;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (pagos);

/***/ })

})
//# sourceMappingURL=prestamos.js.8cd69b9bcaf772222165.hot-update.js.map