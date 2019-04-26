webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next-server/dist/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../config/config */ "./config/config.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var dva_no_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! dva-no-router */ "./node_modules/dva-no-router/index.js");
/* harmony import */ var dva_no_router__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(dva_no_router__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../services/api */ "./services/api.js");
/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../utils/store */ "./utils/store.js");









var _jsxFileName = "C:\\Users\\Antiy\\Desktop\\next-demo\\pages\\index.jsx";



 // import UserList from "./UserList";
// import Head from "../components/common/HeadView/index";







var UserList = next_dynamic__WEBPACK_IMPORTED_MODULE_11___default()(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("styles"), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./UserList */ "./pages/UserList/index.jsx"));
}, {
  ssr: false //禁止使用ssr
  ,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./UserList */ "./pages/UserList/index.jsx")];
    },
    modules: ["./UserList"]
  }
}); //懒加载

var app = dva_no_router__WEBPACK_IMPORTED_MODULE_16___default()();

var Home =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Home, _PureComponent);

  function Home() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Home)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "routGo", function (linkA) {
      return function (linkB) {
        return function (linkC) {
          next_router__WEBPACK_IMPORTED_MODULE_15___default.a.push({
            pathname: linkA + linkB + linkC,
            query: {
              name: 'Zeit'
            },
            shallow: true //  这样不会执行 getInitialProps

          }); //Router.prefetch('/about')
        };
      };
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Home, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2148941057" + " " + 'app',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", {
        className: "jsx-2148941057",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "\u9996\u9875"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        type: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "Hello world!"), this.props.userAgent, " ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "jsx-2148941057",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        style: {
          width: 50
        },
        src: _config_config__WEBPACK_IMPORTED_MODULE_13___default.a.logoPath,
        alt: "",
        className: "jsx-2148941057",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(UserList, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: {
          pathname: '/UserList',
          query: {
            name: 'Zeit'
          }
        },
        prefetch: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        style: {
          color: 'blue',
          cursor: 'pointer'
        },
        className: "jsx-2148941057",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "UserList")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        onClick: function onClick() {
          _this2.routGo('/')('organi')('zation');
        },
        className: "jsx-2148941057",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "\u53BB\u7EC4\u7EC7\u673A\u6784"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "2148941057",
        __self: this
      }, "h1.jsx-2148941057{color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50aXlcXERlc2t0b3BcXG5leHQtZGVtb1xccGFnZXNcXGluZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRW9CLEFBR3VCLFVBQ1oiLCJmaWxlIjoiQzpcXFVzZXJzXFxBbnRpeVxcRGVza3RvcFxcbmV4dC1kZW1vXFxwYWdlc1xcaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5cclxuXHJcbi8vIGltcG9ydCBVc2VyTGlzdCBmcm9tIFwiLi9Vc2VyTGlzdFwiO1xyXG4vLyBpbXBvcnQgSGVhZCBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tb24vSGVhZFZpZXcvaW5kZXhcIjtcclxuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ1wiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBkdmEgZnJvbSAnZHZhJztcclxuaW1wb3J0IHtcclxuICBTaWduT3V0QXN5bmNcclxufSBmcm9tICcuLi9zZXJ2aWNlcy9hcGknO1xyXG5pbXBvcnQgV2l0aER2YSBmcm9tICcuLi91dGlscy9zdG9yZSc7XHJcblxyXG5jb25zdCBVc2VyTGlzdCA9IGR5bmFtaWMoaW1wb3J0KCcuL1VzZXJMaXN0Jykse1xyXG4gIHNzcjpmYWxzZSAvL+emgeatouS9v+eUqHNzclxyXG59KSAgLy/mh5LliqDovb1cclxuXHJcbmNvbnN0IGFwcCA9IGR2YSgpO1xyXG5jbGFzcyBIb21lIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XHJcblxyXG4gIC8v57G75Ly8bnV4dOeahGFzeW5jRGF0Ye+8jOS7peWPiuWOn+eQhumDveaYr+S4gOagt1xyXG4gIC8v5rOo5oSP77yaZ2V0SW5pdGlhbFByb3Bz5bCG5LiN6IO95L2/55So5Zyo5a2Q57uE5Lu25Lit44CC5Y+q6IO95L2/55So5ZyocGFnZXPpobXpnaLkuK3jgIJcclxuICAvL+WPguaVsOWmguS4i++8mlxyXG4gIC8vcGF0aG5hbWUgLSBVUkwg55qEIHBhdGgg6YOo5YiGXHJcbiAgLy9xdWVyeSAtIFVSTCDnmoQgcXVlcnkg6YOo5YiG77yM5bm26KKr6Kej5p6Q5oiQ5a+56LGhXHJcbiAgLy9hc1BhdGggLSDmmL7npLrlnKjmtY/op4jlmajkuK3nmoTlrp7pmYXot6/lvoTvvIjljIXlkKvmn6Xor6Lpg6jliIbvvInvvIzkuLpTdHJpbmfnsbvlnotcclxuICAvL3JlcSAtIEhUVFAg6K+35rGC5a+56LGhICjlj6rmnInmnI3liqHlmajnq6/mnIkpXHJcbiAgLy9yZXMgLSBIVFRQIOi/lOWbnuWvueixoSAo5Y+q5pyJ5pyN5Yqh5Zmo56uv5pyJKVxyXG4gIC8vanNvblBhZ2VSZXMgLSDojrflj5bmlbDmja7lk43lupTlr7nosaEgKOWPquacieWuouaIt+err+aciSlcclxuICAvL2VyciAtIOa4suafk+i/h+eoi+S4reeahOS7u+S9lemUmeivr1xyXG5cclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxIH0pIHtcclxuICAgIGNvbnN0IHVzZXJBZ2VudCA9IHJlcSA/IHJlcS5oZWFkZXJzWyd1c2VyLWFnZW50J10gOiBuYXZpZ2F0b3IudXNlckFnZW50XHJcbiAgICByZXR1cm4geyB1c2VyQWdlbnQgfVxyXG4gIH1cclxuXHJcbiAgcm91dEdvPShsaW5rQSk9PihsaW5rQik9PihsaW5rQyk9PntcclxuICAgIFJvdXRlci5wdXNoKFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aG5hbWU6IGxpbmtBK2xpbmtCK2xpbmtDLFxyXG4gICAgICAgIHF1ZXJ5OiB7IG5hbWU6ICdaZWl0JyB9LFxyXG4gICAgICAgICBzaGFsbG93OiB0cnVlICAvLyAg6L+Z5qC35LiN5Lya5omn6KGMIGdldEluaXRpYWxQcm9wc1xyXG4gICAgICB9KVxyXG5cclxuICAgICAgLy9Sb3V0ZXIucHJlZmV0Y2goJy9hYm91dCcpXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcHAnPlxyXG4gICAgICAgICB7LyogPEhlYWQvPiAqL31cclxuICAgICAgICA8aDE+6aaW6aG1PC9oMT5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9J3ByaW1hcnknPkhlbGxvIHdvcmxkITwvQnV0dG9uPlxyXG4gICAgICAgICB7dGhpcy5wcm9wcy51c2VyQWdlbnR9IDxici8+XHJcbiAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogNTAgfX0gc3JjPXtjb25maWcubG9nb1BhdGh9IGFsdD1cIlwiLz5cclxuICAgICAgICA8VXNlckxpc3QgLz5cclxuICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnL1VzZXJMaXN0JywgcXVlcnk6IHsgbmFtZTogJ1plaXQnIH19fSBwcmVmZXRjaD4gXHJcbiAgICAgICAgICB7LyogcHJlZmV0Y2gg5ZCO5Y+w6aKE5Yqg6L296aG16Z2i77yM6L6+5Yiw5pyA5L2z5oCn6IO9ICjnlJ/kuqfnjq/looPmiY3ooYwpXHJcbiAgICAgICAgICAgIHBhc3NIcmVmIOW8uuWItuS9vyBsaW5r5ZKMb25jbGlja+mDveeUn+aViOS9huaYr+W9seWTjXNlbyBsaW5r6YeM6Z2i5YqgPGE+5bCx6YO95Y+v5LulXHJcbiAgICAgICAgICAqL31cclxuICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnYmx1ZScsY3Vyc29yOidwb2ludGVyJyB9fT5Vc2VyTGlzdDwvcD5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+e3RoaXMucm91dEdvKCcvJykoJ29yZ2FuaScpKCd6YXRpb24nKX19PuWOu+e7hOe7h+acuuaehDwvYnV0dG9uPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IFNpZ25PdXRBc3luYygpXHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoXHJcbiAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2l0aER2YSgoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgZGF0YTogc3RhdGUuYWRtaXR0YW5jZUJvZHlcclxuICB9O1xyXG59KShIb21lKTsiXX0= */\n/*@ sourceURL=C:\\Users\\Antiy\\Desktop\\next-demo\\pages\\index.jsx */"));
    }
  }, {
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_services_api__WEBPACK_IMPORTED_MODULE_17__["SignOutAsync"])();

              case 2:
                res = _context.sent;
                this.props.dispatch;
                console.log(res);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }], [{
    key: "getInitialProps",
    //类似nuxt的asyncData，以及原理都是一样
    //注意：getInitialProps将不能使用在子组件中。只能使用在pages页面中。
    //参数如下：
    //pathname - URL 的 path 部分
    //query - URL 的 query 部分，并被解析成对象
    //asPath - 显示在浏览器中的实际路径（包含查询部分），为String类型
    //req - HTTP 请求对象 (只有服务器端有)
    //res - HTTP 返回对象 (只有服务器端有)
    //jsonPageRes - 获取数据响应对象 (只有客户端有)
    //err - 渲染过程中的任何错误
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref) {
        var req, userAgent;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                req = _ref.req;
                userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
                return _context2.abrupt("return", {
                  userAgent: userAgent
                });

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_10__["PureComponent"]);

;
/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_store__WEBPACK_IMPORTED_MODULE_18__["default"])(function (state) {
  return {
    data: state.admittanceBody
  };
})(Home));

/***/ })

})
//# sourceMappingURL=index.js.ca144693299efb02225d.hot-update.js.map