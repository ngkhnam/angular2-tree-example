webpackJsonp([1,4],{

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 143:
/***/ (function(module, exports) {

module.exports = "<div style=\"display: flex; flex-direction: column\">\r\n    <div>Display and filter large tree: 5000 node</div>\r\n    <input type=\"text\" style=\"width: 300px; margin: 5px 0\" [(ngModel)]=\"value\" (ngModelChange)=\"onChangeText()\">\r\n    <div style=\"border: 1px solid black; width: 300px\">\r\n        <nn-tree #displayFilterTree [root]=\"displayFilerRoot\" \r\n            [showRoot]=\"true\" \r\n            [height]=\"250\" \r\n            [width]=\"300\"\r\n            [canSelect]=\"canSelectNode\"\r\n            [selectionMode]=\"'multiple'\">\r\n            <ng-template let-node=\"node\" #nnTreeItem>\r\n                <nn-tree-item [node]=\"node\"></nn-tree-item>\r\n            </ng-template>\r\n        </nn-tree>\r\n    </div>\r\n    <br/>\r\n    <div style=\"margin: 5px 0\">Lazy loading tree:</div>\r\n    <div style=\"border: 1px solid black; width: 300px\">\r\n        <nn-tree #lazyLoadingTree (openNode)=\"onOpen($event)\" [root]=\"lazyLoadingRoot\" [showRoot]=\"false\" [height]=\"250\" [width]=\"300\">\r\n            <ng-template let-node=\"node\" #nnTreeItem>\r\n                <nn-tree-item [node]=\"node\"></nn-tree-item>\r\n            </ng-template>\r\n        </nn-tree>\r\n    </div>\r\n    <input type=\"checkbox\" (change)=\"($event.target.checked)\" value=\"123123\" >\r\n</div>"

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(73);


/***/ }),

/***/ 72:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 72;


/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(85);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nn_angular_tree__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
        this.value = "";
        this.displayFilerRoot = null;
        this.lazyLoadingRoot = null;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.displayFilerRoot = this.generateTree(5000);
        this.lazyLoadingRoot = this.generateLazyLoadingTree(100);
    };
    AppComponent.prototype.generateTree = function (number) {
        var tree = { label: "root", children: [], open: true };
        for (var i = 0; i < number; i++) {
            var child = { label: "child " + i, children: [], open: false };
            tree.children.push(child);
            var hasChildren = this.getRandomInt(1, 6);
            if (hasChildren > 3) {
                child.children = this.generateChildTree(20, child.label);
            }
        }
        return tree;
    };
    AppComponent.prototype.generateChildTree = function (number, name) {
        var length = this.getRandomInt(1, number);
        var children = [];
        for (var i = 0; i < length; i++) {
            var child = { label: "child of " + name + " " + i, children: null, open: false };
            children.push(child);
        }
        return children;
    };
    AppComponent.prototype.generateLazyLoadingTree = function (number) {
        var tree = { label: "root", children: [], open: true };
        for (var i = 0; i < number; i++) {
            var child = { label: "child " + i, children: [], open: false, lazyLoading: true };
            tree.children.push(child);
        }
        return tree;
    };
    AppComponent.prototype.onOpen = function (node) {
        var _this = this;
        if (!node.children)
            node.children = [];
        if (!node.children.length) {
            this.lazyLoadingTree.showLoading(node);
            var timeId = setTimeout(function () {
                var number = _this.getRandomInt(1, 20);
                var children = [];
                for (var i = 0; i < number; i++) {
                    var child = { label: "lazyLoading-child " + i, children: null, open: false, lazyLoading: false };
                    var hasChildren = _this.getRandomInt(1, 6);
                    if (hasChildren > 3) {
                        child.lazyLoading = true;
                    }
                    children.push(child);
                }
                _this.lazyLoadingTree.hideLoading(node);
                _this.lazyLoadingTree.addNodeChildren(node, children);
            }, 1000);
        }
    };
    AppComponent.prototype.onChangeText = function () {
        this.displayFilterTree.filter(this.value);
    };
    AppComponent.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    AppComponent.prototype.onChangeCheckbox = function (event) {
        console.log("change");
    };
    AppComponent.prototype.canSelectNode = function (node) {
        if (node.children && node.children.length > 0)
            return false;
        else
            return true;
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ViewChild */])('displayFilterTree'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_nn_angular_tree__["b" /* NNTreeComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_nn_angular_tree__["b" /* NNTreeComponent */]) === "function" && _a || Object)
], AppComponent.prototype, "displayFilterTree", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ViewChild */])('lazyLoadingTree'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_nn_angular_tree__["b" /* NNTreeComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_nn_angular_tree__["b" /* NNTreeComponent */]) === "function" && _b || Object)
], AppComponent.prototype, "lazyLoadingTree", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(143),
        styles: [__webpack_require__(140)]
    })
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_nn_angular_tree__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5_nn_angular_tree__["a" /* NNTreeModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[168]);
//# sourceMappingURL=main.bundle.js.map