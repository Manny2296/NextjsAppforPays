webpackHotUpdate("static\\development\\pages\\usuarios.js",{

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
            return _context.abrupt("return", responseJson);

          case 8:
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

/***/ })

})
//# sourceMappingURL=usuarios.js.c6ba7447edf3faf1e15a.hot-update.js.map