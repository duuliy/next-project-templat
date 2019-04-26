webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./models/home.js":
/*!************************!*\
  !*** ./models/home.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api */ "./services/api.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  namespace: 'Home',
  state: {
    admittanceBody: {}
  },
  effects: {
    getAdmittanceList:
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function getAdmittanceList(_ref, _ref2) {
      var payload, call, put, data;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function getAdmittanceList$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              payload = _ref.payload;
              call = _ref2.call, put = _ref2.put;
              _context.next = 4;
              return call(asset.getAdmittanceList, payload);

            case 4:
              data = _context.sent;
              _context.next = 7;
              return put({
                type: 'save',
                payload: {
                  admittanceBody: data
                }
              });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, getAdmittanceList);
    })
  },
  reducers: {
    save: function save(state, action) {
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, action.payload);
    }
  }
});

/***/ })

})
//# sourceMappingURL=index.js.ff5bb67717a9d3f62f1f.hot-update.js.map