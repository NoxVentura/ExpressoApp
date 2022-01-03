"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_homestaff_homestaff_module_ts"],{

/***/ 6322:
/*!*******************************************************!*\
  !*** ./src/app/homestaff/homestaff-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomestaffPageRoutingModule": () => (/* binding */ HomestaffPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _homestaff_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homestaff.page */ 8612);




const routes = [
    {
        path: '',
        component: _homestaff_page__WEBPACK_IMPORTED_MODULE_0__.HomestaffPage
    }
];
let HomestaffPageRoutingModule = class HomestaffPageRoutingModule {
};
HomestaffPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomestaffPageRoutingModule);



/***/ }),

/***/ 3073:
/*!***********************************************!*\
  !*** ./src/app/homestaff/homestaff.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomestaffPageModule": () => (/* binding */ HomestaffPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _homestaff_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homestaff-routing.module */ 6322);
/* harmony import */ var _homestaff_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homestaff.page */ 8612);







let HomestaffPageModule = class HomestaffPageModule {
};
HomestaffPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _homestaff_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomestaffPageRoutingModule
        ],
        declarations: [_homestaff_page__WEBPACK_IMPORTED_MODULE_1__.HomestaffPage]
    })
], HomestaffPageModule);



/***/ }),

/***/ 8612:
/*!*********************************************!*\
  !*** ./src/app/homestaff/homestaff.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomestaffPage": () => (/* binding */ HomestaffPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_Sarah_Documents_ionic_apps_espressoApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_homestaff_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./homestaff.page.html */ 2550);
/* harmony import */ var _homestaff_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homestaff.page.scss */ 7804);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let HomestaffPage = class HomestaffPage {
    constructor() { }
    ngOnInit() {
    }
};
HomestaffPage.ctorParameters = () => [];
HomestaffPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-homestaff',
        template: _C_Users_Sarah_Documents_ionic_apps_espressoApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_homestaff_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_homestaff_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomestaffPage);



/***/ }),

/***/ 2550:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/homestaff/homestaff.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Home Page</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n \n</ion-content>\n<ion-toolbar>\n  <ion-tabs>\n    <ion-tab-bar slot=\"bottom\">\n      <ion-tab-button [routerLink]=\"['/homestaff']\">\n        <ion-icon name=\"home\"></ion-icon>\n        <ion-label>Home</ion-label>\n      </ion-tab-button>\n      <ion-tab-button [routerLink]=\"['/accountstaff']\">\n        <ion-icon name=\"person\"></ion-icon>\n        <ion-label>Account</ion-label>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-toolbar>");

/***/ }),

/***/ 7804:
/*!***********************************************!*\
  !*** ./src/app/homestaff/homestaff.page.scss ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lc3RhZmYucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_homestaff_homestaff_module_ts.js.map