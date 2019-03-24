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
    className: "jsx-978384942" + " " + 'post',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-978384942",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "My blog - by me"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    style: {
      listStyleType: 'none'
    },
    className: "jsx-978384942",
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
      className: "jsx-978384942",
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
      className: "jsx-978384942",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-978384942",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, post.body.slice(0, 20), "...")));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "978384942",
    __self: this
  }, "@import url('<link href=\"https://fonts.googleapis.com/css?family=Montserrat\" rel=\"stylesheet\">') .post{font-family:sans-serif;}/*|*/}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxjb2RlXFxnaXRodWItcHJvamVjdHNcXGJhc2ljLW9uZS1wYWdlLWJsb2dcXEJsb2ctQXBwLUZyb250LUVuZFxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9DaUIsQUFLb0IsdUJBQUMiLCJmaWxlIjoiRDpcXGNvZGVcXGdpdGh1Yi1wcm9qZWN0c1xcYmFzaWMtb25lLXBhZ2UtYmxvZ1xcQmxvZy1BcHAtRnJvbnQtRW5kXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0Jsb2dDYXJkL0Jsb2dDYXJkJ1xyXG5cclxuY29uc3QgUG9zdCA9IChwcm9wcykgPT4gKFxyXG4gICAgICAgIDxMaW5rIGFzPXtgLyR7cHJvcHMuc2x1Z31gfSBocmVmPXtgL2Jsb2dwb3N0P3RpdGxlPSR7cHJvcHMudGl0bGV9YH0+XHJcbiAgICAgICAgICAgIDxhPntwcm9wcy50aXRsZX08L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4pXHJcblxyXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuICFwcm9wcy5wb3N0Q29udGVudFswXSA/XHJcbiAgICAoPGgxIHN0eWxlPXt7Zm9udEZhbWlseTogJ01vbnRzZXJyYXQnfX0+TG9hZGluZy4uLjwvaDE+KVxyXG4gICAgOlxyXG4gICAgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwb3N0JyBzdHlsZT17e2ZvbnRGYW1pbHk6ICdNb250c2VycmF0J319PlxyXG4gICAgICAgICAgICA8aDE+TXkgYmxvZyAtIGJ5IG1lPC9oMT5cclxuICAgICAgICAgICAgPHVsIHN0eWxlPXt7bGlzdFN0eWxlVHlwZTogJ25vbmUnfX0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMucG9zdENvbnRlbnQubWFwKChwb3N0LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3Bvc3QuX2lkfSBzdHlsZT17e21hcmdpbjogJzEwcHgnLCB3aWR0aDogJzUwJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbHVnPXtpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17cG9zdC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Bvc3QuYm9keS5zbGljZSgwLCAyMCl9Li4uPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIEBpbXBvcnQgdXJsKCc8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXRcIiByZWw9XCJzdHlsZXNoZWV0XCI+JylcclxuICAgICAgICAgICAgICAgICAgICAucG9zdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvaG9tZWApXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihwb3N0cyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7cG9zdENvbnRlbnQ6IHBvc3RzLnJldmVyc2UoKX1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcclxufSBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4Il19 */\n/*@ sourceURL=D:\\code\\github-projects\\basic-one-page-blog\\Blog-App-Front-End\\pages\\index.js */"));
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
//# sourceMappingURL=index.js.0f4e4ee2125591a034b9.hot-update.js.map