(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".addpanel{\n    padding: 45px;\n    background-image: url(\"https://goo.gl/1Nxe8h\");\n\n}\n#addbtn{\n    position: center;\n}\n.wrapper {\n    text-align: center;\n}\n#addbtn{\n    color: black;\n    position: absolute;\n    padding: 20px;\n    margin: 20px;\n    background-color: #ff9f00;\n\n}"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header2></app-header2>\n\n  <div class=\"addpanel\"> \n\n    <!-- <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Seller Id:</span>\n        </div>\n        <input #sellerid type=\"text\" class=\"form-control\" aria-label=\"Default\" aria-describedby=\"inputGroup-sizing-default\">\n      </div> -->\n\n      <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Your email:</span>\n          </div>\n          <input #sellerEmail type=\"text\" class=\"form-control\" aria-label=\"Default\" aria-describedby=\"inputGroup-sizing-default\">\n        </div>\n\n\n    <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Book name:</span>\n        </div>\n        <input #bookname type=\"text\" class=\"form-control\" aria-label=\"Default\" aria-describedby=\"inputGroup-sizing-default\">\n      </div>\n\n      <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Author name:</span>\n          </div>\n          <input #authorname type=\"text\" class=\"form-control\" aria-label=\"Default\" aria-describedby=\"inputGroup-sizing-default\">\n        </div>\n\n        <div class=\"input-group mb-3\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Image :</span>\n            </div>\n            <input #img type=\"text\" class=\"form-control\" aria-label=\"Default\" aria-describedby=\"inputGroup-sizing-default\">\n          </div>\n\n          <div class=\"input-group mb-3\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Price:</span>\n              </div>\n              <input #price type=\"text\" class=\"form-control\" aria-label=\"Default\" aria-describedby=\"inputGroup-sizing-default\">\n            </div>\n\n            <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Condition:</span>\n                </div>\n                <input #bookcond type=\"text\" class=\"form-control\" aria-label=\"Default\" aria-describedby=\"inputGroup-sizing-default\">\n              </div>\n\n              <div class=\"input-group mb-3\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Category:</span>\n                  </div>\n                  <input #category type=\"text\" class=\"form-control\" aria-label=\"Default\" aria-describedby=\"inputGroup-sizing-default\">\n                </div>\n                \n\n  <div class=\"wrapper\">\n\n  <button  type=\"button\" class=\"btn btn-secondary\"\n           (click)=\"addToListing(sellerid.value,bookname.value,authorname.value,\n           img.value,price.value,bookcond.value,category.value,sellerEmail.value); \n           bookname.value=''; authorname.value='' ;img.value='';\n           price.value='';bookcond.value='';category.value='';sellerid.value=''; sellerEmail.value='' \">\n    Add Book\n  </button>\n  </div>\n</div>\n\n<app-footer2></app-footer2>"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = /** @class */ (function () {
    function AdminComponent(dataService, user) {
        this.dataService = dataService;
        this.user = user;
        this.message = "Loading....";
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent.prototype.addToListing = function (sellerid, name, author, img, price, condition, category, sellerEmail) {
        alert("Book has been successfully added to inventory");
        console.log(name);
        this.dataService.addToListing(1, name, author, img, price, condition, category, sellerEmail);
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")],
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _homepage_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./homepage/header/header.component */ "./src/app/homepage/header/header.component.ts");
/* harmony import */ var _homepage_middle_middle_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./homepage/middle/middle.component */ "./src/app/homepage/middle/middle.component.ts");
/* harmony import */ var _homepage_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./homepage/footer/footer.component */ "./src/app/homepage/footer/footer.component.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _itemdesc_itemdesc_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./itemdesc/itemdesc.component */ "./src/app/itemdesc/itemdesc.component.ts");
/* harmony import */ var _middle2_middle2_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./middle2/middle2.component */ "./src/app/middle2/middle2.component.ts");
/* harmony import */ var _footer2_footer2_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./footer2/footer2.component */ "./src/app/footer2/footer2.component.ts");
/* harmony import */ var _header2_header2_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./header2/header2.component */ "./src/app/header2/header2.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var _getmessage_getmessage_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./getmessage/getmessage.component */ "./src/app/getmessage/getmessage.component.ts");
/* harmony import */ var _messagebox_messagebox_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./messagebox/messagebox.component */ "./src/app/messagebox/messagebox.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var routes = [
    {
        path: '',
        redirectTo: 'homepage',
        pathMatch: 'full'
    },
    {
        path: 'homepage',
        component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_10__["HomepageComponent"]
    },
    {
        path: 'signIn',
        component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_23__["SignInComponent"]
    },
    {
        path: 'cart',
        component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__["CartComponent"]
    },
    {
        path: 'admin',
        component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]]
    },
    {
        path: 'signUp',
        component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_22__["SignUpComponent"]
    },
    {
        path: 'itemdesc/:id',
        component: _itemdesc_itemdesc_component__WEBPACK_IMPORTED_MODULE_15__["ItemdescComponent"]
    },
    {
        path: 'getmessage',
        component: _getmessage_getmessage_component__WEBPACK_IMPORTED_MODULE_24__["GetmessageComponent"]
    },
    {
        path: 'messages',
        component: _messagebox_messagebox_component__WEBPACK_IMPORTED_MODULE_25__["MessageboxComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__["CartComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_10__["HomepageComponent"],
                _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_23__["SignInComponent"],
                _homepage_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _homepage_middle_middle_component__WEBPACK_IMPORTED_MODULE_12__["MiddleComponent"],
                _homepage_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                _itemdesc_itemdesc_component__WEBPACK_IMPORTED_MODULE_15__["ItemdescComponent"],
                _middle2_middle2_component__WEBPACK_IMPORTED_MODULE_16__["Middle2Component"],
                _footer2_footer2_component__WEBPACK_IMPORTED_MODULE_17__["Footer2Component"],
                _header2_header2_component__WEBPACK_IMPORTED_MODULE_18__["Header2Component"],
                _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_22__["SignUpComponent"],
                _getmessage_getmessage_component__WEBPACK_IMPORTED_MODULE_24__["GetmessageComponent"],
                _messagebox_messagebox_component__WEBPACK_IMPORTED_MODULE_25__["MessageboxComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            ],
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_14__["DataService"], _auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthService"], _auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"], _user_service__WEBPACK_IMPORTED_MODULE_21__["UserService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(dataService, router) {
        this.dataService = dataService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (!this.dataService.IsLoggedIn) {
            this.router.navigate(['homepage']);
        }
        return this.dataService.IsLoggedIn;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.logstatus = false;
    }
    AuthService.prototype.setLogStatus = function (value) {
        this.logstatus = true;
    };
    Object.defineProperty(AuthService.prototype, "IsLoggedIn", {
        get: function () {
            return this.logstatus;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.getUserDetails = function (username, password) {
        var uri = 'http://localhost:3000/api/getuser';
        return this.http.post(uri, {
            username: username,
            password: password
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width:100%;\n}\ntable, th, td {\n    border: 1px solid black;\n    border-collapse: collapse;\n}\nth, td {\n    padding: 15px;\n    text-align: left;\n}\ntable#t01 tr:nth-child(even) {\n    background-color: #eee;\n}\ntable#t01 tr:nth-child(odd) {\n   background-color: #fff;\n}\ntable#t01 th {\n    background-color: black;\n    color: white;\n}\n.plus{\n    padding: 10px;\n    margin-left: 30px;\n}\n.minus{\n    padding: 10px;\n    margin-left: 40px;\n\n}\n.cart{\n    padding: 45px;\n\n}\n.wrapper {\n    text-align: center;\n}\n.wrapper2 {\n    text-align: left;\n}\n#placebutton {\n    position: absolute;\n    padding: 20px;\n    margin: 20px;\n}"

/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header2>\n</app-header2>\n\n\n<div class=\"wrapper2\">\n  <button (click)=\"placeOrder()\" id=\"placebutton\" class=\"btn btn-primary btn-md\"> Place Your Order</button>\n</div>\n\n<br>\n<br>\n<br>\n\n<div class=\"cart\">\n\n  <h2>Your Cart</h2>\n\n  <table id=\"t01\">\n    <tr>\n      <th>ITEM</th>\n      <th>PRICE</th>\n      <th>QUANTITY</th>\n      <th>AMOUNT</th>\n    </tr>\n\n    <tr *ngFor=\"let x of data; index as i\">\n\n      <!-- started from here -->\n      <td>\n        <img src='{{x.img}}' style=\"height: 150px; width: 100px ;background-color: beige\">\n\n        <button (click)=\"incOrder(i)\" class=\"plus\">\n          <i class=\"fas fa-plus\"></i>\n          <b></b>\n        </button>\n\n        <button (click)=\"decOrder(i)\" class=\"minus\">\n          <i class=\"fas fa-minus\"></i>\n          <b></b>\n        </button>\n\n        <br>\n        <b> {{x.book_name}} </b>\n\n        <br>\n        <br>\n        <button (click)=\"removeFromCart(i)\" class=\"btn btn-primary btn-md addtocart\"> Remove from CART</button>\n\n      </td>\n\n      <!-- ended here -->\n\n      <td>{{x.price}}</td>\n\n      <td>{{x.quantity}}</td>\n\n      <td>{{x.price}}*{{x.quantity}}</td>\n    </tr>\n\n    <tr>\n      <td>\n        <b>\n          TOTAL CART VALUE\n        </b>\n      </td>\n\n      <td colspan=\"3\" id=\"totalvalue\">\n        {{totalamount | currency : \"INR\" : \"symbol\"}}\n      </td>\n\n    </tr>\n  </table>\n\n  <div class=\"wrapper\">\n    <button (click)=\"placeOrder()\" id=\"placebutton\" class=\"btn btn-primary btn-md\"> Place Your Order</button>\n  </div>\n\n</div>\n\n\n\n\n\n<app-footer2></app-footer2>"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CartComponent = /** @class */ (function () {
    function CartComponent(dataService, router, location) {
        this.dataService = dataService;
        this.router = router;
        this.location = location;
        this.totalamount = 0;
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("In the cart component");
        console.log("very hilarious^^^^^^^^^^^^^^^^^^^^^^^^");
        console.log(this.dataService.IsLoggedIn);
        console.log(this.dataService.IsCurrentId);
        // Here I want to achieve the functionality that the user is able to
        // go to the cart when he is logged in 
        if (this.dataService.IsLoggedIn) {
            this.dataService.showCart(this.dataService.IsCurrentId)
                .subscribe(function (datas) {
                // console.log("boiled egss******************")
                // console.log( datas);
                // console.log("boiled potatoes******************")
                _this.data = datas;
                _this.helper();
                console.log("yo yo honey sigh");
                console.log(_this.data);
            });
        }
        else {
            this.router.navigate(['/signIn']);
        }
    };
    CartComponent.prototype.helper = function () {
        for (var i = 0; i < this.data.length; i++) {
            // this.data2.push({'total':this.data[i].price*this.data[i].quantity});
            this.totalamount = this.totalamount + this.data[i].price * this.data[i].quantity;
        }
    };
    CartComponent.prototype.helper2 = function (id, op) {
        if (op === 'inc') {
            this.totalamount = this.totalamount + this.data[id].price;
        }
        else {
            this.totalamount = this.totalamount - this.data[id].price;
        }
    };
    CartComponent.prototype.helper3 = function (id) {
        this.totalamount = this.totalamount - this.data[id].price * this.data[id].quantity;
    };
    CartComponent.prototype.removeFromCart = function (i) {
        alert("Book has been removed from cart");
        // console.log(this.bookArray[i])
        // this.route.navigate(['/cart']);
        this.helper3(i);
        this.data.splice(i, 1);
        this.dataService.removeFromCart(this.data[i].order_id, this.data[i].buyer_email);
    };
    CartComponent.prototype.incOrder = function (id) {
        var book_id = this.data[id].book_id;
        var buyer_email = this.data[id].buyer_email;
        var quantity = this.data[id].quantity;
        this.data[id].quantity = this.data[id].quantity + 1;
        this.dataService.incOrder(book_id, buyer_email, quantity);
        this.helper2(id, 'inc');
    };
    CartComponent.prototype.decOrder = function (id) {
        var order_id = this.data[id].order_id;
        var book_id = this.data[id].book_id;
        var buyer_email = this.data[id].buyer_email;
        var quantity = this.data[id].quantity;
        this.data[id].quantity = this.data[id].quantity - 1;
        this.dataService.decOrder(order_id, book_id, buyer_email, quantity);
        this.helper2(id, 'dec');
    };
    CartComponent.prototype.placeOrder = function () {
        alert("Thank You for placing your Order!");
    };
    CartComponent.prototype.pageRefresher = function () {
        // window.location.reload();
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")],
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.logstatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');
        this.currentId = localStorage.getItem('currId');
        this.sellerId = localStorage.getItem('sellerId');
        this.bookId = localStorage.getItem('bookId');
        this.bookName = localStorage.getItem('bookName');
        this.bookImg = localStorage.getItem('bookImg');
        this.sellerEmail = localStorage.getItem('seller_email');
        this.replyEmail = localStorage.getItem('reply_email');
    }
    DataService.prototype.getItemfromInventoryById = function (id) {
        console.log("ujjwal in getitembyid funct data service");
        var uri = 'http://localhost:3000/api/getitembyId/:id';
        console.log(uri);
        var idstring = "" + id;
        console.log(typeof idstring);
        var data = { id: idstring };
        return this.http.get(uri, { params: data });
    };
    DataService.prototype.showCart = function (user_email) {
        var uri = 'http://localhost:3000/api/cartbyId/:id';
        var idstring = "" + user_email;
        console.log(typeof idstring);
        console.log(idstring);
        var data = { id: idstring };
        console.log(data);
        return this.http.get(uri, { params: data });
    };
    DataService.prototype.showAllInventory = function () {
        console.log("ujjwal in listings funct data service");
        var uri = 'http://localhost:3000/api/listings';
        console.log(this.http.get(uri));
        return this.http.get(uri);
    };
    DataService.prototype.showByCategory = function (category) {
        console.log("ujjwal in listings funct data service");
        var uri = 'http://localhost:3000/api/listingsCategory';
        var idstring = "" + category;
        console.log(typeof idstring);
        var data = { id: idstring };
        return this.http.get(uri, { params: data });
    };
    DataService.prototype.showByName = function (name) {
        console.log("ujjwal in listings funct data service");
        var uri = 'http://localhost:3000/api/listingsName';
        var idstring = "" + name;
        console.log(typeof idstring);
        var data = { id: idstring };
        return this.http.get(uri, { params: data });
    };
    DataService.prototype.showByPrice = function (price) {
        console.log("ujjwal in listings funct data service");
        var uri = 'http://localhost:3000/api/listingsPrice';
        var idstring = "" + price;
        console.log(typeof idstring);
        var data = { id: idstring };
        return this.http.get(uri, { params: data });
    };
    DataService.prototype.showByCondition = function (cond) {
        console.log("ujjwal in listings funct data service");
        var uri = 'http://localhost:3000/api/listingsCondition';
        var idstring = "" + cond;
        console.log(typeof idstring);
        var data = { id: idstring };
        return this.http.get(uri, { params: data });
    };
    DataService.prototype.showByAuthor = function (author) {
        console.log("ujjwal in author funct data service");
        console.log(author);
        var uri = 'http://localhost:3000/api/listingsAuthor';
        console.log("hut");
        var idstring = author;
        console.log(typeof idstring);
        var data = { id: idstring };
        console.log(data);
        return this.http.get(uri, { params: data });
    };
    DataService.prototype.addToCart = function (bookinfo, useremail) {
        console.log("ujjwal in addttoCart  data service");
        var uri = 'http://localhost:3000/api/addtocart';
        //creating the cart object by adding the user
        var obj = {
            buyer_email: useremail,
            book_id: bookinfo.book_id,
            seller_id: bookinfo.seller_id,
            book_name: bookinfo.book_name,
            author_name: bookinfo.author_name,
            img: bookinfo.img,
            price: bookinfo.price,
            quantity: bookinfo.quantity,
            seller_email: bookinfo.seller_email
        };
        this.http.post(uri, obj)
            .subscribe(function (res) { return console.log("done"); });
    };
    DataService.prototype.removeFromCart = function (order_id, user_email) {
        console.log("ujjwal in removefrom cart  data service");
        var uri = 'http://localhost:3000/api/removefromcart';
        var obj = {
            order_id: order_id,
            user_email: user_email
        };
        this.http.post(uri, obj)
            .subscribe(function (res) { return console.log("done"); });
    };
    DataService.prototype.addToListing = function (sellerid, name, author, img, price, condition, category, sellerEmail) {
        console.log("ujjwal in addtoListing  data service");
        var uri = 'http://localhost:3000/api/addtolisting';
        console.log("-------------------------------------");
        // console.log(this.http.get<Data[]>(uri));
        var obj = {
            book_name: name,
            author_name: author,
            img: img,
            price: price,
            book_condition: condition,
            category: category,
            seller_email: sellerEmail
        };
        console.log(obj);
        this.http.post(uri, obj)
            .subscribe(function (res) { return console.log("done"); });
    };
    DataService.prototype.addUserDetails = function (name, email, college, address, number, password) {
        var uri = 'http://localhost:3000/api/adduser';
        console.log("i am down here");
        var obj = {
            name: name,
            email: email,
            college: college,
            address: address,
            phoneNumber: number,
            password: password
        };
        return this.http.post(uri, obj);
    };
    DataService.prototype.checkUserDetails = function (email, password) {
        var uri = 'http://localhost:3000/api/checkuser';
        var obj = {
            email: email,
            password: password
        };
        return this.http.post(uri, obj);
    };
    DataService.prototype.incOrder = function (book_id, buyer_email, quantity) {
        var uri = 'http://localhost:3000/api/incorder';
        var obj = {
            book_id: book_id,
            buyer_email: buyer_email,
            quantity: quantity
        };
        this.http.post(uri, obj)
            .subscribe(function (res) { return console.log("done"); });
    };
    DataService.prototype.decOrder = function (order_id, book_id, buyer_email, quantity) {
        var uri = 'http://localhost:3000/api/decorder';
        var obj = {
            order_id: order_id,
            book_id: book_id,
            buyer_email: buyer_email,
            quantity: quantity
        };
        this.http.post(uri, obj)
            .subscribe(function (res) { return console.log("done"); });
    };
    DataService.prototype.storeMessage = function (message, seller_id, currentId, book_id, img, book_name, seller_email) {
        var uri = 'http://localhost:3000/api/storemessage';
        var obj = {
            message: message,
            sender_email: currentId,
            reciever_id: seller_id,
            book_id: book_id,
            img: img,
            book_name: book_name,
            seller_email: seller_email
        };
        console.log("jai bajrang bali");
        console.log(obj);
        this.http.post(uri, obj)
            .subscribe(function (res) { return console.log("done"); });
    };
    DataService.prototype.getMessages = function (currEmail) {
        console.log("ujjwal in getmessage funct data service");
        var uri = 'http://localhost:3000/api/getmessages';
        var idstring = "" + currEmail;
        var data = { id: idstring };
        return this.http.get(uri, { params: data });
    };
    DataService.prototype.clearMessages = function (id) {
        console.log("I am sweeper");
        var uri = 'http://localhost:3000/api/clearmessages';
        var obj = {
            email: id
        };
        console.log(obj);
        this.http.post(uri, obj)
            .subscribe(function (res) { return console.log("done"); });
    };
    DataService.prototype.setLogStatus = function (value) {
        this.logstatus = value;
        localStorage.setItem('loggedIn', 'true');
    };
    Object.defineProperty(DataService.prototype, "IsLoggedIn", {
        get: function () {
            return JSON.parse(localStorage.getItem('loggedIn') || this.logstatus.toString());
        },
        enumerable: true,
        configurable: true
    });
    DataService.prototype.setCurrentId = function (id) {
        this.currentId = id;
        localStorage.setItem('currId', this.currentId);
    };
    Object.defineProperty(DataService.prototype, "IsCurrentId", {
        get: function () {
            return localStorage.getItem('currId');
        },
        enumerable: true,
        configurable: true
    });
    DataService.prototype.setSellerId = function (id) {
        console.log("I am setting the seller Id");
        this.sellerId = id;
        localStorage.setItem('sellerId', this.sellerId);
    };
    Object.defineProperty(DataService.prototype, "IsSellerId", {
        get: function () {
            return localStorage.getItem('sellerId');
        },
        enumerable: true,
        configurable: true
    });
    DataService.prototype.setBookId = function (id) {
        console.log("I am setting the book Id");
        this.bookId = id;
        localStorage.setItem('bookId', this.bookId);
    };
    Object.defineProperty(DataService.prototype, "IsBookId", {
        get: function () {
            return localStorage.getItem('bookId');
        },
        enumerable: true,
        configurable: true
    });
    DataService.prototype.setBookName = function (name) {
        console.log("I am setting the book name");
        this.bookName = name;
        localStorage.setItem('bookName', this.bookName);
    };
    Object.defineProperty(DataService.prototype, "IsBookName", {
        get: function () {
            return localStorage.getItem('bookName');
        },
        enumerable: true,
        configurable: true
    });
    DataService.prototype.setBookImg = function (img) {
        console.log("I am setting the book img");
        this.bookImg = img;
        localStorage.setItem('bookImg', this.bookImg);
    };
    Object.defineProperty(DataService.prototype, "IsBookImg", {
        get: function () {
            return localStorage.getItem('bookImg');
        },
        enumerable: true,
        configurable: true
    });
    DataService.prototype.setSellerEmail = function (seller_email) {
        console.log("I am setting the seller email");
        this.sellerEmail = seller_email;
        localStorage.setItem('seller_email', this.sellerEmail);
    };
    Object.defineProperty(DataService.prototype, "IsSellerEmail", {
        get: function () {
            return localStorage.getItem('seller_email');
        },
        enumerable: true,
        configurable: true
    });
    DataService.prototype.setReplyTo = function (reply_email) {
        console.log("I am setting the reply email");
        this.replyEmail = reply_email;
        localStorage.setItem('reply_email', this.replyEmail);
    };
    Object.defineProperty(DataService.prototype, "IsReplyTo", {
        get: function () {
            return localStorage.getItem('reply_email');
        },
        enumerable: true,
        configurable: true
    });
    DataService.prototype.updateLocalStorage = function (id) {
        localStorage.setItem("currId", id);
    };
    DataService.prototype.deleteBook = function (name, price) {
        var uri = 'http://localhost:3000/delete';
        var obj = {
            name: name,
            price: price
        };
        this
            .http
            .post(uri, obj)
            .subscribe(function (res) {
            return console.log('Done');
        });
    };
    DataService.prototype.addBook = function (name, author, price) {
        var uri = 'http://localhost:3000/api/add';
        var obj = {
            name: name,
            author: author,
            price: price
        };
        this
            .http
            .post(uri, obj)
            .subscribe(function (res) {
            return console.log('Done');
        });
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/footer2/footer2.component.css":
/*!***********************************************!*\
  !*** ./src/app/footer2/footer2.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-distributed{\n\tbackground-color: #292c2f;\n\tbox-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);\n\tbox-sizing: border-box;\n\twidth: 100%;\n\ttext-align: left;\n\tfont: bold 16px sans-serif;\n\n\tpadding: 55px 50px;\n\tmargin-top: 80px;\n}\n\n.footer-distributed .footer-left,\n.footer-distributed .footer-center,\n.footer-distributed .footer-right{\n\tdisplay: inline-block;\n\tvertical-align: top;\n}\n\n/* Footer left */\n\n.footer-distributed .footer-left{\n\twidth: 40%;\n}\n\n/* The company logo */\n\n.footer-distributed h3{\n\tcolor:  #ffffff;\n\tfont: normal 36px 'Cookie', cursive;\n\tmargin: 0;\n}\n\n.footer-distributed h3 span{\n\tcolor:  #5383d3;\n}\n\n/* Footer links */\n\n.footer-distributed .footer-links{\n\tcolor:  #ffffff;\n\tmargin: 20px 0 12px;\n\tpadding: 0;\n}\n\n.footer-distributed .footer-links a{\n\tdisplay:inline-block;\n\tline-height: 1.8;\n\ttext-decoration: none;\n\tcolor:  inherit;\n}\n\n.footer-distributed .footer-company-name{\n\tcolor:  #8f9296;\n\tfont-size: 14px;\n\tfont-weight: normal;\n\tmargin: 0;\n}\n\n/* Footer Center */\n\n.footer-distributed .footer-center{\n\twidth: 35%;\n}\n\n.footer-distributed .footer-center i{\n\tbackground-color:  #33383b;\n\tcolor: #ffffff;\n\tfont-size: 25px;\n\twidth: 38px;\n\theight: 38px;\n\tborder-radius: 50%;\n\ttext-align: center;\n\tline-height: 42px;\n\tmargin: 10px 15px;\n\tvertical-align: middle;\n}\n\n.footer-distributed .footer-center i.fa-envelope{\n\tfont-size: 17px;\n\tline-height: 38px;\n}\n\n.footer-distributed .footer-center p{\n\tdisplay: inline-block;\n\tcolor: #ffffff;\n\tvertical-align: middle;\n\tmargin:0;\n}\n\n.footer-distributed .footer-center p span{\n\tdisplay:block;\n\tfont-weight: normal;\n\tfont-size:14px;\n\tline-height:2;\n}\n\n.footer-distributed .footer-center p a{\n\tcolor:  #5383d3;\n\ttext-decoration: none;;\n}\n\n/* Footer Right */\n\n.footer-distributed .footer-right{\n\twidth: 20%;\n}\n\n.footer-distributed .footer-company-about{\n\tline-height: 20px;\n\tcolor:  #92999f;\n\tfont-size: 13px;\n\tfont-weight: normal;\n\tmargin: 0;\n}\n\n.footer-distributed .footer-company-about span{\n\tdisplay: block;\n\tcolor:  #ffffff;\n\tfont-size: 14px;\n\tfont-weight: bold;\n\tmargin-bottom: 20px;\n}\n\n.footer-distributed .footer-icons{\n\tmargin-top: 25px;\n}\n\n.footer-distributed .footer-icons a{\n\tdisplay: inline-block;\n\twidth: 35px;\n\theight: 35px;\n\tcursor: pointer;\n\tbackground-color:  #33383b;\n\tborder-radius: 2px;\n\n\tfont-size: 20px;\n\tcolor: #ffffff;\n\ttext-align: center;\n\tline-height: 35px;\n\n\tmargin-right: 3px;\n\tmargin-bottom: 5px;\n}\n\n/* If you don't want the footer to be responsive, remove these media queries */\n\n@media (max-width: 880px) {\n\n\t.footer-distributed{\n\t\tfont: bold 14px sans-serif;\n\t}\n\n\t.footer-distributed .footer-left,\n\t.footer-distributed .footer-center,\n\t.footer-distributed .footer-right{\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\tmargin-bottom: 40px;\n\t\ttext-align: center;\n\t}\n\n\t.footer-distributed .footer-center i{\n\t\tmargin-left: 0;\n\t}\n\n}\n\n"

/***/ }),

/***/ "./src/app/footer2/footer2.component.html":
/*!************************************************!*\
  !*** ./src/app/footer2/footer2.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    \n<footer class=\"footer-distributed\">\n\n  <div class=\"footer-left\">\n\n    <h3 \tstyle=\"font: normal 36px cursive\">BookBecho<span>.com</span></h3>\n\n    <p class=\"footer-links\">\n      <a href=\"#\">Home</a>\n      ·\n      <a href=\"#\">Blog</a>\n      ·\n      <a href=\"#\">Pricing</a>\n      ·\n      <a href=\"#\">About</a>\n      ·\n      <a href=\"#\">Faq</a>\n      ·\n      <a href=\"#\">Contact</a>\n    </p>\n\n    <p class=\"footer-company-name\"></p>\n  </div>\n\n  <div class=\"footer-center\">\n\n    <div>\n      <i class=\"fa fa-map-marker\"></i>\n      <p><span>P-26,Street 2</span>Shankar nagar Ext, Delhi-51</p>\n    </div>\n\n    <div>\n      <i class=\"fa fa-phone\"></i>\n      <p>+91 8860451364</p>\n    </div>\n\n    <div>\n      <i class=\"fa fa-envelope\"></i>\n      <p><a href=\"mailto:ujjwal451@gmail.com\">support@bookbecho.com</a></p>\n    </div>\n\n  </div>\n\n  <div class=\"footer-right\">\n\n    <p class=\"footer-company-about\">\n      <span>About the company</span>\n      An old book buying/selling website which aims at connecting the students across the country with other on one platform to sell their spare books and earn online\n    </p>\n\n  </div>\n\n  \n\n</footer>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/footer2/footer2.component.ts":
/*!**********************************************!*\
  !*** ./src/app/footer2/footer2.component.ts ***!
  \**********************************************/
/*! exports provided: Footer2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer2Component", function() { return Footer2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Footer2Component = /** @class */ (function () {
    function Footer2Component() {
    }
    Footer2Component.prototype.ngOnInit = function () {
    };
    Footer2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer2',
            template: __webpack_require__(/*! ./footer2.component.html */ "./src/app/footer2/footer2.component.html"),
            styles: [__webpack_require__(/*! ./footer2.component.css */ "./src/app/footer2/footer2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Footer2Component);
    return Footer2Component;
}());



/***/ }),

/***/ "./src/app/getmessage/getmessage.component.css":
/*!*****************************************************!*\
  !*** ./src/app/getmessage/getmessage.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".messagebox{\n    padding: 25px;\n}"

/***/ }),

/***/ "./src/app/getmessage/getmessage.component.html":
/*!******************************************************!*\
  !*** ./src/app/getmessage/getmessage.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header2></app-header2>\n\n<br>\n<br>\n<div class = messagebox>\n<div class=\"form-group\">\n    <label for=\"exampleFormControlTextarea1\"><h2><b> Enter your message here</b></h2></label>\n    <textarea #messagetext class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\"></textarea>\n  </div>\n\n  <button type=\"button\" (click)=\"storeMessage(messagetext.value);messagetext.value='' \" class=\"btn btn-success\">Send Message</button>\n\n</div>\n  <app-footer2></app-footer2>"

/***/ }),

/***/ "./src/app/getmessage/getmessage.component.ts":
/*!****************************************************!*\
  !*** ./src/app/getmessage/getmessage.component.ts ***!
  \****************************************************/
/*! exports provided: GetmessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetmessageComponent", function() { return GetmessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetmessageComponent = /** @class */ (function () {
    function GetmessageComponent(location, dataService) {
        this.location = location;
        this.dataService = dataService;
    }
    GetmessageComponent.prototype.ngOnInit = function () {
    };
    GetmessageComponent.prototype.storeMessage = function (message) {
        this.dataService.storeMessage(message, this.dataService.IsSellerId, this.dataService.IsCurrentId, this.dataService.IsBookId, this.dataService.IsBookImg, this.dataService.IsBookName, this.dataService.IsReplyTo);
        alert("Message Sent !");
        this.location.back();
    };
    GetmessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-getmessage',
            template: __webpack_require__(/*! ./getmessage.component.html */ "./src/app/getmessage/getmessage.component.html"),
            styles: [__webpack_require__(/*! ./getmessage.component.css */ "./src/app/getmessage/getmessage.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], GetmessageComponent);
    return GetmessageComponent;
}());



/***/ }),

/***/ "./src/app/header2/header2.component.css":
/*!***********************************************!*\
  !*** ./src/app/header2/header2.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Style the header with a grey background and some padding */\n.header {\n\toverflow: hidden;\n\tbackground-color: #33383b;;\n\tpadding: 20px 10px;\n  }\n/* Style the header links */\n.header a {\n\tfloat: left;\n\tcolor: white;\n\tfont-weight: bold;\n\ttext-align: center;\n\tpadding: 12px;\n\ttext-decoration: none;\n\tfont-size: 18px; \n\tline-height: 25px;\n\tborder-radius: 4px;\n  }\n/* Style the logo link (notice that we set the same value of line-height and font-size to prevent the header to increase when the font gets bigger */\n.header a.logo {\n\tfont-size: 25px;\n\tfont-weight: bold;\n  }\n/* Change the background color on mouse-over */\n.header a:hover {\n\tbackground-color: #ddd;\n\tcolor: black;\n  }\n/* Style the active/current link*/\n.header a.active {\n\tbackground-color: dodgerblue;\n\tcolor: white;\n  }\n/* Float the link section to the right */\n.header-right {\n\tfloat: right;\n  }\n/* Add media queries for responsiveness - when the screen is 500px wide or less, stack the links on top of each other */\n@media screen and (max-width: 500px) {\n\t.header a {\n\t  float: none;\n\t  display: block;\n\t  text-align: left;\n\t}\n\t.header-right {\n\t  float: none;\n\t}\n\t}\n.btn {\n    background-color: black; /* Blue background */\n    border: none; /* Remove borders */\n    color: white; /* White text */\n    padding: 12px 16px; /* Some padding */\n    font-size: 16px; /* Set a font size */\n    cursor: pointer; /* Mouse pointer on hover */\n\t\tmargin-left: 5px;\n\t\tfont-weight:bold;\n}\n#main{\n\tcolor: #ff9f00;\n\tfont-family: \"Comic Sans MS\", cursive, sans-serif\t;\n\n}\n/* Darker background on mouse-over */\n.btn:hover {\n    background-color: RoyalBlue;\n}\n\n\n\n"

/***/ }),

/***/ "./src/app/header2/header2.component.html":
/*!************************************************!*\
  !*** ./src/app/header2/header2.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <a href=\"#default\" id =\"main\" class=\"logo\"><h2><b>BookBecho.com</b></h2></a>\n  <div class=\"header-right\">\n\n\n    <!-- <input type=\"text\" placeholder=\"Search by name...\"> -->\n\n\n    <!-- <button class=\"btn\">\n\n      <a href=\"#default\" class=\"logo\"> Home </a>\n\n    </button> -->\n\n    <button (click)=\"clickedHome()\" class=\"btn\">\n        <i class=\"fas fa-home\"></i> Home </button>\n\n    <button (click)=\"clickedSignIn()\" class=\"btn\">\n      <i class=\"fas fa-sign-in-alt\"></i> Sign In </button>\n\n    <button (click)=\"clickedSignUp()\" class=\"btn\">\n      <i class=\"fas fa-user-plus\"></i> Sign Up </button>\n\n    <button (click)=\"clickedAdmin()\" class=\"btn\">\n      <i class=\"fas fa-plus-circle\"></i> Add books </button>\n\n    <button (click)=\"clickedlogout()\" class=\"btn\">\n      <i class=\"fas fa-sign-in-alt\"></i> Log Out </button>\n\n    <button (click)=\"clickedMessageBox()\" class=\"btn\">\n      <i class=\"fas fa-envelope\"></i> MessageBox </button>\n\n    <button (click)=\"clickedCart()\" class=\"btn\">\n      <i class=\"fas fa-shopping-cart\"></i> Cart </button>\n\n\n\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/header2/header2.component.ts":
/*!**********************************************!*\
  !*** ./src/app/header2/header2.component.ts ***!
  \**********************************************/
/*! exports provided: Header2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header2Component", function() { return Header2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Header2Component = /** @class */ (function () {
    function Header2Component(router, route, dataService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
    }
    Header2Component.prototype.ngOnInit = function () {
    };
    Header2Component.prototype.clickedCart = function () {
        console.log("ujjwal in clicked cart");
        console.log(this.route);
        this.route.navigate(['/cart']);
    };
    Header2Component.prototype.clickedSignIn = function () {
        this.route.navigate(['signIn']);
    };
    Header2Component.prototype.clickedSignUp = function () {
        this.route.navigate(['signUp']);
    };
    Header2Component.prototype.clickedAdmin = function () {
        this.route.navigate(['admin']);
    };
    Header2Component.prototype.clickedMessageBox = function () {
        this.route.navigate(['messages']);
    };
    Header2Component.prototype.clickedlogout = function () {
        alert("You are Loged Out!");
        localStorage.removeItem("loggedIn");
        localStorage.removeItem("currId");
        this.route.navigate(['homepage']);
    };
    Header2Component.prototype.clickedHome = function () {
        this.route.navigate(['homepage']);
    };
    Header2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header2',
            template: __webpack_require__(/*! ./header2.component.html */ "./src/app/header2/header2.component.html"),
            styles: [__webpack_require__(/*! ./header2.component.css */ "./src/app/header2/header2.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], Header2Component);
    return Header2Component;
}());



/***/ }),

/***/ "./src/app/homepage/footer/footer.component.css":
/*!******************************************************!*\
  !*** ./src/app/homepage/footer/footer.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-distributed{\n\tbackground-color: #292c2f;\n\tbox-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);\n\tbox-sizing: border-box;\n\twidth: 100%;\n\ttext-align: left;\n\tfont: bold 16px sans-serif;\n\n\tpadding: 55px 50px;\n\tmargin-top: 80px;\n}\n\n.footer-distributed .footer-left,\n.footer-distributed .footer-center,\n.footer-distributed .footer-right{\n\tdisplay: inline-block;\n\tvertical-align: top;\n}\n\n/* Footer left */\n\n.footer-distributed .footer-left{\n\twidth: 40%;\n}\n\n/* The company logo */\n\n.footer-distributed h3{\n\tcolor:  #ffffff;\n\tfont: normal 36px 'Cookie', cursive;\n\tmargin: 0;\n}\n\n.footer-distributed h3 span{\n\tcolor:  #5383d3;\n}\n\n/* Footer links */\n\n.footer-distributed .footer-links{\n\tcolor:  #ffffff;\n\tmargin: 20px 0 12px;\n\tpadding: 0;\n}\n\n.footer-distributed .footer-links a{\n\tdisplay:inline-block;\n\tline-height: 1.8;\n\ttext-decoration: none;\n\tcolor:  inherit;\n}\n\n.footer-distributed .footer-company-name{\n\tcolor:  #8f9296;\n\tfont-size: 14px;\n\tfont-weight: normal;\n\tmargin: 0;\n}\n\n/* Footer Center */\n\n.footer-distributed .footer-center{\n\twidth: 35%;\n}\n\n.footer-distributed .footer-center i{\n\tbackground-color:  #33383b;\n\tcolor: #ffffff;\n\tfont-size: 25px;\n\twidth: 38px;\n\theight: 38px;\n\tborder-radius: 50%;\n\ttext-align: center;\n\tline-height: 42px;\n\tmargin: 10px 15px;\n\tvertical-align: middle;\n}\n\n.footer-distributed .footer-center i.fa-envelope{\n\tfont-size: 17px;\n\tline-height: 38px;\n}\n\n.footer-distributed .footer-center p{\n\tdisplay: inline-block;\n\tcolor: #ffffff;\n\tvertical-align: middle;\n\tmargin:0;\n}\n\n.footer-distributed .footer-center p span{\n\tdisplay:block;\n\tfont-weight: normal;\n\tfont-size:14px;\n\tline-height:2;\n}\n\n.footer-distributed .footer-center p a{\n\tcolor:  #5383d3;\n\ttext-decoration: none;;\n}\n\n/* Footer Right */\n\n.footer-distributed .footer-right{\n\twidth: 20%;\n}\n\n.footer-distributed .footer-company-about{\n\tline-height: 20px;\n\tcolor:  #92999f;\n\tfont-size: 13px;\n\tfont-weight: normal;\n\tmargin: 0;\n}\n\n.footer-distributed .footer-company-about span{\n\tdisplay: block;\n\tcolor:  #ffffff;\n\tfont-size: 14px;\n\tfont-weight: bold;\n\tmargin-bottom: 20px;\n}\n\n.footer-distributed .footer-icons{\n\tmargin-top: 25px;\n}\n\n.footer-distributed .footer-icons a{\n\tdisplay: inline-block;\n\twidth: 35px;\n\theight: 35px;\n\tcursor: pointer;\n\tbackground-color:  #33383b;\n\tborder-radius: 2px;\n\n\tfont-size: 20px;\n\tcolor: #ffffff;\n\ttext-align: center;\n\tline-height: 35px;\n\n\tmargin-right: 3px;\n\tmargin-bottom: 5px;\n}\n\n/* If you don't want the footer to be responsive, remove these media queries */\n\n@media (max-width: 880px) {\n\n\t.footer-distributed{\n\t\tfont: bold 14px sans-serif;\n\t}\n\n\t.footer-distributed .footer-left,\n\t.footer-distributed .footer-center,\n\t.footer-distributed .footer-right{\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\tmargin-bottom: 40px;\n\t\ttext-align: center;\n\t}\n\n\t.footer-distributed .footer-center i{\n\t\tmargin-left: 0;\n\t}\n\n}\n\n"

/***/ }),

/***/ "./src/app/homepage/footer/footer.component.html":
/*!*******************************************************!*\
  !*** ./src/app/homepage/footer/footer.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    \n<footer class=\"footer-distributed\">\n\n  <div class=\"footer-left\">\n\n    <h3 \tstyle=\"font: normal 36px cursive\">Ujjwal<span>Jain</span></h3>\n\n    <p class=\"footer-links\">\n      <a href=\"#\">Home</a>\n      ·\n      <a href=\"#\">Blog</a>\n      ·\n      <a href=\"#\">Pricing</a>\n      ·\n      <a href=\"#\">About</a>\n      ·\n      <a href=\"#\">Faq</a>\n      ·\n      <a href=\"#\">Contact</a>\n    </p>\n\n    <p class=\"footer-company-name\"></p>\n  </div>\n\n  <div class=\"footer-center\">\n\n    <div>\n      <i class=\"fa fa-map-marker\"></i>\n      <p><span>P-26,Street 2</span>Shankar nagar Ext, Delhi-51</p>\n    </div>\n\n    <div>\n      <i class=\"fa fa-phone\"></i>\n      <p>+91 8860451364</p>\n    </div>\n\n    <div>\n      <i class=\"fa fa-envelope\"></i>\n      <p><a href=\"mailto:ujjwal451@gmail.com\">ujjwal451@gmail.com</a></p>\n    </div>\n\n  </div>\n\n  <div class=\"footer-right\">\n\n    <p class=\"footer-company-about\">\n      <span>About the company</span>\n      A garment manufacturing company specialized in producing kid's shirts in mass, with good quality of clothes assured.\n    </p>\n\n  </div>\n\n</footer>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/homepage/footer/footer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/homepage/footer/footer.component.ts ***!
  \*****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/homepage/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/homepage/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/homepage/header/header.component.css":
/*!******************************************************!*\
  !*** ./src/app/homepage/header/header.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Style the header with a grey background and some padding */\n.header {\n  overflow: hidden;\n  background-color: #33383b;;\n  padding: 20px 10px;\n}\n/* Style the header links */\n.header a {\n  float: left;\n  color: white;\n  font-weight: bold;\n  text-align: center;\n  padding: 12px;\n  text-decoration: none;\n  font-size: 18px; \n  line-height: 25px;\n  border-radius: 4px;\n}\n/* Style the logo link (notice that we set the same value of line-height and font-size to prevent the header to increase when the font gets bigger */\n.header a.logo {\n  font-size: 25px;\n  font-weight: bold;\n}\n/* Change the background color on mouse-over */\n.header a:hover {\n  background-color: #ddd;\n  color: black;\n}\n/* Style the active/current link*/\n.header a.active {\n  background-color: dodgerblue;\n  color: white;\n}\n/* Float the link section to the right */\n.header-right {\n  float: right;\n}\n/* Add media queries for responsiveness - when the screen is 500px wide or less, stack the links on top of each other */\n@media screen and (max-width: 500px) {\n  .header a {\n    float: none;\n    display: block;\n    text-align: left;\n  }\n  .header-right {\n    float: none;\n  }\n}"

/***/ }),

/***/ "./src/app/homepage/header/header.component.html":
/*!*******************************************************!*\
  !*** ./src/app/homepage/header/header.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"header\">\n  <a href=\"#default\" class=\"logo\" style=\"color:white\">Ujjwal`s Angular pratice</a>\n  <div class=\"header-right\">\n    <a class=\"active\" href=\"#home\">Home</a>\n    <a href=\"#contact\">Contact</a>\n    <a href=\"#about\">About</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/homepage/header/header.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/homepage/header/header.component.ts ***!
  \*****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/homepage/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/homepage/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header2></app-header2>\n\n<app-middle2></app-middle2>\n\n<app-footer2></app-footer2>\n\n\n\n<!-- \n<div style=\"float:right\" class=\"dropdown\">\n  <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\nSearch by\n  </button>\n  <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n    <a class=\"dropdown-item\" href=\"#\">Book Name</a>\n    <a class=\"dropdown-item\" href=\"#\">Author action</a>\n    <a class=\"dropdown-item\" href=\"#\">Category</a>\n  </div>\n</div>\n\n<div class=\"dropdown\">\n  <a class=\"btn btn-secondary dropdown-toggle\" href=\"\" role=\"button\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n    Dropdown link\n  </a>\n\n  <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuLink\">\n    <a class=\"dropdown-item\" href=\"#\">Action</a>\n    <a class=\"dropdown-item\" href=\"#\">Another action</a>\n    <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n  </div>\n</div>\n\n\n<div *ngFor =\"let x of bookArray; index as i\">\n\n<div class=\"card\" style=\"width: 18rem; \">\n    <img class=\"card-img-top\" src=\"{{x.img}}\" alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">{{x.book_name}}</h5>\n      <p class=\"card-text\"><b>Condition : </b>{{x.book_condition}}</p>\n      <p class=\"card-text\"><b>Price : </b>{{x.price}}</p>\n      <p class=\"card-text\"><b>Category : </b>{{x.category}}</p>\n\n\n      <a href=\"/login\" class=\"btn btn-primary\">Add to Cart</a>\n    </div>\n  </div>\n\n  <div class=\"col-lg-4 col-sm-6\">\n    <div class=\"card\" style=\"width: 15rem; margin-top: 50px;background-color: beige\">\n        <a routerLink=\"/itemdesc/{{x.book_id}}\">\n\n          <img class=\"card-img-top\" src='{{x.img}}' alt=\"Card image cap\" style=\"height: 300px;background-color: beige\">\n          \n        </a>\n          <div class=\"card-body\">\n            <h5 class=\"card-title\"><b>{{x.book_name}}</b></h5>\n            <p class=\"card-text\"><b>Condition : </b>{{x.book_condition}}</p>\n            <p class=\"card-text\"> <b>Price : </b>{{x.price}}</p>\n            <p class=\"card-text\"> <b>Category : </b>{{x.category}}\n            <div class=\"card-footer\" style=\"text-align: center\">\n              <button (click)=\"addToCart(i)\" class=\"btn btn-primary btn-md addtocart\" > ADD TO CART</button>\n              </div>\n          </div>\n        </div>\n</div>\n  </div> -->\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(router, route, dataService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        // this is the dummy user made , until the user authentication is made 
        this.currentUser = 1;
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")],
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/homepage/middle/middle.component.css":
/*!******************************************************!*\
  !*** ./src/app/homepage/middle/middle.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/homepage/middle/middle.component.html":
/*!*******************************************************!*\
  !*** ./src/app/homepage/middle/middle.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)= \"clickedCart()\" > Go to cart </button>\n\n<button (click)= \"clickedLogin()\" > Login </button>\n\n<button (click)= \"clickedSignIn()\" > Sign In </button>\n\n<button (click)= \"clickedAdmin()\" > Admin </button>\n\n\n<button > god button 3</button>\n\n\n  "

/***/ }),

/***/ "./src/app/homepage/middle/middle.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/homepage/middle/middle.component.ts ***!
  \*****************************************************/
/*! exports provided: MiddleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiddleComponent", function() { return MiddleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MiddleComponent = /** @class */ (function () {
    function MiddleComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    MiddleComponent.prototype.ngOnInit = function () {
    };
    MiddleComponent.prototype.clickedCart = function () {
        console.log("ujjwal in clicked cart");
        console.log(this.route);
        this.route.navigate(['/cart']);
    };
    MiddleComponent.prototype.clickedLogin = function () {
        this.route.navigate(['login']);
    };
    MiddleComponent.prototype.clickedSignIn = function () {
        this.route.navigate(['signIn']);
    };
    MiddleComponent.prototype.clickedAdmin = function () {
        this.route.navigate(['admin']);
    };
    MiddleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-middle',
            template: __webpack_require__(/*! ./middle.component.html */ "./src/app/homepage/middle/middle.component.html"),
            styles: [__webpack_require__(/*! ./middle.component.css */ "./src/app/homepage/middle/middle.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MiddleComponent);
    return MiddleComponent;
}());



/***/ }),

/***/ "./src/app/itemdesc/itemdesc.component.css":
/*!*************************************************!*\
  !*** ./src/app/itemdesc/itemdesc.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".listImage2{\n    border-radius: 25px;\n    background-color:#FFE4C4;\n    color:black;\n    padding:20px;\n}\n\n.listDet{\n    padding: 20px;\n    float: right;\n}\n\n.btn {\n    background-color: DodgerBlue; \n    border: none; \n    color: white;\n    padding: 15px 20px; \n    font-size: 16px; \n    cursor: pointer; \n    margin-left: 5px;\n    /* float:right; */\n\n}\n\n/* Darker background on mouse-over */\n\n.btn:hover {\n    background-color: RoyalBlue;\n}\n\n.maindiv{\n    padding-top: 20px;\n    height:500px ;\n     width:1285px;\n\n}\n\n#container {\n    /* width: 300px; */\n    background-color: #ffcc33;\n    margin: auto;\n}\n\n#first {\n    /* width: 500px; */\n    \n    float: left;\n    /* height: 300px; */\n}\n\n#second {\n    /* width: 200px; */\n    float: left;\n    /* height: 300px; */\n}\n\n\n\n"

/***/ }),

/***/ "./src/app/itemdesc/itemdesc.component.html":
/*!**************************************************!*\
  !*** ./src/app/itemdesc/itemdesc.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header2>\n</app-header2>\n\n\n\n\n<div *ngFor=\"let x of bookdesc; index as i\" class=\"maindiv\">\n\n\n  <div id=\"first\" style=\"padding: 20px\">\n\n\n    <img src=\"{{x.img}}\" class=\"img-fluid\" style=\"height:500px ; width:400px\" alt=\"Responsive image\">\n\n\n  </div>\n\n\n  <div id=\"second\" style=\"padding: 20px\">\n\n    <span>\n\n      <div class=\"listImage2\">\n\n        <h2>\n          <b>Book : </b>{{x.book_name}}</h2>\n        <h2>\n          <b>Author : </b>{{x.author_name}}</h2>\n\n        <h2>\n          <b>Condition : </b>{{x.book_condition}}</h2>\n\n        <h2>\n          <b>Price : </b>{{x.price | currency : \"INR\" :\"symbol\"}}</h2>\n\n        <br>\n        <br>\n\n\n        <button (click)=\"addToCart(i)\" class=\"btn\">\n            <i class=\"fas fa-cart-plus\"></i> Add to Cart</button>\n\n            <button (click)=\"buyNow()\" class=\"btn\">\n                <i class=\"far fa-money-bill-alt\"></i> Buy Now</button>\n\n        <button (click)=\"contactSeller()\" class=\"btn\">\n          <i class=\"fas fa-phone\"></i> Contact Seller</button>\n\n\n      </div>\n\n\n    </span>\n\n\n\n  </div>\n\n</div>\n\n\n<app-footer2></app-footer2>\n\n<!-- <div class=\"card\" style=\"width: 18rem; \">\n    <img class=\"card-img-top\" src=\"{{x.img}}\" alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">{{x.book_name}}</h5>\n      <p class=\"card-text\"><b>Condition : </b>{{x.book_condition}}</p>\n      <p class=\"card-text\"><b>Price : </b>{{x.price}}</p>\n      <p class=\"card-text\"><b>Category : </b>{{x.category}}</p>\n\n\n      <a href=\"/login\" class=\"btn btn-primary\">Add to Cart</a>\n    </div>\n  </div> -->\n<!-- <div class=\"col-lg-4 col-sm-2\"> -->"

/***/ }),

/***/ "./src/app/itemdesc/itemdesc.component.ts":
/*!************************************************!*\
  !*** ./src/app/itemdesc/itemdesc.component.ts ***!
  \************************************************/
/*! exports provided: ItemdescComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemdescComponent", function() { return ItemdescComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemdescComponent = /** @class */ (function () {
    function ItemdescComponent(router, route, dataService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
    }
    ItemdescComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.paramMap.subscribe(function (params) {
            _this.selected = +(params.get('id'));
            console.log("ujjwal again");
            console.log(_this.selected);
        });
        // this.displayItem(this.selected);
        this.dataService.getItemfromInventoryById(this.selected)
            .subscribe(function (datas) {
            console.log("hello originial");
            console.log(datas);
            console.log("hello banal");
            _this.bookdesc = datas;
            console.log(_this.bookdesc);
        });
    };
    // displayItem(id)
    // {
    //   this.dataService.getItemfromInventoryById(id)
    //   .subscribe(datas =>{
    //     console.log("hello originial")
    //     console.log( datas);
    //     console.log("hello banal")
    //     this.bookdesc = datas
    //     console.log(this.bookdesc) 
    //   })
    // }
    ItemdescComponent.prototype.contactSeller = function () {
        console.log(this.bookdesc[0].seller_id);
        var sender_email = this.dataService.IsCurrentId;
        console.log(sender_email);
        var reciever_id = this.bookdesc[0].seller_id;
        var book_id = this.bookdesc[0].book_id;
        console.log("singham");
        console.log(this.bookdesc[0].book_name);
        this.dataService.setSellerId(this.bookdesc[0].seller_id);
        this.dataService.setBookId(this.bookdesc[0].book_id);
        this.dataService.setBookName(this.bookdesc[0].book_name);
        this.dataService.setBookImg(this.bookdesc[0].img);
        this.dataService.setSellerEmail(this.bookdesc[0].seller_email);
        this.route.navigate(['/getmessage']);
    };
    ItemdescComponent.prototype.buyNow = function () {
        alert("Thank You for shopping with us !");
    };
    ItemdescComponent.prototype.addToCart = function () {
        // If local storage is not null , then add to cart results in picking the Id
        // from local storage and putting it in the cart with currId from localstorage
        if (localStorage.currId != null) {
            alert("Book has been added to your cart!");
            this.dataService.addToCart(this.bookdesc[0], localStorage.currId);
        }
        else {
            alert("Please log in to your account!");
            this.route.navigate(['/signIn']);
        }
    };
    ItemdescComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-itemdesc',
            template: __webpack_require__(/*! ./itemdesc.component.html */ "./src/app/itemdesc/itemdesc.component.html"),
            styles: [__webpack_require__(/*! ./itemdesc.component.css */ "./src/app/itemdesc/itemdesc.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], ItemdescComponent);
    return ItemdescComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page {\n    display: -ms-grid;\n    display: grid;\n    grid: repeat(5, 80px) / repeat(12, 1fr);\n    grid-gap: 10px;\n}\n\nheader {\n    -ms-grid-column: 6;\n    -ms-grid-column-span: 7;\n    grid-column: 6 / span 7;\n}\n\n.featured {\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 5;\n    grid-column: 1 / span 5;\n}\n\naside {\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 2;\n    grid-column: 1 / span 2;\n    -ms-grid-row: 2;\n    -ms-grid-row-span: 5;\n    grid-row: 2 / 7;\n}\n\n.products {\n    -ms-grid-column: 3;\n    -ms-grid-column-span: 8;\n    grid-column: 3 / span 8;\n    -ms-grid-row: 2;\n    -ms-grid-row-span: 2;\n    grid-row: 2 / 4;\n}\n\n.feature2 {\n    -ms-grid-column: 11;\n    -ms-grid-column-span: 2;\n    grid-column: 11 / span 2;\n}\n\n.feature3 {\n    -ms-grid-column: 11;\n    -ms-grid-column-span: 2;\n    grid-column: 11 / span 2;\n    -ms-grid-row: 4;\n    -ms-grid-row-span: 1;\n    grid-row: 4 / 5;\n}\n\n.bonus1 {\n    -ms-grid-column: 3;\n    -ms-grid-column-span: 2;\n    grid-column: 3 / span 2;\n}\n\n.bonus2 {\n    -ms-grid-column: 5;\n    -ms-grid-column-span: 2;\n    grid-column: 5 / span 2;\n    -ms-grid-row: 5;\n    -ms-grid-row-span: 1;\n    grid-row: 5 / 6;\n}\n\n.bonus3 {\n    -ms-grid-column: 9;\n    -ms-grid-column-span: 2;\n    grid-column: 9 / span 2;\n}\n\n.bonus4 {\n    -ms-grid-column: 11;\n    -ms-grid-column-span: 2;\n    grid-column: 11 / span 2;\n    -ms-grid-row: 5;\n    -ms-grid-row-span: 1;\n    grid-row: 5 / 6;\n}\n\nfooter {\n    -ms-grid-column: 3;\n    -ms-grid-column-span: 10;\n    grid-column: 3 / span 10;\n}\n\n.bonus4 {\n    -ms-grid-column: 11;\n    -ms-grid-column-span: 2;\n    grid-column: 11 / span 2;\n    -ms-grid-row: 5;\n    -ms-grid-row-span: 1;\n    grid-row: 5 / 6;\n}\n\n.feature3 {\n    -ms-grid-column: 11;\n    -ms-grid-column-span: 2;\n    grid-column: 11 / span 2;\n    -ms-grid-row: 4;\n    -ms-grid-row-span: 1;\n    grid-row: 4 / 5;\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <app-header2></app-header2>\n\n\n <p>\n  login works!\n</p>\n\n\n<div class=\"page\">\n  <!-- <header><h2>Header</h2></header> -->\n  \n  <section class=\"featured\">\n       <h2>Featured Merchandising</h2>\n  </section>\n  <aside>\n       <h2>Side Bar</h2>\n  </aside>\n  <section class=\"products\">\n       <!-- <h2>Products</h2> -->\n\n       <div class=\"card\" style=\"width: 18rem; \">\n        <img class=\"card-img-top\" src=\"https://goo.gl/nFDBku\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{x.book_name}}</h5>\n          <p class=\"card-text\"><b>Condition : </b>{{x.book_condition}}</p>\n          <p class=\"card-text\"><b>Price : </b>{{x.price}}</p>\n          <p class=\"card-text\"><b>Category : </b>{{x.category}}</p>\n    \n    \n          <a href=\"/login\" class=\"btn btn-primary\">Add to Cart</a>\n        </div>\n      </div>\n\n  </section>\n  <div class=\"feature2\">\n       <h2>Feature2</h2>\n  </div>\n  <div class=\"feature3\">\n       <h2>Feature3</h2>\n  </div>\n  <div class=\"bonus1\">\n       <h2>Bonus1</h2>\n  </div>\n  <div class=\"bonus2\">\n       <h2>Bonus2</h2>\n  </div>\n  <div class=\"bonus3\">\n       <h2>Bonus3</h2>\n  </div>\n  <div class=\"bonus4\">\n       <h2>Bonus4</h2>\n  </div>\n</div>\n\n<app-footer2></app-footer2> \n\n\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(Auth, router) {
        this.Auth = Auth;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var username = target.querySelector('#username').value;
        var password = target.querySelector('#password').value;
        this.Auth.getUserDetails(username, password).subscribe(function (data) {
            if (data.success) {
                _this.router.navigate(['/admin']);
            }
            else {
                window.alert(data.message);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/messagebox/messagebox.component.css":
/*!*****************************************************!*\
  !*** ./src/app/messagebox/messagebox.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width:100%;\n}\ntable, th, td {\n    border: 1px solid black;\n    border-collapse: collapse;\n}\nth, td {\n    padding: 15px;\n    text-align: left;\n}\ntable#t01 tr:nth-child(even) {\n    background-color: #eee;\n}\ntable#t01 tr:nth-child(odd) {\n   background-color: #fff;\n}\ntable#t01 th {\n    background-color: black;\n    color: white;\n}\n.plus{\n    padding: 10px;\n    margin-left: 30px;\n}\n.minus{\n    padding: 10px;\n    margin-left: 40px;\n\n}\n.messagebox{\n    padding: 45px;\n\n}\n.wrapper {\n    text-align: center;\n}\n.wrapper2 {\n    text-align: left;\n}\n#placebutton {\n    position: absolute;\n    padding: 20px;\n    margin: 20px;\n}\n#clearbutton {\n    /* position: absolute; */\n    margin-right: 50px;\n    padding: 20px;\n    margin: 20px;\n    float: right;\n}"

/***/ }),

/***/ "./src/app/messagebox/messagebox.component.html":
/*!******************************************************!*\
  !*** ./src/app/messagebox/messagebox.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header2></app-header2>\n\n\n<div class=\"wrapper2\">\n    <button (click)=\"clearMessage()\" id=\"clearbutton\" class=\"btn btn-primary btn-md\"> Clear Inbox</button>\n  </div>\n  \n  <br>\n  <br>\n  <br>\n  \n\n<div class=\"messagebox\">\n\n  <h2>Your Inbox</h2>\n\n  <table id=\"t01\">\n    <tr>\n      <th>LISTING</th>\n      <th>MESSAGE</th>\n      <th>FROM</th>\n      <th>REPLY</th>\n    </tr>\n\n    <tr *ngFor=\"let x of data; index as i\">\n\n      <!-- started from here -->\n      <td>\n        <img src='{{x.img}}' style=\"height: 150px; width: 100px ;background-color: beige\">\n\n        <br>\n        <b> {{x.book_name}} </b>\n\n        <br>\n\n      </td>\n\n      <!-- ended here -->\n\n      <td>{{x.message}}</td>\n\n      <td>{{x.sender_email}}</td>\n\n      <td>\n        <button (click)=\"replyToSender(i)\" class=\"btn btn-primary btn-md\"> Reply </button>\n\n      </td>\n\n    </tr>\n\n\n  </table>\n\n</div>\n\n\n\n\n\n\n\n\n<app-footer2></app-footer2>"

/***/ }),

/***/ "./src/app/messagebox/messagebox.component.ts":
/*!****************************************************!*\
  !*** ./src/app/messagebox/messagebox.component.ts ***!
  \****************************************************/
/*! exports provided: MessageboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageboxComponent", function() { return MessageboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageboxComponent = /** @class */ (function () {
    function MessageboxComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
    }
    MessageboxComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("In the messagebox component");
        console.log("very good boy^^^^^^^^^^^^^^^^^^^^^^^^");
        if (this.dataService.IsLoggedIn) {
            this.dataService.getMessages(this.dataService.IsCurrentId)
                .subscribe(function (datas) {
                _this.data = datas;
                console.log("badshah");
                console.log(_this.data);
            });
        }
        else {
            this.router.navigate(['/signIn']);
        }
    };
    MessageboxComponent.prototype.replyToSender = function (i) {
        console.log("I am in reply mode");
        console.log(this.data[i]);
        this.dataService.setReplyTo(this.data[i].sender_email);
        this.router.navigate(['/getmessage']);
        // alert("Message has been sent !")
    };
    MessageboxComponent.prototype.clearMessage = function () {
        this.data.splice(0);
        this.dataService.clearMessages(this.dataService.IsCurrentId);
    };
    MessageboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messagebox',
            template: __webpack_require__(/*! ./messagebox.component.html */ "./src/app/messagebox/messagebox.component.html"),
            styles: [__webpack_require__(/*! ./messagebox.component.css */ "./src/app/messagebox/messagebox.component.css")],
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MessageboxComponent);
    return MessageboxComponent;
}());



/***/ }),

/***/ "./src/app/middle2/middle2.component.css":
/*!***********************************************!*\
  !*** ./src/app/middle2/middle2.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n    background-color: black; /* Blue background */\n    border: none; /* Remove borders */\n    color: white; /* White text */\n    padding: 12px 16px; /* Some padding */\n    font-size: 16px; /* Set a font size */\n    cursor: pointer; /* Mouse pointer on hover */\n    margin-left: 5px;\n    font-weight: bold;\n}\n\n/* Darker background on mouse-over */\n\n.btn:hover {\n    background-color: RoyalBlue;\n}\n\n#cartbtn{\n    background-color: #ff9f00;\n}\n\n.container {\n    justify-content: space-around;\n    align-content: space-evenly;\n    grid-area: auto;\n  }\n\n#nobook{\n  color: red;\n  font-family: \"Comic Sans MS\";\n  }\n\n.strike{\n    color: red;\n    text-decoration: line-through;\n  }\n\n.band {\n    width: 90%;\n    max-width: 1240px;\n    margin: 0 auto;\n    padding: 10px;\n    margin-top: 50px;\n     \n    display: -ms-grid;\n     \n    display: grid;\n     \n    -ms-grid-columns: 1fr;\n     \n        grid-template-columns: 1fr;\n    -ms-grid-rows: auto;\n        grid-template-rows: auto;\n    grid-gap: 20px;\n  }\n\n@media only screen and (min-width: 500px) {\n    .band {\n      -ms-grid-columns: 1fr 1fr;\n          grid-template-columns: 1fr 1fr;\n    }  \n  }\n\n@media only screen and (min-width: 850px) {\n    .band {\n      -ms-grid-columns: 1fr 1fr 1fr 1fr;\n          grid-template-columns: 1fr 1fr 1fr 1fr;\n    }\n  }\n\n.card {\n    background: white;\n    text-decoration: none;\n    color: #444;\n    box-shadow: 0 2px 5px rgba(0,0,0,0.1);\n    display: flex;\n    flex-direction: column;\n    min-height: 100%;\n  }\n\n.card:hover {\n    top: -2px;\n    box-shadow: 0 4px 5px rgba(0,0,0,0.2);\n  }\n\n.card article {\n    padding: 20px;\n  }\n\n/* typography */\n\n.card h1 {\n    font-size: 15px;\n    margin: 0;\n    color: #333;\n  }\n\n.card h2 {\n    font-size: 15px;\n    margin: 0;\n    color: green;\n  }\n\n.card p { \n    line-height: 1.4;\n  }\n\n.card span {\n    font-size: 15px;\n    font-weight: bold;\n    color: #999;\n    text-transform: uppercase;\n    letter-spacing: .05em;\n    margin: 2em 0 0 0;\n  }\n\n.card article {\n    padding: 20px;\n    flex: 1;\n     \n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n  }\n\n.card p { \n    flex: 1; /* make p grow to fill available space*/\n    line-height: 1.4;\n  }\n\n#mainbody{\n    /* background-color: black; */\n    background-image: url(\"https://goo.gl/1Nxe8h\");\n    margin-bottom: 0px;\n  }\n\n "

/***/ }),

/***/ "./src/app/middle2/middle2.component.html":
/*!************************************************!*\
  !*** ./src/app/middle2/middle2.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id =\"mainbody\">\n<img  src='https://goo.gl/wfGTDf'\n alt=\"Card image cap\" style=\"height: 300px; width:100%; background-color: beige\">\n\n\n\n<div class=\"input-group mb-3\">\n  <input #searchinput type=\"text\" class=\"form-control\" placeholder=\"Search by name / author / category / condition / price\" aria-label=\"Recipient's username\"\n    aria-describedby=\"basic-addon2\">\n  <div class=\"input-group-append\">\n    <!-- <button>\n      <span class=\"input-group-text\" id=\"basic-addon2\">Search</span>\n    </button> -->\n  </div>\n</div>\n\n<button (click)=\"clickedCategory(searchinput.value); searchinput.value='' \" class=\"btn\">\n  Category </button>\n\n<button (click)=\"clickedCondition(searchinput.value);searchinput.value=''\" class=\"btn\">\n  Condition </button>\n\n<button (click)=\"clickedName(searchinput.value);searchinput.value=''\" class=\"btn\">\n  Name </button>\n\n<button (click)=\"clickedAuthor(searchinput.value);searchinput.value=''\" class=\"btn\">\n  Author </button>\n\n<button (click)=\"clickedPrice(searchinput.value);searchinput.value=''\" class=\"btn\">\n  Price </button>\n\n\n\n<h1 id =\"nobook\">{{result}}</h1>\n\n\n\n<div class=\"band\">\n\n  <!-- grid item, containing a card -->\n  <!-- <div class=\"item-1\"> -->\n  <div *ngFor=\"let x of bookArray; index as i\">\n\n    <div class=\"card\">\n\n      <a routerLink=\"/itemdesc/{{x.book_id}}\" class=\"card\">\n\n        <article>\n\n          <img class=\"card-img-top\" src='{{x.img}}' alt=\"Card image cap\" style=\"height: 300px;background-color: beige\">\n\n          <span>Book</span>\n          <h1>{{x.book_name}}</h1>\n\n          <!-- <span>Author</span>\n          <h1>{{x.author_name}}</h1> -->\n\n          <span>price</span>\n          <h2>Rs.{{x.price}}  <p class=\"strike\">Rs.1000</p></h2>\n\n          <span>Condition</span>\n          <h1>{{x.book_condition}}</h1>\n          <br>\n\n        </article>\n      </a>\n\n      <button (click)=\"addToCart(i)\" id=\"cartbtn\" class=\"btn btn-primary btn-md addtocart\"> ADD TO CART</button>\n\n    </div>\n  </div>\n\n</div>\n</div>"

/***/ }),

/***/ "./src/app/middle2/middle2.component.ts":
/*!**********************************************!*\
  !*** ./src/app/middle2/middle2.component.ts ***!
  \**********************************************/
/*! exports provided: Middle2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Middle2Component", function() { return Middle2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Middle2Component = /** @class */ (function () {
    function Middle2Component(router, route, dataService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.result = "";
    }
    Middle2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.showAllInventory()
            .subscribe(function (datas) {
            // console.log("boiled inventory******************")
            // console.log( datas);
            // console.log("cooled inventory******************")
            _this.bookArray = datas;
            // console.log(this.bookArray) 
        });
    };
    Middle2Component.prototype.addToCart = function (i) {
        console.log(this.bookArray[i]);
        // If local storage is not null , then add to cart results in picking the Id
        // from local storage and putting it in the cart with currId from localstorage
        if (localStorage.currId != null) {
            alert("Book has been added to your cart!");
            this.dataService.addToCart(this.bookArray[i], localStorage.currId);
        }
        else {
            alert("Please log in to your account!");
            this.route.navigate(['/signIn']);
        }
    };
    Middle2Component.prototype.clickedCategory = function (input) {
        var _this = this;
        this.dataService.showByCategory(input)
            .subscribe(function (datas) {
            _this.bookArray = datas;
            if (datas.length == 0) {
                _this.result = "No book found ! Try with different search";
            }
        });
    };
    Middle2Component.prototype.clickedCondition = function (input) {
        var _this = this;
        this.dataService.showByCondition(input)
            .subscribe(function (datas) {
            _this.bookArray = datas;
            if (datas.length == 0) {
                _this.result = "No book found ! Try with different search";
            }
        });
    };
    Middle2Component.prototype.clickedName = function (input) {
        var _this = this;
        this.dataService.showByName(input)
            .subscribe(function (datas) {
            _this.bookArray = datas;
            if (datas.length == 0) {
                _this.result = "No book found ! Try with different search";
            }
        });
    };
    Middle2Component.prototype.clickedAuthor = function (input) {
        var _this = this;
        console.log("my author input");
        console.log(input);
        this.dataService.showByAuthor(input)
            .subscribe(function (datas) {
            _this.bookArray = datas;
            if (datas.length == 0) {
                _this.result = "No book found ! Try with different search";
            }
        });
    };
    Middle2Component.prototype.clickedPrice = function (input) {
        var _this = this;
        this.dataService.showByPrice(input)
            .subscribe(function (datas) {
            _this.bookArray = datas;
            if (datas.length == 0) {
                _this.result = "No book found ! Try with different search";
            }
        });
    };
    Middle2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-middle2',
            template: __webpack_require__(/*! ./middle2.component.html */ "./src/app/middle2/middle2.component.html"),
            styles: [__webpack_require__(/*! ./middle2.component.css */ "./src/app/middle2/middle2.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], Middle2Component);
    return Middle2Component;
}());



/***/ }),

/***/ "./src/app/sign-in/sign-in.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(https://fonts.googleapis.com/css?family=Montserrat);\n/*custom font*/\n/*basic reset*/\n* {margin: 0; padding: 0;}\nhtml {\n\theight: 100%;\n\t/*Image only BG fallback*/\n\t\n\t/*background = gradient + image pattern combo*/\n\tbackground: \n\t\tlinear-gradient(rgba(196, 102, 0, 0.6), rgba(155, 89, 182, 0.6));\n}\nbody {\n\tfont-family: montserrat, arial, verdana;\n}\n/*form styles*/\n#msform {\n\twidth: 400px;\n\tmargin: 50px auto;\n\ttext-align: center;\n\tposition: relative;\n}\n#msform fieldset {\n\tbackground: white;\n\tborder: 0 none;\n\tborder-radius: 3px;\n\tbox-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);\n\tpadding: 20px 30px;\n\tbox-sizing: border-box;\n\twidth: 80%;\n\tmargin: 0 10%;\n\t\n\t/*stacking fieldsets above each other*/\n\tposition: relative;\n}\n/*Hide all except first fieldset*/\n#msform fieldset:not(:first-of-type) {\n\tdisplay: none;\n}\n/*inputs*/\n#msform input, #msform textarea {\n\tpadding: 15px;\n\tborder: 1px solid #ccc;\n\tborder-radius: 3px;\n\tmargin-bottom: 10px;\n\twidth: 100%;\n\tbox-sizing: border-box;\n\tfont-family: montserrat;\n\tcolor: #2C3E50;\n\tfont-size: 13px;\n}\n/*buttons*/\n#msform .action-button {\n\twidth: 100px;\n\tbackground: #27AE60;\n\tfont-weight: bold;\n\tcolor: white;\n\tborder: 0 none;\n\tborder-radius: 1px;\n\tcursor: pointer;\n\tpadding: 10px 5px;\n\tmargin: 10px 5px;\n}\n#msform .action-button:hover, #msform .action-button:focus {\n\tbox-shadow: 0 0 0 2px white, 0 0 0 3px #27AE60;\n}\n/*headings*/\n.fs-title {\n\tfont-size: 15px;\n\ttext-transform: uppercase;\n\tcolor: #2C3E50;\n\tmargin-bottom: 10px;\n}\n\n\n"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.html":
/*!************************************************!*\
  !*** ./src/app/sign-in/sign-in.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header2></app-header2>\n\n\n<form (submit)=\"loginUser($event) \" id=\"msform\">\n\n  <fieldset>\n    <h2 class=\"fs-title\">Log into your account</h2>\n    <input id=\"email\" type=\"text\" placeholder=\"Email\">\n    <input id =\"pass\" type=\"password\" placeholder=\"Password\">\n    <input type=\"submit\" value=\"Log In\" class=\"next action-button\">\n  </fieldset>\n\n</form>\n\n<app-footer2></app-footer2>"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.ts ***!
  \**********************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignInComponent = /** @class */ (function () {
    function SignInComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent.prototype.loginUser = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var email = target.querySelector('#email').value;
        var password = target.querySelector('#pass').value;
        target.querySelector('#email').value = "";
        target.querySelector('#pass').value = "";
        console.log("hello from dheer side");
        console.log(email);
        console.log(password);
        this.dataService.checkUserDetails(email, password).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                // this.router.navigate(['/admin'])
                window.alert(data.message);
                console.log(data.message);
                console.log(data.success);
                _this.dataService.setLogStatus(true);
                console.log("hello bomb");
                console.log(data.user_email);
                _this.dataService.setCurrentId(data.user_email);
                console.log("In the sign in component");
                console.log("very funny^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
                console.log(_this.dataService.IsLoggedIn);
                console.log(_this.dataService.IsCurrentId);
                console.log(data.user_email);
                _this.router.navigate(['/homepage']);
            }
            else {
                window.alert(data.message);
                console.log(data.message);
            }
        });
    };
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/sign-up/sign-up.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(https://fonts.googleapis.com/css?family=Montserrat);\n/*custom font*/\n/*basic reset*/\n* {margin: 0; padding: 0;}\nhtml {\n\theight: 100%;\n\t/*Image only BG fallback*/\n\t\n\t/*background = gradient + image pattern combo*/\n\tbackground: \n\t\tlinear-gradient(rgba(196, 102, 0, 0.6), rgba(155, 89, 182, 0.6));\n}\nbody {\n\tfont-family: montserrat, arial, verdana;\n}\n/*form styles*/\n#msform {\n\twidth: 400px;\n\tmargin: 50px auto;\n\ttext-align: center;\n\tposition: relative;\n}\n#msform fieldset {\n\tbackground: white;\n\tborder: 0 none;\n\tborder-radius: 3px;\n\tbox-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);\n\tpadding: 20px 30px;\n\tbox-sizing: border-box;\n\twidth: 80%;\n\tmargin: 0 10%;\n\t\n\t/*stacking fieldsets above each other*/\n\tposition: relative;\n}\n/*Hide all except first fieldset*/\n#msform fieldset:not(:first-of-type) {\n\tdisplay: none;\n}\n/*inputs*/\n#msform input, #msform textarea {\n\tpadding: 15px;\n\tborder: 1px solid #ccc;\n\tborder-radius: 3px;\n\tmargin-bottom: 10px;\n\twidth: 100%;\n\tbox-sizing: border-box;\n\tfont-family: montserrat;\n\tcolor: #2C3E50;\n\tfont-size: 13px;\n}\n/*buttons*/\n#msform .action-button {\n\twidth: 100px;\n\tbackground: #27AE60;\n\tfont-weight: bold;\n\tcolor: white;\n\tborder: 0 none;\n\tborder-radius: 1px;\n\tcursor: pointer;\n\tpadding: 10px 5px;\n\tmargin: 10px 5px;\n}\n#msform .action-button:hover, #msform .action-button:focus {\n\tbox-shadow: 0 0 0 2px white, 0 0 0 3px #27AE60;\n}\n/*headings*/\n.fs-title {\n\tfont-size: 15px;\n\ttext-transform: uppercase;\n\tcolor: #2C3E50;\n\tmargin-bottom: 10px;\n}\n\n\n"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.html":
/*!************************************************!*\
  !*** ./src/app/sign-up/sign-up.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header2></app-header2>\n\n\n<form (submit)=\"registerUser($event)\" id=\"msform\">\n\n    <fieldset>\n        <h2 class=\"fs-title\">New here? <br>Register as new user</h2>\n        <input id=\"name\" type=\"text\" placeholder=\"Name\">\n\n      <input id=\"email\" type=\"text\" placeholder=\"Email\">\n      <input id=\"college\" type=\"text\" placeholder=\"College\">\n      <input id=\"address\" type=\"text\" placeholder=\"Address\">\n      <input id=\"number\" type=\"text\" placeholder=\"Phone number\">\n      <input id =\"pass\" type=\"password\" placeholder=\"Password\">\n      <input type=\"submit\" value=\"Register\" class=\"next action-button\">\n    </fieldset>\n  \n  </form>\n\n<app-footer2></app-footer2>"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.ts ***!
  \**********************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.registerUser = function (event) {
        event.preventDefault();
        console.log(event);
        var target = event.target;
        var name = target.querySelector('#name').value;
        var email = target.querySelector('#email').value;
        var college = target.querySelector('#college').value;
        var address = target.querySelector('#address').value;
        var number = target.querySelector('#number').value;
        var password = target.querySelector('#pass').value;
        // To clear off the responses after button press
        target.querySelector('#name').value = "";
        target.querySelector('#email').value = "";
        target.querySelector('#college').value = "";
        target.querySelector('#address').value = "";
        target.querySelector('#number').value = "";
        target.querySelector('#pass').value = "";
        console.log("hello everyone");
        this.dataService.addUserDetails(name, email, college, address, number, password)
            .subscribe(function (data) {
            if (data.success) {
                console.log(data.message);
                // This updation is for when some user is already logged in 
                // and the new user goes to the sign up page . As soon he sign
                // ups , he hould be redirected to the homepage with localstorage 
                // containing his credentials
                console.log(data.user_email);
                // this.dataService.updateLocalStorage(data.user_id)
                //   this.router.navigate(['/homepage'])
            }
            else {
                window.alert(data.message);
            }
        });
    };
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getSomeData = function () {
        var uri = 'http://localhost:3000/api/getsomedata';
        return this.http.get(uri);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ujjwal451/Documents/Hell nag/prac1/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map