/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./helpFunctions/createDiv.js":
/*!************************************!*\
  !*** ./helpFunctions/createDiv.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDiv": () => (/* binding */ createDiv)
/* harmony export */ });
function createDiv(className, textContent = "") {
  const element = document.createElement("div");

  if (typeof className == "object") {
    for (let i = 0; i < className.length; i++) {
      element.classList.add(className[i]);
    }
  } else {
    element.classList.add(className);
  }

  element.textContent = textContent;

  return element;
}


/***/ }),

/***/ "./helpFunctions/genForm.js":
/*!**********************************!*\
  !*** ./helpFunctions/genForm.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "genForm": () => (/* binding */ genForm)
/* harmony export */ });
/* harmony import */ var _createDiv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDiv */ "./helpFunctions/createDiv.js");


function genForm() {
  const form = document.createElement("form");

  // --- First Name ---
  const nameLabel = document.createElement("label");
  nameLabel.innerText = "First Name:";
  nameLabel.setAttribute("for", "formName");
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.id = "formName";

  const firstRow = (0,_createDiv__WEBPACK_IMPORTED_MODULE_0__.createDiv)("nameRow");
  firstRow.append(nameLabel, nameInput);

  // --- Last Name ---
  const lastLabel = document.createElement("label");
  lastLabel.innerText = "Last Name:";
  lastLabel.setAttribute("for", "formLast");
  const lastInput = document.createElement("input");
  lastInput.type = "text";
  lastInput.id = "formLast";

  const lastRow = (0,_createDiv__WEBPACK_IMPORTED_MODULE_0__.createDiv)("lastRow");
  lastRow.append(lastLabel, lastInput);

  // --- Email ---
  const emailLabel = document.createElement("label");
  emailLabel.innerText = "Email:";
  emailLabel.setAttribute("for", "emailInput");
  const emailInput = document.createElement("input");
  emailInput.type = "text";
  emailInput.id = "emailInput";

  const emailRow = (0,_createDiv__WEBPACK_IMPORTED_MODULE_0__.createDiv)("emailRow");
  emailRow.append(emailLabel, emailInput);

  // --- Phone Number ---
  const phoneLabel = document.createElement("label");
  phoneLabel.innerText = "Phone:";
  phoneLabel.setAttribute("for", "phoneInput");
  const phoneInput = document.createElement("input");
  phoneInput.type = "number";
  phoneInput.id = "phoneInput";

  const phoneRow = (0,_createDiv__WEBPACK_IMPORTED_MODULE_0__.createDiv)("phoneRow");
  phoneRow.append(phoneLabel, phoneInput);

  // --- Submit Button ---
  const button = document.createElement("button");
  button.innerText = "Reserve";
  form.append(firstRow, lastRow, emailRow, phoneRow, button);
  return form;
}


/***/ }),

/***/ "./helpFunctions/makeTitle.js":
/*!************************************!*\
  !*** ./helpFunctions/makeTitle.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTitle": () => (/* binding */ createTitle)
/* harmony export */ });
/* harmony import */ var _createDiv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDiv */ "./helpFunctions/createDiv.js");


function createTitle(title) {
  const titleBox = (0,_createDiv__WEBPACK_IMPORTED_MODULE_0__.createDiv)("titleBox");
  titleBox.innerText = title;

  return titleBox;
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/menu/wood.jpg */ "./src/images/menu/wood.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/divider.png */ "./src/images/divider.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n}\n\n:root {\n  --main-color: darkgrey;\n  --btn-color: rgb(189, 0, 0);\n}\n\nbody {\n  box-sizing: border-box;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n\n}\n\nimg {\n  max-width: 100%;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\nnav {\n  width: 100%;\n  height: 75px;\n  background-color: rgb(51, 51, 51);\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 20px;\n  color: white;\n  font-size: 28px;\n}\n\n/* Debugging Purposes only, remove before production */\nnav > * {\n min-width: 40px;\n}\n\nmain {\n  flex: 1;\n}\n\nfooter {\n  width: 100%;\n  height: 75px;\n  background-color: rgb(51, 51, 51);\n}\n\n.nav-btn-list {\n  display: flex;\n  gap: 30px;\n  align-self: flex-end;\n}\n\n.nav-log {\n  font-size: 60px;\n  padding-left: 40px;\n}\n\n.nav-btn {\n  padding: 10px 20px;\n  border-radius: 5px 5px 0 0;\n  cursor: pointer;\n}\n\n.nav-socials {\n  display: flex;\n  padding-right: 40px;\n}\n\n.addressCon {\n  width: 1200px;\n  padding: 20px;\n  margin: auto;\n  display: flex;\n  justify-content: space-between;\n\n}\n\n.aboutContainer {\n  background-color: rgba(0, 0, 0, 0.657);\n  color: white;\n  min-height: 80vh;\n}\n\n.aboutAddress {\n  text-align: center;\n  margin: auto;\n  font-size: 48px;\n}\n\n.map {\n  margin: 40px;\n}\n\n.mission {\n  text-align: center;\n  font-size: 36px;\n}\n\n.social-btn {\n  width: 35px;\n  height: 35px;\n  background-color: white;\n  color: black;\n  margin: 10px;\n  border-radius: 20px;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.social-btn > img {\n  max-width: 80%;\n}\n\n.wrapper {\n  max-width: 1200px;\n  margin: 25px auto;\n}\n\n.row {\n  min-height: 200px;\n  padding: 10px;\n  margin: 20px 0;\n}\n\n.row:nth-child(2n){\n  background-color: lightgrey;\n}\n\n.heroRow {\n  height: 300px;\n  overflow:hidden;\n  position: relative;\n  background: black;\n  display: flex;\n  justify-content: end;\n  color: white;\n}\n.heroRow > * {\n  z-index: 2;\n  position: relative;\n}\n\n.heroRow > img {\n  position: absolute;\n  top: -70%;\n  left: 0px;\n  height: 200%;\n  min-width: 850px;\n  -webkit-mask-image: linear-gradient(to left, transparent 5%, black 90%);\n  mask-image: linear-gradient(to left, transparent 10%, black 75%);\n  z-index: 1;\n}\n\n.heroTextContainer {\n  width: 27em;\n  padding:20px 60px;\n  \n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: space-between;\n}\n.heroTitle {\n  text-align: end;  \n  font-size: 60px;\n\n}\n\n.heroText {\n  padding: 10px;\n}\n\n.heroBtn {\n  padding: 10px 50px;\n  border-radius: 20px;\n  border: none;\n  box-shadow: 1px 1px 5px rgba(255, 255, 255, 0.363);\n  background-color: var(--btn-color);\n  color: white;\n  font-size: large;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.titleBox {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-repeat: no-repeat;\n  background-position: center;  \n  width: 100%;\n  height: 100px;\n  text-align: center;\n  font-size: 28px;\n  filter:opacity(.75);\n}\n\n.storeContent {\n  width: 100%;\n  display: flex;\n  text-align: center;\n  font-size: 25px;\n}\n\n.storeContent > * {\n  flex: 1;\n}\n\n.storeContent p {\n  font-size: 18px;\n  margin: 10px;\n  line-height: 150%;\n}\n\n.testiRow {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  background-color: rgb(100, 100, 100);\n  color: white;\n}\n\n.testiAuthor {\n  margin: 20px;\n}\n\n.navSelected {\n  background-color: white;\n  color: black;\n}\n\n.reserveRow {\n  display: flex;\n  width: 100%;\n  justify-content: ;\n}\n.reserveRow img {\n  width: 600px;\n  margin: 0 40px 4px;\n}\n\n.reserveRow form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-end;\n  margin: auto;\n  gap: 20px;\n}\n\nlabel {\n  margin: 5px;\n  text-align: end;\n}\n\nform > * {\n  display: flex;\n  width: 100%;;\n}\n\nform > * > * {\n  flex: 1;\n}\n\n.reserveRow button {\n  display: flex;\n  justify-content: center;\n  width: 75%;\n  padding: 5px;\n  text-align: center;\n  color: white;\n  border: none;\n  border-radius: 15px;\n  font-weight: bold;\n  background-color: var(--btn-color);\n}\n\n.menuContainer {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n  grid-template-rows: 150px;\n  gap: 20px;\n  align-items: center;\n  color: white;\n}\n\n.menuItem {\n  display: flex;\n  background-color: rgba(0, 0, 0, 0.548);\n  height: 150px;\n  padding: 10px;\n  gap: 10px;\n}\n\n.menuItem img {\n  max-width: 50%;\n}\n\n.menuText {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n.menuText > button {\n  margin-top: auto;\n}\n\n.menuTitle {\n  font-size: 28px;\n}\n\n.menuPrice {\n  color: red;\n}\n\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n}\n\n:root {\n  --main-color: darkgrey;\n  --btn-color: rgb(189, 0, 0);\n}\n\nbody {\n  box-sizing: border-box;\n  background: url('./images/menu/wood.jpg');\n\n}\n\nimg {\n  max-width: 100%;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\nnav {\n  width: 100%;\n  height: 75px;\n  background-color: rgb(51, 51, 51);\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 20px;\n  color: white;\n  font-size: 28px;\n}\n\n/* Debugging Purposes only, remove before production */\nnav > * {\n min-width: 40px;\n}\n\nmain {\n  flex: 1;\n}\n\nfooter {\n  width: 100%;\n  height: 75px;\n  background-color: rgb(51, 51, 51);\n}\n\n.nav-btn-list {\n  display: flex;\n  gap: 30px;\n  align-self: flex-end;\n}\n\n.nav-log {\n  font-size: 60px;\n  padding-left: 40px;\n}\n\n.nav-btn {\n  padding: 10px 20px;\n  border-radius: 5px 5px 0 0;\n  cursor: pointer;\n}\n\n.nav-socials {\n  display: flex;\n  padding-right: 40px;\n}\n\n.addressCon {\n  width: 1200px;\n  padding: 20px;\n  margin: auto;\n  display: flex;\n  justify-content: space-between;\n\n}\n\n.aboutContainer {\n  background-color: rgba(0, 0, 0, 0.657);\n  color: white;\n  min-height: 80vh;\n}\n\n.aboutAddress {\n  text-align: center;\n  margin: auto;\n  font-size: 48px;\n}\n\n.map {\n  margin: 40px;\n}\n\n.mission {\n  text-align: center;\n  font-size: 36px;\n}\n\n.social-btn {\n  width: 35px;\n  height: 35px;\n  background-color: white;\n  color: black;\n  margin: 10px;\n  border-radius: 20px;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.social-btn > img {\n  max-width: 80%;\n}\n\n.wrapper {\n  max-width: 1200px;\n  margin: 25px auto;\n}\n\n.row {\n  min-height: 200px;\n  padding: 10px;\n  margin: 20px 0;\n}\n\n.row:nth-child(2n){\n  background-color: lightgrey;\n}\n\n.heroRow {\n  height: 300px;\n  overflow:hidden;\n  position: relative;\n  background: black;\n  display: flex;\n  justify-content: end;\n  color: white;\n}\n.heroRow > * {\n  z-index: 2;\n  position: relative;\n}\n\n.heroRow > img {\n  position: absolute;\n  top: -70%;\n  left: 0px;\n  height: 200%;\n  min-width: 850px;\n  -webkit-mask-image: linear-gradient(to left, transparent 5%, black 90%);\n  mask-image: linear-gradient(to left, transparent 10%, black 75%);\n  z-index: 1;\n}\n\n.heroTextContainer {\n  width: 27em;\n  padding:20px 60px;\n  \n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: space-between;\n}\n.heroTitle {\n  text-align: end;  \n  font-size: 60px;\n\n}\n\n.heroText {\n  padding: 10px;\n}\n\n.heroBtn {\n  padding: 10px 50px;\n  border-radius: 20px;\n  border: none;\n  box-shadow: 1px 1px 5px rgba(255, 255, 255, 0.363);\n  background-color: var(--btn-color);\n  color: white;\n  font-size: large;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.titleBox {\n  background-image: url(\"./images/divider.png\");\n  background-repeat: no-repeat;\n  background-position: center;  \n  width: 100%;\n  height: 100px;\n  text-align: center;\n  font-size: 28px;\n  filter:opacity(.75);\n}\n\n.storeContent {\n  width: 100%;\n  display: flex;\n  text-align: center;\n  font-size: 25px;\n}\n\n.storeContent > * {\n  flex: 1;\n}\n\n.storeContent p {\n  font-size: 18px;\n  margin: 10px;\n  line-height: 150%;\n}\n\n.testiRow {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  background-color: rgb(100, 100, 100);\n  color: white;\n}\n\n.testiAuthor {\n  margin: 20px;\n}\n\n.navSelected {\n  background-color: white;\n  color: black;\n}\n\n.reserveRow {\n  display: flex;\n  width: 100%;\n  justify-content: ;\n}\n.reserveRow img {\n  width: 600px;\n  margin: 0 40px 4px;\n}\n\n.reserveRow form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-end;\n  margin: auto;\n  gap: 20px;\n}\n\nlabel {\n  margin: 5px;\n  text-align: end;\n}\n\nform > * {\n  display: flex;\n  width: 100%;;\n}\n\nform > * > * {\n  flex: 1;\n}\n\n.reserveRow button {\n  display: flex;\n  justify-content: center;\n  width: 75%;\n  padding: 5px;\n  text-align: center;\n  color: white;\n  border: none;\n  border-radius: 15px;\n  font-weight: bold;\n  background-color: var(--btn-color);\n}\n\n.menuContainer {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n  grid-template-rows: 150px;\n  gap: 20px;\n  align-items: center;\n  color: white;\n}\n\n.menuItem {\n  display: flex;\n  background-color: rgba(0, 0, 0, 0.548);\n  height: 150px;\n  padding: 10px;\n  gap: 10px;\n}\n\n.menuItem img {\n  max-width: 50%;\n}\n\n.menuText {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n.menuText > button {\n  margin-top: auto;\n}\n\n.menuTitle {\n  font-size: 28px;\n}\n\n.menuPrice {\n  color: red;\n}\n\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "genAbout": () => (/* binding */ genAbout)
/* harmony export */ });
/* harmony import */ var _helpFunctions_createDiv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpFunctions/createDiv */ "./helpFunctions/createDiv.js");
/* harmony import */ var _helpFunctions_makeTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpFunctions/makeTitle */ "./helpFunctions/makeTitle.js");



function genAbout() {
  const container = (0,_helpFunctions_createDiv__WEBPACK_IMPORTED_MODULE_0__.createDiv)(["aboutContainer", "wrapper"]);
  const address = (0,_helpFunctions_createDiv__WEBPACK_IMPORTED_MODULE_0__.createDiv)("aboutAddress");
  address.innerHTML = "217 King St W,<br>Kitchener,<br>ON N2G 1B1";

  const map = (0,_helpFunctions_createDiv__WEBPACK_IMPORTED_MODULE_0__.createDiv)("map");
  map.innerHTML =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2896.456812919935!2d-80.49542228450879!3d43.45105937912883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf4f367fea66d%3A0xb30ae8df8d7aa041!2sKinkaku%20Izakaya!5e0!3m2!1sen!2sca!4v1647386333329!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';

  const addressCon = (0,_helpFunctions_createDiv__WEBPACK_IMPORTED_MODULE_0__.createDiv)("addressCon");
  addressCon.append(address, map);

  const title = (0,_helpFunctions_makeTitle__WEBPACK_IMPORTED_MODULE_1__.createTitle)("Our Address");

  const missionTitle = (0,_helpFunctions_makeTitle__WEBPACK_IMPORTED_MODULE_1__.createTitle)("Our Mission");
  const mission = (0,_helpFunctions_createDiv__WEBPACK_IMPORTED_MODULE_0__.createDiv)(
    "mission",
    "Is to provide the best tasting food and most comfortable dinign experience ever!"
  );

  container.append(title, addressCon, missionTitle, mission);
  return container;
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "genHome": () => (/* binding */ genHome),
/* harmony export */   "genInfo": () => (/* binding */ genInfo)
/* harmony export */ });
/* harmony import */ var _helpFunctions_createDiv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpFunctions/createDiv */ "./helpFunctions/createDiv.js");
/* harmony import */ var _helpFunctions_makeTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpFunctions/makeTitle */ "./helpFunctions/makeTitle.js");
/* harmony import */ var _helpFunctions_genForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpFunctions/genForm */ "./helpFunctions/genForm.js");
/* harmony import */ var _images_FancyPlate1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/FancyPlate1.jpg */ "./src/images/FancyPlate1.jpg");
/* harmony import */ var _images_seating_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/seating.jpg */ "./src/images/seating.jpg");






function genHero() {
  const row = (0,_helpFunctions_createDiv__WEBPACK_IMPORTED_MODULE_0__.createDiv)(["row", "heroRow"]);
  // const imageDoc = document.createElement("img");
  const myImage = new Image();
  myImage.src = _images_FancyPlate1_jpg__WEBPACK_IMPORTED_MODULE_3__;

  const textHolder = (0,_helpFunctions_createDiv__WEBPACK_IMPORTED_MODULE_0__.createDiv)("heroTextContainer");
  const title = (0,_helpFunctions_createDiv__WEBPACK_IMPORTED_MODULE_0__.createDiv)("heroTitle", "New Menu Items");
  const desc = (0,_helpFunctions_createDiv__WEBPACK_IMPORTED_MODULE_0__.createDiv)(
    "heroText",
    "All new menu items for you to explore! Vestibulum vehicula ante ut tincidunt commodo. Nam dapibus feugiat dapibus. Nam venenatis sollicitudin condimentum. Donec ac sodales leo. Praesent non facilisis turpis. Curabitur ac sem accumsan, varius nibh a, luctus quam."
  );

  const btn = document.createElement("button");
  btn.classList.add("heroBtn");
  btn.innerText = "Menu";

  textHolder.append(title, desc, btn);

  row.append(textHolder, myImage);
  return row;
}

function genInfo() {
  const row = (0,_helpFunctions_createDiv__WEBPACK_IMPORTED_MODULE_0__.createDiv)("row");
  const divider = (0,_helpFunctions_makeTitle__WEBPACK_IMPORTED_MODULE_1__.createTitle)("Info");
  const content = (0,_helpFunctions_createDiv__WEBPACK_IMPORTED_MODULE_0__.createDiv)("storeContent");

  const storeHours = (0,_helpFunctions_createDiv__WEBPACK_IMPORTED_MODULE_0__.createDiv)("storeHours", "Store Hours");
  const storeHourspara = document.createElement("p");
  storeHourspara.innerHTML =
    "Sunday: 12PM - 12AM<br>Monday: 12PM - 12AM<br>Tuesday: 12PM - 12AM <br>Wednesday: 12PM - 12AM<br>Thursday: 12PM - 12AM<br>Friday: 12PM - 12AM<br>Saturday: 12PM - 12AM";

  storeHours.append(storeHourspara);

  const storeLocation = (0,_helpFunctions_createDiv__WEBPACK_IMPORTED_MODULE_0__.createDiv)("storeLocation", "Store Location");
  const storeLocationPara = document.createElement("p");
  storeLocationPara.innerHTML = "217 King St W,<br>Kitchener,<br>ON N2G 1B1";

  storeLocation.append(storeLocationPara);

  content.append(storeHours, storeLocation);
  row.append(divider, content);
  return row;
}

function genTesti() {
  const row = (0,_helpFunctions_createDiv__WEBPACK_IMPORTED_MODULE_0__.createDiv)(["row", "testiRow"]);
  const testimonial = (0,_helpFunctions_createDiv__WEBPACK_IMPORTED_MODULE_0__.createDiv)(
    "testimonial",
    "THIS IS THE BEST PLACE EVER. TAKE EVERYONE HERE!"
  );
  const testiAuthor = (0,_helpFunctions_createDiv__WEBPACK_IMPORTED_MODULE_0__.createDiv)("testiAuthor", "-Some Random Guy");

  row.append(testimonial, testiAuthor);
  return row;
}

function genReservation() {
  const row = (0,_helpFunctions_createDiv__WEBPACK_IMPORTED_MODULE_0__.createDiv)("row");
  const container = (0,_helpFunctions_createDiv__WEBPACK_IMPORTED_MODULE_0__.createDiv)("reserveRow");
  const image = new Image();
  image.src = _images_seating_jpg__WEBPACK_IMPORTED_MODULE_4__;
  const divider = (0,_helpFunctions_makeTitle__WEBPACK_IMPORTED_MODULE_1__.createTitle)("Reservations");

  const form = (0,_helpFunctions_genForm__WEBPACK_IMPORTED_MODULE_2__.genForm)();

  container.append(form, image);
  row.append(divider, container);
  return row;
}

function genHome() {
  const wrapper = (0,_helpFunctions_createDiv__WEBPACK_IMPORTED_MODULE_0__.createDiv)("wrapper");

  const heroRow = genHero();
  const infoRow = genInfo();
  const testiRow = genTesti();
  const reserveRow = genReservation();

  //append content and return Node
  wrapper.append(heroRow, infoRow, testiRow, reserveRow);
  return wrapper;
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "genMenu": () => (/* binding */ genMenu)
/* harmony export */ });
/* harmony import */ var _helpFunctions_createDiv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpFunctions/createDiv */ "./helpFunctions/createDiv.js");
/* harmony import */ var _src_images_menu_pizza_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/images/menu/pizza.jpg */ "./src/images/menu/pizza.jpg");
/* harmony import */ var _src_images_menu_pasta_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/images/menu/pasta.jpg */ "./src/images/menu/pasta.jpg");
/* harmony import */ var _src_images_menu_chicken_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/images/menu/chicken.jpg */ "./src/images/menu/chicken.jpg");
/* harmony import */ var _src_images_menu_seafood_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/images/menu/seafood.jpg */ "./src/images/menu/seafood.jpg");
/* harmony import */ var _src_images_menu_burger_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/images/menu/burger.jpg */ "./src/images/menu/burger.jpg");
/* harmony import */ var _src_images_menu_waffles_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/images/menu/waffles.jpg */ "./src/images/menu/waffles.jpg");
/* harmony import */ var _src_images_menu_desert_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/images/menu/desert.jpg */ "./src/images/menu/desert.jpg");
/* harmony import */ var _src_images_menu_skewer_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/images/menu/skewer.jpg */ "./src/images/menu/skewer.jpg");
/* harmony import */ var _src_images_menu_fruit_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/images/menu/fruit.jpg */ "./src/images/menu/fruit.jpg");


// Menu Images










const menuItems = {
  pizza: ["Pizza", "$10.99", "CHEESY CHEESY CHEESY", _src_images_menu_pizza_jpg__WEBPACK_IMPORTED_MODULE_1__],
  pasta: ["Pasta", "$10.99", " still CHEESY CHEESY CHEESY", _src_images_menu_pasta_jpg__WEBPACK_IMPORTED_MODULE_2__],
  chicken: ["Chicken", "$10.99", " Not at all cheesy", _src_images_menu_chicken_jpg__WEBPACK_IMPORTED_MODULE_3__],
  seafood: ["Seafood", "$10.99", " Lets hope not", _src_images_menu_seafood_jpg__WEBPACK_IMPORTED_MODULE_4__],
  burger: ["Burger", "$10.99", " kinda Cheesy", _src_images_menu_burger_jpg__WEBPACK_IMPORTED_MODULE_5__],
  waffles: ["Waffles", "$10.99", " kinda Deleicios", _src_images_menu_waffles_jpg__WEBPACK_IMPORTED_MODULE_6__],
  desert: ["Desert", "$10.99", " Fluffy", _src_images_menu_desert_jpg__WEBPACK_IMPORTED_MODULE_7__],
  skewer: ["Skewer", "$10.99", " Somehting on a stick", _src_images_menu_skewer_jpg__WEBPACK_IMPORTED_MODULE_8__],
  fruit: ["Fruit Bowl", "$10.99", " Somehting on a stick", _src_images_menu_fruit_jpg__WEBPACK_IMPORTED_MODULE_9__],
};

function makeItem(name, price, desc, pic) {
  const container = (0,_helpFunctions_createDiv__WEBPACK_IMPORTED_MODULE_0__.createDiv)("menuItem");

  const image = new Image();
  image.src = pic;

  const info = (0,_helpFunctions_createDiv__WEBPACK_IMPORTED_MODULE_0__.createDiv)("menuText");
  const infoTitle = (0,_helpFunctions_createDiv__WEBPACK_IMPORTED_MODULE_0__.createDiv)("menuTitle", name);
  const infoPrice = (0,_helpFunctions_createDiv__WEBPACK_IMPORTED_MODULE_0__.createDiv)("menuPrice", price);
  const infoDesc = (0,_helpFunctions_createDiv__WEBPACK_IMPORTED_MODULE_0__.createDiv)("menyDesc", desc);

  const button = document.createElement("button");
  button.innerText = "Add to Cart";

  info.append(infoTitle, infoPrice, infoDesc, button);

  container.append(image, info);

  return container;
}

function genMenu() {
  let container = (0,_helpFunctions_createDiv__WEBPACK_IMPORTED_MODULE_0__.createDiv)(["menuContainer", "wrapper"]);

  for (const item in menuItems) {
    container.append(makeItem(...menuItems[item]));
  }

  return container;
}


/***/ }),

/***/ "./src/images/FancyPlate1.jpg":
/*!************************************!*\
  !*** ./src/images/FancyPlate1.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "45de735a2a8321af3fa1.jpg";

/***/ }),

/***/ "./src/images/divider.png":
/*!********************************!*\
  !*** ./src/images/divider.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ae31097762284fd4645a.png";

/***/ }),

/***/ "./src/images/facebook.png":
/*!*********************************!*\
  !*** ./src/images/facebook.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d363739018f7b3ce0793.png";

/***/ }),

/***/ "./src/images/instagram.png":
/*!**********************************!*\
  !*** ./src/images/instagram.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de9b18ee08c716c6f821.png";

/***/ }),

/***/ "./src/images/menu/burger.jpg":
/*!************************************!*\
  !*** ./src/images/menu/burger.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "91b5c13a6e6957cb1cfb.jpg";

/***/ }),

/***/ "./src/images/menu/chicken.jpg":
/*!*************************************!*\
  !*** ./src/images/menu/chicken.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c45beb60bc98d3ad6935.jpg";

/***/ }),

/***/ "./src/images/menu/desert.jpg":
/*!************************************!*\
  !*** ./src/images/menu/desert.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f67900b1b958a30f4f02.jpg";

/***/ }),

/***/ "./src/images/menu/fruit.jpg":
/*!***********************************!*\
  !*** ./src/images/menu/fruit.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c558362e9ed51514b6cc.jpg";

/***/ }),

/***/ "./src/images/menu/pasta.jpg":
/*!***********************************!*\
  !*** ./src/images/menu/pasta.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "811df3b5f359942c4854.jpg";

/***/ }),

/***/ "./src/images/menu/pizza.jpg":
/*!***********************************!*\
  !*** ./src/images/menu/pizza.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d67f6c1263df207d1680.jpg";

/***/ }),

/***/ "./src/images/menu/seafood.jpg":
/*!*************************************!*\
  !*** ./src/images/menu/seafood.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ef92b5f7968ba2c2d571.jpg";

/***/ }),

/***/ "./src/images/menu/skewer.jpg":
/*!************************************!*\
  !*** ./src/images/menu/skewer.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a90aa76ba812c6d67cc5.jpg";

/***/ }),

/***/ "./src/images/menu/waffles.jpg":
/*!*************************************!*\
  !*** ./src/images/menu/waffles.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f06d3745cd552993b3ab.jpg";

/***/ }),

/***/ "./src/images/menu/wood.jpg":
/*!**********************************!*\
  !*** ./src/images/menu/wood.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f1d349d216f0a06d80a5.jpg";

/***/ }),

/***/ "./src/images/seating.jpg":
/*!********************************!*\
  !*** ./src/images/seating.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9524db74f17b7cb8210e.jpg";

/***/ }),

/***/ "./src/images/twitter.png":
/*!********************************!*\
  !*** ./src/images/twitter.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eb65475e4e8a8c97d960.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"template": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _helpFunctions_createDiv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpFunctions/createDiv */ "./helpFunctions/createDiv.js");
/* harmony import */ var _src_images_facebook_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/images/facebook.png */ "./src/images/facebook.png");
/* harmony import */ var _src_images_twitter_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/images/twitter.png */ "./src/images/twitter.png");
/* harmony import */ var _src_images_instagram_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/images/instagram.png */ "./src/images/instagram.png");










const content = document.getElementById("content");
(0,_home__WEBPACK_IMPORTED_MODULE_1__.genHome)();

function wipeMain() {
  const mainCon = document.querySelector("main");

  while (mainCon.firstChild) {
    mainCon.removeChild(mainCon.firstChild);
  }
}

function reRender(node = "home") {
  wipeMain();

  const main = document.querySelector("main");

  let content;
  if (node === "about") {
    // Generate About
    content = (0,_about__WEBPACK_IMPORTED_MODULE_3__.genAbout)();
    console.log("About Page Gen");
  } else if (node === "menu") {
    // Generate Menu
    content = (0,_menu__WEBPACK_IMPORTED_MODULE_2__.genMenu)();
    console.log("Menu Page Gen");
  } else {
    content = (0,_home__WEBPACK_IMPORTED_MODULE_1__.genHome)();
  }

  main.appendChild(content);
}

function renderNav() {
  const navbar = document.createElement("nav");

  // Create Nav Logo
  const navLogo = (0,_helpFunctions_createDiv__WEBPACK_IMPORTED_MODULE_4__.createDiv)("nav-log", "🥡");

  // Create Nav Button List
  const navList = (0,_helpFunctions_createDiv__WEBPACK_IMPORTED_MODULE_4__.createDiv)("nav-btn-list");

  const navBtnHome = (0,_helpFunctions_createDiv__WEBPACK_IMPORTED_MODULE_4__.createDiv)(["nav-btn", "navHome", "navSelected"], "Home"); // Home Btn
  navBtnHome.addEventListener("click", (e) => {
    document.querySelector(".navSelected").classList.remove("navSelected");
    e.target.classList.add("navSelected");
    reRender("home");
  });

  const navBtnMenu = (0,_helpFunctions_createDiv__WEBPACK_IMPORTED_MODULE_4__.createDiv)(["nav-btn", "navMenu"], "Menu"); // Menu Button
  navBtnMenu.addEventListener("click", (e) => {
    document.querySelector(".navSelected").classList.remove("navSelected");
    e.target.classList.add("navSelected");
    reRender("menu");
  });

  const navBtnAbout = (0,_helpFunctions_createDiv__WEBPACK_IMPORTED_MODULE_4__.createDiv)(["nav-btn", "navAbout"], "About"); // About Button
  navBtnAbout.addEventListener("click", (e) => {
    document.querySelector(".navSelected").classList.remove("navSelected");
    e.target.classList.add("navSelected");
    reRender("about");
  });

  // Add buttons to navList
  navList.append(navBtnHome, navBtnMenu, navBtnAbout);

  // Create Social Buttons
  const navSocials = (0,_helpFunctions_createDiv__WEBPACK_IMPORTED_MODULE_4__.createDiv)("nav-socials");

  // --- Facebook Icon ---
  const socialFace = (0,_helpFunctions_createDiv__WEBPACK_IMPORTED_MODULE_4__.createDiv)("social-btn");
  const socialIcon = new Image();
  socialIcon.src = _src_images_facebook_png__WEBPACK_IMPORTED_MODULE_5__;
  socialFace.append(socialIcon);

  // --- Twitter Icon ---
  const socialTwit = (0,_helpFunctions_createDiv__WEBPACK_IMPORTED_MODULE_4__.createDiv)("social-btn");
  const twitterIcon = new Image();
  twitterIcon.src = _src_images_twitter_png__WEBPACK_IMPORTED_MODULE_6__;
  socialTwit.append(twitterIcon);

  // --- Instagram Icon ---
  const socialInst = (0,_helpFunctions_createDiv__WEBPACK_IMPORTED_MODULE_4__.createDiv)("social-btn");
  const instaIcon = new Image();
  instaIcon.src = _src_images_instagram_png__WEBPACK_IMPORTED_MODULE_7__;
  socialInst.append(instaIcon);

  navSocials.append(socialFace, socialTwit, socialInst);

  // Add Elements to navbar
  navbar.append(navLogo, navList, navSocials);

  // Return Navbar
  return navbar;
}

function renderMain() {
  const mainContainer = document.createElement("main");
  const content = (0,_home__WEBPACK_IMPORTED_MODULE_1__.genHome)();

  mainContainer.append(content);
  return mainContainer;
}

function renderFooter() {
  const footer = document.createElement("footer");

  return footer;
}

function renderContainer() {
  const content = document.getElementById("content");
  content.append(renderNav(), renderMain(), renderFooter());
}

renderContainer();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlB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Ozs7Ozs7Ozs7Ozs7O0FDckJxQjtBQUNZO0FBQ0E7QUFDRTtBQUNvQjs7QUFFTDtBQUNGO0FBQ0k7O0FBRXBEO0FBQ0EsOENBQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0RBQVE7QUFDdEI7QUFDQSxJQUFJO0FBQ0o7QUFDQSxjQUFjLDhDQUFPO0FBQ3JCO0FBQ0EsSUFBSTtBQUNKLGNBQWMsOENBQU87QUFDckI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLG1FQUFTOztBQUUzQjtBQUNBLGtCQUFrQixtRUFBUzs7QUFFM0IscUJBQXFCLG1FQUFTLGlEQUFpRDtBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUgscUJBQXFCLG1FQUFTLGtDQUFrQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUgsc0JBQXNCLG1FQUFTLG9DQUFvQztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixtRUFBUzs7QUFFOUI7QUFDQSxxQkFBcUIsbUVBQVM7QUFDOUI7QUFDQSxtQkFBbUIscURBQVE7QUFDM0I7O0FBRUE7QUFDQSxxQkFBcUIsbUVBQVM7QUFDOUI7QUFDQSxvQkFBb0Isb0RBQU87QUFDM0I7O0FBRUE7QUFDQSxxQkFBcUIsbUVBQVM7QUFDOUI7QUFDQSxrQkFBa0Isc0RBQVM7QUFDM0I7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQiw4Q0FBTzs7QUFFekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtc2luZ2xlLXBhZ2VyLy4vaGVscEZ1bmN0aW9ucy9jcmVhdGVEaXYuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1zaW5nbGUtcGFnZXIvLi9oZWxwRnVuY3Rpb25zL2dlbkZvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1zaW5nbGUtcGFnZXIvLi9oZWxwRnVuY3Rpb25zL21ha2VUaXRsZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXNpbmdsZS1wYWdlci8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1zaW5nbGUtcGFnZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtc2luZ2xlLXBhZ2VyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXNpbmdsZS1wYWdlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtc2luZ2xlLXBhZ2VyLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtc2luZ2xlLXBhZ2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtc2luZ2xlLXBhZ2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXNpbmdsZS1wYWdlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXNpbmdsZS1wYWdlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXNpbmdsZS1wYWdlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtc2luZ2xlLXBhZ2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1zaW5nbGUtcGFnZXIvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1zaW5nbGUtcGFnZXIvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXNpbmdsZS1wYWdlci8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtc2luZ2xlLXBhZ2VyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtc2luZ2xlLXBhZ2VyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtc2luZ2xlLXBhZ2VyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXNpbmdsZS1wYWdlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtc2luZ2xlLXBhZ2VyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1zaW5nbGUtcGFnZXIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1zaW5nbGUtcGFnZXIvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1zaW5nbGUtcGFnZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURpdihjbGFzc05hbWUsIHRleHRDb250ZW50ID0gXCJcIikge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBpZiAodHlwZW9mIGNsYXNzTmFtZSA9PSBcIm9iamVjdFwiKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGFzc05hbWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWVbaV0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcblxuICByZXR1cm4gZWxlbWVudDtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZURpdiB9IGZyb20gXCIuL2NyZWF0ZURpdlwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2VuRm9ybSgpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXG4gIC8vIC0tLSBGaXJzdCBOYW1lIC0tLVxuICBjb25zdCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIG5hbWVMYWJlbC5pbm5lclRleHQgPSBcIkZpcnN0IE5hbWU6XCI7XG4gIG5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJmb3JtTmFtZVwiKTtcbiAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBuYW1lSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICBuYW1lSW5wdXQuaWQgPSBcImZvcm1OYW1lXCI7XG5cbiAgY29uc3QgZmlyc3RSb3cgPSBjcmVhdGVEaXYoXCJuYW1lUm93XCIpO1xuICBmaXJzdFJvdy5hcHBlbmQobmFtZUxhYmVsLCBuYW1lSW5wdXQpO1xuXG4gIC8vIC0tLSBMYXN0IE5hbWUgLS0tXG4gIGNvbnN0IGxhc3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFzdExhYmVsLmlubmVyVGV4dCA9IFwiTGFzdCBOYW1lOlwiO1xuICBsYXN0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZm9ybUxhc3RcIik7XG4gIGNvbnN0IGxhc3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgbGFzdElucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgbGFzdElucHV0LmlkID0gXCJmb3JtTGFzdFwiO1xuXG4gIGNvbnN0IGxhc3RSb3cgPSBjcmVhdGVEaXYoXCJsYXN0Um93XCIpO1xuICBsYXN0Um93LmFwcGVuZChsYXN0TGFiZWwsIGxhc3RJbnB1dCk7XG5cbiAgLy8gLS0tIEVtYWlsIC0tLVxuICBjb25zdCBlbWFpbExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBlbWFpbExhYmVsLmlubmVyVGV4dCA9IFwiRW1haWw6XCI7XG4gIGVtYWlsTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZW1haWxJbnB1dFwiKTtcbiAgY29uc3QgZW1haWxJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZW1haWxJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gIGVtYWlsSW5wdXQuaWQgPSBcImVtYWlsSW5wdXRcIjtcblxuICBjb25zdCBlbWFpbFJvdyA9IGNyZWF0ZURpdihcImVtYWlsUm93XCIpO1xuICBlbWFpbFJvdy5hcHBlbmQoZW1haWxMYWJlbCwgZW1haWxJbnB1dCk7XG5cbiAgLy8gLS0tIFBob25lIE51bWJlciAtLS1cbiAgY29uc3QgcGhvbmVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgcGhvbmVMYWJlbC5pbm5lclRleHQgPSBcIlBob25lOlwiO1xuICBwaG9uZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInBob25lSW5wdXRcIik7XG4gIGNvbnN0IHBob25lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHBob25lSW5wdXQudHlwZSA9IFwibnVtYmVyXCI7XG4gIHBob25lSW5wdXQuaWQgPSBcInBob25lSW5wdXRcIjtcblxuICBjb25zdCBwaG9uZVJvdyA9IGNyZWF0ZURpdihcInBob25lUm93XCIpO1xuICBwaG9uZVJvdy5hcHBlbmQocGhvbmVMYWJlbCwgcGhvbmVJbnB1dCk7XG5cbiAgLy8gLS0tIFN1Ym1pdCBCdXR0b24gLS0tXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ1dHRvbi5pbm5lclRleHQgPSBcIlJlc2VydmVcIjtcbiAgZm9ybS5hcHBlbmQoZmlyc3RSb3csIGxhc3RSb3csIGVtYWlsUm93LCBwaG9uZVJvdywgYnV0dG9uKTtcbiAgcmV0dXJuIGZvcm07XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVEaXYgfSBmcm9tIFwiLi9jcmVhdGVEaXZcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRpdGxlKHRpdGxlKSB7XG4gIGNvbnN0IHRpdGxlQm94ID0gY3JlYXRlRGl2KFwidGl0bGVCb3hcIik7XG4gIHRpdGxlQm94LmlubmVyVGV4dCA9IHRpdGxlO1xuXG4gIHJldHVybiB0aXRsZUJveDtcbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9tZW51L3dvb2QuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvZGl2aWRlci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLW1haW4tY29sb3I6IGRhcmtncmV5O1xcbiAgLS1idG4tY29sb3I6IHJnYigxODksIDAsIDApO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcblxcbn1cXG5cXG5pbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5uYXYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDc1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG59XFxuXFxuLyogRGVidWdnaW5nIFB1cnBvc2VzIG9ubHksIHJlbW92ZSBiZWZvcmUgcHJvZHVjdGlvbiAqL1xcbm5hdiA+ICoge1xcbiBtaW4td2lkdGg6IDQwcHg7XFxufVxcblxcbm1haW4ge1xcbiAgZmxleDogMTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA3NXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUxLCA1MSwgNTEpO1xcbn1cXG5cXG4ubmF2LWJ0bi1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDMwcHg7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLm5hdi1sb2cge1xcbiAgZm9udC1zaXplOiA2MHB4O1xcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xcbn1cXG5cXG4ubmF2LWJ0biB7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5hdi1zb2NpYWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xcbn1cXG5cXG4uYWRkcmVzc0NvbiB7XFxuICB3aWR0aDogMTIwMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxufVxcblxcbi5hYm91dENvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjU3KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1pbi1oZWlnaHQ6IDgwdmg7XFxufVxcblxcbi5hYm91dEFkZHJlc3Mge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZm9udC1zaXplOiA0OHB4O1xcbn1cXG5cXG4ubWFwIHtcXG4gIG1hcmdpbjogNDBweDtcXG59XFxuXFxuLm1pc3Npb24ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbn1cXG5cXG4uc29jaWFsLWJ0biB7XFxuICB3aWR0aDogMzVweDtcXG4gIGhlaWdodDogMzVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zb2NpYWwtYnRuID4gaW1nIHtcXG4gIG1heC13aWR0aDogODAlO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIG1hcmdpbjogMjVweCBhdXRvO1xcbn1cXG5cXG4ucm93IHtcXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbjogMjBweCAwO1xcbn1cXG5cXG4ucm93Om50aC1jaGlsZCgybil7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxufVxcblxcbi5oZXJvUm93IHtcXG4gIGhlaWdodDogMzAwcHg7XFxuICBvdmVyZmxvdzpoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmhlcm9Sb3cgPiAqIHtcXG4gIHotaW5kZXg6IDI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5oZXJvUm93ID4gaW1nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTcwJTtcXG4gIGxlZnQ6IDBweDtcXG4gIGhlaWdodDogMjAwJTtcXG4gIG1pbi13aWR0aDogODUwcHg7XFxuICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCB0cmFuc3BhcmVudCA1JSwgYmxhY2sgOTAlKTtcXG4gIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCB0cmFuc3BhcmVudCAxMCUsIGJsYWNrIDc1JSk7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uaGVyb1RleHRDb250YWluZXIge1xcbiAgd2lkdGg6IDI3ZW07XFxuICBwYWRkaW5nOjIwcHggNjBweDtcXG4gIFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5oZXJvVGl0bGUge1xcbiAgdGV4dC1hbGlnbjogZW5kOyAgXFxuICBmb250LXNpemU6IDYwcHg7XFxuXFxufVxcblxcbi5oZXJvVGV4dCB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uaGVyb0J0biB7XFxuICBwYWRkaW5nOiAxMHB4IDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM2Myk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG4tY29sb3IpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGl0bGVCb3gge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7ICBcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGZpbHRlcjpvcGFjaXR5KC43NSk7XFxufVxcblxcbi5zdG9yZUNvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4uc3RvcmVDb250ZW50ID4gKiB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uc3RvcmVDb250ZW50IHAge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XFxufVxcblxcbi50ZXN0aVJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDAsIDEwMCwgMTAwKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRlc3RpQXV0aG9yIHtcXG4gIG1hcmdpbjogMjBweDtcXG59XFxuXFxuLm5hdlNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ucmVzZXJ2ZVJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IDtcXG59XFxuLnJlc2VydmVSb3cgaW1nIHtcXG4gIHdpZHRoOiA2MDBweDtcXG4gIG1hcmdpbjogMCA0MHB4IDRweDtcXG59XFxuXFxuLnJlc2VydmVSb3cgZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG5sYWJlbCB7XFxuICBtYXJnaW46IDVweDtcXG4gIHRleHQtYWxpZ246IGVuZDtcXG59XFxuXFxuZm9ybSA+ICoge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlOztcXG59XFxuXFxuZm9ybSA+ICogPiAqIHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5yZXNlcnZlUm93IGJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogNzUlO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuLWNvbG9yKTtcXG59XFxuXFxuLm1lbnVDb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzUwcHgsIDFmcikpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNTBweDtcXG4gIGdhcDogMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5tZW51SXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0OCk7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLm1lbnVJdGVtIGltZyB7XFxuICBtYXgtd2lkdGg6IDUwJTtcXG59XFxuXFxuLm1lbnVUZXh0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMTtcXG59XFxuXFxuLm1lbnVUZXh0ID4gYnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxufVxcblxcbi5tZW51VGl0bGUge1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbn1cXG5cXG4ubWVudVByaWNlIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixtREFBeUM7O0FBRTNDOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQ0FBaUM7O0VBRWpDLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQSxzREFBc0Q7QUFDdEQ7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4Qjs7QUFFaEM7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7RUFDVCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHVFQUF1RTtFQUN2RSxnRUFBZ0U7RUFDaEUsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjs7RUFFakIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZUFBZTs7QUFFakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrREFBa0Q7RUFDbEQsa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5REFBNkM7RUFDN0MsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLE9BQU87QUFDVDs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixvQ0FBb0M7RUFDcEMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkRBQTJEO0VBQzNELHlCQUF5QjtFQUN6QixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsYUFBYTtFQUNiLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1tYWluLWNvbG9yOiBkYXJrZ3JleTtcXG4gIC0tYnRuLWNvbG9yOiByZ2IoMTg5LCAwLCAwKTtcXG59XFxuXFxuYm9keSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZDogdXJsKCcuL2ltYWdlcy9tZW51L3dvb2QuanBnJyk7XFxuXFxufVxcblxcbmltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbm5hdiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNzVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbn1cXG5cXG4vKiBEZWJ1Z2dpbmcgUHVycG9zZXMgb25seSwgcmVtb3ZlIGJlZm9yZSBwcm9kdWN0aW9uICovXFxubmF2ID4gKiB7XFxuIG1pbi13aWR0aDogNDBweDtcXG59XFxuXFxubWFpbiB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDc1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XFxufVxcblxcbi5uYXYtYnRuLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMzBweDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4ubmF2LWxvZyB7XFxuICBmb250LXNpemU6IDYwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XFxufVxcblxcbi5uYXYtYnRuIHtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmF2LXNvY2lhbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XFxufVxcblxcbi5hZGRyZXNzQ29uIHtcXG4gIHdpZHRoOiAxMjAwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG59XFxuXFxuLmFib3V0Q29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NTcpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWluLWhlaWdodDogODB2aDtcXG59XFxuXFxuLmFib3V0QWRkcmVzcyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IGF1dG87XFxuICBmb250LXNpemU6IDQ4cHg7XFxufVxcblxcbi5tYXAge1xcbiAgbWFyZ2luOiA0MHB4O1xcbn1cXG5cXG4ubWlzc2lvbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDM2cHg7XFxufVxcblxcbi5zb2NpYWwtYnRuIHtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBtYXJnaW46IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNvY2lhbC1idG4gPiBpbWcge1xcbiAgbWF4LXdpZHRoOiA4MCU7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcbiAgbWFyZ2luOiAyNXB4IGF1dG87XFxufVxcblxcbi5yb3cge1xcbiAgbWluLWhlaWdodDogMjAwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxufVxcblxcbi5yb3c6bnRoLWNoaWxkKDJuKXtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG59XFxuXFxuLmhlcm9Sb3cge1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIG92ZXJmbG93OmhpZGRlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uaGVyb1JvdyA+ICoge1xcbiAgei1pbmRleDogMjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmhlcm9Sb3cgPiBpbWcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtNzAlO1xcbiAgbGVmdDogMHB4O1xcbiAgaGVpZ2h0OiAyMDAlO1xcbiAgbWluLXdpZHRoOiA4NTBweDtcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHRyYW5zcGFyZW50IDUlLCBibGFjayA5MCUpO1xcbiAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHRyYW5zcGFyZW50IDEwJSwgYmxhY2sgNzUlKTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5oZXJvVGV4dENvbnRhaW5lciB7XFxuICB3aWR0aDogMjdlbTtcXG4gIHBhZGRpbmc6MjBweCA2MHB4O1xcbiAgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmhlcm9UaXRsZSB7XFxuICB0ZXh0LWFsaWduOiBlbmQ7ICBcXG4gIGZvbnQtc2l6ZTogNjBweDtcXG5cXG59XFxuXFxuLmhlcm9UZXh0IHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5oZXJvQnRuIHtcXG4gIHBhZGRpbmc6IDEwcHggNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzYzKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0bi1jb2xvcik7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50aXRsZUJveCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vaW1hZ2VzL2RpdmlkZXIucG5nXFxcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAgXFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmaWx0ZXI6b3BhY2l0eSguNzUpO1xcbn1cXG5cXG4uc3RvcmVDb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuLnN0b3JlQ29udGVudCA+ICoge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLnN0b3JlQ29udGVudCBwIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xcbn1cXG5cXG4udGVzdGlSb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAwLCAxMDAsIDEwMCk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi50ZXN0aUF1dGhvciB7XFxuICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi5uYXZTZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLnJlc2VydmVSb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiA7XFxufVxcbi5yZXNlcnZlUm93IGltZyB7XFxuICB3aWR0aDogNjAwcHg7XFxuICBtYXJnaW46IDAgNDBweCA0cHg7XFxufVxcblxcbi5yZXNlcnZlUm93IGZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGdhcDogMjBweDtcXG59XFxuXFxubGFiZWwge1xcbiAgbWFyZ2luOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxufVxcblxcbmZvcm0gPiAqIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTs7XFxufVxcblxcbmZvcm0gPiAqID4gKiB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4ucmVzZXJ2ZVJvdyBidXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDc1JTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0bi1jb2xvcik7XFxufVxcblxcbi5tZW51Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDM1MHB4LCAxZnIpKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTUwcHg7XFxuICBnYXA6IDIwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubWVudUl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NDgpO1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5tZW51SXRlbSBpbWcge1xcbiAgbWF4LXdpZHRoOiA1MCU7XFxufVxcblxcbi5tZW51VGV4dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5tZW51VGV4dCA+IGJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG5cXG4ubWVudVRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG59XFxuXFxuLm1lbnVQcmljZSB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY3JlYXRlRGl2IH0gZnJvbSBcIi4uL2hlbHBGdW5jdGlvbnMvY3JlYXRlRGl2XCI7XG5pbXBvcnQgeyBjcmVhdGVUaXRsZSB9IGZyb20gXCIuLi9oZWxwRnVuY3Rpb25zL21ha2VUaXRsZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2VuQWJvdXQoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZURpdihbXCJhYm91dENvbnRhaW5lclwiLCBcIndyYXBwZXJcIl0pO1xuICBjb25zdCBhZGRyZXNzID0gY3JlYXRlRGl2KFwiYWJvdXRBZGRyZXNzXCIpO1xuICBhZGRyZXNzLmlubmVySFRNTCA9IFwiMjE3IEtpbmcgU3QgVyw8YnI+S2l0Y2hlbmVyLDxicj5PTiBOMkcgMUIxXCI7XG5cbiAgY29uc3QgbWFwID0gY3JlYXRlRGl2KFwibWFwXCIpO1xuICBtYXAuaW5uZXJIVE1MID1cbiAgICAnPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQyODk2LjQ1NjgxMjkxOTkzNSEyZC04MC40OTU0MjIyODQ1MDg3OSEzZDQzLjQ1MTA1OTM3OTEyODgzITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg4ODJiZjRmMzY3ZmVhNjZkJTNBMHhiMzBhZThkZjhkN2FhMDQxITJzS2lua2FrdSUyMEl6YWtheWEhNWUwITNtMiExc2VuITJzY2EhNHYxNjQ3Mzg2MzMzMzI5ITVtMiExc2VuITJzY2FcIiB3aWR0aD1cIjYwMFwiIGhlaWdodD1cIjQ1MFwiIHN0eWxlPVwiYm9yZGVyOjA7XCIgYWxsb3dmdWxsc2NyZWVuPVwiXCIgbG9hZGluZz1cImxhenlcIj48L2lmcmFtZT4nO1xuXG4gIGNvbnN0IGFkZHJlc3NDb24gPSBjcmVhdGVEaXYoXCJhZGRyZXNzQ29uXCIpO1xuICBhZGRyZXNzQ29uLmFwcGVuZChhZGRyZXNzLCBtYXApO1xuXG4gIGNvbnN0IHRpdGxlID0gY3JlYXRlVGl0bGUoXCJPdXIgQWRkcmVzc1wiKTtcblxuICBjb25zdCBtaXNzaW9uVGl0bGUgPSBjcmVhdGVUaXRsZShcIk91ciBNaXNzaW9uXCIpO1xuICBjb25zdCBtaXNzaW9uID0gY3JlYXRlRGl2KFxuICAgIFwibWlzc2lvblwiLFxuICAgIFwiSXMgdG8gcHJvdmlkZSB0aGUgYmVzdCB0YXN0aW5nIGZvb2QgYW5kIG1vc3QgY29tZm9ydGFibGUgZGluaWduIGV4cGVyaWVuY2UgZXZlciFcIlxuICApO1xuXG4gIGNvbnRhaW5lci5hcHBlbmQodGl0bGUsIGFkZHJlc3NDb24sIG1pc3Npb25UaXRsZSwgbWlzc2lvbik7XG4gIHJldHVybiBjb250YWluZXI7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVEaXYgfSBmcm9tIFwiLi4vaGVscEZ1bmN0aW9ucy9jcmVhdGVEaXZcIjtcbmltcG9ydCB7IGNyZWF0ZVRpdGxlIH0gZnJvbSBcIi4uL2hlbHBGdW5jdGlvbnMvbWFrZVRpdGxlXCI7XG5pbXBvcnQgeyBnZW5Gb3JtIH0gZnJvbSBcIi4uL2hlbHBGdW5jdGlvbnMvZ2VuRm9ybVwiO1xuaW1wb3J0IHRlc3RJbWFnZSBmcm9tIFwiLi9pbWFnZXMvRmFuY3lQbGF0ZTEuanBnXCI7XG5pbXBvcnQgc2VhdGluZ0ltYWdlIGZyb20gXCIuL2ltYWdlcy9zZWF0aW5nLmpwZ1wiO1xuXG5mdW5jdGlvbiBnZW5IZXJvKCkge1xuICBjb25zdCByb3cgPSBjcmVhdGVEaXYoW1wicm93XCIsIFwiaGVyb1Jvd1wiXSk7XG4gIC8vIGNvbnN0IGltYWdlRG9jID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uc3QgbXlJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBteUltYWdlLnNyYyA9IHRlc3RJbWFnZTtcblxuICBjb25zdCB0ZXh0SG9sZGVyID0gY3JlYXRlRGl2KFwiaGVyb1RleHRDb250YWluZXJcIik7XG4gIGNvbnN0IHRpdGxlID0gY3JlYXRlRGl2KFwiaGVyb1RpdGxlXCIsIFwiTmV3IE1lbnUgSXRlbXNcIik7XG4gIGNvbnN0IGRlc2MgPSBjcmVhdGVEaXYoXG4gICAgXCJoZXJvVGV4dFwiLFxuICAgIFwiQWxsIG5ldyBtZW51IGl0ZW1zIGZvciB5b3UgdG8gZXhwbG9yZSEgVmVzdGlidWx1bSB2ZWhpY3VsYSBhbnRlIHV0IHRpbmNpZHVudCBjb21tb2RvLiBOYW0gZGFwaWJ1cyBmZXVnaWF0IGRhcGlidXMuIE5hbSB2ZW5lbmF0aXMgc29sbGljaXR1ZGluIGNvbmRpbWVudHVtLiBEb25lYyBhYyBzb2RhbGVzIGxlby4gUHJhZXNlbnQgbm9uIGZhY2lsaXNpcyB0dXJwaXMuIEN1cmFiaXR1ciBhYyBzZW0gYWNjdW1zYW4sIHZhcml1cyBuaWJoIGEsIGx1Y3R1cyBxdWFtLlwiXG4gICk7XG5cbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnRuLmNsYXNzTGlzdC5hZGQoXCJoZXJvQnRuXCIpO1xuICBidG4uaW5uZXJUZXh0ID0gXCJNZW51XCI7XG5cbiAgdGV4dEhvbGRlci5hcHBlbmQodGl0bGUsIGRlc2MsIGJ0bik7XG5cbiAgcm93LmFwcGVuZCh0ZXh0SG9sZGVyLCBteUltYWdlKTtcbiAgcmV0dXJuIHJvdztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbkluZm8oKSB7XG4gIGNvbnN0IHJvdyA9IGNyZWF0ZURpdihcInJvd1wiKTtcbiAgY29uc3QgZGl2aWRlciA9IGNyZWF0ZVRpdGxlKFwiSW5mb1wiKTtcbiAgY29uc3QgY29udGVudCA9IGNyZWF0ZURpdihcInN0b3JlQ29udGVudFwiKTtcblxuICBjb25zdCBzdG9yZUhvdXJzID0gY3JlYXRlRGl2KFwic3RvcmVIb3Vyc1wiLCBcIlN0b3JlIEhvdXJzXCIpO1xuICBjb25zdCBzdG9yZUhvdXJzcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBzdG9yZUhvdXJzcGFyYS5pbm5lckhUTUwgPVxuICAgIFwiU3VuZGF5OiAxMlBNIC0gMTJBTTxicj5Nb25kYXk6IDEyUE0gLSAxMkFNPGJyPlR1ZXNkYXk6IDEyUE0gLSAxMkFNIDxicj5XZWRuZXNkYXk6IDEyUE0gLSAxMkFNPGJyPlRodXJzZGF5OiAxMlBNIC0gMTJBTTxicj5GcmlkYXk6IDEyUE0gLSAxMkFNPGJyPlNhdHVyZGF5OiAxMlBNIC0gMTJBTVwiO1xuXG4gIHN0b3JlSG91cnMuYXBwZW5kKHN0b3JlSG91cnNwYXJhKTtcblxuICBjb25zdCBzdG9yZUxvY2F0aW9uID0gY3JlYXRlRGl2KFwic3RvcmVMb2NhdGlvblwiLCBcIlN0b3JlIExvY2F0aW9uXCIpO1xuICBjb25zdCBzdG9yZUxvY2F0aW9uUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBzdG9yZUxvY2F0aW9uUGFyYS5pbm5lckhUTUwgPSBcIjIxNyBLaW5nIFN0IFcsPGJyPktpdGNoZW5lciw8YnI+T04gTjJHIDFCMVwiO1xuXG4gIHN0b3JlTG9jYXRpb24uYXBwZW5kKHN0b3JlTG9jYXRpb25QYXJhKTtcblxuICBjb250ZW50LmFwcGVuZChzdG9yZUhvdXJzLCBzdG9yZUxvY2F0aW9uKTtcbiAgcm93LmFwcGVuZChkaXZpZGVyLCBjb250ZW50KTtcbiAgcmV0dXJuIHJvdztcbn1cblxuZnVuY3Rpb24gZ2VuVGVzdGkoKSB7XG4gIGNvbnN0IHJvdyA9IGNyZWF0ZURpdihbXCJyb3dcIiwgXCJ0ZXN0aVJvd1wiXSk7XG4gIGNvbnN0IHRlc3RpbW9uaWFsID0gY3JlYXRlRGl2KFxuICAgIFwidGVzdGltb25pYWxcIixcbiAgICBcIlRISVMgSVMgVEhFIEJFU1QgUExBQ0UgRVZFUi4gVEFLRSBFVkVSWU9ORSBIRVJFIVwiXG4gICk7XG4gIGNvbnN0IHRlc3RpQXV0aG9yID0gY3JlYXRlRGl2KFwidGVzdGlBdXRob3JcIiwgXCItU29tZSBSYW5kb20gR3V5XCIpO1xuXG4gIHJvdy5hcHBlbmQodGVzdGltb25pYWwsIHRlc3RpQXV0aG9yKTtcbiAgcmV0dXJuIHJvdztcbn1cblxuZnVuY3Rpb24gZ2VuUmVzZXJ2YXRpb24oKSB7XG4gIGNvbnN0IHJvdyA9IGNyZWF0ZURpdihcInJvd1wiKTtcbiAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRGl2KFwicmVzZXJ2ZVJvd1wiKTtcbiAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgaW1hZ2Uuc3JjID0gc2VhdGluZ0ltYWdlO1xuICBjb25zdCBkaXZpZGVyID0gY3JlYXRlVGl0bGUoXCJSZXNlcnZhdGlvbnNcIik7XG5cbiAgY29uc3QgZm9ybSA9IGdlbkZvcm0oKTtcblxuICBjb250YWluZXIuYXBwZW5kKGZvcm0sIGltYWdlKTtcbiAgcm93LmFwcGVuZChkaXZpZGVyLCBjb250YWluZXIpO1xuICByZXR1cm4gcm93O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuSG9tZSgpIHtcbiAgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZURpdihcIndyYXBwZXJcIik7XG5cbiAgY29uc3QgaGVyb1JvdyA9IGdlbkhlcm8oKTtcbiAgY29uc3QgaW5mb1JvdyA9IGdlbkluZm8oKTtcbiAgY29uc3QgdGVzdGlSb3cgPSBnZW5UZXN0aSgpO1xuICBjb25zdCByZXNlcnZlUm93ID0gZ2VuUmVzZXJ2YXRpb24oKTtcblxuICAvL2FwcGVuZCBjb250ZW50IGFuZCByZXR1cm4gTm9kZVxuICB3cmFwcGVyLmFwcGVuZChoZXJvUm93LCBpbmZvUm93LCB0ZXN0aVJvdywgcmVzZXJ2ZVJvdyk7XG4gIHJldHVybiB3cmFwcGVyO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlRGl2IH0gZnJvbSBcIi4uL2hlbHBGdW5jdGlvbnMvY3JlYXRlRGl2XCI7XG5cbi8vIE1lbnUgSW1hZ2VzXG5pbXBvcnQgcGl6emFQaWMgZnJvbSBcIi4uL3NyYy9pbWFnZXMvbWVudS9waXp6YS5qcGdcIjtcbmltcG9ydCBwYXN0YVBpYyBmcm9tIFwiLi4vc3JjL2ltYWdlcy9tZW51L3Bhc3RhLmpwZ1wiO1xuaW1wb3J0IGNoaWNrZW5QaWMgZnJvbSBcIi4uL3NyYy9pbWFnZXMvbWVudS9jaGlja2VuLmpwZ1wiO1xuaW1wb3J0IHNlYVBpYyBmcm9tIFwiLi4vc3JjL2ltYWdlcy9tZW51L3NlYWZvb2QuanBnXCI7XG5pbXBvcnQgYnVyZ2VyUGljIGZyb20gXCIuLi9zcmMvaW1hZ2VzL21lbnUvYnVyZ2VyLmpwZ1wiO1xuaW1wb3J0IHdhZmZsZVBpYyBmcm9tIFwiLi4vc3JjL2ltYWdlcy9tZW51L3dhZmZsZXMuanBnXCI7XG5pbXBvcnQgZGVzZXJ0UGljIGZyb20gXCIuLi9zcmMvaW1hZ2VzL21lbnUvZGVzZXJ0LmpwZ1wiO1xuaW1wb3J0IHNrZXdlclBpYyBmcm9tIFwiLi4vc3JjL2ltYWdlcy9tZW51L3NrZXdlci5qcGdcIjtcbmltcG9ydCBmcnVpdFBpYyBmcm9tIFwiLi4vc3JjL2ltYWdlcy9tZW51L2ZydWl0LmpwZ1wiO1xuXG5jb25zdCBtZW51SXRlbXMgPSB7XG4gIHBpenphOiBbXCJQaXp6YVwiLCBcIiQxMC45OVwiLCBcIkNIRUVTWSBDSEVFU1kgQ0hFRVNZXCIsIHBpenphUGljXSxcbiAgcGFzdGE6IFtcIlBhc3RhXCIsIFwiJDEwLjk5XCIsIFwiIHN0aWxsIENIRUVTWSBDSEVFU1kgQ0hFRVNZXCIsIHBhc3RhUGljXSxcbiAgY2hpY2tlbjogW1wiQ2hpY2tlblwiLCBcIiQxMC45OVwiLCBcIiBOb3QgYXQgYWxsIGNoZWVzeVwiLCBjaGlja2VuUGljXSxcbiAgc2VhZm9vZDogW1wiU2VhZm9vZFwiLCBcIiQxMC45OVwiLCBcIiBMZXRzIGhvcGUgbm90XCIsIHNlYVBpY10sXG4gIGJ1cmdlcjogW1wiQnVyZ2VyXCIsIFwiJDEwLjk5XCIsIFwiIGtpbmRhIENoZWVzeVwiLCBidXJnZXJQaWNdLFxuICB3YWZmbGVzOiBbXCJXYWZmbGVzXCIsIFwiJDEwLjk5XCIsIFwiIGtpbmRhIERlbGVpY2lvc1wiLCB3YWZmbGVQaWNdLFxuICBkZXNlcnQ6IFtcIkRlc2VydFwiLCBcIiQxMC45OVwiLCBcIiBGbHVmZnlcIiwgZGVzZXJ0UGljXSxcbiAgc2tld2VyOiBbXCJTa2V3ZXJcIiwgXCIkMTAuOTlcIiwgXCIgU29tZWh0aW5nIG9uIGEgc3RpY2tcIiwgc2tld2VyUGljXSxcbiAgZnJ1aXQ6IFtcIkZydWl0IEJvd2xcIiwgXCIkMTAuOTlcIiwgXCIgU29tZWh0aW5nIG9uIGEgc3RpY2tcIiwgZnJ1aXRQaWNdLFxufTtcblxuZnVuY3Rpb24gbWFrZUl0ZW0obmFtZSwgcHJpY2UsIGRlc2MsIHBpYykge1xuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVEaXYoXCJtZW51SXRlbVwiKTtcblxuICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBpbWFnZS5zcmMgPSBwaWM7XG5cbiAgY29uc3QgaW5mbyA9IGNyZWF0ZURpdihcIm1lbnVUZXh0XCIpO1xuICBjb25zdCBpbmZvVGl0bGUgPSBjcmVhdGVEaXYoXCJtZW51VGl0bGVcIiwgbmFtZSk7XG4gIGNvbnN0IGluZm9QcmljZSA9IGNyZWF0ZURpdihcIm1lbnVQcmljZVwiLCBwcmljZSk7XG4gIGNvbnN0IGluZm9EZXNjID0gY3JlYXRlRGl2KFwibWVueURlc2NcIiwgZGVzYyk7XG5cbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnV0dG9uLmlubmVyVGV4dCA9IFwiQWRkIHRvIENhcnRcIjtcblxuICBpbmZvLmFwcGVuZChpbmZvVGl0bGUsIGluZm9QcmljZSwgaW5mb0Rlc2MsIGJ1dHRvbik7XG5cbiAgY29udGFpbmVyLmFwcGVuZChpbWFnZSwgaW5mbyk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbk1lbnUoKSB7XG4gIGxldCBjb250YWluZXIgPSBjcmVhdGVEaXYoW1wibWVudUNvbnRhaW5lclwiLCBcIndyYXBwZXJcIl0pO1xuXG4gIGZvciAoY29uc3QgaXRlbSBpbiBtZW51SXRlbXMpIHtcbiAgICBjb250YWluZXIuYXBwZW5kKG1ha2VJdGVtKC4uLm1lbnVJdGVtc1tpdGVtXSkpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJ0ZW1wbGF0ZVwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGdlbkhvbWUgfSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgeyBnZW5NZW51IH0gZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IHsgZ2VuQWJvdXQgfSBmcm9tIFwiLi9hYm91dFwiO1xuaW1wb3J0IHsgY3JlYXRlRGl2IH0gZnJvbSBcIi4uL2hlbHBGdW5jdGlvbnMvY3JlYXRlRGl2XCI7XG5cbmltcG9ydCBmYWNlYm9vayBmcm9tIFwiLi4vc3JjL2ltYWdlcy9mYWNlYm9vay5wbmdcIjtcbmltcG9ydCB0d2l0dGVyIGZyb20gXCIuLi9zcmMvaW1hZ2VzL3R3aXR0ZXIucG5nXCI7XG5pbXBvcnQgaW5zdGFncmFtIGZyb20gXCIuLi9zcmMvaW1hZ2VzL2luc3RhZ3JhbS5wbmdcIjtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbmdlbkhvbWUoKTtcblxuZnVuY3Rpb24gd2lwZU1haW4oKSB7XG4gIGNvbnN0IG1haW5Db24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcblxuICB3aGlsZSAobWFpbkNvbi5maXJzdENoaWxkKSB7XG4gICAgbWFpbkNvbi5yZW1vdmVDaGlsZChtYWluQ29uLmZpcnN0Q2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlUmVuZGVyKG5vZGUgPSBcImhvbWVcIikge1xuICB3aXBlTWFpbigpO1xuXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcblxuICBsZXQgY29udGVudDtcbiAgaWYgKG5vZGUgPT09IFwiYWJvdXRcIikge1xuICAgIC8vIEdlbmVyYXRlIEFib3V0XG4gICAgY29udGVudCA9IGdlbkFib3V0KCk7XG4gICAgY29uc29sZS5sb2coXCJBYm91dCBQYWdlIEdlblwiKTtcbiAgfSBlbHNlIGlmIChub2RlID09PSBcIm1lbnVcIikge1xuICAgIC8vIEdlbmVyYXRlIE1lbnVcbiAgICBjb250ZW50ID0gZ2VuTWVudSgpO1xuICAgIGNvbnNvbGUubG9nKFwiTWVudSBQYWdlIEdlblwiKTtcbiAgfSBlbHNlIHtcbiAgICBjb250ZW50ID0gZ2VuSG9tZSgpO1xuICB9XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChjb250ZW50KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyTmF2KCkge1xuICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuXG4gIC8vIENyZWF0ZSBOYXYgTG9nb1xuICBjb25zdCBuYXZMb2dvID0gY3JlYXRlRGl2KFwibmF2LWxvZ1wiLCBcIvCfpaFcIik7XG5cbiAgLy8gQ3JlYXRlIE5hdiBCdXR0b24gTGlzdFxuICBjb25zdCBuYXZMaXN0ID0gY3JlYXRlRGl2KFwibmF2LWJ0bi1saXN0XCIpO1xuXG4gIGNvbnN0IG5hdkJ0bkhvbWUgPSBjcmVhdGVEaXYoW1wibmF2LWJ0blwiLCBcIm5hdkhvbWVcIiwgXCJuYXZTZWxlY3RlZFwiXSwgXCJIb21lXCIpOyAvLyBIb21lIEJ0blxuICBuYXZCdG5Ib21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2U2VsZWN0ZWRcIikuY2xhc3NMaXN0LnJlbW92ZShcIm5hdlNlbGVjdGVkXCIpO1xuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJuYXZTZWxlY3RlZFwiKTtcbiAgICByZVJlbmRlcihcImhvbWVcIik7XG4gIH0pO1xuXG4gIGNvbnN0IG5hdkJ0bk1lbnUgPSBjcmVhdGVEaXYoW1wibmF2LWJ0blwiLCBcIm5hdk1lbnVcIl0sIFwiTWVudVwiKTsgLy8gTWVudSBCdXR0b25cbiAgbmF2QnRuTWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdlNlbGVjdGVkXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZTZWxlY3RlZFwiKTtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwibmF2U2VsZWN0ZWRcIik7XG4gICAgcmVSZW5kZXIoXCJtZW51XCIpO1xuICB9KTtcblxuICBjb25zdCBuYXZCdG5BYm91dCA9IGNyZWF0ZURpdihbXCJuYXYtYnRuXCIsIFwibmF2QWJvdXRcIl0sIFwiQWJvdXRcIik7IC8vIEFib3V0IEJ1dHRvblxuICBuYXZCdG5BYm91dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdlNlbGVjdGVkXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZTZWxlY3RlZFwiKTtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwibmF2U2VsZWN0ZWRcIik7XG4gICAgcmVSZW5kZXIoXCJhYm91dFwiKTtcbiAgfSk7XG5cbiAgLy8gQWRkIGJ1dHRvbnMgdG8gbmF2TGlzdFxuICBuYXZMaXN0LmFwcGVuZChuYXZCdG5Ib21lLCBuYXZCdG5NZW51LCBuYXZCdG5BYm91dCk7XG5cbiAgLy8gQ3JlYXRlIFNvY2lhbCBCdXR0b25zXG4gIGNvbnN0IG5hdlNvY2lhbHMgPSBjcmVhdGVEaXYoXCJuYXYtc29jaWFsc1wiKTtcblxuICAvLyAtLS0gRmFjZWJvb2sgSWNvbiAtLS1cbiAgY29uc3Qgc29jaWFsRmFjZSA9IGNyZWF0ZURpdihcInNvY2lhbC1idG5cIik7XG4gIGNvbnN0IHNvY2lhbEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgc29jaWFsSWNvbi5zcmMgPSBmYWNlYm9vaztcbiAgc29jaWFsRmFjZS5hcHBlbmQoc29jaWFsSWNvbik7XG5cbiAgLy8gLS0tIFR3aXR0ZXIgSWNvbiAtLS1cbiAgY29uc3Qgc29jaWFsVHdpdCA9IGNyZWF0ZURpdihcInNvY2lhbC1idG5cIik7XG4gIGNvbnN0IHR3aXR0ZXJJY29uID0gbmV3IEltYWdlKCk7XG4gIHR3aXR0ZXJJY29uLnNyYyA9IHR3aXR0ZXI7XG4gIHNvY2lhbFR3aXQuYXBwZW5kKHR3aXR0ZXJJY29uKTtcblxuICAvLyAtLS0gSW5zdGFncmFtIEljb24gLS0tXG4gIGNvbnN0IHNvY2lhbEluc3QgPSBjcmVhdGVEaXYoXCJzb2NpYWwtYnRuXCIpO1xuICBjb25zdCBpbnN0YUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgaW5zdGFJY29uLnNyYyA9IGluc3RhZ3JhbTtcbiAgc29jaWFsSW5zdC5hcHBlbmQoaW5zdGFJY29uKTtcblxuICBuYXZTb2NpYWxzLmFwcGVuZChzb2NpYWxGYWNlLCBzb2NpYWxUd2l0LCBzb2NpYWxJbnN0KTtcblxuICAvLyBBZGQgRWxlbWVudHMgdG8gbmF2YmFyXG4gIG5hdmJhci5hcHBlbmQobmF2TG9nbywgbmF2TGlzdCwgbmF2U29jaWFscyk7XG5cbiAgLy8gUmV0dXJuIE5hdmJhclxuICByZXR1cm4gbmF2YmFyO1xufVxuXG5mdW5jdGlvbiByZW5kZXJNYWluKCkge1xuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIGNvbnN0IGNvbnRlbnQgPSBnZW5Ib21lKCk7XG5cbiAgbWFpbkNvbnRhaW5lci5hcHBlbmQoY29udGVudCk7XG4gIHJldHVybiBtYWluQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiByZW5kZXJGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG5cbiAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQ29udGFpbmVyKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBjb250ZW50LmFwcGVuZChyZW5kZXJOYXYoKSwgcmVuZGVyTWFpbigpLCByZW5kZXJGb290ZXIoKSk7XG59XG5cbnJlbmRlckNvbnRhaW5lcigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9