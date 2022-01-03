"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["common"],{

/***/ 6367:
/*!***********************************************************!*\
  !*** ./node_modules/@firebase/auth/dist/esm2017/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionCodeOperation": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   "ActionCodeURL": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.ac),
/* harmony export */   "AuthCredential": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.G),
/* harmony export */   "AuthErrorCodes": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.C),
/* harmony export */   "EmailAuthCredential": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.H),
/* harmony export */   "EmailAuthProvider": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.L),
/* harmony export */   "FacebookAuthProvider": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.M),
/* harmony export */   "FactorId": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.F),
/* harmony export */   "GithubAuthProvider": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.Q),
/* harmony export */   "GoogleAuthProvider": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.N),
/* harmony export */   "OAuthCredential": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.I),
/* harmony export */   "OAuthProvider": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.T),
/* harmony export */   "OperationType": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.O),
/* harmony export */   "PhoneAuthCredential": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.J),
/* harmony export */   "PhoneAuthProvider": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.P),
/* harmony export */   "PhoneMultiFactorGenerator": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.m),
/* harmony export */   "ProviderId": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.o),
/* harmony export */   "RecaptchaVerifier": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.R),
/* harmony export */   "SAMLAuthProvider": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.U),
/* harmony export */   "SignInMethod": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.S),
/* harmony export */   "TwitterAuthProvider": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.V),
/* harmony export */   "applyActionCode": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.a1),
/* harmony export */   "browserLocalPersistence": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.b),
/* harmony export */   "browserPopupRedirectResolver": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.k),
/* harmony export */   "browserSessionPersistence": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.a),
/* harmony export */   "checkActionCode": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.a2),
/* harmony export */   "confirmPasswordReset": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.a0),
/* harmony export */   "connectAuthEmulator": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.E),
/* harmony export */   "createUserWithEmailAndPassword": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.a4),
/* harmony export */   "debugErrorMap": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.z),
/* harmony export */   "deleteUser": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.y),
/* harmony export */   "fetchSignInMethodsForEmail": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.a9),
/* harmony export */   "getAdditionalUserInfo": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.ak),
/* harmony export */   "getAuth": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.n),
/* harmony export */   "getIdToken": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.ah),
/* harmony export */   "getIdTokenResult": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.ai),
/* harmony export */   "getMultiFactorResolver": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.am),
/* harmony export */   "getRedirectResult": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.j),
/* harmony export */   "inMemoryPersistence": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.K),
/* harmony export */   "indexedDBLocalPersistence": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.i),
/* harmony export */   "initializeAuth": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.D),
/* harmony export */   "isSignInWithEmailLink": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.a7),
/* harmony export */   "linkWithCredential": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.Y),
/* harmony export */   "linkWithPhoneNumber": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.l),
/* harmony export */   "linkWithPopup": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.d),
/* harmony export */   "linkWithRedirect": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.g),
/* harmony export */   "multiFactor": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.an),
/* harmony export */   "onAuthStateChanged": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.t),
/* harmony export */   "onIdTokenChanged": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.q),
/* harmony export */   "parseActionCodeURL": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.ad),
/* harmony export */   "prodErrorMap": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.B),
/* harmony export */   "reauthenticateWithCredential": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "reauthenticateWithPhoneNumber": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.r),
/* harmony export */   "reauthenticateWithPopup": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.e),
/* harmony export */   "reauthenticateWithRedirect": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   "reload": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.al),
/* harmony export */   "sendEmailVerification": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.aa),
/* harmony export */   "sendPasswordResetEmail": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.$),
/* harmony export */   "sendSignInLinkToEmail": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.a6),
/* harmony export */   "setPersistence": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.p),
/* harmony export */   "signInAnonymously": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.W),
/* harmony export */   "signInWithCredential": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.X),
/* harmony export */   "signInWithCustomToken": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__._),
/* harmony export */   "signInWithEmailAndPassword": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.a5),
/* harmony export */   "signInWithEmailLink": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.a8),
/* harmony export */   "signInWithPhoneNumber": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.s),
/* harmony export */   "signInWithPopup": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.c),
/* harmony export */   "signInWithRedirect": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.f),
/* harmony export */   "signOut": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.x),
/* harmony export */   "unlink": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.aj),
/* harmony export */   "updateCurrentUser": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.w),
/* harmony export */   "updateEmail": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.af),
/* harmony export */   "updatePassword": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.ag),
/* harmony export */   "updatePhoneNumber": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.u),
/* harmony export */   "updateProfile": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.ae),
/* harmony export */   "useDeviceLanguage": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.v),
/* harmony export */   "verifyBeforeUpdateEmail": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.ab),
/* harmony export */   "verifyPasswordResetCode": () => (/* reexport safe */ _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__.a3)
/* harmony export */ });
/* harmony import */ var _index_839de510_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-839de510.js */ 7057);
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/util */ 6728);
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/app */ 6074);
/* harmony import */ var _firebase_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/logger */ 7707);
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @firebase/component */ 558);








/***/ }),

/***/ 3014:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/focus-visible-02bf7a99.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startFocusVisible": () => (/* binding */ startFocusVisible)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const ION_FOCUSED = 'ion-focused';
const ION_FOCUSABLE = 'ion-focusable';
const FOCUS_KEYS = ['Tab', 'ArrowDown', 'Space', 'Escape', ' ', 'Shift', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'Home', 'End'];
const startFocusVisible = (rootEl) => {
  let currentFocus = [];
  let keyboardMode = true;
  const ref = (rootEl) ? rootEl.shadowRoot : document;
  const root = (rootEl) ? rootEl : document.body;
  const setFocus = (elements) => {
    currentFocus.forEach(el => el.classList.remove(ION_FOCUSED));
    elements.forEach(el => el.classList.add(ION_FOCUSED));
    currentFocus = elements;
  };
  const pointerDown = () => {
    keyboardMode = false;
    setFocus([]);
  };
  const onKeydown = (ev) => {
    keyboardMode = FOCUS_KEYS.includes(ev.key);
    if (!keyboardMode) {
      setFocus([]);
    }
  };
  const onFocusin = (ev) => {
    if (keyboardMode && ev.composedPath) {
      const toFocus = ev.composedPath().filter((el) => {
        if (el.classList) {
          return el.classList.contains(ION_FOCUSABLE);
        }
        return false;
      });
      setFocus(toFocus);
    }
  };
  const onFocusout = () => {
    if (ref.activeElement === root) {
      setFocus([]);
    }
  };
  ref.addEventListener('keydown', onKeydown);
  ref.addEventListener('focusin', onFocusin);
  ref.addEventListener('focusout', onFocusout);
  ref.addEventListener('touchstart', pointerDown);
  ref.addEventListener('mousedown', pointerDown);
  const destroy = () => {
    ref.removeEventListener('keydown', onKeydown);
    ref.removeEventListener('focusin', onFocusin);
    ref.removeEventListener('focusout', onFocusout);
    ref.removeEventListener('touchstart', pointerDown);
    ref.removeEventListener('mousedown', pointerDown);
  };
  return {
    destroy,
    setFocus
  };
};




/***/ }),

/***/ 2471:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-e2988509.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ chevronBack),
/* harmony export */   "b": () => (/* binding */ chevronForward),
/* harmony export */   "c": () => (/* binding */ chevronForwardOutline),
/* harmony export */   "d": () => (/* binding */ chevronDown),
/* harmony export */   "e": () => (/* binding */ ellipsisHorizontal),
/* harmony export */   "f": () => (/* binding */ caretUpSharp),
/* harmony export */   "g": () => (/* binding */ caretDownSharp)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/* Ionicons v6.0.0, ES Modules */
const caretDownSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>";
const caretUpSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>";
const chevronBack = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>";
const chevronDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>";
const chevronForward = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const chevronForwardOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const ellipsisHorizontal = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>";




/***/ }),

/***/ 6419:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-163ed7fb.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SPINNERS)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 8,
    fn: (dur, index, total) => {
      const transform = `rotate(${(360 / total) * index + (index < (total / 2) ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 14,
        y2: 26,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 8,
    fn: (dur, index, total) => {
      const transform = `rotate(${(360 / total) * index + (index < (total / 2) ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-sharp': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-sharp-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ 9095:
/*!******************************************************!*\
  !*** ./node_modules/firebase/auth/dist/index.esm.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionCodeOperation": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.ActionCodeOperation),
/* harmony export */   "ActionCodeURL": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.ActionCodeURL),
/* harmony export */   "AuthCredential": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.AuthCredential),
/* harmony export */   "AuthErrorCodes": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.AuthErrorCodes),
/* harmony export */   "EmailAuthCredential": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.EmailAuthCredential),
/* harmony export */   "EmailAuthProvider": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.EmailAuthProvider),
/* harmony export */   "FacebookAuthProvider": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.FacebookAuthProvider),
/* harmony export */   "FactorId": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.FactorId),
/* harmony export */   "GithubAuthProvider": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.GithubAuthProvider),
/* harmony export */   "GoogleAuthProvider": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.GoogleAuthProvider),
/* harmony export */   "OAuthCredential": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.OAuthCredential),
/* harmony export */   "OAuthProvider": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.OAuthProvider),
/* harmony export */   "OperationType": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.OperationType),
/* harmony export */   "PhoneAuthCredential": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.PhoneAuthCredential),
/* harmony export */   "PhoneAuthProvider": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.PhoneAuthProvider),
/* harmony export */   "PhoneMultiFactorGenerator": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.PhoneMultiFactorGenerator),
/* harmony export */   "ProviderId": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.ProviderId),
/* harmony export */   "RecaptchaVerifier": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.RecaptchaVerifier),
/* harmony export */   "SAMLAuthProvider": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.SAMLAuthProvider),
/* harmony export */   "SignInMethod": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.SignInMethod),
/* harmony export */   "TwitterAuthProvider": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.TwitterAuthProvider),
/* harmony export */   "applyActionCode": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.applyActionCode),
/* harmony export */   "browserLocalPersistence": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.browserLocalPersistence),
/* harmony export */   "browserPopupRedirectResolver": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.browserPopupRedirectResolver),
/* harmony export */   "browserSessionPersistence": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.browserSessionPersistence),
/* harmony export */   "checkActionCode": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.checkActionCode),
/* harmony export */   "confirmPasswordReset": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.confirmPasswordReset),
/* harmony export */   "connectAuthEmulator": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.connectAuthEmulator),
/* harmony export */   "createUserWithEmailAndPassword": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.createUserWithEmailAndPassword),
/* harmony export */   "debugErrorMap": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.debugErrorMap),
/* harmony export */   "deleteUser": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.deleteUser),
/* harmony export */   "fetchSignInMethodsForEmail": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.fetchSignInMethodsForEmail),
/* harmony export */   "getAdditionalUserInfo": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAdditionalUserInfo),
/* harmony export */   "getAuth": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth),
/* harmony export */   "getIdToken": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getIdToken),
/* harmony export */   "getIdTokenResult": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getIdTokenResult),
/* harmony export */   "getMultiFactorResolver": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getMultiFactorResolver),
/* harmony export */   "getRedirectResult": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getRedirectResult),
/* harmony export */   "inMemoryPersistence": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.inMemoryPersistence),
/* harmony export */   "indexedDBLocalPersistence": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.indexedDBLocalPersistence),
/* harmony export */   "initializeAuth": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.initializeAuth),
/* harmony export */   "isSignInWithEmailLink": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.isSignInWithEmailLink),
/* harmony export */   "linkWithCredential": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.linkWithCredential),
/* harmony export */   "linkWithPhoneNumber": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.linkWithPhoneNumber),
/* harmony export */   "linkWithPopup": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.linkWithPopup),
/* harmony export */   "linkWithRedirect": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.linkWithRedirect),
/* harmony export */   "multiFactor": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.multiFactor),
/* harmony export */   "onAuthStateChanged": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.onAuthStateChanged),
/* harmony export */   "onIdTokenChanged": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.onIdTokenChanged),
/* harmony export */   "parseActionCodeURL": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.parseActionCodeURL),
/* harmony export */   "prodErrorMap": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.prodErrorMap),
/* harmony export */   "reauthenticateWithCredential": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.reauthenticateWithCredential),
/* harmony export */   "reauthenticateWithPhoneNumber": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.reauthenticateWithPhoneNumber),
/* harmony export */   "reauthenticateWithPopup": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.reauthenticateWithPopup),
/* harmony export */   "reauthenticateWithRedirect": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.reauthenticateWithRedirect),
/* harmony export */   "reload": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.reload),
/* harmony export */   "sendEmailVerification": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.sendEmailVerification),
/* harmony export */   "sendPasswordResetEmail": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.sendPasswordResetEmail),
/* harmony export */   "sendSignInLinkToEmail": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.sendSignInLinkToEmail),
/* harmony export */   "setPersistence": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.setPersistence),
/* harmony export */   "signInAnonymously": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signInAnonymously),
/* harmony export */   "signInWithCredential": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signInWithCredential),
/* harmony export */   "signInWithCustomToken": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signInWithCustomToken),
/* harmony export */   "signInWithEmailAndPassword": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signInWithEmailAndPassword),
/* harmony export */   "signInWithEmailLink": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signInWithEmailLink),
/* harmony export */   "signInWithPhoneNumber": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signInWithPhoneNumber),
/* harmony export */   "signInWithPopup": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signInWithPopup),
/* harmony export */   "signInWithRedirect": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signInWithRedirect),
/* harmony export */   "signOut": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signOut),
/* harmony export */   "unlink": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.unlink),
/* harmony export */   "updateCurrentUser": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.updateCurrentUser),
/* harmony export */   "updateEmail": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.updateEmail),
/* harmony export */   "updatePassword": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.updatePassword),
/* harmony export */   "updatePhoneNumber": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.updatePhoneNumber),
/* harmony export */   "updateProfile": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.updateProfile),
/* harmony export */   "useDeviceLanguage": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.useDeviceLanguage),
/* harmony export */   "verifyBeforeUpdateEmail": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.verifyBeforeUpdateEmail),
/* harmony export */   "verifyPasswordResetCode": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.verifyPasswordResetCode)
/* harmony export */ });
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/auth */ 6367);



/***/ }),

/***/ 2403:
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/auth */ 9774);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 3059);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 8252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 9026);








let UserService = class UserService {
    constructor(firestore, angularFireAuth, loadingCtrl, toaster, router, alertCtrl) {
        this.firestore = firestore;
        this.angularFireAuth = angularFireAuth;
        this.loadingCtrl = loadingCtrl;
        this.toaster = toaster;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.user$ = this.angularFireAuth.authState.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.switchMap)(user => {
            if (user) {
                return this.firestore.doc('users/$(user.uid)').valueChanges();
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(null);
            }
        }));
    }
    // add(Email, Name, Password) {
    //   return this.firestore.collection('users').add({  email: Email, name: Name, password: Password});
    //   }
    // update(id, Email, Name, Password) {
    //   return this.firestore.collection('users').doc(id).set({name: Name, email: Email, password: Password});
    //   }
    // delete(id) {
    //   return this.firestore.collection('users').doc(id).delete();
    //   }
    // getOne(id) {
    //   return this.firestore.collection('users').doc(id).valueChanges();
    //   }
    login(email, password) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: "Authenticating...",
                spinner: "crescent",
                showBackdrop: true
            });
            loading.present();
            this.angularFireAuth.signInWithEmailAndPassword(email, password).then((data) => {
                if (!data.user.emailVerified) {
                    loading.dismiss();
                    this.toast('Please verify your email', 'danger');
                    this.logout();
                }
                else {
                    loading.dismiss();
                    this.router.navigate(['/home']);
                    this.toast('welcome', 'success');
                }
            });
        });
    }
    delete(id) {
        //return this.firestore.doc('users/${id}').delete();
        return this.firestore.collection('users').doc(id).delete().then(() => {
            this.router.navigate['/login'];
        });
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
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.angularFireAuth.signOut().then(() => {
                this.router.navigate(['/login']);
            });
        });
    }
    userDetails() {
        return this.angularFireAuth.user;
    }
};
UserService.ctorParameters = () => [
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__.AngularFirestore },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_4__.AngularFireAuth },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    })
], UserService);



/***/ })

}]);
//# sourceMappingURL=common.js.map