"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_register_register_module_ts"],{

/***/ 9455:
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 6414);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 9204:
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user.service */ 2403);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-routing.module */ 9455);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.page */ 6414);








let RegisterPageModule = class RegisterPageModule {
    constructor(userService) {
        this.userService = userService;
        this.users = [];
    }
};
RegisterPageModule.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_0__.UserService }
];
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_1__.RegisterPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_2__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 6414:
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_Sarah_Documents_ionic_apps_espressoApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_register_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./register.page.html */ 3420);
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss */ 1304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 3059);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/auth */ 9774);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8346);









let RegisterPage = class RegisterPage {
    constructor(router, formbuilder, firestore, angularFireAuth, loadingCtrl, toaster) {
        this.router = router;
        this.formbuilder = formbuilder;
        this.firestore = firestore;
        this.angularFireAuth = angularFireAuth;
        this.loadingCtrl = loadingCtrl;
        this.toaster = toaster;
        // this.registerForm =formbuilder.group({
        //   'Name':'',
        //   'email': '',
        //   'password':''
        // })
    }
    ngOnInit() {
    }
    registerUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            if (this.name && this.email && this.password) {
                const loading = yield this.loadingCtrl.create({
                    message: 'loading..',
                    showBackdrop: true
                });
                loading.present();
                this.angularFireAuth.createUserWithEmailAndPassword(this.email, this.password).then((data) => {
                    this.firestore.collection('users').doc(data.user.uid).set({
                        'userId': data.user.uid,
                        'name': this.name,
                        'email': this.email,
                        'password': this.password
                    });
                    data.user.sendEmailVerification();
                })
                    .then(() => {
                    console.log('Registration sucess!', 'Success');
                    loading.dismiss();
                    this.router.navigate(['/login']);
                })
                    .catch((error) => {
                    loading.dismiss();
                    console.log(error.message);
                });
            }
            else {
                console.log("please fill in the form");
            }
        });
    }
    registerStaff() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            if (this.name && this.email && this.staffNum && this.password) {
                const loading = yield this.loadingCtrl.create({
                    message: 'loading..',
                    showBackdrop: true
                });
                loading.present();
                this.angularFireAuth.createUserWithEmailAndPassword(this.email, this.password).then((data) => {
                    this.firestore.collection('SingtelStaff').doc(data.user.uid).set({
                        'staffId': data.user.uid,
                        'name': this.name,
                        'email': this.email,
                        'vendorNum': this.vendorNum,
                        'password': this.password
                    });
                    data.user.sendEmailVerification();
                })
                    .then(() => {
                    console.log('Registration sucess!');
                    loading.dismiss();
                    this.router.navigate(['./login']);
                })
                    .catch((error) => {
                    loading.dismiss();
                    console.log(error.message);
                    this.toast('Error' + error.message, 'Danger');
                });
            }
            else {
                console.log("please fill in the form");
            }
        });
    }
    registerVendor() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            if (this.name && this.email && this.vendorNum && this.password) {
                const loading = yield this.loadingCtrl.create({
                    message: 'loading..',
                    showBackdrop: true
                });
                loading.present();
                this.angularFireAuth.createUserWithEmailAndPassword(this.email, this.password).then((data) => {
                    this.firestore.collection('Vendors').doc(data.user.uid).set({
                        'vendorId': data.user.uid,
                        'name': this.name,
                        'email': this.email,
                        'vendorNum': this.vendorNum,
                        'password': this.password
                    });
                    data.user.sendEmailVerification();
                })
                    .then(() => {
                    console.log('Registration sucess!');
                    loading.dismiss();
                    this.router.navigate(['./login']);
                })
                    .catch((error) => {
                    loading.dismiss();
                    console.log(error.message);
                });
            }
            else {
                console.log("please fill in the form");
            }
        });
    }
    checkPassword() {
        if (this.password == this.confirmPassword) {
            this.passwordMatch = true;
        }
        else {
            this.passwordMatch = false;
        }
    }
    toast(message, status) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toaster.create({
                message: message,
                position: 'top',
                color: status,
                duration: 2000
            });
            toast.present();
        });
    }
    CallshowUser() {
        showUser();
    }
    CallshowStaff() {
        showStaff();
    }
    CallshowVendor() {
        showVendor();
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_5__.AngularFirestore },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_6__.AngularFireAuth },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController }
];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-register',
        template: _C_Users_Sarah_Documents_ionic_apps_espressoApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_register_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterPage);



/***/ }),

/***/ 3420:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/register/register.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<head>\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css\">\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js\"></script>\n    <script src=\"https://cdnjs.cloudfare.com/ajax/libs/popper.js/1.16.0/umd.popper.min.js\"></script>\n    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js\"></script>\n    <style type=\"text/css\">\n        #staff{display: none;}\n        #vendor{display: none;}\n    </style>\n    <script type=\"text/javascript\" src=\"/assets/js/externalfunctions.js\">\n        // function showUser() {\n        //     document.getElementById('user').style.display=\"none\";\n        //     document.getElementById('staff').style.display=\"block\";\n        // }\n        // function showStaff() {\n        //     document.getElementById('user').style.display=\"block\";\n        //     document.getElementById('staff').style.display=\"none\";\n        // }\n    </script>\n</head>\n<ion-content>\n    <ion-button class=\"backBtn\" [routerLink]=\"['/login']\">Back</ion-button>\n  <ion-card>\n      <ion-card-header>\n        <div class=\"container\">\n            <img src=\"./assets/icon/favicon.png\" class=\"logoicon\"/>\n            <p class=\"title\">Espresso</p>\n        </div>\n        <button class=\"btn btn-primary\" (click)=\"CallshowUser()\">User</button>\n        <button class=\"btn btn-primary\" (click)=\"CallshowStaff()\">Staff</button>\n        <button class=\"btn btn-primary\" (click)=\"CallshowVendor()\">Vendor</button>\n       \n        \n      </ion-card-header>\n      <ion-card-content class=\"ion-padding\" text-align=\"ion-text-center\" id=\"user\">\n          <ion-list>\n              <ion-item>\n                  <ion-label position=\"floating\">Name</ion-label>\n                  <ion-input [(ngModel)]=\"name\" type=\"text\" class=\"regName\" placeholder=\"Please key in your username\"></ion-input>\n              </ion-item>\n              <ion-item>\n                  <ion-label position=\"floating\">Email</ion-label>\n                  <ion-input [(ngModel)]=\"email\" type=\"text\" class=\"regEmail\" placeholder=\"Please key in your email\"></ion-input>\n              </ion-item>\n              <ion-item>\n                  <ion-label position=\"floating\">Password</ion-label>\n                  <ion-input [(ngModel)]=\"password\" type=\"password\" class=\"regPassword\" placeholder=\"Please key in your password\"></ion-input>\n              </ion-item>\n              <ion-item>\n                  <ion-label position=\"floating\">Confirm Password</ion-label>\n                  <ion-input [(ngModel)]=\"confirmPassword\" type=\"password\" (ionChange)=\"checkPassword()\" class=\"regCfmPassword\" placeholder=\"Please re-enter your password\"></ion-input>\n                  <ion-text *ngIf=\"password &&!passwordMatch\" color=\"danger\">Password do not match!</ion-text>\n                  <ion-text *ngIf=\"password &&passwordMatch\" color=\"success\">Password match!</ion-text>\n              </ion-item>\n          </ion-list>\n          <ion-button [disabled]=\"!passwordMatch\" expand=\"block\" shape=\"round\" color=\"primary\" class=\"registerBtn\" (click)=\"registerUser()\">Register</ion-button>\n      </ion-card-content>\n\n    <ion-card-content class=\"ion-padding\" text-align=\"ion-text-center\" id=\"staff\">\n        <ion-list>\n            <ion-item>\n                <ion-label position=\"floating\">Name</ion-label>\n                <ion-input [(ngModel)]=\"name\" type=\"text\" class=\"regName\" placeholder=\"Please key in your username\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"floating\">Email</ion-label>\n                <ion-input [(ngModel)]=\"email\" type=\"text\" class=\"regEmail\" placeholder=\"Please key in your email\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"floating\">Staff Number</ion-label>\n                <ion-input [(ngModel)]=\"staffNum\" type=\"text\" class=\"regStaffNum\" placeholder=\"Please key in your Staff Number\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"floating\">Password</ion-label>\n                <ion-input [(ngModel)]=\"password\" type=\"password\" class=\"regPassword\" placeholder=\"Please key in your password\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"floating\">Confirm Password</ion-label>\n                <ion-input [(ngModel)]=\"confirmPassword\" type=\"password\" (ionChange)=\"checkPassword()\" class=\"regCfmPassword\" placeholder=\"Please re-enter your password\"></ion-input>\n                <ion-text *ngIf=\"password &&!passwordMatch\" color=\"danger\">Password do not match!</ion-text>\n                <ion-text *ngIf=\"password &&passwordMatch\" color=\"success\">Password match!</ion-text>\n            </ion-item>\n        </ion-list>\n        <ion-button [disabled]=\"!passwordMatch\" expand=\"block\" shape=\"round\" color=\"primary\" class=\"registerBtn\" (click)=\"registerStaff()\">Register</ion-button>\n    </ion-card-content>\n\n    <ion-card-content class=\"ion-padding\" text-align=\"ion-text-center\" id=\"vendor\">\n        <ion-list>\n            <ion-item>\n                <ion-label position=\"floating\">Name</ion-label>\n                <ion-input [(ngModel)]=\"name\" type=\"text\" class=\"regName\" placeholder=\"Please key in your username\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"floating\">Email</ion-label>\n                <ion-input [(ngModel)]=\"email\" type=\"text\" class=\"regEmail\" placeholder=\"Please key in your email\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"floating\">Vendor Number</ion-label>\n                <ion-input [(ngModel)]=\"vendorNum\" type=\"text\" class=\"regVendorNum\" placeholder=\"Please key in your Vendor Number\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"floating\">Password</ion-label>\n                <ion-input [(ngModel)]=\"password\" type=\"password\" class=\"regPassword\" placeholder=\"Please key in your password\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"floating\">Confirm Password</ion-label>\n                <ion-input [(ngModel)]=\"confirmPassword\" type=\"password\" (ionChange)=\"checkPassword()\" class=\"regCfmPassword\" placeholder=\"Please re-enter your password\"></ion-input>\n                <ion-text *ngIf=\"password &&!passwordMatch\" color=\"danger\">Password do not match!</ion-text>\n                <ion-text *ngIf=\"password &&passwordMatch\" color=\"success\">Password match!</ion-text>\n            </ion-item>\n        </ion-list>\n        <ion-button [disabled]=\"!passwordMatch\" expand=\"block\" shape=\"round\" color=\"primary\" class=\"registerBtn\" (click)=\"registerVendor()\">Register</ion-button>\n    </ion-card-content> \n     \n  </ion-card>\n</ion-content>");

/***/ }),

/***/ 1304:
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/***/ ((module) => {

module.exports = ".btn-primary {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSiIsImZpbGUiOiJyZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLXByaW1hcnl7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_register_register_module_ts.js.map