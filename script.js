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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
  } else if (node === "menu") {
    // Generate Menu
    content = (0,_menu__WEBPACK_IMPORTED_MODULE_2__.genMenu)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFB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c291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1zaW5nbGUtcGFnZXIvLi9oZWxwRnVuY3Rpb25zL2NyZWF0ZURpdi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXNpbmdsZS1wYWdlci8uL2hlbHBGdW5jdGlvbnMvZ2VuRm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXNpbmdsZS1wYWdlci8uL2hlbHBGdW5jdGlvbnMvbWFrZVRpdGxlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtc2luZ2xlLXBhZ2VyLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXNpbmdsZS1wYWdlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1zaW5nbGUtcGFnZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtc2luZ2xlLXBhZ2VyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1zaW5nbGUtcGFnZXIvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1zaW5nbGUtcGFnZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1zaW5nbGUtcGFnZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtc2luZ2xlLXBhZ2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtc2luZ2xlLXBhZ2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtc2luZ2xlLXBhZ2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1zaW5nbGUtcGFnZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXNpbmdsZS1wYWdlci8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXNpbmdsZS1wYWdlci8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtc2luZ2xlLXBhZ2VyLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1zaW5nbGUtcGFnZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1zaW5nbGUtcGFnZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1zaW5nbGUtcGFnZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtc2luZ2xlLXBhZ2VyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1zaW5nbGUtcGFnZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXNpbmdsZS1wYWdlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtc2luZ2xlLXBhZ2VyL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtc2luZ2xlLXBhZ2VyL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtc2luZ2xlLXBhZ2VyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEaXYoY2xhc3NOYW1lLCB0ZXh0Q29udGVudCA9IFwiXCIpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgaWYgKHR5cGVvZiBjbGFzc05hbWUgPT0gXCJvYmplY3RcIikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xhc3NOYW1lLmxlbmd0aDsgaSsrKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lW2ldKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIH1cblxuICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVEaXYgfSBmcm9tIFwiLi9jcmVhdGVEaXZcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdlbkZvcm0oKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblxuICAvLyAtLS0gRmlyc3QgTmFtZSAtLS1cbiAgY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBuYW1lTGFiZWwuaW5uZXJUZXh0ID0gXCJGaXJzdCBOYW1lOlwiO1xuICBuYW1lTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZm9ybU5hbWVcIik7XG4gIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgbmFtZUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgbmFtZUlucHV0LmlkID0gXCJmb3JtTmFtZVwiO1xuXG4gIGNvbnN0IGZpcnN0Um93ID0gY3JlYXRlRGl2KFwibmFtZVJvd1wiKTtcbiAgZmlyc3RSb3cuYXBwZW5kKG5hbWVMYWJlbCwgbmFtZUlucHV0KTtcblxuICAvLyAtLS0gTGFzdCBOYW1lIC0tLVxuICBjb25zdCBsYXN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhc3RMYWJlbC5pbm5lclRleHQgPSBcIkxhc3QgTmFtZTpcIjtcbiAgbGFzdExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImZvcm1MYXN0XCIpO1xuICBjb25zdCBsYXN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGxhc3RJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gIGxhc3RJbnB1dC5pZCA9IFwiZm9ybUxhc3RcIjtcblxuICBjb25zdCBsYXN0Um93ID0gY3JlYXRlRGl2KFwibGFzdFJvd1wiKTtcbiAgbGFzdFJvdy5hcHBlbmQobGFzdExhYmVsLCBsYXN0SW5wdXQpO1xuXG4gIC8vIC0tLSBFbWFpbCAtLS1cbiAgY29uc3QgZW1haWxMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgZW1haWxMYWJlbC5pbm5lclRleHQgPSBcIkVtYWlsOlwiO1xuICBlbWFpbExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImVtYWlsSW5wdXRcIik7XG4gIGNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGVtYWlsSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICBlbWFpbElucHV0LmlkID0gXCJlbWFpbElucHV0XCI7XG5cbiAgY29uc3QgZW1haWxSb3cgPSBjcmVhdGVEaXYoXCJlbWFpbFJvd1wiKTtcbiAgZW1haWxSb3cuYXBwZW5kKGVtYWlsTGFiZWwsIGVtYWlsSW5wdXQpO1xuXG4gIC8vIC0tLSBQaG9uZSBOdW1iZXIgLS0tXG4gIGNvbnN0IHBob25lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIHBob25lTGFiZWwuaW5uZXJUZXh0ID0gXCJQaG9uZTpcIjtcbiAgcGhvbmVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwaG9uZUlucHV0XCIpO1xuICBjb25zdCBwaG9uZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBwaG9uZUlucHV0LnR5cGUgPSBcIm51bWJlclwiO1xuICBwaG9uZUlucHV0LmlkID0gXCJwaG9uZUlucHV0XCI7XG5cbiAgY29uc3QgcGhvbmVSb3cgPSBjcmVhdGVEaXYoXCJwaG9uZVJvd1wiKTtcbiAgcGhvbmVSb3cuYXBwZW5kKHBob25lTGFiZWwsIHBob25lSW5wdXQpO1xuXG4gIC8vIC0tLSBTdWJtaXQgQnV0dG9uIC0tLVxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidXR0b24uaW5uZXJUZXh0ID0gXCJSZXNlcnZlXCI7XG4gIGZvcm0uYXBwZW5kKGZpcnN0Um93LCBsYXN0Um93LCBlbWFpbFJvdywgcGhvbmVSb3csIGJ1dHRvbik7XG4gIHJldHVybiBmb3JtO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlRGl2IH0gZnJvbSBcIi4vY3JlYXRlRGl2XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUaXRsZSh0aXRsZSkge1xuICBjb25zdCB0aXRsZUJveCA9IGNyZWF0ZURpdihcInRpdGxlQm94XCIpO1xuICB0aXRsZUJveC5pbm5lclRleHQgPSB0aXRsZTtcblxuICByZXR1cm4gdGl0bGVCb3g7XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvbWVudS93b29kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2RpdmlkZXIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1tYWluLWNvbG9yOiBkYXJrZ3JleTtcXG4gIC0tYnRuLWNvbG9yOiByZ2IoMTg5LCAwLCAwKTtcXG59XFxuXFxuYm9keSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG5cXG59XFxuXFxuaW1nIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxubmF2IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA3NXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUxLCA1MSwgNTEpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDI4cHg7XFxufVxcblxcbi8qIERlYnVnZ2luZyBQdXJwb3NlcyBvbmx5LCByZW1vdmUgYmVmb3JlIHByb2R1Y3Rpb24gKi9cXG5uYXYgPiAqIHtcXG4gbWluLXdpZHRoOiA0MHB4O1xcbn1cXG5cXG5tYWluIHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbmZvb3RlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNzVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcXG59XFxuXFxuLm5hdi1idG4tbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAzMHB4O1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi5uYXYtbG9nIHtcXG4gIGZvbnQtc2l6ZTogNjBweDtcXG4gIHBhZGRpbmctbGVmdDogNDBweDtcXG59XFxuXFxuLm5hdi1idG4ge1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uYXYtc29jaWFscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZy1yaWdodDogNDBweDtcXG59XFxuXFxuLmFkZHJlc3NDb24ge1xcbiAgd2lkdGg6IDEyMDBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbn1cXG5cXG4uYWJvdXRDb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1Nyk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtaW4taGVpZ2h0OiA4MHZoO1xcbn1cXG5cXG4uYWJvdXRBZGRyZXNzIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG59XFxuXFxuLm1hcCB7XFxuICBtYXJnaW46IDQwcHg7XFxufVxcblxcbi5taXNzaW9uIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMzZweDtcXG59XFxuXFxuLnNvY2lhbC1idG4ge1xcbiAgd2lkdGg6IDM1cHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIG1hcmdpbjogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc29jaWFsLWJ0biA+IGltZyB7XFxuICBtYXgtd2lkdGg6IDgwJTtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICBtYXJnaW46IDI1cHggYXV0bztcXG59XFxuXFxuLnJvdyB7XFxuICBtaW4taGVpZ2h0OiAyMDBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW46IDIwcHggMDtcXG59XFxuXFxuLnJvdzpudGgtY2hpbGQoMm4pe1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbn1cXG5cXG4uaGVyb1JvdyB7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgb3ZlcmZsb3c6aGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5oZXJvUm93ID4gKiB7XFxuICB6LWluZGV4OiAyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaGVyb1JvdyA+IGltZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC03MCU7XFxuICBsZWZ0OiAwcHg7XFxuICBoZWlnaHQ6IDIwMCU7XFxuICBtaW4td2lkdGg6IDg1MHB4O1xcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgdHJhbnNwYXJlbnQgNSUsIGJsYWNrIDkwJSk7XFxuICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgdHJhbnNwYXJlbnQgMTAlLCBibGFjayA3NSUpO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmhlcm9UZXh0Q29udGFpbmVyIHtcXG4gIHdpZHRoOiAyN2VtO1xcbiAgcGFkZGluZzoyMHB4IDYwcHg7XFxuICBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uaGVyb1RpdGxlIHtcXG4gIHRleHQtYWxpZ246IGVuZDsgIFxcbiAgZm9udC1zaXplOiA2MHB4O1xcblxcbn1cXG5cXG4uaGVyb1RleHQge1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmhlcm9CdG4ge1xcbiAgcGFkZGluZzogMTBweCA1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNjMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuLWNvbG9yKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRpdGxlQm94IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAgXFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmaWx0ZXI6b3BhY2l0eSguNzUpO1xcbn1cXG5cXG4uc3RvcmVDb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuLnN0b3JlQ29udGVudCA+ICoge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLnN0b3JlQ29udGVudCBwIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xcbn1cXG5cXG4udGVzdGlSb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAwLCAxMDAsIDEwMCk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi50ZXN0aUF1dGhvciB7XFxuICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi5uYXZTZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLnJlc2VydmVSb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiA7XFxufVxcbi5yZXNlcnZlUm93IGltZyB7XFxuICB3aWR0aDogNjAwcHg7XFxuICBtYXJnaW46IDAgNDBweCA0cHg7XFxufVxcblxcbi5yZXNlcnZlUm93IGZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGdhcDogMjBweDtcXG59XFxuXFxubGFiZWwge1xcbiAgbWFyZ2luOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxufVxcblxcbmZvcm0gPiAqIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTs7XFxufVxcblxcbmZvcm0gPiAqID4gKiB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4ucmVzZXJ2ZVJvdyBidXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDc1JTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0bi1jb2xvcik7XFxufVxcblxcbi5tZW51Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDM1MHB4LCAxZnIpKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTUwcHg7XFxuICBnYXA6IDIwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubWVudUl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NDgpO1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5tZW51SXRlbSBpbWcge1xcbiAgbWF4LXdpZHRoOiA1MCU7XFxufVxcblxcbi5tZW51VGV4dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5tZW51VGV4dCA+IGJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG5cXG4ubWVudVRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG59XFxuXFxuLm1lbnVQcmljZSB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsbURBQXlDOztBQUUzQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZ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QUF5QjtFQUN6QixZQUFZO0VBQ1osU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJEQUEyRDtFQUMzRCx5QkFBeUI7RUFDekIsU0FBUztFQUNULG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLGFBQWE7RUFDYixhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsT0FBTztBQUNUOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbjpyb290IHtcXG4gIC0tbWFpbi1jb2xvcjogZGFya2dyZXk7XFxuICAtLWJ0bi1jb2xvcjogcmdiKDE4OSwgMCwgMCk7XFxufVxcblxcbmJvZHkge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJhY2tncm91bmQ6IHVybCgnLi9pbWFnZXMvbWVudS93b29kLmpwZycpO1xcblxcbn1cXG5cXG5pbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5uYXYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDc1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG59XFxuXFxuLyogRGVidWdnaW5nIFB1cnBvc2VzIG9ubHksIHJlbW92ZSBiZWZvcmUgcHJvZHVjdGlvbiAqL1xcbm5hdiA+ICoge1xcbiBtaW4td2lkdGg6IDQwcHg7XFxufVxcblxcbm1haW4ge1xcbiAgZmxleDogMTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA3NXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUxLCA1MSwgNTEpO1xcbn1cXG5cXG4ubmF2LWJ0bi1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDMwcHg7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLm5hdi1sb2cge1xcbiAgZm9udC1zaXplOiA2MHB4O1xcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xcbn1cXG5cXG4ubmF2LWJ0biB7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5hdi1zb2NpYWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xcbn1cXG5cXG4uYWRkcmVzc0NvbiB7XFxuICB3aWR0aDogMTIwMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxufVxcblxcbi5hYm91dENvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjU3KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1pbi1oZWlnaHQ6IDgwdmg7XFxufVxcblxcbi5hYm91dEFkZHJlc3Mge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZm9udC1zaXplOiA0OHB4O1xcbn1cXG5cXG4ubWFwIHtcXG4gIG1hcmdpbjogNDBweDtcXG59XFxuXFxuLm1pc3Npb24ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbn1cXG5cXG4uc29jaWFsLWJ0biB7XFxuICB3aWR0aDogMzVweDtcXG4gIGhlaWdodDogMzVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zb2NpYWwtYnRuID4gaW1nIHtcXG4gIG1heC13aWR0aDogODAlO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIG1hcmdpbjogMjVweCBhdXRvO1xcbn1cXG5cXG4ucm93IHtcXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbjogMjBweCAwO1xcbn1cXG5cXG4ucm93Om50aC1jaGlsZCgybil7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxufVxcblxcbi5oZXJvUm93IHtcXG4gIGhlaWdodDogMzAwcHg7XFxuICBvdmVyZmxvdzpoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmhlcm9Sb3cgPiAqIHtcXG4gIHotaW5kZXg6IDI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5oZXJvUm93ID4gaW1nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTcwJTtcXG4gIGxlZnQ6IDBweDtcXG4gIGhlaWdodDogMjAwJTtcXG4gIG1pbi13aWR0aDogODUwcHg7XFxuICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCB0cmFuc3BhcmVudCA1JSwgYmxhY2sgOTAlKTtcXG4gIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCB0cmFuc3BhcmVudCAxMCUsIGJsYWNrIDc1JSk7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uaGVyb1RleHRDb250YWluZXIge1xcbiAgd2lkdGg6IDI3ZW07XFxuICBwYWRkaW5nOjIwcHggNjBweDtcXG4gIFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5oZXJvVGl0bGUge1xcbiAgdGV4dC1hbGlnbjogZW5kOyAgXFxuICBmb250LXNpemU6IDYwcHg7XFxuXFxufVxcblxcbi5oZXJvVGV4dCB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uaGVyb0J0biB7XFxuICBwYWRkaW5nOiAxMHB4IDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM2Myk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG4tY29sb3IpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGl0bGVCb3gge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltYWdlcy9kaXZpZGVyLnBuZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgIFxcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgZmlsdGVyOm9wYWNpdHkoLjc1KTtcXG59XFxuXFxuLnN0b3JlQ29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDI1cHg7XFxufVxcblxcbi5zdG9yZUNvbnRlbnQgPiAqIHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5zdG9yZUNvbnRlbnQgcCB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBtYXJnaW46IDEwcHg7XFxuICBsaW5lLWhlaWdodDogMTUwJTtcXG59XFxuXFxuLnRlc3RpUm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMCwgMTAwLCAxMDApO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udGVzdGlBdXRob3Ige1xcbiAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4ubmF2U2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5yZXNlcnZlUm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogO1xcbn1cXG4ucmVzZXJ2ZVJvdyBpbWcge1xcbiAgd2lkdGg6IDYwMHB4O1xcbiAgbWFyZ2luOiAwIDQwcHggNHB4O1xcbn1cXG5cXG4ucmVzZXJ2ZVJvdyBmb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBtYXJnaW46IGF1dG87XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbmxhYmVsIHtcXG4gIG1hcmdpbjogNXB4O1xcbiAgdGV4dC1hbGlnbjogZW5kO1xcbn1cXG5cXG5mb3JtID4gKiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7O1xcbn1cXG5cXG5mb3JtID4gKiA+ICoge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLnJlc2VydmVSb3cgYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiA3NSU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG4tY29sb3IpO1xcbn1cXG5cXG4ubWVudUNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNTBweCwgMWZyKSk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1MHB4O1xcbiAgZ2FwOiAyMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1lbnVJdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQ4KTtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubWVudUl0ZW0gaW1nIHtcXG4gIG1heC13aWR0aDogNTAlO1xcbn1cXG5cXG4ubWVudVRleHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4ubWVudVRleHQgPiBidXR0b24ge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuXFxuLm1lbnVUaXRsZSB7XFxuICBmb250LXNpemU6IDI4cHg7XFxufVxcblxcbi5tZW51UHJpY2Uge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNyZWF0ZURpdiB9IGZyb20gXCIuLi9oZWxwRnVuY3Rpb25zL2NyZWF0ZURpdlwiO1xuaW1wb3J0IHsgY3JlYXRlVGl0bGUgfSBmcm9tIFwiLi4vaGVscEZ1bmN0aW9ucy9tYWtlVGl0bGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdlbkFib3V0KCkge1xuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVEaXYoW1wiYWJvdXRDb250YWluZXJcIiwgXCJ3cmFwcGVyXCJdKTtcbiAgY29uc3QgYWRkcmVzcyA9IGNyZWF0ZURpdihcImFib3V0QWRkcmVzc1wiKTtcbiAgYWRkcmVzcy5pbm5lckhUTUwgPSBcIjIxNyBLaW5nIFN0IFcsPGJyPktpdGNoZW5lciw8YnI+T04gTjJHIDFCMVwiO1xuXG4gIGNvbnN0IG1hcCA9IGNyZWF0ZURpdihcIm1hcFwiKTtcbiAgbWFwLmlubmVySFRNTCA9XG4gICAgJzxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkMjg5Ni40NTY4MTI5MTk5MzUhMmQtODAuNDk1NDIyMjg0NTA4NzkhM2Q0My40NTEwNTkzNzkxMjg4MyEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4ODgyYmY0ZjM2N2ZlYTY2ZCUzQTB4YjMwYWU4ZGY4ZDdhYTA0MSEyc0tpbmtha3UlMjBJemFrYXlhITVlMCEzbTIhMXNlbiEyc2NhITR2MTY0NzM4NjMzMzMyOSE1bTIhMXNlbiEyc2NhXCIgd2lkdGg9XCI2MDBcIiBoZWlnaHQ9XCI0NTBcIiBzdHlsZT1cImJvcmRlcjowO1wiIGFsbG93ZnVsbHNjcmVlbj1cIlwiIGxvYWRpbmc9XCJsYXp5XCI+PC9pZnJhbWU+JztcblxuICBjb25zdCBhZGRyZXNzQ29uID0gY3JlYXRlRGl2KFwiYWRkcmVzc0NvblwiKTtcbiAgYWRkcmVzc0Nvbi5hcHBlbmQoYWRkcmVzcywgbWFwKTtcblxuICBjb25zdCB0aXRsZSA9IGNyZWF0ZVRpdGxlKFwiT3VyIEFkZHJlc3NcIik7XG5cbiAgY29uc3QgbWlzc2lvblRpdGxlID0gY3JlYXRlVGl0bGUoXCJPdXIgTWlzc2lvblwiKTtcbiAgY29uc3QgbWlzc2lvbiA9IGNyZWF0ZURpdihcbiAgICBcIm1pc3Npb25cIixcbiAgICBcIklzIHRvIHByb3ZpZGUgdGhlIGJlc3QgdGFzdGluZyBmb29kIGFuZCBtb3N0IGNvbWZvcnRhYmxlIGRpbmlnbiBleHBlcmllbmNlIGV2ZXIhXCJcbiAgKTtcblxuICBjb250YWluZXIuYXBwZW5kKHRpdGxlLCBhZGRyZXNzQ29uLCBtaXNzaW9uVGl0bGUsIG1pc3Npb24pO1xuICByZXR1cm4gY29udGFpbmVyO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlRGl2IH0gZnJvbSBcIi4uL2hlbHBGdW5jdGlvbnMvY3JlYXRlRGl2XCI7XG5pbXBvcnQgeyBjcmVhdGVUaXRsZSB9IGZyb20gXCIuLi9oZWxwRnVuY3Rpb25zL21ha2VUaXRsZVwiO1xuaW1wb3J0IHsgZ2VuRm9ybSB9IGZyb20gXCIuLi9oZWxwRnVuY3Rpb25zL2dlbkZvcm1cIjtcbmltcG9ydCB0ZXN0SW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL0ZhbmN5UGxhdGUxLmpwZ1wiO1xuaW1wb3J0IHNlYXRpbmdJbWFnZSBmcm9tIFwiLi9pbWFnZXMvc2VhdGluZy5qcGdcIjtcblxuZnVuY3Rpb24gZ2VuSGVybygpIHtcbiAgY29uc3Qgcm93ID0gY3JlYXRlRGl2KFtcInJvd1wiLCBcImhlcm9Sb3dcIl0pO1xuICAvLyBjb25zdCBpbWFnZURvYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNvbnN0IG15SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgbXlJbWFnZS5zcmMgPSB0ZXN0SW1hZ2U7XG5cbiAgY29uc3QgdGV4dEhvbGRlciA9IGNyZWF0ZURpdihcImhlcm9UZXh0Q29udGFpbmVyXCIpO1xuICBjb25zdCB0aXRsZSA9IGNyZWF0ZURpdihcImhlcm9UaXRsZVwiLCBcIk5ldyBNZW51IEl0ZW1zXCIpO1xuICBjb25zdCBkZXNjID0gY3JlYXRlRGl2KFxuICAgIFwiaGVyb1RleHRcIixcbiAgICBcIkFsbCBuZXcgbWVudSBpdGVtcyBmb3IgeW91IHRvIGV4cGxvcmUhIFZlc3RpYnVsdW0gdmVoaWN1bGEgYW50ZSB1dCB0aW5jaWR1bnQgY29tbW9kby4gTmFtIGRhcGlidXMgZmV1Z2lhdCBkYXBpYnVzLiBOYW0gdmVuZW5hdGlzIHNvbGxpY2l0dWRpbiBjb25kaW1lbnR1bS4gRG9uZWMgYWMgc29kYWxlcyBsZW8uIFByYWVzZW50IG5vbiBmYWNpbGlzaXMgdHVycGlzLiBDdXJhYml0dXIgYWMgc2VtIGFjY3Vtc2FuLCB2YXJpdXMgbmliaCBhLCBsdWN0dXMgcXVhbS5cIlxuICApO1xuXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ0bi5jbGFzc0xpc3QuYWRkKFwiaGVyb0J0blwiKTtcbiAgYnRuLmlubmVyVGV4dCA9IFwiTWVudVwiO1xuXG4gIHRleHRIb2xkZXIuYXBwZW5kKHRpdGxlLCBkZXNjLCBidG4pO1xuXG4gIHJvdy5hcHBlbmQodGV4dEhvbGRlciwgbXlJbWFnZSk7XG4gIHJldHVybiByb3c7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5JbmZvKCkge1xuICBjb25zdCByb3cgPSBjcmVhdGVEaXYoXCJyb3dcIik7XG4gIGNvbnN0IGRpdmlkZXIgPSBjcmVhdGVUaXRsZShcIkluZm9cIik7XG4gIGNvbnN0IGNvbnRlbnQgPSBjcmVhdGVEaXYoXCJzdG9yZUNvbnRlbnRcIik7XG5cbiAgY29uc3Qgc3RvcmVIb3VycyA9IGNyZWF0ZURpdihcInN0b3JlSG91cnNcIiwgXCJTdG9yZSBIb3Vyc1wiKTtcbiAgY29uc3Qgc3RvcmVIb3Vyc3BhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgc3RvcmVIb3Vyc3BhcmEuaW5uZXJIVE1MID1cbiAgICBcIlN1bmRheTogMTJQTSAtIDEyQU08YnI+TW9uZGF5OiAxMlBNIC0gMTJBTTxicj5UdWVzZGF5OiAxMlBNIC0gMTJBTSA8YnI+V2VkbmVzZGF5OiAxMlBNIC0gMTJBTTxicj5UaHVyc2RheTogMTJQTSAtIDEyQU08YnI+RnJpZGF5OiAxMlBNIC0gMTJBTTxicj5TYXR1cmRheTogMTJQTSAtIDEyQU1cIjtcblxuICBzdG9yZUhvdXJzLmFwcGVuZChzdG9yZUhvdXJzcGFyYSk7XG5cbiAgY29uc3Qgc3RvcmVMb2NhdGlvbiA9IGNyZWF0ZURpdihcInN0b3JlTG9jYXRpb25cIiwgXCJTdG9yZSBMb2NhdGlvblwiKTtcbiAgY29uc3Qgc3RvcmVMb2NhdGlvblBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgc3RvcmVMb2NhdGlvblBhcmEuaW5uZXJIVE1MID0gXCIyMTcgS2luZyBTdCBXLDxicj5LaXRjaGVuZXIsPGJyPk9OIE4yRyAxQjFcIjtcblxuICBzdG9yZUxvY2F0aW9uLmFwcGVuZChzdG9yZUxvY2F0aW9uUGFyYSk7XG5cbiAgY29udGVudC5hcHBlbmQoc3RvcmVIb3Vycywgc3RvcmVMb2NhdGlvbik7XG4gIHJvdy5hcHBlbmQoZGl2aWRlciwgY29udGVudCk7XG4gIHJldHVybiByb3c7XG59XG5cbmZ1bmN0aW9uIGdlblRlc3RpKCkge1xuICBjb25zdCByb3cgPSBjcmVhdGVEaXYoW1wicm93XCIsIFwidGVzdGlSb3dcIl0pO1xuICBjb25zdCB0ZXN0aW1vbmlhbCA9IGNyZWF0ZURpdihcbiAgICBcInRlc3RpbW9uaWFsXCIsXG4gICAgXCJUSElTIElTIFRIRSBCRVNUIFBMQUNFIEVWRVIuIFRBS0UgRVZFUllPTkUgSEVSRSFcIlxuICApO1xuICBjb25zdCB0ZXN0aUF1dGhvciA9IGNyZWF0ZURpdihcInRlc3RpQXV0aG9yXCIsIFwiLVNvbWUgUmFuZG9tIEd1eVwiKTtcblxuICByb3cuYXBwZW5kKHRlc3RpbW9uaWFsLCB0ZXN0aUF1dGhvcik7XG4gIHJldHVybiByb3c7XG59XG5cbmZ1bmN0aW9uIGdlblJlc2VydmF0aW9uKCkge1xuICBjb25zdCByb3cgPSBjcmVhdGVEaXYoXCJyb3dcIik7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZURpdihcInJlc2VydmVSb3dcIik7XG4gIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gIGltYWdlLnNyYyA9IHNlYXRpbmdJbWFnZTtcbiAgY29uc3QgZGl2aWRlciA9IGNyZWF0ZVRpdGxlKFwiUmVzZXJ2YXRpb25zXCIpO1xuXG4gIGNvbnN0IGZvcm0gPSBnZW5Gb3JtKCk7XG5cbiAgY29udGFpbmVyLmFwcGVuZChmb3JtLCBpbWFnZSk7XG4gIHJvdy5hcHBlbmQoZGl2aWRlciwgY29udGFpbmVyKTtcbiAgcmV0dXJuIHJvdztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbkhvbWUoKSB7XG4gIGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVEaXYoXCJ3cmFwcGVyXCIpO1xuXG4gIGNvbnN0IGhlcm9Sb3cgPSBnZW5IZXJvKCk7XG4gIGNvbnN0IGluZm9Sb3cgPSBnZW5JbmZvKCk7XG4gIGNvbnN0IHRlc3RpUm93ID0gZ2VuVGVzdGkoKTtcbiAgY29uc3QgcmVzZXJ2ZVJvdyA9IGdlblJlc2VydmF0aW9uKCk7XG5cbiAgLy9hcHBlbmQgY29udGVudCBhbmQgcmV0dXJuIE5vZGVcbiAgd3JhcHBlci5hcHBlbmQoaGVyb1JvdywgaW5mb1JvdywgdGVzdGlSb3csIHJlc2VydmVSb3cpO1xuICByZXR1cm4gd3JhcHBlcjtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZURpdiB9IGZyb20gXCIuLi9oZWxwRnVuY3Rpb25zL2NyZWF0ZURpdlwiO1xuXG4vLyBNZW51IEltYWdlc1xuaW1wb3J0IHBpenphUGljIGZyb20gXCIuLi9zcmMvaW1hZ2VzL21lbnUvcGl6emEuanBnXCI7XG5pbXBvcnQgcGFzdGFQaWMgZnJvbSBcIi4uL3NyYy9pbWFnZXMvbWVudS9wYXN0YS5qcGdcIjtcbmltcG9ydCBjaGlja2VuUGljIGZyb20gXCIuLi9zcmMvaW1hZ2VzL21lbnUvY2hpY2tlbi5qcGdcIjtcbmltcG9ydCBzZWFQaWMgZnJvbSBcIi4uL3NyYy9pbWFnZXMvbWVudS9zZWFmb29kLmpwZ1wiO1xuaW1wb3J0IGJ1cmdlclBpYyBmcm9tIFwiLi4vc3JjL2ltYWdlcy9tZW51L2J1cmdlci5qcGdcIjtcbmltcG9ydCB3YWZmbGVQaWMgZnJvbSBcIi4uL3NyYy9pbWFnZXMvbWVudS93YWZmbGVzLmpwZ1wiO1xuaW1wb3J0IGRlc2VydFBpYyBmcm9tIFwiLi4vc3JjL2ltYWdlcy9tZW51L2Rlc2VydC5qcGdcIjtcbmltcG9ydCBza2V3ZXJQaWMgZnJvbSBcIi4uL3NyYy9pbWFnZXMvbWVudS9za2V3ZXIuanBnXCI7XG5pbXBvcnQgZnJ1aXRQaWMgZnJvbSBcIi4uL3NyYy9pbWFnZXMvbWVudS9mcnVpdC5qcGdcIjtcblxuY29uc3QgbWVudUl0ZW1zID0ge1xuICBwaXp6YTogW1wiUGl6emFcIiwgXCIkMTAuOTlcIiwgXCJDSEVFU1kgQ0hFRVNZIENIRUVTWVwiLCBwaXp6YVBpY10sXG4gIHBhc3RhOiBbXCJQYXN0YVwiLCBcIiQxMC45OVwiLCBcIiBzdGlsbCBDSEVFU1kgQ0hFRVNZIENIRUVTWVwiLCBwYXN0YVBpY10sXG4gIGNoaWNrZW46IFtcIkNoaWNrZW5cIiwgXCIkMTAuOTlcIiwgXCIgTm90IGF0IGFsbCBjaGVlc3lcIiwgY2hpY2tlblBpY10sXG4gIHNlYWZvb2Q6IFtcIlNlYWZvb2RcIiwgXCIkMTAuOTlcIiwgXCIgTGV0cyBob3BlIG5vdFwiLCBzZWFQaWNdLFxuICBidXJnZXI6IFtcIkJ1cmdlclwiLCBcIiQxMC45OVwiLCBcIiBraW5kYSBDaGVlc3lcIiwgYnVyZ2VyUGljXSxcbiAgd2FmZmxlczogW1wiV2FmZmxlc1wiLCBcIiQxMC45OVwiLCBcIiBraW5kYSBEZWxlaWNpb3NcIiwgd2FmZmxlUGljXSxcbiAgZGVzZXJ0OiBbXCJEZXNlcnRcIiwgXCIkMTAuOTlcIiwgXCIgRmx1ZmZ5XCIsIGRlc2VydFBpY10sXG4gIHNrZXdlcjogW1wiU2tld2VyXCIsIFwiJDEwLjk5XCIsIFwiIFNvbWVodGluZyBvbiBhIHN0aWNrXCIsIHNrZXdlclBpY10sXG4gIGZydWl0OiBbXCJGcnVpdCBCb3dsXCIsIFwiJDEwLjk5XCIsIFwiIFNvbWVodGluZyBvbiBhIHN0aWNrXCIsIGZydWl0UGljXSxcbn07XG5cbmZ1bmN0aW9uIG1ha2VJdGVtKG5hbWUsIHByaWNlLCBkZXNjLCBwaWMpIHtcbiAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRGl2KFwibWVudUl0ZW1cIik7XG5cbiAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgaW1hZ2Uuc3JjID0gcGljO1xuXG4gIGNvbnN0IGluZm8gPSBjcmVhdGVEaXYoXCJtZW51VGV4dFwiKTtcbiAgY29uc3QgaW5mb1RpdGxlID0gY3JlYXRlRGl2KFwibWVudVRpdGxlXCIsIG5hbWUpO1xuICBjb25zdCBpbmZvUHJpY2UgPSBjcmVhdGVEaXYoXCJtZW51UHJpY2VcIiwgcHJpY2UpO1xuICBjb25zdCBpbmZvRGVzYyA9IGNyZWF0ZURpdihcIm1lbnlEZXNjXCIsIGRlc2MpO1xuXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ1dHRvbi5pbm5lclRleHQgPSBcIkFkZCB0byBDYXJ0XCI7XG5cbiAgaW5mby5hcHBlbmQoaW5mb1RpdGxlLCBpbmZvUHJpY2UsIGluZm9EZXNjLCBidXR0b24pO1xuXG4gIGNvbnRhaW5lci5hcHBlbmQoaW1hZ2UsIGluZm8pO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5NZW51KCkge1xuICBsZXQgY29udGFpbmVyID0gY3JlYXRlRGl2KFtcIm1lbnVDb250YWluZXJcIiwgXCJ3cmFwcGVyXCJdKTtcblxuICBmb3IgKGNvbnN0IGl0ZW0gaW4gbWVudUl0ZW1zKSB7XG4gICAgY29udGFpbmVyLmFwcGVuZChtYWtlSXRlbSguLi5tZW51SXRlbXNbaXRlbV0pKTtcbiAgfVxuXG4gIHJldHVybiBjb250YWluZXI7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcInRlbXBsYXRlXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgZ2VuSG9tZSB9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7IGdlbk1lbnUgfSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgeyBnZW5BYm91dCB9IGZyb20gXCIuL2Fib3V0XCI7XG5pbXBvcnQgeyBjcmVhdGVEaXYgfSBmcm9tIFwiLi4vaGVscEZ1bmN0aW9ucy9jcmVhdGVEaXZcIjtcblxuaW1wb3J0IGZhY2Vib29rIGZyb20gXCIuLi9zcmMvaW1hZ2VzL2ZhY2Vib29rLnBuZ1wiO1xuaW1wb3J0IHR3aXR0ZXIgZnJvbSBcIi4uL3NyYy9pbWFnZXMvdHdpdHRlci5wbmdcIjtcbmltcG9ydCBpbnN0YWdyYW0gZnJvbSBcIi4uL3NyYy9pbWFnZXMvaW5zdGFncmFtLnBuZ1wiO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuZ2VuSG9tZSgpO1xuXG5mdW5jdGlvbiB3aXBlTWFpbigpIHtcbiAgY29uc3QgbWFpbkNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuXG4gIHdoaWxlIChtYWluQ29uLmZpcnN0Q2hpbGQpIHtcbiAgICBtYWluQ29uLnJlbW92ZUNoaWxkKG1haW5Db24uZmlyc3RDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVSZW5kZXIobm9kZSA9IFwiaG9tZVwiKSB7XG4gIHdpcGVNYWluKCk7XG5cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuXG4gIGxldCBjb250ZW50O1xuICBpZiAobm9kZSA9PT0gXCJhYm91dFwiKSB7XG4gICAgLy8gR2VuZXJhdGUgQWJvdXRcbiAgICBjb250ZW50ID0gZ2VuQWJvdXQoKTtcbiAgfSBlbHNlIGlmIChub2RlID09PSBcIm1lbnVcIikge1xuICAgIC8vIEdlbmVyYXRlIE1lbnVcbiAgICBjb250ZW50ID0gZ2VuTWVudSgpO1xuICB9IGVsc2Uge1xuICAgIGNvbnRlbnQgPSBnZW5Ib21lKCk7XG4gIH1cblxuICBtYWluLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJOYXYoKSB7XG4gIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG5cbiAgLy8gQ3JlYXRlIE5hdiBMb2dvXG4gIGNvbnN0IG5hdkxvZ28gPSBjcmVhdGVEaXYoXCJuYXYtbG9nXCIsIFwi8J+loVwiKTtcblxuICAvLyBDcmVhdGUgTmF2IEJ1dHRvbiBMaXN0XG4gIGNvbnN0IG5hdkxpc3QgPSBjcmVhdGVEaXYoXCJuYXYtYnRuLWxpc3RcIik7XG5cbiAgY29uc3QgbmF2QnRuSG9tZSA9IGNyZWF0ZURpdihbXCJuYXYtYnRuXCIsIFwibmF2SG9tZVwiLCBcIm5hdlNlbGVjdGVkXCJdLCBcIkhvbWVcIik7IC8vIEhvbWUgQnRuXG4gIG5hdkJ0bkhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZTZWxlY3RlZFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwibmF2U2VsZWN0ZWRcIik7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcIm5hdlNlbGVjdGVkXCIpO1xuICAgIHJlUmVuZGVyKFwiaG9tZVwiKTtcbiAgfSk7XG5cbiAgY29uc3QgbmF2QnRuTWVudSA9IGNyZWF0ZURpdihbXCJuYXYtYnRuXCIsIFwibmF2TWVudVwiXSwgXCJNZW51XCIpOyAvLyBNZW51IEJ1dHRvblxuICBuYXZCdG5NZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2U2VsZWN0ZWRcIikuY2xhc3NMaXN0LnJlbW92ZShcIm5hdlNlbGVjdGVkXCIpO1xuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJuYXZTZWxlY3RlZFwiKTtcbiAgICByZVJlbmRlcihcIm1lbnVcIik7XG4gIH0pO1xuXG4gIGNvbnN0IG5hdkJ0bkFib3V0ID0gY3JlYXRlRGl2KFtcIm5hdi1idG5cIiwgXCJuYXZBYm91dFwiXSwgXCJBYm91dFwiKTsgLy8gQWJvdXQgQnV0dG9uXG4gIG5hdkJ0bkFib3V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2U2VsZWN0ZWRcIikuY2xhc3NMaXN0LnJlbW92ZShcIm5hdlNlbGVjdGVkXCIpO1xuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJuYXZTZWxlY3RlZFwiKTtcbiAgICByZVJlbmRlcihcImFib3V0XCIpO1xuICB9KTtcblxuICAvLyBBZGQgYnV0dG9ucyB0byBuYXZMaXN0XG4gIG5hdkxpc3QuYXBwZW5kKG5hdkJ0bkhvbWUsIG5hdkJ0bk1lbnUsIG5hdkJ0bkFib3V0KTtcblxuICAvLyBDcmVhdGUgU29jaWFsIEJ1dHRvbnNcbiAgY29uc3QgbmF2U29jaWFscyA9IGNyZWF0ZURpdihcIm5hdi1zb2NpYWxzXCIpO1xuXG4gIC8vIC0tLSBGYWNlYm9vayBJY29uIC0tLVxuICBjb25zdCBzb2NpYWxGYWNlID0gY3JlYXRlRGl2KFwic29jaWFsLWJ0blwiKTtcbiAgY29uc3Qgc29jaWFsSWNvbiA9IG5ldyBJbWFnZSgpO1xuICBzb2NpYWxJY29uLnNyYyA9IGZhY2Vib29rO1xuICBzb2NpYWxGYWNlLmFwcGVuZChzb2NpYWxJY29uKTtcblxuICAvLyAtLS0gVHdpdHRlciBJY29uIC0tLVxuICBjb25zdCBzb2NpYWxUd2l0ID0gY3JlYXRlRGl2KFwic29jaWFsLWJ0blwiKTtcbiAgY29uc3QgdHdpdHRlckljb24gPSBuZXcgSW1hZ2UoKTtcbiAgdHdpdHRlckljb24uc3JjID0gdHdpdHRlcjtcbiAgc29jaWFsVHdpdC5hcHBlbmQodHdpdHRlckljb24pO1xuXG4gIC8vIC0tLSBJbnN0YWdyYW0gSWNvbiAtLS1cbiAgY29uc3Qgc29jaWFsSW5zdCA9IGNyZWF0ZURpdihcInNvY2lhbC1idG5cIik7XG4gIGNvbnN0IGluc3RhSWNvbiA9IG5ldyBJbWFnZSgpO1xuICBpbnN0YUljb24uc3JjID0gaW5zdGFncmFtO1xuICBzb2NpYWxJbnN0LmFwcGVuZChpbnN0YUljb24pO1xuXG4gIG5hdlNvY2lhbHMuYXBwZW5kKHNvY2lhbEZhY2UsIHNvY2lhbFR3aXQsIHNvY2lhbEluc3QpO1xuXG4gIC8vIEFkZCBFbGVtZW50cyB0byBuYXZiYXJcbiAgbmF2YmFyLmFwcGVuZChuYXZMb2dvLCBuYXZMaXN0LCBuYXZTb2NpYWxzKTtcblxuICAvLyBSZXR1cm4gTmF2YmFyXG4gIHJldHVybiBuYXZiYXI7XG59XG5cbmZ1bmN0aW9uIHJlbmRlck1haW4oKSB7XG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgY29uc3QgY29udGVudCA9IGdlbkhvbWUoKTtcblxuICBtYWluQ29udGFpbmVyLmFwcGVuZChjb250ZW50KTtcbiAgcmV0dXJuIG1haW5Db250YWluZXI7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcblxuICByZXR1cm4gZm9vdGVyO1xufVxuXG5mdW5jdGlvbiByZW5kZXJDb250YWluZXIoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gIGNvbnRlbnQuYXBwZW5kKHJlbmRlck5hdigpLCByZW5kZXJNYWluKCksIHJlbmRlckZvb3RlcigpKTtcbn1cblxucmVuZGVyQ29udGFpbmVyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=