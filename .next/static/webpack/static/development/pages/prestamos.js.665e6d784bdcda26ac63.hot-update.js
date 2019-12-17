webpackHotUpdate("static\\development\\pages\\prestamos.js",{

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
    value: function _handleLoadUser() {
      var data = Object(_actions_userAction__WEBPACK_IMPORTED_MODULE_12__["_getUserbyid"])(this.state.noDocument);

      console.log('get user> ' + data);
      this.setState({
        userdata: data
      });
    }
  }, {
    key: "_renderbasedonQueryvalue",
    value: function _renderbasedonQueryvalue() {
      if (this.state.queryval.user == undefined) {
        return __jsx("div", {
          className: "divPrestamos",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Box"], {
          className: "containerDataUser",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["TextField"], {
          value: this.state.noDocument,
          onChange: this._handleNoDocChange,
          label: "Numero de Documento",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Button"], {
          variant: "contained",
          color: "primary",
          onClick: this._handleLoadUser.bind(this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, "Consultar ")), __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Box"], {
          className: "containerDataUser",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, this.state.userdata.name));
      } else return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
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
          lineNumber: 73
        },
        __self: this
      }, __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
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
//# sourceMappingURL=prestamos.js.665e6d784bdcda26ac63.hot-update.js.map