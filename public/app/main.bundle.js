webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RoutingComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user_component__ = __webpack_require__("./src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__questions_questions_component__ = __webpack_require__("./src/app/questions/questions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__result_result_component__ = __webpack_require__("./src/app/result/result.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: 'user', pathMatch: 'full' },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_2__user_user_component__["a" /* UserComponent */] },
    { path: 'questions', component: __WEBPACK_IMPORTED_MODULE_3__questions_questions_component__["a" /* QuestionsComponent */] },
    { path: 'result', component: __WEBPACK_IMPORTED_MODULE_4__result_result_component__["a" /* ResultComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var RoutingComponents = [__WEBPACK_IMPORTED_MODULE_2__user_user_component__["a" /* UserComponent */], __WEBPACK_IMPORTED_MODULE_3__questions_questions_component__["a" /* QuestionsComponent */], __WEBPACK_IMPORTED_MODULE_4__result_result_component__["a" /* ResultComponent */]];


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_webstorage_service__ = __webpack_require__("./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__questions_questions_component__ = __webpack_require__("./src/app/questions/questions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__result_result_component__ = __webpack_require__("./src/app/result/result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_user_component__ = __webpack_require__("./src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_session_service__ = __webpack_require__("./src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_api_service__ = __webpack_require__("./src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_slider_slider_component__ = __webpack_require__("./src/app/components/slider/slider.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["b" /* RoutingComponents */],
                __WEBPACK_IMPORTED_MODULE_7__questions_questions_component__["a" /* QuestionsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__result_result_component__["a" /* ResultComponent */],
                __WEBPACK_IMPORTED_MODULE_9__user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_slider_slider_component__["a" /* Slider */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular_webstorage_service__["b" /* StorageServiceModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__services_session_service__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_11__services_api_service__["a" /* ApiService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/slider/slider.component.css":
/***/ (function(module, exports) {

module.exports = ".slider {display: block; float: left; position: relative; max-width: 70px;}\r\n.ui-widget.ui-widget-content {border: 1px solid #c5c5c5; margin: auto; height: 200px; margin-top: 20px;}\r\n.q-text {\r\n\tmax-width:40px;\r\n    text-align: center;\r\n\tmargin-top: 5px;\r\n\tcolor: #fff;\r\n\tbackground: #007ae2;\r\n\tborder: none;\r\n\tfont-size: 14px;\r\n}"

/***/ }),

/***/ "./src/app/components/slider/slider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Slider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var Slider = /** @class */ (function () {
    function Slider(elementRef, cdr) {
        this.cdr = cdr;
        this.onValueChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */](); //passing a string value to parent
        this.elementRef = elementRef;
    }
    Slider.prototype.ngAfterViewInit = function () {
        var _this = this;
        $(this.elementRef.nativeElement).find('#slider').empty().slider({
            orientation: "vertical",
            range: "min",
            min: 0,
            max: 10,
            value: this.sliderVal,
            slide: function (event, ui) {
                _this.sliderVal = ui.value;
                _this.onValueChanged.emit(ui.value);
            },
            step: 0.01
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], Slider.prototype, "sliderVal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], Slider.prototype, "onValueChanged", void 0);
    Slider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'rang-slider',
            template: "<div class=\"slider\">\n      <div id=\"slider\"></div>\n      <input type=\"text\" class=\"q-text\" [(ngModel)]=\"sliderVal\" name=\"rang_slider\" disabled>\n    </div>",
            styles: [__webpack_require__("./src/app/components/slider/slider.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], Slider);
    return Slider;
}());



/***/ }),

/***/ "./src/app/questions/questions.component.css":
/***/ (function(module, exports) {

module.exports = ".questions {display: table; overflow: auto; margin: 30px auto; position: relative; max-width: 900px;}\r\n.questions h2 {color: #007ae2; text-align: center;}\r\n.questions .quest {float: left; margin: 0px 15px; text-align: center;}\r\n.btn-wrap {\r\n\twidth: 100%;\r\n\tposition: relative;\r\n\tdisplay: block;\r\n\tfloat: left;\r\n}\r\n.btn-wrap .gen_cta {\r\n\tposition: relative; background: #007ae2; color: #fff; border: 0; font-size: 18px;\r\n\tpadding: 6px 30px; border-radius: 4px; cursor: pointer;\r\n\tmargin: 30px auto;\r\n\tmin-width: 210px;\r\n\tdisplay:block;\r\n}"

/***/ }),

/***/ "./src/app/questions/questions.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"questions\">\n\t<h2>{{ title }}</h2>\n\t<div class=\"error_msg\" *ngIf=\"message != ''\">{{ message }} (<a routerLink=\"/user\">Go Back</a>)</div>\n\t<form #questionsForm=\"ngForm\" (ngSubmit) = \"saveAns(questionsForm)\">\n\t\t<div class=\"quest\" *ngFor=\"let item of questions; let i = index\">\n\t\t\t<div class=\"ques\">{{item.title}}</div>\n\t\t\t<rang-slider [sliderVal]=\"item.default_answer\" (onValueChanged)=\"changeSliderVal($event, item.id)\"></rang-slider>\n\t\t\t<input type=\"hidden\" [(ngModel)]=\"item.default_answer\" name=\"question_{{item.id}}\">\n\t\t</div>\n\t\t<div class=\"btn-wrap\">\n\t\t\t<button type=\"submit\" ng-model=\"button\" class=\"gen_cta\">See your matches</button>\n\t\t</div>\n\t</form>\n</div>"

/***/ }),

/***/ "./src/app/questions/questions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__("./src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_session_service__ = __webpack_require__("./src/app/services/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuestionsComponent = /** @class */ (function () {
    function QuestionsComponent(router, apiService, sessionService) {
        this.router = router;
        this.apiService = apiService;
        this.sessionService = sessionService;
        this.title = "Rate Your Skills";
        this.userKey = 'user-form';
        this.message = '';
    }
    QuestionsComponent.prototype.ngOnInit = function () {
        var userSession = this.sessionService.sessionData(this.userKey);
        if (userSession == null) {
            this.router.navigate(['user']);
        }
        this.getQuestion();
    };
    QuestionsComponent.prototype.getQuestion = function () {
        var _this = this;
        this.apiService.getQuestions()
            .then(function (questions) { return _this.questions = questions; });
    };
    QuestionsComponent.prototype.changeSliderVal = function (event, id) {
        this.questions.forEach(function (element) {
            if (element.id == id) {
                element.default_answer = event;
            }
        });
    };
    QuestionsComponent.prototype.saveAns = function (questionsForm) {
        var _this = this;
        var userData = this.sessionService.sessionData(this.userKey);
        if (userData == null) {
            this.router.navigate(['user']);
        }
        this.apiService.saveAnswers([{
                user: userData,
                questions: questionsForm.value
            }]).then(function (res) {
            _this.sessionService.sessionDataRemove(_this.userKey);
            if (res.message == "success") {
                _this.sessionService.sessionData('user_answers', res.data);
                _this.router.navigate(['result']);
            }
            _this.message = res.message;
        });
    };
    QuestionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-questions',
            template: __webpack_require__("./src/app/questions/questions.component.html"),
            styles: [__webpack_require__("./src/app/questions/questions.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_3__services_session_service__["a" /* SessionService */]])
    ], QuestionsComponent);
    return QuestionsComponent;
}());



/***/ }),

/***/ "./src/app/result/result.component.css":
/***/ (function(module, exports) {

module.exports = ".result_wrap {\r\n    position: relative;\r\n    display: block;\r\n    width: calc(100% - 50px);\r\n    padding: 25px;\r\n}\r\n.result_wrap h2{\r\n    color: #007ae2; text-align: center;\r\n    margin-bottom: 40px;\r\n}\r\n.result_wrap .result {\r\n    display: block;\r\n    max-width: 400px;\r\n    min-width: 250px;\r\n    width: calc(33% - 80px);\r\n    position: relative;\r\n    float: left;\r\n    margin: 25px;\r\n    padding: 15px;\r\n    border: 1px dotted rgb(148, 147, 147);\r\n}\r\n"

/***/ }),

/***/ "./src/app/result/result.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"result_wrap\">\n  <h2>Check the other users closest answers.</h2>\n  <div class=\"error_msg\" *ngIf=\"message != ''\">{{ message }} (<a routerLink=\"/user\">Go Back</a>)</div>\n  <div class=\"result\" *ngFor=\"let item of userAns;\">\n    Question: {{ item.title }} <br>\n    Your Answer: {{ item.answer }} <br>\n    <h4>Other Users Colosest Answers</h4>\n    <div class=\"other_user\" *ngFor=\"let u of item.closest;\">\n      User: {{ u.name }} ({{ u.email }})<br>\n      Answer: {{ u.answer }}\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/result/result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__("./src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResultComponent = /** @class */ (function () {
    function ResultComponent(router, sessionService) {
        this.router = router;
        this.sessionService = sessionService;
        this.message = '';
    }
    ResultComponent.prototype.ngOnInit = function () {
        this.getUserAns();
    };
    ResultComponent.prototype.getUserAns = function () {
        var userData = this.sessionService.sessionData('user_answers');
        if (userData != null) {
            this.userAns = userData;
        }
        else {
            this.userAns = null;
            this.message = "Session ended, add new record!";
        }
        this.sessionService.sessionDataRemove('user_answers');
    };
    ResultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-result',
            template: __webpack_require__("./src/app/result/result.component.html"),
            styles: [__webpack_require__("./src/app/result/result.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */]])
    ], ResultComponent);
    return ResultComponent;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8000/api/';
    }
    ApiService.prototype.getQuestions = function () {
        return this.http.get(this.baseUrl + 'questions')
            .toPromise()
            .then(function (response) {
            var res = response.json();
            return res;
        })
            .catch(this.handleError);
    };
    ApiService.prototype.saveAnswers = function (questionsData) {
        return this.http.post(this.baseUrl + 'store-user-answers', questionsData[0])
            .toPromise()
            .then(function (res) {
            return res.json();
        })
            .catch(this.handleError);
    };
    ApiService.prototype.handleError = function (error) {
        console.error('Server Side Exception:', error);
        return Promise.reject(error.message || error);
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/session.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_webstorage_service__ = __webpack_require__("./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var STORAGE_KEY = 'app-questions';
var SessionService = /** @class */ (function () {
    function SessionService(storage) {
        this.storage = storage;
    }
    SessionService.prototype.sessionData = function (key, data) {
        if (data === void 0) { data = null; }
        var dataKey = STORAGE_KEY + key;
        if (data !== null && this.storage.get(dataKey) === null) {
            this.storage.set(dataKey, data);
        }
        return this.storage.get(dataKey);
    };
    SessionService.prototype.sessionDataRemove = function (key) {
        var dataKey = STORAGE_KEY + key;
        this.storage.remove(dataKey);
        return this.storage.get(dataKey) === null ? true : false;
    };
    SessionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1_angular_webstorage_service__["a" /* SESSION_STORAGE */])),
        __metadata("design:paramtypes", [Object])
    ], SessionService);
    return SessionService;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/***/ (function(module, exports) {

module.exports = ".login {\r\n\tdisplay: table; margin: 40px auto; padding: 20px 20px; border: 1px solid #e2e2e2;\r\n    -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.13);\r\n    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.13);\r\n    border-radius: 6px;\r\n    min-width: 530px;\r\n}\r\n.gen_txt {width: 100%; border: 0; border-bottom: 1px solid #ccc; font-size: 18px; margin-bottom: 14px; padding: 6px 0px;}\r\n.gen_cta_login {\r\n\tbackground: #007ae2; color: #fff; border: 0; font-size: 18px;\r\n\tpadding: 6px 0px; border-radius: 4px; cursor: pointer; width: 100%;\r\n}\r\n.input-error{\r\n    position: relative;\r\n    width: 100%;\r\n    color: red;\r\n    display: table-row;\r\n    font-size: 12px;\r\n}"

/***/ }),

/***/ "./src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\n  <form #userForm=\"ngForm\" (ngSubmit) = \"storeUser(userForm)\" ngNativeValidate>\n    <input type=\"text\" #name=\"ngModel\" required name=\"name\" class=\"gen_txt\" [(ngModel)]=\"userForm.name\" placeholder=\"Full Name\">\n    <span class=\"input-error\" *ngIf=\"name.invalid && name.touched\">Full name is required</span>\n    \n    <input id=\"email\" type=\"text\" #email=\"ngModel\" required ngModel email=\"true\" name=\"email\" class=\"gen_txt\" [(ngModel)]=\"userForm.email\" placeholder=\"Email\">\n    <span class=\"input-error\" *ngIf=\"email.errors?.required && email.touched\">Email is required</span>\n    <span class=\"input-error\" *ngIf=\"email.errors?.email && email.touched\">Email is invalid</span>\n    \n    <button type=\"submit\" ng-model=\"button\" [disabled]=\"email.errors?.email && email.touched\" class=\"gen_cta_login\">Continue</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_service__ = __webpack_require__("./src/app/services/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = /** @class */ (function () {
    function UserComponent(sessionService, router) {
        this.sessionService = sessionService;
        this.router = router;
        this.userForm = {
            id: null,
            name: null,
            email: ''
        };
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent.prototype.storeUser = function (userForm) {
        this.sessionService.sessionData('user-form', userForm.value);
        this.router.navigate(['questions']);
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user',
            template: __webpack_require__("./src/app/user/user.component.html"),
            styles: [__webpack_require__("./src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map