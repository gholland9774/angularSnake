webpackJsonp([1,4],{

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScoreDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ScoreDataService = (function () {
    function ScoreDataService(http) {
        this.http = http;
        this.getScoresUrl = 'http://localhost:3000/topScores';
        this.submitHighScore = 'http://localhost:3000/postScore';
    }
    ScoreDataService.prototype.getScores = function () {
        var scores = this.http
            .get(this.getScoresUrl)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
        return scores;
    };
    ScoreDataService.prototype.postScore = function (name, age, score) {
        var body = {
            name: name,
            age: age,
            score: score
        };
        return this.http
            .post(this.submitHighScore, body)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    ScoreDataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], ScoreDataService);
    return ScoreDataService;
    var _a;
}());
//# sourceMappingURL=/Users/gholland/Documents/Playground/Angular/angularSnake/src/score-data-service.service.js.map

/***/ }),

/***/ 362:
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
    GridPositionService.prototype.getNextSnakePosition = function (oldSnakePosition, direction) {
        var newSnakePosition = [];
        var hitFood = false;
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
        for (var i = 1; i < oldSnakePosition.length; i++) {
            newSnakePosition[i] = oldSnakePosition[i - 1];
        }
        return newSnakePosition;
    };
    GridPositionService.prototype.foodCollisionCheck = function (snakePosition, foodPosition) {
        return snakePosition[0][0] == foodPosition[0] && snakePosition[0][1] == foodPosition[1];
    };
    GridPositionService.prototype.getNewFoodPosition = function (snakePosition, gridSize) {
        var newFoodPosition = [];
        newFoodPosition[0] = Math.floor(Math.random() * gridSize);
        newFoodPosition[1] = Math.floor(Math.random() * gridSize);
        console.log(newFoodPosition);
        return newFoodPosition;
    };
    GridPositionService.prototype.collisionCheck = function (snakePosition, gridSize) {
        if (snakePosition[0][0] < 0 || snakePosition[0][1] < 0 || snakePosition[0][0] >= gridSize || snakePosition[0][1] >= gridSize) {
            return true;
        }
        for (var i = 1; i < snakePosition.length; i++) {
            if (snakePosition[0][0] == snakePosition[i][0] && snakePosition[0][1] == snakePosition[i][1]) {
                return true;
            }
        }
        return false;
    };
    GridPositionService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], GridPositionService);
    return GridPositionService;
}());
//# sourceMappingURL=/Users/gholland/Documents/Playground/Angular/angularSnake/src/grid-position.service.js.map

/***/ }),

/***/ 432:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 432;


/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(551);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/gholland/Documents/Playground/Angular/angularSnake/src/main.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
        this.title = 'Classic Snake Game';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: "\n    <h1>\n      {{title}}\n    </h1>\n    \n    <router-outlet></router-outlet>\n  ",
            styles: [],
            host: {}
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/gholland/Documents/Playground/Angular/angularSnake/src/app.component.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gridsize_selector_gridsize_selector_component__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__gamegrid_gamegrid_component__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__game_cell_game_cell_component__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__grid_position_service__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__high_scores_high_scores_component__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__game_board_game_board_component__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__score_data_service_service__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__game_over_game_over_component__ = __webpack_require__(554);
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














var appRoutes = [
    { path: 'highScores', component: __WEBPACK_IMPORTED_MODULE_10__high_scores_high_scores_component__["a" /* HighScoresComponent */] },
    { path: 'play', component: __WEBPACK_IMPORTED_MODULE_11__game_board_game_board_component__["a" /* GameBoardComponent */] },
    { path: 'gameOver/:score', component: __WEBPACK_IMPORTED_MODULE_13__game_over_game_over_component__["a" /* GameOverComponent */] },
    { path: '**', redirectTo: '/highScores', pathMatch: 'full' }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__gridsize_selector_gridsize_selector_component__["a" /* GridsizeSelectorComponent */],
                __WEBPACK_IMPORTED_MODULE_7__gamegrid_gamegrid_component__["a" /* GamegridComponent */],
                __WEBPACK_IMPORTED_MODULE_8__game_cell_game_cell_component__["a" /* GameCell */],
                __WEBPACK_IMPORTED_MODULE_10__high_scores_high_scores_component__["a" /* HighScoresComponent */],
                __WEBPACK_IMPORTED_MODULE_11__game_board_game_board_component__["a" /* GameBoardComponent */],
                __WEBPACK_IMPORTED_MODULE_13__game_over_game_over_component__["a" /* GameOverComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__grid_position_service__["a" /* GridPositionService */],
                __WEBPACK_IMPORTED_MODULE_12__score_data_service_service__["a" /* ScoreDataService */]
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/gholland/Documents/Playground/Angular/angularSnake/src/app.module.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grid_position_service__ = __webpack_require__(362);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameBoardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GameBoardComponent = (function () {
    function GameBoardComponent(gridPositionService, router) {
        this.gridPositionService = gridPositionService;
        this.router = router;
        this.gridSize = 20;
        this.direction = null;
        this.gameInProgress = false;
        this.snakePosition = [];
        this.foodPosition = [1, 4];
        this.timerTime = 200;
        this.timerMultiple = 0.97;
        this.score = 0;
    }
    GameBoardComponent.prototype.ngOnInit = function () {
        console.log('initialize game board');
    };
    GameBoardComponent.prototype.handleKeyboardEvent = function (event) {
        if (!this.gameInProgress) {
            this.snakePosition = this.gridPositionService.getInitialSnakePosition(this.gridSize);
            this.gameInProgress = true;
            this.startGame();
        }
        switch (event.key) {
            case 'ArrowUp':
                if (this.direction !== "D") {
                    this.direction = "U";
                }
                break;
            case 'ArrowDown':
                if (this.direction !== "U") {
                    this.direction = "D";
                }
                break;
            case 'ArrowLeft':
                if (this.direction !== "R") {
                    this.direction = "L";
                }
                break;
            case 'ArrowRight':
                if (this.direction !== "L") {
                    this.direction = "R";
                }
                break;
        }
    };
    GameBoardComponent.prototype.startGame = function () {
        this.startTimer(this.timerTime);
    };
    GameBoardComponent.prototype.startTimer = function (tickTime) {
        var _this = this;
        var timer = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].timer(tickTime, tickTime);
        this.gameTimer = timer.subscribe(function (t) {
            _this.handleTick(t);
        });
    };
    GameBoardComponent.prototype.handleTick = function (t) {
        var oldSnakePosition = this.snakePosition;
        var newSnakePosition = this.gridPositionService.getNextSnakePosition(this.snakePosition, this.direction);
        var collisionCheck = this.gridPositionService.collisionCheck(newSnakePosition, this.gridSize);
        if (collisionCheck) {
            this.gameTimer.unsubscribe();
            alert('you died with a score of ' + this.score);
            this.router.navigateByUrl('/gameOver/' + this.score);
        }
        else {
            this.snakePosition = newSnakePosition;
            var hitFood = this.gridPositionService.foodCollisionCheck(this.snakePosition, this.foodPosition);
            if (hitFood) {
                this.score += 10;
                this.foodPosition = this.gridPositionService.getNewFoodPosition(this.snakePosition, this.gridSize);
                this.snakePosition.push(oldSnakePosition[oldSnakePosition.length - 1]);
                this.speedUp();
            }
        }
    };
    GameBoardComponent.prototype.speedUp = function () {
        this.gameTimer.unsubscribe();
        this.timerTime = Math.floor(this.timerTime * this.timerMultiple);
        this.startTimer(this.timerTime);
    };
    GameBoardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-game-board',
            styles: [__webpack_require__(714)],
            template: "\n      <div>Score: {{score}}</div>\n      <app-gamegrid\n        class=\"gameGrid\"\n        [gridSize]=\"gridSize\"\n        [newSnakePosition]=\"snakePosition\"\n        [foodPosition]=\"foodPosition\">\n      </app-gamegrid>\n    ",
            host: {
                '(document:keydown)': 'handleKeyboardEvent($event)'
            }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__grid_position_service__["a" /* GridPositionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__grid_position_service__["a" /* GridPositionService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _b) || Object])
    ], GameBoardComponent);
    return GameBoardComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/gholland/Documents/Playground/Angular/angularSnake/src/game-board.component.js.map

/***/ }),

/***/ 553:
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
        else if (this.cellContent == 3) {
            this.gridStyle = "food";
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'game-cell',
            styles: ["\n        .gameCellUnit{\n            width: 100%;\n            height: 100%;\n            background-color: lightblue;\n            display: flex;\n            align-items: center;\n            justify-content: center;    \n        }\n        .blank {\n            background-color: lightblue;\n        }\n        .head {\n            background-color: darkgreen;\n        }\n        .body {\n            background-color: greenyellow;\n        }\n        .food {\n            background-color: saddlebrown;\n        }\n    "],
            template: "\n      <div class=\"gameCellUnit {{gridStyle}}\">\n      </div>\n    ",
        }), 
        __metadata('design:paramtypes', [])
    ], GameCell);
    return GameCell;
}());
//# sourceMappingURL=/Users/gholland/Documents/Playground/Angular/angularSnake/src/game-cell.component.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__score_data_service_service__ = __webpack_require__(246);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameOverComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GameOverComponent = (function () {
    function GameOverComponent(route, scoreDataService) {
        this.route = route;
        this.scoreDataService = scoreDataService;
        this.score = 0;
        this.lowestHighScore = 0;
        this.isInTopTen = false;
        this.name = "Test score";
        this.age = 100;
    }
    GameOverComponent.prototype.ngOnInit = function () {
        this.score = this.route.snapshot.params['score'];
        this.getAllScores();
    };
    GameOverComponent.prototype.getAllScores = function () {
        var _this = this;
        this.scoreDataService.getScores()
            .subscribe(function (data) {
            var highScores = data['result'];
            if (highScores.length == 10) {
                _this.lowestHighScore = highScores[9]['score'];
            }
            _this.compareScore();
        });
    };
    GameOverComponent.prototype.compareScore = function () {
        console.log(this.score, this.lowestHighScore);
        this.isInTopTen = this.score > this.lowestHighScore;
    };
    GameOverComponent.prototype.submitScore = function () {
        console.log('submit score');
        this.scoreDataService.postScore(this.name, this.age, this.score)
            .subscribe(function (data) {
            console.log(data);
        });
    };
    GameOverComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-game-over',
            template: __webpack_require__(719),
            styles: [__webpack_require__(715)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__score_data_service_service__["a" /* ScoreDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__score_data_service_service__["a" /* ScoreDataService */]) === 'function' && _b) || Object])
    ], GameOverComponent);
    return GameOverComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/gholland/Documents/Playground/Angular/angularSnake/src/game-over.component.js.map

/***/ }),

/***/ 555:
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
            this.updateGrid();
        }
        if ('foodPosition' in changes) {
            this.updateGrid();
        }
    };
    GamegridComponent.prototype.updateGrid = function () {
        this.resetGrid();
        for (var i in this.newSnakePosition) {
            var coords = this.newSnakePosition[i];
            this.gameArray[coords[0]][coords[1]] = i == "0" ? 2 : 1;
        }
        this.gameArray[this.foodPosition[0]][this.foodPosition[1]] = 3;
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-gamegrid',
            template: "\n    <div *ngFor=\"let row of gameArray; let i = index\"class=\"gameRow\">\n      <div *ngFor=\"let col of row; let j = index;\" class=\"gameCell\">\n        <game-cell [cellContent]=\"col\" class=\"gameCell\"></game-cell>\n      </div>\n    </div>\n  ",
            styles: [__webpack_require__(716)]
        }), 
        __metadata('design:paramtypes', [])
    ], GamegridComponent);
    return GamegridComponent;
}());
//# sourceMappingURL=/Users/gholland/Documents/Playground/Angular/angularSnake/src/gamegrid.component.js.map

/***/ }),

/***/ 556:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-gridsize-selector',
            template: "\n    <div id=\"gridSelection\">\n      <div>Select your game grid size:</div>\n      <select id=\"gridSizeSelect\" (change)=\"onGridSizeChange($event)\" [(ngModel)]=\"selectedGridSize\" disabled=\"{{selectorEnabled}}\">\n        <option *ngFor=\"let numOption of gridOptions\" [value]=\"numOption\">{{numOption}}</option>\n      </select>\n    </div>\n  ",
            styles: [__webpack_require__(717)]
        }), 
        __metadata('design:paramtypes', [])
    ], GridsizeSelectorComponent);
    return GridsizeSelectorComponent;
    var _a;
}());
//# sourceMappingURL=/Users/gholland/Documents/Playground/Angular/angularSnake/src/gridsize-selector.component.js.map

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__score_data_service_service__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(171);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighScoresComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HighScoresComponent = (function () {
    function HighScoresComponent(scoreDataService, router) {
        this.scoreDataService = scoreDataService;
        this.router = router;
    }
    HighScoresComponent.prototype.ngOnInit = function () {
        this.getAllScores();
    };
    HighScoresComponent.prototype.getAllScores = function () {
        var _this = this;
        this.scoreDataService.getScores()
            .subscribe(function (data) {
            _this.highScores = data['result'];
            for (var i = _this.highScores.length; i < 10; i++) {
                _this.highScores.push({
                    name: 'Empty',
                    age: 0,
                    score: 0
                });
            }
        });
    };
    HighScoresComponent.prototype.playGame = function () {
        this.router.navigateByUrl('/play');
    };
    HighScoresComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-high-scores',
            template: __webpack_require__(720),
            styles: [__webpack_require__(718)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__score_data_service_service__["a" /* ScoreDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__score_data_service_service__["a" /* ScoreDataService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === 'function' && _b) || Object])
    ], HighScoresComponent);
    return HighScoresComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/gholland/Documents/Playground/Angular/angularSnake/src/high-scores.component.js.map

/***/ }),

/***/ 558:
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

/***/ 714:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 715:
/***/ (function(module, exports) {

module.exports = ".scoreInput{\n    display: inline-block;\n    width: 200px;\n    border: 1px solid #999;\n    border-radius: 4px;\n    padding: 8px 8px 7px 8px;\n    font-size: 18px;\n    color: #777;\n}\n.inputRow{\n    margin-top: 20px;\n}\n\n.submitButton {\n    width: 200px;\n    padding: 20px;\n    font-size: 18px;\n    background-color: black;\n    color: white;\n    border-radius: 6px;\n    margin-top: 30px;\n    cursor: pointer;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}"

/***/ }),

/***/ 716:
/***/ (function(module, exports) {

module.exports = ".gameRow{\n    height: 24px;\n}\n\n.gameCell{\n    width: 24px;\n    height: 24px;\n    display: inline-block;\n    background-color: white;\n    border: 1px solid black;\n}\n\n.gameCell {\n    color: darkgreen;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}"

/***/ }),

/***/ 717:
/***/ (function(module, exports) {

module.exports = "#gridSelection{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n#gridSizeSelect{\n    width: 100px;\n    margin-left: 20px;\n}"

/***/ }),

/***/ 718:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 719:
/***/ (function(module, exports) {

module.exports = "<p>\n  Game Over! You got a score of {{score}}\n</p>\n\n<div *ngIf=\"isInTopTen\">\n  Congrats, you are in the top ten\n  Please enter your information below to record your score:\n  <div class=\"inputRow\">\n    <input [(ngModel)]=\"name\" #ctrl=\"ngModel\" required class=\"scoreInput\">\n  </div>\n  <div class=\"inputRow\">\n    <input [(ngModel)]=\"age\" #ctrl=\"ngModel\" required type=\"number\" class=\"scoreInput\">\n  </div>\n  <div class=\"submitButton\" (click)=\"submitScore()\">Submit Score</div>\n</div>\n\n<div *ngIf=\"!isInTopTen\">\n  Sorry, you didn't score high enough for the top ten!\n</div>"

/***/ }),

/***/ 720:
/***/ (function(module, exports) {

module.exports = "<h1>\n  Top ten scores\n\n  <div *ngFor=\"let score of highScores; let i = index\">\n    {{i+1}}.)  {{score.name}}...{{score.age}}...{{score.score}}\n  </div>\n\n  <div (click)=\"playGame()\">Try your skill</div>\n\n</h1>\n"

/***/ }),

/***/ 991:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(433);


/***/ })

},[991]);
//# sourceMappingURL=main.bundle.map