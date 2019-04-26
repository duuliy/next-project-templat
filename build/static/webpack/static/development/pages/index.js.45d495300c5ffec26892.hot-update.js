webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./utils/env.js":
/*!**********************!*\
  !*** ./utils/env.js ***!
  \**********************/
/*! exports provided: baseUrl, routerMode, baseImgPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseUrl", function() { return baseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerMode", function() { return routerMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseImgPath", function() { return baseImgPath; });
// * baseUrl: 域名地址
// * routerMode: 路由模式
// * baseImgPath: 图片存放地址
var baseUrl = '';
var routerMode = 'hash';
var baseImgPath; // if (process.env.NODE_ENV == 'development') {
// 	baseUrl = '';
//     baseImgPath = '/img/';
// }else{
// 	baseUrl = '//elm.cangdu.org';
//     baseImgPath = '//elm.cangdu.org/img/';
// }



/***/ }),

/***/ "./utils/fetch.js":
/*!************************!*\
  !*** ./utils/fetch.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _env_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./env.js */ "./utils/env.js");


/*
* @Author: duuliy 
* @Date: 2018-11-15 11:17:11 
* @Last Modified by: duuliy
* @Last Modified time: 2018-11-15 11:17:11 
*/
 // import { getToken } from './user.js'

 // import qs from 'qs'

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  var error = new Error(response.statusText);
  error.response = response;
  throw error;
} //测试环境，服务器环境，线上环境
// let baseUrl = 'http://39.108.82.150:81/index.php/api/';
// let baseUrl="";
// if (process.server) {
//     baseURL = `http://${process.env.HOST || '192.168.189.249'}:${process.env.PORT || 8887}`
// }
// if (!window.Promise) {
//     window.Promise = Promise;
// }
// const token ='Bearer '+getToken();


var token = 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImp0aSI6IjgyMDAwYmM2LTI0OTMtNDljNy1hOGQwLTU5MTZkZWY5ODEzMSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiYjc3OTNjODMtYmNhMy00NWM3LTkyNjktNzcwN2ZhMTM5ZjRlIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6ImFkbWluIiwiQXNwTmV0LklkZW50aXR5LlNlY3VyaXR5U3RhbXAiOiJGVU9QMlpZQ0tPNFNDUzRXQ0JBREc1S1RERktLTkpNWiIsIkFwcCI6IuS6keivkemAmiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJBZG1pbmlzdHJhdG9ycyIsIkN1c3RvbWVyQXBwcm92ZSIsIkNvbXBhbnlFbXBsb3llZSJdLCJDbGFpbVR5cGVfQXBwVXNlcklkXzQ0RjhFQzk2LUQ0MzYtNDc3My1BRDQxLTJFQThCMEUxMThEOCI6IjQ1ZmEwODVmLTcxNzgtNDY0MC1iYjczLTA2ZGMwZTEwNjI3YSIsImV4cCI6MTU0OTA5NjQ0OSwiaXNzIjoiaHR0cHM6Ly93d3cuY3RjNjY2LmNvbSIsImF1ZCI6Imh0dHBzOi8vd3d3LmN0YzY2Ni5jb20ifQ.1wnLGiJAwzjv2T-mQsd9y37rQkIhX2p9U85id5T4iR0';
/**
* Requests a URL, returning a promise.
*
* @param  {string} type       The type we want to request
* @param  {string} url       The URL we want to request
* @param  {object} [params] The options we want to pass to "fetch"
* @return {object}           An object containing either "data" or "err"
*/

var fetch = function fetch(method, url, data) {
  // const token = 'Bearer '+getToken();
  if (method === "get") {
    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(_env_js__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + url, {
        headers: {//  'Authorization': token
        }
      }).then(checkStatus).then(function (response) {
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  } else if (method === "delete") {
    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resovle, reject) {
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(_env_js__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + url, {
        data: data,
        headers: {//  'Authorization': token
        }
      }).then(checkStatus).then(function (response) {
        resovle(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  } else {
    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resovle, reject) {
      axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method: method,
        url: _env_js__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + url,
        data: data,
        headers: {//  'Authorization': token
        }
      }).then(checkStatus).then(function (response) {
        resovle(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (fetch);

/***/ })

})
//# sourceMappingURL=index.js.45d495300c5ffec26892.hot-update.js.map