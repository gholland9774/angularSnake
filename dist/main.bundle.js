webpackJsonp([1,4],{

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridPositionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GridPositionService = (function () {
    function GridPositionService() {
    }
    GridPositionService.prototype.getInitialSnakePosition = function (gridSize) {
        //Head will be in the middle:
        var head = [Math.floor(gridSize / 2), Math.floor(gridSize / 2)];
        // Body will be to the left
        var body1 = [head[0], head[1] - 1];
        var body2 = [head[0], head[1] - 2];
        return [head, body1, body2];
    };
    GridPositionService.prototype.getNextSnakePosition = function (oldSnakePosition, direction, gridSize) {
        var newSnakePosition = [];
        switch (direction) {
            case "U":
                newSnakePosition[0] = [oldSnakePosition[0][0] - 1, oldSnakePosition[0][1]];
                break;
            case "D":
                newSnakePosition[0] = [oldSnakePosition[0][0] + 1, oldSnakePosition[0][1]];
                break;
            case "L":
                newSnakePosition[0] = [oldSnakePosition[0][0], oldSnakePosition[0][1] - 1];
                break;
            case "R":
                newSnakePosition[0] = [oldSnakePosition[0][0], oldSnakePosition[0][1] + 1];
                break;
        }
        if (newSnakePosition[0][0] < 0 || newSnakePosition[0][1] < 0 || newSnakePosition[0][0] >= gridSize || newSnakePosition[0][1] >= gridSize) {
            alert('You a dead ass snake');
        }
        for (var i = 1; i < oldSnakePosition.length; i++) {
            newSnakePosition[i] = oldSnakePosition[i - 1];
        }
        return newSnakePosition;
    };
    GridPositionService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], GridPositionService);
    return GridPositionService;
}());
//# sourceMappingURL=/Users/gholland/Documents/Playground/Angular/angularSnake/src/grid-position.service.js.map

/***/ }),

/***/ 403:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 403;


/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(513);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/gholland/Documents/Playground/Angular/angularSnake/src/main.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_position_service__ = __webpack_require__(333);
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
        this.title = 'Classic Snake Game!';
        this.gridOptions = [10, 15, 20, 25, 30];
        this.selectedGridSize = 10;
        this.direction = null;
        this.gameInProgress = false;
        this.snakePosition = [];
        this.foodPosition = [];
        this.gridPositionService = new __WEBPACK_IMPORTED_MODULE_2__grid_position_service__["a" /* GridPositionService */]();
    }
    AppComponent.prototype.handleKeyboardEvent = function (event) {
        switch (event.key) {
            case 'ArrowUp':
                if (!this.gameInProgress) {
                    this.snakePosition = this.gridPositionService.getInitialSnakePosition(this.selectedGridSize);
                    this.gameInProgress = true;
                    this.startGame();
                }
                this.direction = "U";
                break;
            case 'ArrowDown':
                if (!this.gameInProgress) {
                    this.snakePosition = this.gridPositionService.getInitialSnakePosition(this.selectedGridSize);
                    this.gameInProgress = true;
                    this.startGame();
                }
                this.direction = "D";
                break;
            case 'ArrowLeft':
                if (!this.gameInProgress) {
                    this.snakePosition = this.gridPositionService.getInitialSnakePosition(this.selectedGridSize);
                    this.gameInProgress = true;
                    this.startGame();
                }
                this.direction = "L";
                break;
            case 'ArrowRight':
                if (!this.gameInProgress) {
                    this.snakePosition = this.gridPositionService.getInitialSnakePosition(this.selectedGridSize);
                    this.gameInProgress = true;
                    this.startGame();
                }
                this.direction = "R";
                break;
        }
    };
    AppComponent.prototype.startGame = function () {
        var _this = this;
        var timer = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].timer(0, 250);
        this.gameTimer = timer.subscribe(function (t) {
            _this.handleTick(t);
        });
    };
    AppComponent.prototype.handleTick = function (t) {
        this.snakePosition = this.gridPositionService.getNextSnakePosition(this.snakePosition, this.direction, this.selectedGridSize);
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: "\n    <h1>\n      {{title}}\n    </h1>\n    \n    <app-gridsize-selector\n        class=\"gridsizeSelector\"\n        [gridOptions]=\"gridOptions\"\n        [(selectedGridSize)]=\"selectedGridSize\"\n        [selectorEnabled]=\"gameInProgress\"\n    ></app-gridsize-selector>\n    \n    <app-gamegrid\n        class=\"gameGrid\"\n        [gridSize]=\"selectedGridSize\"\n        [newSnakePosition]=\"snakePosition\"\n        [foodPosition]=\"foodPosition\">\n    </app-gamegrid>\n    \n    <div id=\"startButton\">Press any arrow key to start the game</div>\n  ",
            styles: [__webpack_require__(673)],
            host: {
                '(document:keydown)': 'handleKeyboardEvent($event)'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/gholland/Documents/Playground/Angular/angularSnake/src/app.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gridsize_selector_gridsize_selector_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gamegrid_gamegrid_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__game_cell_game_cell_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__grid_position_service__ = __webpack_require__(333);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__gridsize_selector_gridsize_selector_component__["a" /* GridsizeSelectorComponent */],
                __WEBPACK_IMPORTED_MODULE_6__gamegrid_gamegrid_component__["a" /* GamegridComponent */],
                __WEBPACK_IMPORTED_MODULE_7__game_cell_game_cell_component__["a" /* GameCell */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__grid_position_service__["a" /* GridPositionService */]
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/gholland/Documents/Playground/Angular/angularSnake/src/app.module.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameCell; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GameCell = (function () {
    function GameCell() {
        this.gridStyle = "blank";
    }
    GameCell.prototype.ngOnChanges = function (changes) {
        if ('cellContent' in changes) {
            this.setGridStyle();
        }
    };
    GameCell.prototype.setGridStyle = function () {
        if (this.cellContent == 2) {
            this.gridStyle = "head";
        }
        else if (this.cellContent == 1) {
            this.gridStyle = "body";
        }
        else {
            this.gridStyle = "blank";
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Number)
    ], GameCell.prototype, "cellContent", void 0);
    GameCell = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'game-cell',
            styles: ["\n        .gameCellUnit{\n            width: 100%;\n            height: 100%;\n            background-color: lightblue;\n            display: flex;\n            align-items: center;\n            justify-content: center;    \n        }\n        .blank {\n            background-color: lightblue;\n        }\n        .head {\n            background-color: darkgreen;\n        }\n        .body {\n            background-color: greenyellow;\n        }\n    "],
            template: "\n      <div class=\"gameCellUnit {{gridStyle}}\">\n      </div>\n    ",
        }), 
        __metadata('design:paramtypes', [])
    ], GameCell);
    return GameCell;
}());
//# sourceMappingURL=/Users/gholland/Documents/Playground/Angular/angularSnake/src/game-cell.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamegridComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GamegridComponent = (function () {
    function GamegridComponent() {
        this.gameArray = [];
    }
    GamegridComponent.prototype.ngOnInit = function () {
        this.constructGrid();
    };
    GamegridComponent.prototype.ngOnChanges = function (changes) {
        if ('gridSize' in changes) {
            var gridSize = changes['gridSize'];
            this.onGridSizeChange(gridSize.currentValue);
        }
        if ('newSnakePosition' in changes) {
            this.updateSnakePosition();
        }
    };
    GamegridComponent.prototype.updateSnakePosition = function () {
        this.resetGrid();
        for (var i in this.newSnakePosition) {
            var coords = this.newSnakePosition[i];
            this.gameArray[coords[0]][coords[1]] = i == "0" ? 2 : 1;
        }
    };
    GamegridComponent.prototype.resetGrid = function () {
        var newGameArray = [];
        for (var i = 0; i < this.gameArray.length; i++) {
            var arr = [];
            for (var j = 0; j < this.gameArray.length; j++) {
                arr.push("0");
            }
            newGameArray.push(arr);
        }
        this.gameArray = newGameArray;
    };
    GamegridComponent.prototype.onGridSizeChange = function (newGridSize) {
        this.constructGrid();
    };
    GamegridComponent.prototype.constructGrid = function () {
        this.gameArray = [];
        for (var i = 0; i < this.gridSize; i++) {
            var arr = [];
            for (var j = 0; j < this.gridSize; j++) {
                arr.push("0");
            }
            this.gameArray.push(arr);
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Number)
    ], GamegridComponent.prototype, "gridSize", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Array)
    ], GamegridComponent.prototype, "newSnakePosition", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Array)
    ], GamegridComponent.prototype, "foodPosition", void 0);
    GamegridComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-gamegrid',
            template: "\n    <div *ngFor=\"let row of gameArray; let i = index\"class=\"gameRow\">\n      <div *ngFor=\"let col of row; let j = index;\" class=\"gameCell\">\n        <game-cell [cellContent]=\"col\" class=\"gameCell\"></game-cell>\n      </div>\n    </div>\n  ",
            styles: [__webpack_require__(674)]
        }), 
        __metadata('design:paramtypes', [])
    ], GamegridComponent);
    return GamegridComponent;
}());
//# sourceMappingURL=/Users/gholland/Documents/Playground/Angular/angularSnake/src/gamegrid.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridsizeSelectorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GridsizeSelectorComponent = (function () {
    function GridsizeSelectorComponent() {
        this.selectedGridSizeChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
    }
    GridsizeSelectorComponent.prototype.ngOnInit = function () {
    };
    GridsizeSelectorComponent.prototype.onGridSizeChange = function (event) {
        this.selectedGridSizeChange.emit(this.selectedGridSize);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Array)
    ], GridsizeSelectorComponent.prototype, "gridOptions", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Number)
    ], GridsizeSelectorComponent.prototype, "selectedGridSize", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === 'function' && _a) || Object)
    ], GridsizeSelectorComponent.prototype, "selectedGridSizeChange", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], GridsizeSelectorComponent.prototype, "selectorEnabled", void 0);
    GridsizeSelectorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-gridsize-selector',
            template: "\n    <div id=\"gridSelection\">\n      <div>Select your game grid size:</div>\n      <select id=\"gridSizeSelect\" (change)=\"onGridSizeChange($event)\" [(ngModel)]=\"selectedGridSize\" disabled=\"{{selectorEnabled}}\">\n        <option *ngFor=\"let numOption of gridOptions\" [value]=\"numOption\">{{numOption}}</option>\n      </select>\n    </div>\n  ",
            styles: [__webpack_require__(675)]
        }), 
        __metadata('design:paramtypes', [])
    ], GridsizeSelectorComponent);
    return GridsizeSelectorComponent;
    var _a;
}());
//# sourceMappingURL=/Users/gholland/Documents/Playground/Angular/angularSnake/src/gridsize-selector.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/gholland/Documents/Playground/Angular/angularSnake/src/environment.js.map

/***/ }),

/***/ 673:
/***/ (function(module, exports) {

module.exports = ".gridsizeSelector{\n    display: block;\n}\n\n.gameGrid {\n    margin-top: 40px;\n}\n\n#startButton{\n    width: 400px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    margin-top: 40px;\n    background-color: white;\n    color: #999999;\n    border-radius: 4px;\n    padding: 20px;\n}"

/***/ }),

/***/ 674:
/***/ (function(module, exports) {

module.exports = ".gameRow{\n    height: 24px;\n}\n\n.gameCell{\n    width: 24px;\n    height: 24px;\n    display: inline-block;\n    background-color: white;\n    border: 1px solid black;\n}\n\n.gameCell {\n    color: darkgreen;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}"

/***/ }),

/***/ 675:
/***/ (function(module, exports) {

module.exports = "#gridSelection{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n#gridSizeSelect{\n    width: 100px;\n    margin-left: 20px;\n}"

/***/ }),

/***/ 957:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(404);


/***/ })

},[957]);
//# sourceMappingURL=main.bundle.map