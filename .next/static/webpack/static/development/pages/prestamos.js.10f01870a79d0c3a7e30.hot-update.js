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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_Table_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Table.scss */ "./components/Table.scss");
/* harmony import */ var _components_Table_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_components_Table_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _actions_userAction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../actions/userAction */ "./actions/userAction.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/esm/CardActionArea/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");






var _jsxFileName = "C:\\Users\\Riano\\Repo\\PagosApp\\pages\\prestamos.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;















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
      dataExist: false,
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
      var _this2 = this;

      return Object(_actions_userAction__WEBPACK_IMPORTED_MODULE_13__["_getUserbyid"])(this.state.noDocument).then(function (res) {
        _this2.setState({
          userdata: res[0],
          dataExist: true
        });

        _this2._doclick();
      })["catch"](function (error) {
        return console.log(error);
      }); // console.log('get user> ' + data)
    }
  }, {
    key: "_rendercardPrestamos",
    value: function _rendercardPrestamos() {
      if (this.state.dataExist) {
        return this.state.userdata.prestamos.map(function (prestamo) {
          return (// console.log("valor prestamo" + prestamo.prestamo_valor),
            __jsx("div", {
              className: useStyles.card_div_cotainer,
              key: prestamo.idprestamo,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 54
              },
              __self: this
            }, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_14__["default"], {
              className: useStyles.card,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 55
              },
              __self: this
            }, __jsx(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_15__["default"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 56
              },
              __self: this
            }, __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_18__["default"], {
              className: useStyles.media,
              image: "/static/images/cards/contemplative-reptile.jpg",
              title: "Contemplative Reptile",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 57
              },
              __self: this
            }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_17__["default"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 62
              },
              __self: this
            }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_19__["default"], {
              gutterBottom: true,
              variant: "h5",
              component: "h2",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 63
              },
              __self: this
            }, "Prestamo No ", prestamo.idprestamo), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_19__["default"], {
              variant: "body2",
              color: "textSecondary",
              component: "p",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 66
              },
              __self: this
            }, "Valor Prestamo : ", prestamo.prestamo_valor, " ", __jsx("br", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 67
              },
              __self: this
            }), "No de Cuotas :", prestamo.prestamo_cuotas))), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_16__["default"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 72
              },
              __self: this
            }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Button"], {
              size: "small",
              color: "primary",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 73
              },
              __self: this
            }, "Share"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Button"], {
              size: "small",
              color: "primary",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 76
              },
              __self: this
            }, "Learn More"))))
          );
        });
      }
    }
  }, {
    key: "_renderbasedonQueryvalue",
    value: function _renderbasedonQueryvalue() {
      console.log('RENDERRRS'); //console.log("fuck"+ this.state.userdata.name)
      //console.log("Data " +  this.state.userdata.prestamos)

      if (this.state.queryval.user == undefined) {
        return __jsx("div", {
          className: "divPrestamos",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Box"], {
          className: "containerDataUser",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["TextField"], {
          value: this.state.noDocument,
          onChange: this._handleNoDocChange,
          label: "Numero de Documento",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Button"], {
          variant: "contained",
          color: "primary",
          onClick: this._handleLoadUser.bind(this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }, "Consultar ")), __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Box"], {
          className: "containerDataUser",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        }, this._rendercardPrestamos()));
      } //{}  <label>{this.state.userdata.name}</label>
      else Object(_actions_userAction__WEBPACK_IMPORTED_MODULE_13__["_getUserbyid"])(this.state.noDocument).then(function (res) {})["catch"](function (error) {
          return console.log(error);
        });

      return __jsx("div", {
        className: "divPrestamos",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Box"], {
        className: "containerDataUser",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["TextField"], {
        value: this.state.noDocument,
        onChange: this._handleNoDocChange,
        label: "Numero de Documento",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        variant: "contained",
        color: "primary",
        onClick: this._handleLoadUser.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, "Consultar ")), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Box"], {
        className: "containerDataUser",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, this._rendercardPrestamos()));
    }
  }, {
    key: "_doclick",
    value: function _doclick() {
      var href = "/prestamos?user=" + this.state.noDocument;
      next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push(href, href, {
        shallow: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      //{}
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }), this._renderbasedonQueryvalue());
    }
  }]);

  return pagos;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

pagos.getInitialProps = function (_ref) {
  var query = _ref.query;
  console.log("valor" + query.user);

  if (query.user == undefined) {
    console.log("Render normal");
    return {
      queryval: query
    };
  } else {
    console.log("Render based on user " + query.user);
    return {
      queryval: query
    };
  }
};

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  },
  card_div_cotainer: {
    margin: "5px"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (pagos);

/***/ })

})
//# sourceMappingURL=prestamos.js.10f01870a79d0c3a7e30.hot-update.js.map