webpackHotUpdate("static\\development\\pages\\prestamos.js",{

/***/ "./pages/prestamos.js":
/*!****************************!*\
  !*** ./pages/prestamos.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_Table_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Table.scss */ "./components/Table.scss");
/* harmony import */ var _components_Table_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_components_Table_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _actions_userAction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../actions/userAction */ "./actions/userAction.js");







var _jsxFileName = "C:\\Users\\Riano\\Repo\\PagosApp\\pages\\prestamos.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;








var pagos =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(pagos, _Component);

  function pagos(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, pagos);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(pagos).call(this, props));
    _this.state = {
      queryval: _this.props.queryval,
      userdata: [],
      noDocument: ''
    };
    _this._handleNoDocChange = _this._handleNoDocChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(pagos, [{
    key: "_handleNoDocChange",
    value: function _handleNoDocChange(event) {
      this.setState({
        noDocument: event.target.value
      });
    }
  }, {
    key: "_handleLoadUser",
    value: function _handleLoadUser() {
      var _this2 = this;

      return Object(_actions_userAction__WEBPACK_IMPORTED_MODULE_13__["_getUserbyid"])(this.state.noDocument).then(function (res) {
        _this2.setState({
          userdata: res[0]
        });
      })["catch"](function (error) {
        return console.log(error);
      }); // console.log('get user> ' + data)
    }
  }, {
    key: "_renderbasedonQueryvalue",
    value: function _renderbasedonQueryvalue() {
      console.log('RENDERRRS');
      console.log("fuck" + _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(this.state.userdata));

      if (this.state.queryval.user == undefined) {
        return __jsx("div", {
          className: "divPrestamos",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Box"], {
          className: "containerDataUser",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["TextField"], {
          value: this.state.noDocument,
          onChange: this._handleNoDocChange,
          label: "Numero de Documento",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Button"], {
          variant: "contained",
          color: "primary",
          onClick: this._handleLoadUser.bind(this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, "Consultar ")), __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Box"], {
          className: "containerDataUser",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, __jsx("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, this.state.userdata.name)));
      } else return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "Render with value ", query);
    }
  }, {
    key: "_doclick",
    value: function _doclick() {
      var href = "/prestamos?user=15155";
      next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push(href, href, {
        shallow: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
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
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (pagos);

/***/ })

})
//# sourceMappingURL=prestamos.js.140e856d8e92d7dc1e4f.hot-update.js.map