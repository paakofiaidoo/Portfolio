webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/components/Intro.js":
/*!***********************************!*\
  !*** ./pages/components/Intro.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_Intro_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles/Intro.module.css */ "./styles/Intro.module.css");
/* harmony import */ var _styles_Intro_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Intro_module_css__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "C:\\Users\\koquf\\Desktop\\pro\\Portfolio\\pages\\components\\Intro.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Intro = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Intro, _Component);

  var _super = _createSuper(Intro);

  function Intro(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Intro);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "intreact", function () {
      console.log(_this.intro.current, _this.avatar.current);
      var container = _this.intro.current;
      var inner = _this.avatar.current;
      var newStyle = "rotateX(0.05deg) rotateY(-0.24deg)";
      var mouse = {
        _x: 0,
        _y: 0,
        x: 0,
        y: 0,
        updatePosition: function updatePosition(event) {
          var e = event || window.event;
          this.x = e.clientX - this._x;
          this.y = (e.clientY - this._y) * -1;
        },
        setOrigin: function setOrigin(e) {
          this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
          this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
        },
        show: function show() {
          return "(" + this.x + ", " + this.y + ")";
        }
      }; // Track the mouse position relative to the center of the container.

      mouse.setOrigin(container); //----------------------------------------------------

      var counter = 0;
      var refreshRate = 10;

      var isTimeToUpdate = function isTimeToUpdate() {
        return counter++ % refreshRate === 0;
      }; //----------------------------------------------------


      var onMouseEnterHandler = function onMouseEnterHandler(event) {
        update(event);
      };

      var onMouseLeaveHandler = function onMouseLeaveHandler() {
        inner.style = "";
      };

      var onMouseMoveHandler = function onMouseMoveHandler(event) {
        if (isTimeToUpdate()) {
          update(event);
        }
      }; //----------------------------------------------------


      var update = function update(event) {
        mouse.updatePosition(event);
        updateTransformStyle((mouse.y / inner.offsetHeight / 2).toFixed(2), (mouse.x / inner.offsetWidth / 2).toFixed(2));
      };

      var updateTransformStyle = function updateTransformStyle(x, y) {
        var style = "rotateX(" + angleTransform(x) + "deg) rotateY(" + angleTransform(y) + "deg)";
        newStyle = style;
        setStyle(style);
      };

      var angleTransform = function angleTransform(val) {
        val = parseFloat(val) * 40;

        if (val < 0) {
          return val;
        } else {
          return val;
        }
      }; //--------------------------------------------------------


      var setStyle = function setStyle(newStyle) {
        console.log(newStyle);

        _this.setState({
          transform: newStyle
        });
      };

      container.onmousemove = onMouseMoveHandler;
      container.onmouseleave = onMouseLeaveHandler;
      container.onmouseenter = onMouseEnterHandler;
    });

    _this.intro = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();
    _this.avatar = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();
    _this.state = {};
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Intro, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this.intro, this.avatar);
      this.intreact();
      console.log(this.state);
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        id: "intro",
        className: _styles_Intro_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.intro,
        ref: this.intro,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 4
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 5
        }
      }, __jsx("img", {
        src: "/brand/vector/default-monochrome.svg",
        alt: "profile pic",
        className: _styles_Intro_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.avatar,
        ref: this.avatar,
        style: this.state,
        load: "lazy",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 6
        }
      }), __jsx("div", {
        className: _styles_Intro_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.details,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 6
        }
      }, __jsx("ul", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 7
        }
      }, __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 8
        }
      }, __jsx("a", {
        target: "_blank",
        href: "https://web.facebook.com/paakofi.aidoo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 9
        }
      }, __jsx("img", {
        src: "/facebook.svg",
        alt: "facebook",
        className: _styles_Intro_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.contact,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 10
        }
      }))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 8
        }
      }, __jsx("a", {
        target: "_blank",
        href: "https://www.instagram.com/pk_aidoo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 9
        }
      }, __jsx("img", {
        src: "/instagram.svg",
        alt: "instagram",
        className: _styles_Intro_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.contact,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 10
        }
      }))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 8
        }
      }, __jsx("a", {
        target: "_blank",
        href: "https://twitter.com/PaaKofiaidoo2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 9
        }
      }, __jsx("img", {
        src: "/twitter.svg",
        alt: "twitter",
        className: _styles_Intro_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.contact,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 10
        }
      }))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 8
        }
      }, __jsx("a", {
        target: "_blank",
        href: "https://www.linkedin.com/in/paa-kofi-aidoo-a98036183/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 9
        }
      }, __jsx("img", {
        src: "/linkedin.svg",
        alt: "linkedin",
        className: _styles_Intro_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.contact,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 10
        }
      }))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 8
        }
      }, __jsx("a", {
        target: "_blank",
        href: "https://wa.me/233202396856",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 9
        }
      }, __jsx("img", {
        src: "/whatsapp.svg",
        alt: "whatsapp",
        className: _styles_Intro_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.contact,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 10
        }
      }))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 8
        }
      }, __jsx("a", {
        target: "_blank",
        href: "https://github.com/paakofiaidoo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 9
        }
      }, __jsx("img", {
        src: "/github.svg",
        alt: "github",
        className: _styles_Intro_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.contact,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 10
        }
      }))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 8
        }
      }, __jsx("a", {
        target: "_blank",
        href: "mailto:paakofiaidoo17@gmail.com",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 9
        }
      }, __jsx("img", {
        src: "/mail.svg",
        alt: "email",
        className: _styles_Intro_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.contact,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 10
        }
      }))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 8
        }
      }, __jsx("a", {
        target: "_blank",
        href: "tel:+233202396856",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 9
        }
      }, __jsx("img", {
        src: "/telephone.svg",
        alt: "call",
        className: _styles_Intro_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.contact,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 10
        }
      })))))));
    }
  }]);

  return Intro;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Intro);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9JbnRyby5qcyJdLCJuYW1lcyI6WyJJbnRybyIsInByb3BzIiwiY29uc29sZSIsImxvZyIsImludHJvIiwiY3VycmVudCIsImF2YXRhciIsImNvbnRhaW5lciIsImlubmVyIiwibmV3U3R5bGUiLCJtb3VzZSIsIl94IiwiX3kiLCJ4IiwieSIsInVwZGF0ZVBvc2l0aW9uIiwiZXZlbnQiLCJlIiwid2luZG93IiwiY2xpZW50WCIsImNsaWVudFkiLCJzZXRPcmlnaW4iLCJvZmZzZXRMZWZ0IiwiTWF0aCIsImZsb29yIiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRUb3AiLCJvZmZzZXRIZWlnaHQiLCJzaG93IiwiY291bnRlciIsInJlZnJlc2hSYXRlIiwiaXNUaW1lVG9VcGRhdGUiLCJvbk1vdXNlRW50ZXJIYW5kbGVyIiwidXBkYXRlIiwib25Nb3VzZUxlYXZlSGFuZGxlciIsInN0eWxlIiwib25Nb3VzZU1vdmVIYW5kbGVyIiwidXBkYXRlVHJhbnNmb3JtU3R5bGUiLCJ0b0ZpeGVkIiwiYW5nbGVUcmFuc2Zvcm0iLCJzZXRTdHlsZSIsInZhbCIsInBhcnNlRmxvYXQiLCJzZXRTdGF0ZSIsInRyYW5zZm9ybSIsIm9ubW91c2Vtb3ZlIiwib25tb3VzZWxlYXZlIiwib25tb3VzZWVudGVyIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJzdGF0ZSIsImludHJlYWN0Iiwic3R5bGVzIiwiZGV0YWlscyIsImNvbnRhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVNQSxLOzs7OztBQUNMLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2xCLDhCQUFNQSxLQUFOOztBQURrQixtTkFhUixZQUFNO0FBQ2hCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFLQyxLQUFMLENBQVdDLE9BQXZCLEVBQWdDLE1B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QUFJLEVBQUMsaUNBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQztBQUNDLFdBQUcsRUFBQyxhQURMO0FBRUMsV0FBRyxFQUFDLFFBRkw7QUFHQyxpQkFBUyxFQUFFRiwrREFBTSxDQUFDRSxPQUhuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREQsQ0FERCxDQTlDRCxFQXVEQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0M7QUFBSSxjQUFNLEVBQUMsUUFBWDtBQUFvQixZQUFJLEVBQUMsaUNBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQztBQUFLLFdBQUcsRUFBQyxXQUFUO0FBQXFCLFdBQUcsRUFBQyxPQUF6QjtBQUFpQyxpQkFBUyxFQUFFRiwrREFBTSxDQUFDRSxPQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREQsQ0FERCxDQXZERCxFQTREQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0M7QUFBSSxjQUFNLEVBQUMsUUFBWDtBQUFvQixZQUFJLEVBQUMsbUJBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQztBQUNDLFdBQUcsRUFBQyxnQkFETDtBQUVDLFdBQUcsRUFBQyxNQUZMO0FBR0MsaUJBQVMsRUFBRUYsK0RBQU0sQ0FBQ0UsT0FIbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURELENBREQsQ0E1REQsQ0FERCxDQVRELENBREQsQ0FERDtBQXNGQTs7OztFQWxNa0JDLCtDOztBQXFNTHZELG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdhMGFkNTcwZWJmNjVkNDc4MDkyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL0ludHJvLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNsYXNzIEludHJvIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5pbnRybyA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG5cdFx0dGhpcy5hdmF0YXIgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuXHRcdHRoaXMuc3RhdGUgPSB7fTtcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0Y29uc29sZS5sb2codGhpcy5pbnRybywgdGhpcy5hdmF0YXIpO1xyXG5cdFx0dGhpcy5pbnRyZWFjdCgpO1xyXG5cdFx0Y29uc29sZS5sb2codGhpcy5zdGF0ZSk7XHJcblx0fVxyXG5cclxuXHRpbnRyZWFjdCA9ICgpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKHRoaXMuaW50cm8uY3VycmVudCwgdGhpcy5hdmF0YXIuY3VycmVudCk7XHJcblx0XHR2YXIgY29udGFpbmVyID0gdGhpcy5pbnRyby5jdXJyZW50O1xyXG5cdFx0dmFyIGlubmVyID0gdGhpcy5hdmF0YXIuY3VycmVudDtcclxuXHRcdGxldCBuZXdTdHlsZSA9IFwicm90YXRlWCgwLjA1ZGVnKSByb3RhdGVZKC0wLjI0ZGVnKVwiO1xyXG5cclxuXHRcdHZhciBtb3VzZSA9IHtcclxuXHRcdFx0X3g6IDAsXHJcblx0XHRcdF95OiAwLFxyXG5cdFx0XHR4OiAwLFxyXG5cdFx0XHR5OiAwLFxyXG5cdFx0XHR1cGRhdGVQb3NpdGlvbjogZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHRcdFx0dmFyIGUgPSBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XHJcblx0XHRcdFx0dGhpcy54ID0gZS5jbGllbnRYIC0gdGhpcy5feDtcclxuXHRcdFx0XHR0aGlzLnkgPSAoZS5jbGllbnRZIC0gdGhpcy5feSkgKiAtMTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c2V0T3JpZ2luOiBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdHRoaXMuX3ggPSBlLm9mZnNldExlZnQgKyBNYXRoLmZsb29yKGUub2Zmc2V0V2lkdGggLyAyKTtcclxuXHRcdFx0XHR0aGlzLl95ID0gZS5vZmZzZXRUb3AgKyBNYXRoLmZsb29yKGUub2Zmc2V0SGVpZ2h0IC8gMik7XHJcblx0XHRcdH0sXHJcblx0XHRcdHNob3c6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRyZXR1cm4gXCIoXCIgKyB0aGlzLnggKyBcIiwgXCIgKyB0aGlzLnkgKyBcIilcIjtcclxuXHRcdFx0fSxcclxuXHRcdH07XHJcblxyXG5cdFx0Ly8gVHJhY2sgdGhlIG1vdXNlIHBvc2l0aW9uIHJlbGF0aXZlIHRvIHRoZSBjZW50ZXIgb2YgdGhlIGNvbnRhaW5lci5cclxuXHRcdG1vdXNlLnNldE9yaWdpbihjb250YWluZXIpO1xyXG5cclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHRcdHZhciBjb3VudGVyID0gMDtcclxuXHRcdHZhciByZWZyZXNoUmF0ZSA9IDEwO1xyXG5cdFx0dmFyIGlzVGltZVRvVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gY291bnRlcisrICUgcmVmcmVzaFJhdGUgPT09IDA7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHRcdHZhciBvbk1vdXNlRW50ZXJIYW5kbGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHRcdHVwZGF0ZShldmVudCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHZhciBvbk1vdXNlTGVhdmVIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpbm5lci5zdHlsZSA9IFwiXCI7XHJcblx0XHR9O1xyXG5cclxuXHRcdHZhciBvbk1vdXNlTW92ZUhhbmRsZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdFx0aWYgKGlzVGltZVRvVXBkYXRlKCkpIHtcclxuXHRcdFx0XHR1cGRhdGUoZXZlbnQpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHRcdHZhciB1cGRhdGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdFx0bW91c2UudXBkYXRlUG9zaXRpb24oZXZlbnQpO1xyXG5cdFx0XHR1cGRhdGVUcmFuc2Zvcm1TdHlsZShcclxuXHRcdFx0XHQobW91c2UueSAvIGlubmVyLm9mZnNldEhlaWdodCAvIDIpLnRvRml4ZWQoMiksXHJcbiAgICAgIChtb3VzZS54IC8gaW5uZXIub2Zmc2V0V2lkdGggLyAyKS50b0ZpeGVkKDIpXHJcblx0XHRcdCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHZhciB1cGRhdGVUcmFuc2Zvcm1TdHlsZSA9IGZ1bmN0aW9uICh4LCB5KSB7XHJcblxyXG5cdFx0XHR2YXIgc3R5bGUgPVxyXG5cdFx0XHRcdFwicm90YXRlWChcIiArXHJcblx0XHRcdFx0YW5nbGVUcmFuc2Zvcm0oeCkgK1xyXG5cdFx0XHRcdFwiZGVnKSByb3RhdGVZKFwiICtcclxuXHRcdFx0XHRhbmdsZVRyYW5zZm9ybSh5KSArXHJcblx0XHRcdFx0XCJkZWcpXCI7XHJcblx0XHRcdG5ld1N0eWxlID0gc3R5bGU7XHJcblx0XHRcdHNldFN0eWxlKHN0eWxlKTtcclxuXHRcdH07XHJcblx0XHRsZXQgYW5nbGVUcmFuc2Zvcm0gPSAodmFsKSA9PiB7XHJcblx0XHRcdHZhbCA9IHBhcnNlRmxvYXQodmFsKSo0MCA7XHJcblx0XHRcdGlmICh2YWwgPCAwKSB7XHJcblx0XHRcdFx0cmV0dXJuIHZhbDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gdmFsO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdGxldCBzZXRTdHlsZSA9IChuZXdTdHlsZSkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhuZXdTdHlsZSk7XHJcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyB0cmFuc2Zvcm06IG5ld1N0eWxlIH0pO1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb250YWluZXIub25tb3VzZW1vdmUgPSBvbk1vdXNlTW92ZUhhbmRsZXI7XHJcblx0XHRjb250YWluZXIub25tb3VzZWxlYXZlID0gb25Nb3VzZUxlYXZlSGFuZGxlcjtcclxuXHRcdGNvbnRhaW5lci5vbm1vdXNlZW50ZXIgPSBvbk1vdXNlRW50ZXJIYW5kbGVyO1xyXG5cdH07XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgaWQ9XCJpbnRyb1wiIGNsYXNzTmFtZT17c3R5bGVzLmludHJvfSByZWY9e3RoaXMuaW50cm99PlxyXG5cdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdHNyYz1cIi9icmFuZC92ZWN0b3IvZGVmYXVsdC1tb25vY2hyb21lLnN2Z1wiXHJcblx0XHRcdFx0XHRcdGFsdD1cInByb2ZpbGUgcGljXCJcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfVxyXG5cdFx0XHRcdFx0XHRyZWY9e3RoaXMuYXZhdGFyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17dGhpcy5zdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZD1cImxhenlcIlxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsc30+XHJcblx0XHRcdFx0XHRcdDx1bD5cclxuXHRcdFx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YSAgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd2ViLmZhY2Vib29rLmNvbS9wYWFrb2ZpLmFpZG9vXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9XCIvZmFjZWJvb2suc3ZnXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJmYWNlYm9va1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXMuY29udGFjdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0XHRcdDxhICB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9wa19haWRvb1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPVwiL2luc3RhZ3JhbS5zdmdcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cImluc3RhZ3JhbVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXMuY29udGFjdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0XHRcdDxhICB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9QYWFLb2ZpYWlkb28yXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9XCIvdHdpdHRlci5zdmdcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cInR3aXR0ZXJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhY3R9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YSAgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9wYWEta29maS1haWRvby1hOTgwMzYxODMvXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9XCIvbGlua2VkaW4uc3ZnXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJsaW5rZWRpblwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXMuY29udGFjdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0XHRcdDxhICB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93YS5tZS8yMzMyMDIzOTY4NTZcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz1cIi93aGF0c2FwcC5zdmdcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cIndoYXRzYXBwXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5jb250YWN0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGEgIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcGFha29maWFpZG9vXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9XCIvZ2l0aHViLnN2Z1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PVwiZ2l0aHViXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5jb250YWN0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGEgIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJtYWlsdG86cGFha29maWFpZG9vMTdAZ21haWwuY29tXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiL21haWwuc3ZnXCIgYWx0PVwiZW1haWxcIiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWN0fSAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGEgIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJ0ZWw6KzIzMzIwMjM5Njg1NlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPVwiL3RlbGVwaG9uZS5zdmdcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cImNhbGxcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhY3R9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnRybztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==