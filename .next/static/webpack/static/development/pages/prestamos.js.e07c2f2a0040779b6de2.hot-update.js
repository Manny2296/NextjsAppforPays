webpackHotUpdate("static\\development\\pages\\prestamos.js",{

/***/ "./pages/prestamos.js":
/*!****************************!*\
  !*** ./pages/prestamos.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_Table_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Table.scss */ "./components/Table.scss");
/* harmony import */ var _components_Table_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_components_Table_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _actions_userAction__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../actions/userAction */ "./actions/userAction.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/esm/CardActionArea/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "./node_modules/@material-ui/core/esm/CardHeader/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "./node_modules/@material-ui/icons/MoreVert.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_25__);








var _jsxFileName = "C:\\Users\\Riano\\Repo\\NextjsAppforPays\\pages\\prestamos.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;


















var stylebackbutton = {
  background: 'linear-gradient(45deg, #409946 30%, #A5D6A7 90%)'
};

var pagos =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(pagos, _Component);

  function pagos(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, pagos);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(pagos).call(this, props));
    _this.state = {
      queryval: _this.props.queryval,
      userdata: _this.props.userdataprops,
      dataExist: _this.props.dataexistprops,
      noDocument: _this.props.queryval
    };
    _this._handleNoDocChange = _this._handleNoDocChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(pagos, [{
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

      if (this.state.noDocument != '') {
        console.log("entre");
        return Object(_actions_userAction__WEBPACK_IMPORTED_MODULE_15__["_getUserbyid"])(this.state.noDocument).then(function (res) {
          if (res !== null) {
            _this2.setState({
              userdata: res[0],
              dataExist: true
            });

            _this2._doclick();
          }
        })["catch"](function (error) {
          return console.log(error);
        });
      } else {
        console.log("else entre");
        return this.setState({
          userdata: [],
          dataExist: false
        }); // this._doclick()
      }
    } // console.log('get user> ' + data)

  }, {
    key: "_rendercardPrestamos",
    value: function _rendercardPrestamos() {
      //  console.log(this.state.userdata + '---------->')
      if (this.state.dataExist) {
        if (this.state.userdata !== undefined && this.state.userdata.prestamos !== null) return this.state.userdata.prestamos.map(function (prestamo) {
          return (// console.log("valor prestamo" + prestamo.prestamo_valor),
            __jsx("div", {
              className: useStyles.card_div_cotainer,
              key: prestamo.idprestamo,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 80
              },
              __self: this
            }, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_16__["default"], {
              className: useStyles.card,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 81
              },
              __self: this
            }, __jsx(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_23__["default"], {
              avatar: __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_22__["default"], {
                "aria-label": "recipe",
                style: {
                  backgroundColor: "rgb(254, 107, 139)"
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 86
                },
                __self: this
              }, "P", prestamo.idprestamo)
              /*action={
               <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }*/
              ,
              title: "Prestamo No: " + prestamo.idprestamo,
              subheader: "Fecha: " + prestamo.fecha_prestamo,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 83
              },
              __self: this
            }), __jsx(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_17__["default"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 103
              },
              __self: this
            }, __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_20__["default"], {
              className: useStyles.media,
              image: "../../components/image/",
              title: "Contemplative Reptile",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 104
              },
              __self: this
            }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_19__["default"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 109
              },
              __self: this
            }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_21__["default"], {
              gutterBottom: true,
              variant: "h5",
              component: "h2",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 110
              },
              __self: this
            }, "Prestamo No ", prestamo.idprestamo), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_21__["default"], {
              variant: "body2",
              color: "textSecondary",
              component: "p",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 113
              },
              __self: this
            }, "Valor Prestamo : ", prestamo.prestamo_valor, " ", __jsx("br", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 114
              },
              __self: this
            }), "No de Cuotas :", prestamo.prestamo_cuotas, " ", __jsx("br", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 115
              },
              __self: this
            }), "Interes aplicado : ", prestamo.prestamo_tax))), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_18__["default"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 120
              },
              __self: this
            }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Button"], {
              size: "small",
              color: "primary",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 121
              },
              __self: this
            }, "Ver detalles"))))
          );
        });
      }
    }
  }, {
    key: "_renderbasedonQueryvalue",
    value: function _renderbasedonQueryvalue() {
      //  console.log('RENDERRRS'+this.state.queryval)
      //console.log("fuck"+ this.state.userdata.name)
      //console.log("Data " +  this.state.userdata.prestamos)
      if (this.state.queryval == undefined) {
        return __jsx("div", {
          className: "divPrestamos",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137
          },
          __self: this
        }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Box"], {
          className: "containerDataUser",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          },
          __self: this
        }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["TextField"], {
          value: this.state.noDocument,
          onChange: this._handleNoDocChange,
          label: "Numero de Documento",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140
          },
          __self: this
        }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Button"], {
          variant: "contained",
          style: stylebackbutton,
          onClick: this._handleLoadUser.bind(this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          },
          __self: this
        }, "Consultar ")), __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Box"], {
          className: "containerDataUser",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          },
          __self: this
        }, this._rendercardPrestamos()));
      } //{}  <label>{this.state.userdata.name}</label>
      else //console.log('RENDERRRS BASADO EN USUARIO OK')
        return __jsx("div", {
          className: "divPrestamos",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          },
          __self: this
        }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Box"], {
          className: "containerDataUser",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          },
          __self: this
        }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["TextField"], {
          value: this.state.noDocument,
          onChange: this._handleNoDocChange,
          label: "Numero de Documento",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          },
          __self: this
        }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Button"], {
          variant: "contained",
          style: stylebackbutton,
          onClick: this._handleLoadUser.bind(this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 161
          },
          __self: this
        }, "Consultar ")), __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163
          },
          __self: this
        }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Box"], {
          className: "containerDataUser",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 164
          },
          __self: this
        }, this._rendercardPrestamos()));
    }
  }, {
    key: "_doclick",
    value: function _doclick() {
      var href = "/prestamos?user=" + this.state.noDocument;
      next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push(href, href, {
        shallow: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }), this._renderbasedonQueryvalue());
    }
  }]);

  return pagos;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

pagos.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var query, queryval, userdataprops, dataexistprops, resp;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref.query;
            userdataprops = [];
            dataexistprops = false;

            if (!(query.user == undefined)) {
              _context.next = 7;
              break;
            }

            // console.log("Render normal")
            queryval = undefined, userdataprops = [], dataexistprops = false;
            _context.next = 13;
            break;

          case 7:
            _context.next = 9;
            return Object(_actions_userAction__WEBPACK_IMPORTED_MODULE_15__["_getUserbyid"])(query.user);

          case 9:
            resp = _context.sent;
            queryval = query.user;
            userdataprops = resp[0];
            dataexistprops = true; //console.log("!Jso" + JSON.stringify(resp))

          case 13:
            return _context.abrupt("return", {
              queryval: queryval,
              userdataprops: userdataprops,
              dataexistprops: dataexistprops
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["makeStyles"])(function (theme) {
  return {
    card: {
      maxWidth: 345
    },
    media: {
      height: 140
    },
    card_div_cotainer: {
      margin: "5px"
    },
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500]
    },
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1)
      }
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (pagos);

/***/ })

})
//# sourceMappingURL=prestamos.js.e07c2f2a0040779b6de2.hot-update.js.map