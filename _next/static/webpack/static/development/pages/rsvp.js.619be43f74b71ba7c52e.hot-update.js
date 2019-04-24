webpackHotUpdate("static/development/pages/rsvp.js",{

/***/ "./pages/rsvp.js":
/*!***********************!*\
  !*** ./pages/rsvp.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _rsvp_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rsvp.css */ "./pages/rsvp.css");
/* harmony import */ var _rsvp_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_rsvp_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/firebase */ "./lib/firebase.js");





var _jsxFileName = "/Users/pottsga/dev/wedding/pages/rsvp.js";





var initialState = {
  message: null,
  attendingWedding: null,
  attendingWeddingShower: null,
  attendingWeddingReception: null,
  numAdultsAttendingWedding: null,
  numChildrenAttendingWedding: null,
  numAdultsAttendingWeddingShower: null,
  numChildrenAttendingWeddingShower: null,
  numAdultsAttendingWeddingReception: null,
  numChildrenAttendingWeddingReception: null,
  firstName: null,
  lastName: null,
  submittedOn: new Date()
};

var RSVP =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RSVP, _React$Component);

  function RSVP() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RSVP);

    _this.state = initialState;
    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(_this);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(RSVP, [{
    key: "onSubmit",
    value: function onSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      var db = _lib_firebase__WEBPACK_IMPORTED_MODULE_9__["default"].firestore();

      var _this$state = this.state,
          message = _this$state.message,
          data = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$state, ["message"]);

      db.collection("rsvps").add(data).then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);

        _this2.setState({
          initialState: initialState
        });

        _this2.setState({
          message: "".concat(_this2.state.firstName, ", we got your RSVP! If you need to change this at any time, please just re-fill out the form. Thank you!")
        });
      }).catch(function (error) {
        console.error("Error adding document: ", error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
        container: "true",
        title: "RSVP",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, this.state.message), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
        onSubmit: function onSubmit(e) {
          return _this3.onSubmit(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "flexContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "flexItem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        className: "required",
        htmlFor: "firstName",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "First Name"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        onChange: function onChange(e) {
          return _this3.setState({
            firstName: e.target.value
          });
        },
        name: "firstName",
        id: "firstName",
        type: "text",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "flexItem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        className: "required",
        htmlFor: "lastName",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "Last Name"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        onChange: function onChange(e) {
          return _this3.setState({
            lastName: e.target.value
          });
        },
        name: "lastName",
        id: "lastName",
        type: "text",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "flexContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "flexItem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        className: "required",
        htmlFor: "attendingWedding",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "RSVP for Wedding"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("small", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "Will you be able to attend our wedding in Abbeville, SC on Oct 05, 2019?"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "radioGroup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        onChange: function onChange() {
          return _this3.setState({
            attendingWedding: true
          });
        },
        name: "attendingWedding",
        id: "attendingWedding_yes",
        type: "radio",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        htmlFor: "attendingWedding_yes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Accepts")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "radioGroup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        onChange: function onChange() {
          return _this3.setState({
            attendingWedding: false,
            numAdultsAttendingWedding: null,
            numChildrenAttendingWedding: null
          });
        },
        name: "attendingWedding",
        id: "attendingWedding_no",
        type: "radio",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        htmlFor: "attendingWedding_no",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "Regrets")))), this.state.attendingWedding && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "flexContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "flexItem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        className: "required",
        htmlFor: "numAdultsAttendingWedding",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "Number of Adults Attending Wedding"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        onChange: function onChange(e) {
          return _this3.setState({
            numAdultsAttendingWedding: Number(e.target.value)
          });
        },
        name: "numAdultsAttendingWedding",
        id: "numAdultsAttendingWedding",
        type: "number",
        pattern: "\\d*",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "flexItem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        className: "required",
        htmlFor: "numChildrenAttendingWedding",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "Number of Children Attending Wedding"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        onChange: function onChange(e) {
          return _this3.setState({
            numChildrenAttendingWedding: Number(e.target.value)
          });
        },
        name: "numChildrenAttendingWedding",
        id: "numChildrenAttendingWedding",
        type: "number",
        pattern: "\\d*",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "flexContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "flexItem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        className: "required",
        htmlFor: "attendingWeddingReception",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "RSVP for Reception"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("small", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "Will you be able to attend our wedding reception at the ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        target: "_blank",
        href: "https://www.ptc.edu/continuing-ed/meeting-event-facilities/conference-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "Conference Center"), " Piedmont Technical College in Greenwood, SC after the wedding on Oct 05, 2019?"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "radioGroup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        onChange: function onChange() {
          return _this3.setState({
            attendingWeddingReception: true
          });
        },
        name: "attendingWeddingReception",
        id: "attendingWeddingReception_yes",
        value: "yes",
        type: "radio",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        htmlFor: "attendingWeddingReception_yes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "Accepts")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "radioGroup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        onChange: function onChange() {
          return _this3.setState({
            attendingWeddingReception: false,
            numAdultsAttendingWeddingReception: null,
            numChildrenAttendingWeddingReception: null
          });
        },
        name: "attendingWeddingReception",
        id: "attendingWeddingReception_no",
        value: "no",
        type: "radio",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        htmlFor: "attendingWeddingReception_no",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "Regrets")))), this.state.attendingWeddingReception && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "flexContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "flexItem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        className: "required",
        htmlFor: "numAdultsAttendingWeddingReception",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "Number of Adults Attending Wedding Reception"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        onChange: function onChange(e) {
          return _this3.setState({
            numAdultsAttendingWeddingReception: Number(e.target.value)
          });
        },
        name: "numAdultsAttendingWeddingReception",
        id: "numAdultsAttendingWeddingReception",
        type: "number",
        pattern: "\\d*",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "flexItem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        className: "required",
        htmlFor: "numChildrenAttendingWeddingReception",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "Number of Children Attending Wedding Reception"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        onChange: function onChange(e) {
          return _this3.setState({
            numChildrenAttendingWeddingReception: Number(e.target.value)
          });
        },
        name: "numChildrenAttendingWeddingReception",
        id: "numChildrenAttendingWeddingReception",
        type: "number",
        pattern: "\\d*",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "flexContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "flexItem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        className: "required",
        htmlFor: "attendingWeddingShower",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, "RSVP for Wedding Shower"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("small", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "Will you be able to attend our wedding shower at the Old Kent Jailhouse at 497 Middlebury Rd., Kent, OH 44240 on Sunday, July 28th, 2019?"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "radioGroup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        onChange: function onChange() {
          return _this3.setState({
            attendingWeddingShower: true
          });
        },
        name: "attendingWeddingShower",
        id: "attendingWeddingShower_yes",
        value: "yes",
        type: "radio",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        htmlFor: "attendingWeddingShower_yes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, "Accepts")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "radioGroup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        onChange: function onChange() {
          return _this3.setState({
            attendingWeddingShower: false,
            numAdultsAttendingWeddingShower: null,
            numChildrenAttendingWeddingShower: null
          });
        },
        name: "attendingWeddingShower",
        id: "attendingWeddingShower_no",
        value: "no",
        type: "radio",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        htmlFor: "attendingWeddingShower_no",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, "Regrets")))), this.state.attendingWeddingShower && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "flexContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "flexItem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        className: "required",
        htmlFor: "numAdultsAttendingWeddingShower",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, "Number of Adults Attending Wedding Shower"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        onChange: function onChange(e) {
          return _this3.setState({
            numAdultsAttendingWeddingShower: Number(e.target.value)
          });
        },
        name: "numAdultsAttendingWeddingShower",
        id: "numAdultsAttendingWeddingShower",
        type: "number",
        pattern: "\\d*",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "flexItem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        className: "required",
        htmlFor: "numChildrenAttendingWeddingShower",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, "Number of Children Attending Wedding Shower"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        onChange: function onChange(e) {
          return _this3.setState({
            numChildrenAttendingWeddingShower: Number(e.target.value)
          });
        },
        name: "numChildrenAttendingWeddingShower",
        id: "numChildrenAttendingWeddingShower",
        type: "number",
        pattern: "\\d*",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      })));
    }
  }]);

  return RSVP;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (RSVP);

/***/ })

})
//# sourceMappingURL=rsvp.js.619be43f74b71ba7c52e.hot-update.js.map