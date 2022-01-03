"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 2359:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 955);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 9549:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 2359);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 955);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 955:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_Sarah_Documents_ionic_apps_espressoApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login.page.html */ 9403);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 6051);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/auth */ 9774);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 3059);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ 2403);








let LoginPage = class LoginPage {
    constructor(loadingCtrl, toaster, angularFireAuth, user, firestore) {
        this.loadingCtrl = loadingCtrl;
        this.toaster = toaster;
        this.angularFireAuth = angularFireAuth;
        this.user = user;
        this.firestore = firestore;
    }
    loginUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (this.email && this.password) {
                const loading = yield this.loadingCtrl.create({
                    message: "logging in...",
                    spinner: "crescent",
                    showBackdrop: true
                });
                loading.present();
                this.user.login(this.email, this.password).then(() => {
                    loading.dismiss();
                    //get all user
                    const ref = this.firestore.collection('users').snapshotChanges().forEach(user => {
                        return user.map(a => {
                            const userdata = a.payload.doc.data();
                            const id = a.payload.doc.id;
                        });
                    });
                })
                    .catch((error) => {
                    loading.dismiss();
                    this.toast(error.message, 'danger');
                });
            }
            else {
                this.toast('Please enter your email and password!', 'danger');
            }
        });
    }
    toast(message, status) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toaster.create({
                message: message,
                position: 'top',
                color: status,
                duration: 2000
            });
            toast.present();
        });
    }
    ngOnInit() {
    }
    CallshowUserLogin() {
        showUserLogin();
    }
    CallshowStaffLogin() {
        showStaffLogin();
    }
    CallshowVendorLogin() {
        showVendorLogin();
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__.AngularFireAuth },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__.AngularFirestore }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login',
        template: _C_Users_Sarah_Documents_ionic_apps_espressoApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 9403:
/*!******************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/login/login.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<head>\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js\"></script>\n  <script src=\"https://cdnjs.cloudfare.com/ajax/libs/popper.js/1.16.0/umd.popper.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js\"></script>\n  <style type=\"text/css\">\n      #staffLogin{display: none;}\n      #vendorLogin{display: none;}\n  </style>\n  <!-- <script type=\"text/javascript\" src=\"/assets/js/externalfunctions.js\">\n      function showUserLogin() {\n          document.getElementById('userLogin').style.display=\"none\";\n          document.getElementById('staffLogin').style.display=\"block\";\n\n      }\n      function showStaffLogin() {\n          document.getElementById('userLogin').style.display=\"block\";\n          document.getElementById('staffLogin').style.display=\"none\";\n      }\n  </script> -->\n</head>\n<ion-content>\n  <style>\n     \n\n  </style>\n<ion-card>\n    <ion-card-header>\n      <div class=\"container\">\n          <img src=\"./assets/icon/favicon.png\" class=\"logoicon\"/>\n          <p class=\"title\">Espresso</p>\n      </div>\n      <button class=\"btn btn-primary\" (click)=\"CallshowUserLogin()\">User</button>\n      <button class=\"btn btn-primary\" (click)=\"CallshowStaffLogin()\">Staff</button>\n      <button class=\"btn btn-primary\" (click)=\"CallshowVendorLogin()\">Vendor</button>\n     \n      \n    </ion-card-header>\n    <ion-card-content class=\"ion-padding\" text-align=\"ion-text-center\" id=\"userLogin\">\n        <ion-list>\n            <ion-item>\n                <ion-label position=\"floating\">Email</ion-label>\n                <ion-input [(ngModel)]=\"email\" type=\"text\" class=\"regEmail\" placeholder=\"Please key in your email\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"floating\">Password</ion-label>\n                <ion-input [(ngModel)]=\"password\" type=\"password\" class=\"regPassword\" placeholder=\"Please key in your password\"></ion-input>\n            </ion-item>\n        </ion-list>\n        <ion-button  expand=\"block\" shape=\"round\" color=\"primary\" class=\"loginBtn\" (click)=\"loginUser()\">Login</ion-button>\n    </ion-card-content>\n\n  <ion-card-content class=\"ion-padding\" text-align=\"ion-text-center\" id=\"staffLogin\">\n      <ion-list>\n          \n          <ion-item>\n              <ion-label position=\"floating\">Email</ion-label>\n              <ion-input [(ngModel)]=\"email\" type=\"text\" class=\"regEmail\" placeholder=\"Please key in your email\"></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label position=\"floating\">Staff Number</ion-label>\n              <ion-input [(ngModel)]=\"staffNum\" type=\"text\" class=\"regStaffNum\" placeholder=\"Please key in your Staff Number\"></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label position=\"floating\">Password</ion-label>\n              <ion-input [(ngModel)]=\"password\" type=\"password\" class=\"regPassword\" placeholder=\"Please key in your password\"></ion-input>\n          </ion-item>\n          \n      </ion-list>\n      <ion-button  expand=\"block\" shape=\"round\" color=\"primary\" class=\"loginBtn\" (click)=\"loginStaff()\">Login</ion-button>\n  </ion-card-content> \n   \n  <ion-card-content class=\"ion-padding\" text-align=\"ion-text-center\" id=\"vendorLogin\">\n    <ion-list>\n        \n        <ion-item>\n            <ion-label position=\"floating\">Email</ion-label>\n            <ion-input [(ngModel)]=\"email\" type=\"text\" class=\"regEmail\" placeholder=\"Please key in your email\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"floating\">Vendor Number</ion-label>\n            <ion-input [(ngModel)]=\"vendorNum\" type=\"text\" class=\"regVendorNum\" placeholder=\"Please key in your Vendor Number\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"floating\">Password</ion-label>\n            <ion-input [(ngModel)]=\"password\" type=\"password\" class=\"regPassword\" placeholder=\"Please key in your password\"></ion-input>\n        </ion-item>\n        \n    </ion-list>\n    <ion-button  expand=\"block\" shape=\"round\" color=\"primary\" class=\"loginBtn\" (click)=\"loginVendor()\">Login</ion-button>\n</ion-card-content> \n \n</ion-card>\n<a [routerLink]=\"['/forgot']\"> Forgot password?</a> \n<p>Dont have an account? click <a [routerLink]=\"['/register']\">here</a> to register!</p>\n</ion-content>");

/***/ }),

/***/ 6051:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ ((module) => {

module.exports = ".btn-primary {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLXByaW1hcnl7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map