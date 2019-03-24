webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_BlogCard_BlogCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/BlogCard/BlogCard */ "./components/BlogCard/BlogCard.js");
var _jsxFileName = "D:\\code\\github-projects\\basic-one-page-blog\\Blog-App-Front-End\\pages\\index.js";






var Post = function Post(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    as: "/".concat(props.slug),
    href: "/blogpost?title=".concat(props.title),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.title));
};

var Index = function Index(props) {
  return !props.postContent[0] ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    style: {
      fontFamily: 'Montserrat'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Loading...") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      fontFamily: 'Montserrat'
    },
    className: "jsx-230197831" + " " + 'post',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-230197831",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "My blog - by me"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    style: {
      listStyleType: 'none'
    },
    className: "jsx-230197831",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, props.postContent.map(function (post, i) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: post._id,
      style: {
        margin: '10px',
        width: '50%'
      },
      className: "jsx-230197831",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_BlogCard_BlogCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Post, {
      slug: i,
      title: post.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-230197831",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-230197831",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, post.body.slice(0, 20), "...")));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "230197831",
    __self: this
  }, "@import url('<link href=\"https://fonts.googleapis.com/css?family=Montserrat\" rel=\"stylesheet\">') div{font-family:'Montserrat',sans-serif;}/*|*/}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxjb2RlXFxnaXRodWItcHJvamVjdHNcXGJhc2ljLW9uZS1wYWdlLWJsb2dcXEJsb2ctQXBwLUZyb250LUVuZFxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Dd0IsQUFJOEQsb0NBQ3pDIiwiZmlsZSI6IkQ6XFxjb2RlXFxnaXRodWItcHJvamVjdHNcXGJhc2ljLW9uZS1wYWdlLWJsb2dcXEJsb2ctQXBwLUZyb250LUVuZFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9CbG9nQ2FyZC9CbG9nQ2FyZCdcclxuXHJcbmNvbnN0IFBvc3QgPSAocHJvcHMpID0+IChcclxuICAgICAgICA8TGluayBhcz17YC8ke3Byb3BzLnNsdWd9YH0gaHJlZj17YC9ibG9ncG9zdD90aXRsZT0ke3Byb3BzLnRpdGxlfWB9PlxyXG4gICAgICAgICAgICA8YT57cHJvcHMudGl0bGV9PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuKVxyXG5cclxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAhcHJvcHMucG9zdENvbnRlbnRbMF0gP1xyXG4gICAgKDxoMSBzdHlsZT17e2ZvbnRGYW1pbHk6ICdNb250c2VycmF0J319PkxvYWRpbmcuLi48L2gxPilcclxuICAgIDpcclxuICAgIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncG9zdCcgc3R5bGU9e3tmb250RmFtaWx5OiAnTW9udHNlcnJhdCd9fT5cclxuICAgICAgICAgICAgPGgxPk15IGJsb2cgLSBieSBtZTwvaDE+XHJcbiAgICAgICAgICAgIDx1bCBzdHlsZT17e2xpc3RTdHlsZVR5cGU6ICdub25lJ319PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLnBvc3RDb250ZW50Lm1hcCgocG9zdCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtwb3N0Ll9pZH0gc3R5bGU9e3ttYXJnaW46ICcxMHB4Jywgd2lkdGg6ICc1MCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9zdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2x1Zz17aX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwb3N0LmJvZHkuc2xpY2UoMCwgMjApfS4uLjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgQGltcG9ydCB1cmwoJzxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdFwiIHJlbD1cInN0eWxlc2hlZXRcIj4nKVxyXG4gICAgICAgICAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9ob21lYClcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHBvc3RzID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtwb3N0Q29udGVudDogcG9zdHMucmV2ZXJzZSgpfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG59IFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXX0= */\n/*@ sourceURL=D:\\code\\github-projects\\basic-one-page-blog\\Blog-App-Front-End\\pages\\index.js */"));
};

Index.getInitialProps = function () {
  return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()("http://localhost:3001/home").then(function (response) {
    return response.json();
  }).then(function (posts) {
    return {
      postContent: posts.reverse()
    };
  }).catch(function (err) {
    return console.log(err);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.1d7f63a270c4f5a16846.hot-update.js.map