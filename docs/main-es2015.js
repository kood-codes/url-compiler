(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/MlV":
/*!****************************************!*\
  !*** ./src/app/helpers/transformer.ts ***!
  \****************************************/
/*! exports provided: transformer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformer", function() { return transformer; });
function transformer(ast, visitor) {
    if (ast.type === "url") {
        ast.body = ast.body.map((node) => {
            const visitorFunc = visitor[node.type];
            if (typeof visitorFunc === "function") {
                return visitorFunc(node);
            }
            else {
                return node;
            }
        });
    }
    return ast;
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/koodalarasan/coding-arena/playarea/url-compiler/src/main.ts */"zUnb");


/***/ }),

/***/ "1HOq":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/parser/parser.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p-organizationChart [value]=\"ast\" styleClass=\"company\">\n  <ng-template let-node pTemplate=\"default\">\n    <div class=\"ast-node\" [ngClass]=\"{ modified: node.modified }\" #astNode>\n      <div *ngIf=\"!node.value\">\n        <div class=\"ast-node__parent\">{{ node.label }}</div>\n      </div>\n      <div *ngIf=\"node.value\">\n        <div class=\"ast-node__label\">{{ node.label }}</div>\n        <div class=\"ast-node__value\">{{ node.value }}</div>\n      </div>\n    </div>\n  </ng-template>\n</p-organizationChart>\n");

/***/ }),

/***/ "3Gr7":
/*!*****************************************************!*\
  !*** ./src/app/components/lexer/lexer.component.ts ***!
  \*****************************************************/
/*! exports provided: LexerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LexerComponent", function() { return LexerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lexer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lexer.component.html */ "4v/J");
/* harmony import */ var _lexer_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lexer.component.scss */ "UF2d");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ "z/o8");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers */ "6rF9");






let LexerComponent = class LexerComponent {
    constructor(vcRef, renderer) {
        this.vcRef = vcRef;
        this.renderer = renderer;
        this.tokenArray = [];
        this.scannerPos = 0;
        this.scannedTokens = [];
    }
    ngOnInit() {
        if (this.url) {
            this.tokens = Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["tokenizer"])(this.url);
        }
    }
    scan() {
        const tokens = document.querySelectorAll(".tokenText");
        const scanner = document.querySelector(".scanner");
        const tl = new gsap__WEBPACK_IMPORTED_MODULE_4__["TimelineLite"]();
        tokens.forEach((token) => {
            const rect = token.getBoundingClientRect();
            tl.fromTo(scanner, 0.1, { left: this.scannerPos, opacity: 1 }, { left: this.scannerPos + rect.width });
            this.scannerPos += rect.width;
            const cln = token.cloneNode(true);
            cln.classList.add("clone");
            tl.to(cln, 1, { opacity: 1 });
            this.renderer.appendChild(this.lexerElem.nativeElement, cln);
        });
        tl.to(scanner, 0.1, { opacity: 0 });
    }
    tween() {
        const btnArr = this.tokenArray.map((btn) => btn.nativeElement);
        console.log(btnArr);
        const coord = this.lexerElem.nativeElement.getBoundingClientRect();
        let x = 0;
        gsap__WEBPACK_IMPORTED_MODULE_4__["TweenMax"].staggerFromTo(btnArr, 1, {
            x: coord.x,
            y: -100,
            opacity: 0,
        }, {
            y: 0,
            x: (index, target) => {
                const currentX = x;
                x += target.getBoundingClientRect().width + 10;
                return currentX;
            },
            opacity: 1,
        }, 0.2);
    }
    ngAfterViewInit() {
        // this.tokenArray = this.tokenElems.toArray();
        this.tween();
        this.scan();
    }
};
LexerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }
];
LexerComponent.propDecorators = {
    url: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    lexerElem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["lexer", { static: false },] }],
    tokenElems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"], args: ["tokenElem",] }]
};
LexerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "url-lexer",
        template: _raw_loader_lexer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        styles: [_lexer_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LexerComponent);



/***/ }),

/***/ "4f7E":
/*!*******************************************************!*\
  !*** ./src/app/components/parser/parser.component.ts ***!
  \*******************************************************/
/*! exports provided: ParserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParserComponent", function() { return ParserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_parser_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./parser.component.html */ "1HOq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "z/o8");
/* harmony import */ var src_app_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/helpers */ "6rF9");





let ParserComponent = class ParserComponent {
    constructor(cdRef) {
        this.cdRef = cdRef;
    }
    ngOnInit() {
        this.ast = [Object(src_app_helpers__WEBPACK_IMPORTED_MODULE_4__["mapAstToChart"])(this.ast)];
    }
    ngAfterViewInit() {
        this.parse();
    }
    parse() {
        const nodes = document.querySelectorAll(".p-organizationchart-table");
        const tl = new gsap__WEBPACK_IMPORTED_MODULE_3__["TimelineLite"]();
        tl.staggerFromTo(nodes, 1, {
            opacity: 0,
        }, {
            opacity: 1,
        }, 0.4);
    }
    transform() {
        const astNodes = document.querySelectorAll(".ast-node");
        const tl = new gsap__WEBPACK_IMPORTED_MODULE_3__["TimelineLite"]();
        astNodes.forEach((astNode) => {
            tl.to(astNode, 0.1, {
                boxShadow: "0px 0px 16px 10px rgba(179,25,179,1)",
            }).to(astNode, 0.5, {
                boxShadow: "none",
            });
        });
        this.cdRef.detectChanges();
    }
};
ParserComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
];
ParserComponent.propDecorators = {
    ast: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    astNodes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"], args: ["astNode",] }]
};
ParserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        // tslint:disable-next-line:component-selector
        selector: "url-parser",
        template: _raw_loader_parser_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
    })
], ParserComponent);



/***/ }),

/***/ "4v/J":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/lexer/lexer.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"url ml-3 d-flex justify-content-center\">\n  <div class=\"position-relative\" #parent>\n    <span\n      class=\"tokenText {{ token.type }}\"\n      *ngFor=\"let token of tokens; let i = index\"\n    >\n      {{ token.value }}\n    </span>\n    <div class=\"scanner\" #scanner></div>\n  </div>\n</div>\n<h3 class=\"d-flex justify-content-center\">Tokens</h3>\n<div class=\"lexer\" #lexer></div>\n");

/***/ }),

/***/ "57uH":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/containers/compiler/compiler.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-title m-3\">SIMPLE://URL.COMPILER</div>\n<div class=\"row m-3\">\n  <div class=\"col-6\">\n    <div class=\"form-group\">\n      <label class=\"font-weight-bold text-uppercase\">Url</label>\n      <input class=\"form-control\" type=\"text\" name=\"url\" [(ngModel)]=\"url\" />\n    </div>\n    <div>\n      <button\n        type=\"button\"\n        class=\"mx-2 btn btn-outline-primary\"\n        (click)=\"setState(CompilerState.TOKENIZE)\"\n      >\n        Tokenize\n      </button>\n      <button\n        type=\"button\"\n        class=\"mx-2 btn btn-outline-success\"\n        (click)=\"setState(CompilerState.PARSE)\"\n      >\n        Parse\n      </button>\n      <button\n        type=\"button\"\n        class=\"mx-2 btn btn-outline-danger\"\n        (click)=\"setState(CompilerState.TRANSFORM)\"\n      >\n        Transform\n      </button>\n      <button\n        type=\"button\"\n        class=\"mx-2 btn btn-outline-secondary\"\n        (click)=\"setState(CompilerState.GENERATE)\"\n      >\n        Generate\n      </button>\n      <button\n        type=\"button\"\n        class=\"mx-2 btn btn-outline-info\"\n        (click)=\"setState(CompilerState.RESET)\"\n      >\n        Reset\n      </button>\n    </div>\n  </div>\n  <div class=\"col-6\">\n    <span class=\"font-weight-bold text-uppercase\">Visitor</span>\n    <ngx-codemirror\n      [(ngModel)]=\"visitor\"\n      [options]=\"{\n        lineNumbers: true,\n        mode: 'javascript',\n        theme: 'material'\n      }\"\n    ></ngx-codemirror>\n  </div>\n</div>\n\n<!-- <pre style=\"color:aliceblue\">{{modifiedAst | json}}</pre> -->\n<ng-container [ngSwitch]=\"true\">\n  <ng-container *ngSwitchCase=\"currentState === CompilerState.TOKENIZE\">\n    <url-lexer [url]=\"url\"></url-lexer>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"currentState === CompilerState.PARSE\">\n    <url-parser [ast]=\"ast\" label=\"Parser\"></url-parser>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"currentState === CompilerState.TRANSFORM\">\n    <url-transformer\n      [ast]=\"ast\"\n      [modifiedAst]=\"modifiedAst\"\n      [visitor]=\"visitorObj\"\n      label=\"Transformer\"\n      (transform)=\"onTransform($event)\"\n    ></url-transformer>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"currentState === CompilerState.GENERATE\">\n    <url-generator [url]=\"finalUrl\"></url-generator>\n  </ng-container>\n</ng-container>\n");

/***/ }),

/***/ "6rF9":
/*!**********************************!*\
  !*** ./src/app/helpers/index.ts ***!
  \**********************************/
/*! exports provided: generator, parser, tokenizer, transformer, mapAstToChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapAstToChart", function() { return mapAstToChart; });
/* harmony import */ var _generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generator */ "jqYh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generator", function() { return _generator__WEBPACK_IMPORTED_MODULE_0__["generator"]; });

/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parser */ "cuWo");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parser", function() { return _parser__WEBPACK_IMPORTED_MODULE_1__["parser"]; });

/* harmony import */ var _tokenizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tokenizer */ "eTY9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tokenizer", function() { return _tokenizer__WEBPACK_IMPORTED_MODULE_2__["tokenizer"]; });

/* harmony import */ var _transformer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transformer */ "/MlV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transformer", function() { return _transformer__WEBPACK_IMPORTED_MODULE_3__["transformer"]; });





function mapAstToChart(ast) {
    const { type, body } = ast;
    return {
        label: type,
        expanded: true,
        children: body.map((child) => {
            if (!(child === null || child === void 0 ? void 0 : child.body)) {
                return Object.assign({ label: child.type, value: child.value }, (child.modified ? { modified: true } : null));
            }
            const arr = [];
            for (const key in child.body) {
                if (child.body.hasOwnProperty(key) && key !== "modified") {
                    arr.push(Object.assign({ label: key, value: child.body[key], expanded: true }, (child.body.modified ? { modified: true } : null)));
                }
            }
            return Object.assign({ label: child.type, children: arr, expanded: true }, (child.body.modified ? { modified: true } : null));
        }),
    };
}


/***/ }),

/***/ "6y1P":
/*!*************************************************************!*\
  !*** ./src/app/components/generator/generator.component.ts ***!
  \*************************************************************/
/*! exports provided: GeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneratorComponent", function() { return GeneratorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_generator_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./generator.component.html */ "Tysd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "z/o8");




let GeneratorComponent = class GeneratorComponent {
    constructor() { }
    ngAfterViewInit() {
        const tl = new gsap__WEBPACK_IMPORTED_MODULE_3__["TimelineMax"]({ repeat: 0 });
        const line = document.querySelector(".line");
        const upper = document.querySelector(".upper");
        const lower = document.querySelector(".lower");
        tl.from(line, 0.5, { scaleX: 0, transformOrigin: "right center" });
        tl.from(upper, 0.75, { y: 40 }, "text");
        tl.from(lower, 0.75, { y: -40 }, "text");
    }
};
GeneratorComponent.ctorParameters = () => [];
GeneratorComponent.propDecorators = {
    url: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
GeneratorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "url-generator",
        template: _raw_loader_generator_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], GeneratorComponent);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Lye8":
/*!************************************!*\
  !*** ./src/app/helpers/helpers.ts ***!
  \************************************/
/*! exports provided: COLON, SLASH, QUERY, EQUAL, AMPERSAND, HASH, isDelimiter, isSlash, isColon, isHash, isQuery, isAmpersand, isEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLON", function() { return COLON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SLASH", function() { return SLASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY", function() { return QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EQUAL", function() { return EQUAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AMPERSAND", function() { return AMPERSAND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HASH", function() { return HASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDelimiter", function() { return isDelimiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSlash", function() { return isSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isColon", function() { return isColon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHash", function() { return isHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isQuery", function() { return isQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAmpersand", function() { return isAmpersand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEqual", function() { return isEqual; });
const COLON = ":";
const SLASH = "/";
const QUERY = "?";
const EQUAL = "=";
const AMPERSAND = "&";
const HASH = "#";
function isDelimiter(token) {
    return (token === null || token === void 0 ? void 0 : token.type) === "delimiter";
}
function isSlash(token) {
    return isDelimiter(token) && (token === null || token === void 0 ? void 0 : token.value) === SLASH;
}
function isColon(token) {
    return isDelimiter(token) && (token === null || token === void 0 ? void 0 : token.value) === COLON;
}
function isHash(token) {
    return isDelimiter(token) && (token === null || token === void 0 ? void 0 : token.value) === HASH;
}
function isQuery(token) {
    return isDelimiter(token) && (token === null || token === void 0 ? void 0 : token.value) === QUERY;
}
function isAmpersand(token) {
    return isDelimiter(token) && (token === null || token === void 0 ? void 0 : token.value) === AMPERSAND;
}
function isEqual(token) {
    return isDelimiter(token) && (token === null || token === void 0 ? void 0 : token.value) === EQUAL;
}


/***/ }),

/***/ "SWRN":
/*!***********************************************************!*\
  !*** ./src/app/containers/compiler/compiler.component.ts ***!
  \***********************************************************/
/*! exports provided: CompilerState, CompilerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompilerState", function() { return CompilerState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompilerComponent", function() { return CompilerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_compiler_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./compiler.component.html */ "57uH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers */ "6rF9");




var CompilerState;
(function (CompilerState) {
    CompilerState["IDLE"] = "IDLE";
    CompilerState["TOKENIZE"] = "TOKENIZE";
    CompilerState["PARSE"] = "PARSE";
    CompilerState["TRANSFORM"] = "TRANSFORM";
    CompilerState["GENERATE"] = "GENERATE";
    CompilerState["RESET"] = "RESET";
})(CompilerState || (CompilerState = {}));
let CompilerComponent = class CompilerComponent {
    constructor() {
        this.url = "https://video.google.in:80/videoplay?lang=en#00h02m30s";
        this.CompilerState = CompilerState;
        this.currentState = CompilerState.IDLE;
        this.startCompile = false;
        this.visitor = `{
  QueryParamater(node) {
    if ((node.body.name === "lang") && (node.body.value === "en")) {
      node.body.value = "NL";
      node.body.modified = true;
    }
    return node;
  }
}`;
    }
    ngOnInit() {
        this.compileUrl();
    }
    onTransform(modifiedAst) {
        this.ast = modifiedAst;
    }
    compileUrl() {
        this.tokens = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["tokenizer"])(this.url);
        this.ast = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["parser"])(this.tokens);
        // tslint:disable-next-line:prefer-const
        let visitorObj;
        // tslint:disable-next-line:no-eval
        eval(`visitorObj = ${this.visitor}`); // Using eval on purpose
        this.visitorObj = visitorObj;
        this.modifiedAst = JSON.parse(JSON.stringify(this.ast));
        this.modifiedAst = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["transformer"])(this.modifiedAst, this.visitorObj);
        this.finalUrl = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["generator"])(this.modifiedAst);
    }
    setState(state) {
        this.compileUrl();
        this.currentState = state;
    }
};
CompilerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "url-compiler",
        template: _raw_loader_compiler_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], CompilerComponent);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! codemirror/mode/javascript/javascript */ "+dQi");
/* harmony import */ var codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var codemirror_mode_markdown_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! codemirror/mode/markdown/markdown */ "lZu9");
/* harmony import */ var codemirror_mode_markdown_markdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_markdown_markdown__WEBPACK_IMPORTED_MODULE_4__);





let AppComponent = class AppComponent {
    constructor() {
        this.title = "url-compiler";
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "url-root",
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], AppComponent);



/***/ }),

/***/ "Tysd":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/generator/generator.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"final-url\">\n  <div class=\"upperWrap\">\n    <div class=\"upper\">The modified url is</div>\n  </div>\n  <div class=\"line\"></div>\n  <div class=\"lowerWrap\">\n    <div class=\"lower\">{{ url }}</div>\n  </div>\n</div>\n");

/***/ }),

/***/ "UF2d":
/*!*******************************************************!*\
  !*** ./src/app/components/lexer/lexer.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".lexer,\n.parser {\n  min-width: 100px;\n  max-width: 250px;\n  min-height: 250px;\n  border: 2px dashed var(--lexer-bg-color);\n  margin: auto;\n  justify-content: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 50px;\n}\n\n.animate {\n  transform: translate(calc(50vw - 50px), -50px);\n  top: 20px;\n}\n\n.token-container {\n  display: flex;\n  height: 60px;\n}\n\n.token-container .token {\n  border-radius: 10px;\n  padding: 5px 10px;\n  margin: 5px;\n  position: absolute;\n  text-align: center;\n}\n\n.tokenText {\n  position: relative;\n  white-space: nowrap;\n  font-size: 2.5rem;\n}\n\n.scanner {\n  display: inline-block;\n  border: 5px dotted var(--lexer-bg-color);\n  height: 3.75rem;\n  width: 1.85rem;\n  position: absolute;\n  left: 0px;\n  margin-left: -5px;\n}\n\n.url {\n  position: relative;\n}\n\n.clone {\n  display: block;\n  width: 100%;\n  border-bottom: 2px dashed var(--lexer-bg-color);\n  padding: 8px;\n  text-align: center;\n  font-size: 16px;\n  opacity: 0;\n  font-weight: bold;\n}\n\n.tokenText.identifier.clone::before {\n  content: \"I\";\n  position: absolute;\n  left: -12px;\n}\n\n.tokenText.delimiter.clone::before {\n  content: \"D\";\n  position: absolute;\n  left: -15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xleGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdDQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsOENBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUNFO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLHFCQUFBO0VBQ0Esd0NBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSwrQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFBRiIsImZpbGUiOiJsZXhlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZXhlcixcbi5wYXJzZXIge1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICBtYXgtd2lkdGg6IDI1MHB4O1xuICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgYm9yZGVyOiAycHggZGFzaGVkIHZhcigtLWxleGVyLWJnLWNvbG9yKTtcbiAgbWFyZ2luOiBhdXRvO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLmFuaW1hdGUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZShjYWxjKDUwdncgLSA1MHB4KSwgLTUwcHgpO1xuICB0b3A6IDIwcHg7XG59XG5cbi50b2tlbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDYwcHg7XG5cbiAgLnRva2VuIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cblxuLnRva2VuVGV4dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC1zaXplOiAyLjVyZW07XG59XG5cbi5zY2FubmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDVweCBkb3R0ZWQgdmFyKC0tbGV4ZXItYmctY29sb3IpO1xuICBoZWlnaHQ6IDMuNzVyZW07XG4gIHdpZHRoOiAxLjg1cmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG59XG5cbi51cmwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jbG9uZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCB2YXIoLS1sZXhlci1iZy1jb2xvcik7XG4gIHBhZGRpbmc6IDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG9wYWNpdHk6IDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udG9rZW5UZXh0LmlkZW50aWZpZXIuY2xvbmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiSVwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0xMnB4O1xufVxuXG4udG9rZW5UZXh0LmRlbGltaXRlci5jbG9uZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJEXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTE1cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<url-compiler></url-compiler>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-google-charts */ "icpI");
/* harmony import */ var primeng_organizationchart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/organizationchart */ "dQiQ");
/* harmony import */ var _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ctrl/ngx-codemirror */ "Xl2X");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _containers_compiler_compiler_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./containers/compiler/compiler.component */ "SWRN");
/* harmony import */ var _components_lexer_lexer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/lexer/lexer.component */ "3Gr7");
/* harmony import */ var _components_parser_parser_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/parser/parser.component */ "4f7E");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_transformer_transformer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/transformer/transformer.component */ "yePH");
/* harmony import */ var _components_generator_generator_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/generator/generator.component */ "6y1P");














let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _containers_compiler_compiler_component__WEBPACK_IMPORTED_MODULE_8__["CompilerComponent"],
            _components_lexer_lexer_component__WEBPACK_IMPORTED_MODULE_9__["LexerComponent"],
            _components_parser_parser_component__WEBPACK_IMPORTED_MODULE_10__["ParserComponent"],
            _components_transformer_transformer_component__WEBPACK_IMPORTED_MODULE_12__["TransformerComponent"],
            _components_generator_generator_component__WEBPACK_IMPORTED_MODULE_13__["GeneratorComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            angular_google_charts__WEBPACK_IMPORTED_MODULE_4__["GoogleChartsModule"],
            primeng_organizationchart__WEBPACK_IMPORTED_MODULE_5__["OrganizationChartModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["NoopAnimationsModule"],
            _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_6__["CodemirrorModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "cuWo":
/*!***********************************!*\
  !*** ./src/app/helpers/parser.ts ***!
  \***********************************/
/*! exports provided: parser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parser", function() { return parser; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "Lye8");

function parser(tokens) {
    var _a, _b, _c, _d, _e;
    const root = {
        type: "url",
        body: [],
    };
    let isHostParsed = false;
    let token;
    while (tokens.length) {
        token = tokens.shift();
        if ((token === null || token === void 0 ? void 0 : token.type) === "identifier") {
            if (tokens[0] &&
                Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["isColon"])(tokens[0]) &&
                Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["isSlash"])(tokens[1]) &&
                Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["isSlash"])(tokens[2])) {
                root.body.push({
                    type: "Protocol",
                    value: token.value,
                });
                continue;
            }
            if (!isHostParsed) {
                let subDomain;
                let domain;
                const sections = token.value.split(".");
                let tld = sections.pop();
                if ((tld === null || tld === void 0 ? void 0 : tld.length) === 2 && sections[sections.length - 1] === "co") {
                    const tldParts = [sections.pop(), tld];
                    tld = tldParts.join(".");
                }
                domain = sections.pop();
                if (sections.length) {
                    subDomain = sections.pop();
                }
                root.body.push({
                    type: "Host",
                    body: {
                        subDomain,
                        domain,
                        tld,
                    },
                });
                isHostParsed = true;
            }
            else {
                root.body.push({
                    type: "Path",
                    value: token.value,
                });
            }
            continue;
        }
        else {
            if (Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["isQuery"])(token) || Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["isAmpersand"])(token)) {
                if (Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["isEqual"])(tokens[1])) {
                    const symbol = token === null || token === void 0 ? void 0 : token.value;
                    const name = (_a = tokens === null || tokens === void 0 ? void 0 : tokens.shift()) === null || _a === void 0 ? void 0 : _a.value;
                    const equal = tokens.shift();
                    const value = (_b = tokens === null || tokens === void 0 ? void 0 : tokens.shift()) === null || _b === void 0 ? void 0 : _b.value;
                    root.body.push({
                        type: "QueryParamater",
                        body: {
                            name,
                            value,
                            symbol,
                        },
                    });
                }
                else {
                    root.body.push({
                        type: "QueryParamater",
                        body: {
                            name: (_c = tokens === null || tokens === void 0 ? void 0 : tokens.shift()) === null || _c === void 0 ? void 0 : _c.value,
                        },
                    });
                }
                continue;
            }
            if (Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["isColon"])(token)) {
                if (!Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["isDelimiter"])(tokens[0]) &&
                    Number.isInteger(parseInt(tokens[0].value, 10))) {
                    root.body.push({
                        type: "Port",
                        value: parseInt(((_d = tokens === null || tokens === void 0 ? void 0 : tokens.shift()) === null || _d === void 0 ? void 0 : _d.value) || "", 10),
                    });
                }
                continue;
            }
            if (Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["isHash"])(token)) {
                root.body.push({
                    type: "Fragment",
                    value: (_e = tokens === null || tokens === void 0 ? void 0 : tokens.shift()) === null || _e === void 0 ? void 0 : _e.value,
                });
            }
        }
    }
    return root;
}


/***/ }),

/***/ "eTY9":
/*!**************************************!*\
  !*** ./src/app/helpers/tokenizer.ts ***!
  \**************************************/
/*! exports provided: tokenizer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenizer", function() { return tokenizer; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "Lye8");

const delimiters = [_helpers__WEBPACK_IMPORTED_MODULE_0__["COLON"], _helpers__WEBPACK_IMPORTED_MODULE_0__["SLASH"], _helpers__WEBPACK_IMPORTED_MODULE_0__["QUERY"], _helpers__WEBPACK_IMPORTED_MODULE_0__["EQUAL"], _helpers__WEBPACK_IMPORTED_MODULE_0__["AMPERSAND"], _helpers__WEBPACK_IMPORTED_MODULE_0__["HASH"]];
function tokenizer(input) {
    const tokens = [];
    let current = 0;
    while (current < input.length) {
        let char = input[current];
        if (delimiters.indexOf(char) > -1) {
            tokens.push({
                type: "delimiter",
                value: char,
                position: {
                    start: current,
                    end: current,
                },
            });
            current++;
            continue;
        }
        else {
            let identifier = "";
            let start = -1;
            while (current < input.length && delimiters.indexOf(char) === -1) {
                char = input[current];
                start = start === -1 ? current : start;
                if (delimiters.indexOf(char) > -1) {
                    continue;
                }
                identifier += char;
                current++;
            }
            tokens.push({
                type: "identifier",
                value: identifier,
                position: {
                    start,
                    end: current - 1,
                },
            });
            continue;
        }
    }
    return tokens;
}


/***/ }),

/***/ "jqYh":
/*!**************************************!*\
  !*** ./src/app/helpers/generator.ts ***!
  \**************************************/
/*! exports provided: generator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generator", function() { return generator; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "Lye8");

function generator(ast) {
    let modifiedUrl = "";
    if (ast.type === "url") {
        ast.body.forEach((node) => {
            switch (node.type) {
                case "Protocol":
                    modifiedUrl += node.value + _helpers__WEBPACK_IMPORTED_MODULE_0__["COLON"] + _helpers__WEBPACK_IMPORTED_MODULE_0__["SLASH"] + _helpers__WEBPACK_IMPORTED_MODULE_0__["SLASH"];
                    break;
                case "Path":
                    modifiedUrl += _helpers__WEBPACK_IMPORTED_MODULE_0__["SLASH"] + node.value;
                    break;
                case "Port":
                    modifiedUrl += _helpers__WEBPACK_IMPORTED_MODULE_0__["COLON"] + node.value;
                    break;
                case "Fragment":
                    modifiedUrl += _helpers__WEBPACK_IMPORTED_MODULE_0__["HASH"] + node.value;
                    break;
                case "QueryParamater":
                    if (node.body.value) {
                        modifiedUrl +=
                            node.body.symbol + node.body.name + _helpers__WEBPACK_IMPORTED_MODULE_0__["EQUAL"] + node.body.value;
                    }
                    else {
                        modifiedUrl += node.body.symbol + node.body.name;
                    }
                    break;
                case "Host":
                    if (node.body.subDomain)
                        modifiedUrl += `${node.body.subDomain}.${node.body.domain}.${node.body.tld}`;
                    else
                        modifiedUrl += `${node.body.domain}.${node.body.tld}`;
                    break;
            }
        });
    }
    return modifiedUrl;
}


/***/ }),

/***/ "w6Ta":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/transformer/transformer.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p-organizationChart\n  [value]=\"ast\"\n  styleClass=\"company\"\n  *ngIf=\"!showModified; else modifiedTmpl\"\n>\n  <ng-template let-node pTemplate=\"default\">\n    <div class=\"ast-node\" [ngClass]=\"{ modified: node.modified }\" #astNode>\n      <div *ngIf=\"!node.value\">\n        <div class=\"ast-node__parent\">{{ node.label }}</div>\n      </div>\n      <div *ngIf=\"node.value\">\n        <div class=\"ast-node__label\">{{ node.label }}</div>\n        <div class=\"ast-node__value\">{{ node.value }}</div>\n      </div>\n    </div>\n  </ng-template>\n</p-organizationChart>\n\n<ng-template #modifiedTmpl>\n  <p-organizationChart [value]=\"modifiedAst\" styleClass=\"company\">\n    <ng-template let-node pTemplate=\"default\">\n      <div class=\"ast-node\" [ngClass]=\"{ modified: node.modified }\">\n        <div *ngIf=\"!node.value\">\n          <div class=\"ast-node__parent\">{{ node.label }}</div>\n        </div>\n        <div *ngIf=\"node.value\">\n          <div class=\"ast-node__label\">{{ node.label }}</div>\n          <div class=\"ast-node__value\">{{ node.value }}</div>\n        </div>\n      </div>\n    </ng-template>\n  </p-organizationChart>\n</ng-template>\n");

/***/ }),

/***/ "yePH":
/*!*****************************************************************!*\
  !*** ./src/app/components/transformer/transformer.component.ts ***!
  \*****************************************************************/
/*! exports provided: TransformerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransformerComponent", function() { return TransformerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_transformer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./transformer.component.html */ "w6Ta");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "z/o8");
/* harmony import */ var src_app_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/helpers */ "6rF9");





let TransformerComponent = class TransformerComponent {
    constructor() {
        this.transform = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.showModified = false;
    }
    ngOnInit() {
        this.ast = [Object(src_app_helpers__WEBPACK_IMPORTED_MODULE_4__["mapAstToChart"])(this.ast)];
        this.modifiedAst = [Object(src_app_helpers__WEBPACK_IMPORTED_MODULE_4__["mapAstToChart"])(this.modifiedAst)];
    }
    ngAfterViewInit() {
        this.transformAst();
    }
    transformAst() {
        var _a;
        const nodes = (_a = this.astNodes) === null || _a === void 0 ? void 0 : _a.map((btn) => btn.nativeElement);
        const tl = new gsap__WEBPACK_IMPORTED_MODULE_3__["TimelineLite"]({
            onComplete: () => {
                this.showModified = true;
            },
        });
        nodes.forEach((astNode) => {
            tl.to(astNode, 0.1, {
                boxShadow: "0px 0px 5px 5px #EB9F86",
            }).to(astNode, 0.3, {
                boxShadow: "none",
            });
        });
    }
};
TransformerComponent.propDecorators = {
    ast: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    modifiedAst: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    visitor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    transform: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    astNodes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"], args: ["astNode",] }]
};
TransformerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "url-transformer",
        template: _raw_loader_transformer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
    })
], TransformerComponent);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map