(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\n    .menu {\n        float: left;\n        width: 15%;\n        height: 100%;\n        text-align: center;\n    }\n\n    .menu a {\n        background-color: #e5e5e5;\n        padding: 8px;\n        margin-top: 7px;\n        display: block;\n        width: 100%;\n        color: black;\n    }\n\n    .main {\n        float: left;\n        width: 60%;\n        padding: 0 20px;\n    }\n</style>\n\n\n\n<div id=\"app\">\n    <nav class=\"navbar navbar-expand-sm navbar-light\" style=\"background-color: darkseagreen;\" href=\"/\">\n\n    </nav>\n    <nav class=\"navbar navbar-expand-sm navbar-light\" style=\"background-color: teal;\">\n\n        <div class=\"MENU\">\n            <div>\n                <h5> USUARI@ </h5>\n            </div>\n\n            <!-- LOGIN STATUS  TRUE VS FALSE WITH ICONS   -->\n            <!-- NOT looged IN --   -->\n            <a>\n                <button type=\"button\" *ngIf=\"!isLoggedIn\" (click)=\"show('loginPopup')\" mdbWavesEffect><img\n                        style=\"width: 30px; height: 40px;\"\n                        src=\"https://www.pinclipart.com/picdir/middle/357-3577716_login-icon-rbac-in-kubernetes-clipart.png\"\n                        title=\"Login~ username/password : jpb/123\" />\n                </button>\n            </a>\n\n            <!--  looged IN  -->\n            <a *ngIf=\"isLoggedIn\">\n                <img style=\"float: inline-start;\"\n                    src=\"https://media-exp1.licdn.com/dms/image/C5603AQFMpJR-VMj9fA/profile-displayphoto-shrink_200_200/0?e=1590019200&v=beta&t=Zh29e12DfuKkAuZLnMmgCaERQ0LpPlceYDQdWt9jIAw\"\n                    class=\"rounded-circle\" width=\"70px\" />\n\n\n                <img type=\"button\"\n                    src=\"http://www.myiconfinder.com/uploads/iconsets/256-256-bc81dd441f1d3d7db2ae9537df2fab9b-logout.png\"\n                    width=\"60px\" (click)=\"logout()\">\n            </a>\n\n\n\n        </div>\n\n        <!---->\n        <div class=\"nav-item\" style=\"margin-left: 20px;\">\n            <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                aria-expanded=\"false\" style=\"color: black; background-color:darkseagreen ;\">\n                Ayuda & Recursos\n            </button>\n\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdown\">\n\n\n                <a class=\"dropdown-item\" style=\"color: black;\"\n                    href=\"https://github.com/JPBaro/UserManager-ClientSide\">Github ~ this app</a>\n                <div class=\"dropdown-divider\"></div>\n\n                <a class=\"dropdown-item\" style=\"color: black;\"\n                    href=\"https://github.com/JPBaro/UserManager-ServerSide\">Github ~ Who this app talks\n                    to...</a>\n                <div class=\"dropdown-divider\"></div>\n\n                <a class=\"dropdown-item \" style=\"color: black;\" href=\"mailto:joaquinpb.tech@gmail.com\">Contact @\n                </a>\n                <div class=\"dropdown-divider\"></div>\n            </div>\n\n        </div>\n\n        <!--  dddddddddddddddddddddd   POP UP WINDOW  INFO-->\n        <button type=\"button\" (click)=\"show('infoPopup')\" mdbWavesEffect><img style=\"width: 30px; height: 40px;\"\n                src=\"https://cdn.pixabay.com/photo/2016/06/15/15/02/info-1459077_960_720.png\"\n                title=\"Informacion extra\" />\n        </button>\n\n        <div [style.display]=\"showInfo ? 'block' : 'none'\" class=\"modal\" id=\"imagemodal2\" tabindex=\"-1\"\n            role=\"contentinfo\" aria-labelledby=\"myLoginlLabel\" aria-hidden=\"true\"\n            style=\"align-items: center; backdrop-filter: initial;\">\n\n            <div class=\"modal-dialog\" style=\"align-items: center; height: fit-content;width: fit-content;\">\n\n                <div class=\"modal-content\" style=\"align-items: center;\">\n                    <div class=\"container\">\n                        <button type=\"button\" class=\"btn\" data-dismiss=\"modal\" (click)=\"hide('showInfo')\">[x]</button>\n\n                    </div>\n                    <div class=\"modal-header\" style=\"align-items: center;\">\n                        INFORMACION\n                    </div>\n\n                    <div class=\" modal-body\" style=\"background-color: darkgrey;\">\n\n\n                        <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\"\n                            aria-haspopup=\"true\" aria-expanded=\"false\"\n                            style=\"color: black; background-color:darkseagreen ;\">\n                            Ayuda & Recursos\n                        </button>\n\n\n\n                    </div>\n\n\n\n\n                </div>\n            </div>\n        </div>\n\n\n\n\n        <!--     DDDDDDDDDDDDDDDDDDDDDDDDDDD      -->\n\n\n        <!-- POP UP WINDOW FOR LOGIN -->\n        <div [style.display]=\"showLogin ? 'block' : 'none'\" class=\"modal\" id=\"imagemodal\" tabindex=\"-1\" role=\"form\"\n            aria-labelledby=\"myLoginlLabel\" aria-hidden=\"true\" style=\"align-items: center; backdrop-filter: initial;\">\n\n            <div class=\"modal-dialog\" style=\"align-items: center; height: fit-content;width: fit-content;\">\n\n                <div class=\"modal-content\" style=\"align-items: center;\">\n                    <div class=\"container\">\n                        <button type=\"button\" class=\"btn\" data-dismiss=\"modal\" (click)=\"hide('showLogin')\">[x]</button>\n\n                    </div>\n                    <div class=\"modal-header\" style=\"align-items: center;\">\n                        <img src=\"https://media-exp1.licdn.com/dms/image/C5603AQFMpJR-VMj9fA/profile-displayphoto-shrink_200_200/0?e=1590019200&v=beta&t=Zh29e12DfuKkAuZLnMmgCaERQ0LpPlceYDQdWt9jIAw\"\n                            class=\"rounded-circle\">\n                    </div>\n\n                    <div class=\" modal-body\" style=\"background-color: darkgrey;\">\n                        <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n\n\n                            <div class=\"example-container\">\n                                <mat-form-field appearance=\"fill\">\n                                    <mat-label>Username</mat-label>\n                                    <input matInput type=\"text\" placeholder=\"abcd\" formControlName=\"username\">\n                                    <mat-error *ngIf=\"f.username.errors\" class=\"invalid-feedback\">Revisa tu\n                                        'username'\n                                    </mat-error>\n\n                                </mat-form-field>\n                            </div>\n\n                            <div class=\"example-container\">\n                                <mat-form-field appearance=\"fill\">\n                                    <mat-label>Password</mat-label>\n                                    <input matInput type=\"password\" placeholder=\"***\" formControlName=\"password\">\n                                    <mat-error *ngIf=\"f.password.errors\" class=\"invalid-feedback\">min 3 caracteres\n                                    </mat-error>\n                                </mat-form-field>\n                            </div>\n\n\n                            <div class=\"form-group form-check\">\n                                <label class=\"form-check-label\">\n                                    <input class=\"form-check-input\" type=\"checkbox\" name=\"remember\"> Recuerdame\n                                </label>\n                            </div>\n                            <button type=\"submit\" class=\"btn btn-primary\">Enviar</button>\n                        </form>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </nav>\n\n\n\n\n\n\n    <div>\n        <div class=\"menu\">\n\n            <div class=\"vertical-nav bg-white\" id=\"sidebar\" style=\"background-color: darkseagreen;\">\n                <!--  MENU NAVEGACION    -->\n                <ul class=\"navbar-nav mr-auto\" routerLinkActive=\"active\">\n\n                    <!--    -->\n\n                    <li class=\"nav-item\" style=\"margin-left: 10px;\">\n                        <a routerLink=\"usuarios\" class=\"btn btn-primary active\" *ngIf=\"isLoggedIn\"\n                            style=\"color: black; background-color:darkseagreen ;\" role=\"button\"\n                            routerLinkActive=\"active\">Listado & Gestion </a>\n                    </li>\n                    <li class=\"nav-item\" style=\"margin-left: 10px;\">\n                        <a routerLink=\"creacion\" class=\"btn btn-primary active\" *ngIf=\"isLoggedIn\"\n                            style=\"color: black; background-color:darkseagreen ;\" role=\"button\"\n                            routerLinkActive=\"active\">Registro\n                        </a>\n                    </li>\n                    <li class=\"nav-item\" style=\"margin-left: 10px;\">\n                        <a routerLink=\"creacionbeta\" class=\"btn btn-primary active\" *ngIf=\"isLoggedIn\"\n                            style=\"color: black; background-color:darkseagreen ;\" role=\"button\"\n                            routerLinkActive=\"active\">RegistroBeta!!\n                        </a>\n                    </li>\n\n\n\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class=\"main\">\n        <router-outlet></router-outlet>\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/crear-usuario/crear-usuario.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/crear-usuario/crear-usuario.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<hr>\n<h5>Formulario de registro</h5>\n<hr>\n\n\n<div [hidden]=\"submitted\" style=\"width: 300px;\">\n\n    <form (ngSubmit)=\"onSubmit()\" style=\"width: 400px; height: 100px;  \">\n\n\n        <div class=\"form-group\">\n\n            <label for=\"name\">Nombre</label>\n            <input type=\"text\" class=\"form-control\" id=\"nombre\" required [(ngModel)]=\"usuario.nombre\" name=\"nombre\"\n                style=\"width: 300px; \">\n\n        </div>\n\n\n\n        <div class=\"form-group\">\n            <label for=\"apellidos\">Apellidos</label>\n            <input type=\"text\" class=\"form-control\" id=\"apellidos\" required [(ngModel)]=\"usuario.apellidos\"\n                name=\"apellidos\" style=\"width: 300px; \">\n\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"name\">Email</label>\n            <input type=\"email\" class=\"form-control\" id=\"email\" required [(ngModel)]=\"usuario.email\" name=\"email\"\n                style=\"width: 300px; \">\n\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"edad\">Edad</label>\n            <input type=\"number\" class=\"form-control\" id=\"edad\" required [(ngModel)]=\"usuario.edad\" name=\"edad\"\n                style=\"width: 85px; \">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"activo\">Estado</label>\n            <input type=\"checkbox\" class=\"form-control\" id=\"activo\" required [(ngModel)]=\"usuario.activo\" name=\"activo\"\n                style=\"width: 25px; \">\n        </div>\n\n\n        <div class=\"form-group\">\n            <label for=\"username\"> username </label>\n            <input type=\"text\" class=\"form-control\" id=\"username\" required [(ngModel)]=\"usuario.username\"\n                name=\"username\" style=\"width: 85px; \">\n        </div>\n\n        <div>\n            <button type=\"submit\" class=\"btn btn-success\" style=\"width: 94px; height: 45px\">Enviar</button>\n        </div>\n\n    </form>\n\n    <div [hidden]=\"!submitted\">\n        <h3>Guardad con exito</h3>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/detalles-usuario/detalles-usuario.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detalles-usuario/detalles-usuario.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Informacion del usuario</h2> \n\n<hr/>\n<div *ngIf=\"usuario\">\n  <div>\n    <label><b>Nombre: </b></label> {{usuario.nombre}}\n  </div>\n  <div>\n    <label><b>Apellidos: </b></label> {{usuario.apellidos}}\n  </div>\n  <div>\n    <label><b>Email: </b></label> {{usuario.email}}\n  </div>  \n  <div>\n    <label><b>Edad: </b></label> {{usuario.edad}}\n  </div>  \n  <div>\n    <label><b>Estado: </b></label> {{usuario.activo}}\n  </div>  \n\n\n</div>\n\n<br>\n<br>\n<button (click)=\"list()\" class=\"btn btn-primary\">Regreso al Listado </button><br>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container>\r\n</ng-container>    \r\n\r\n<a>PAGE</a>\r\n\r\n\r\n\r\n\r\n\r\n\r\n    \r\n    <iframe style=\"border:2px solid #000; display: grid;\" src=\" \" \r\n    \r\n    width=\"100%\" height=\"700px\" scrolling=\"yes\">supported</iframe>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/lista-usuario/lista-usuario.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lista-usuario/lista-usuario.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel panel-primary\">\n  <div class=\"panel-heading\">\n\n    <h2>Lista de Usuarios</h2>\n\n  </div>\n  <div class=\"panel-body\">\n\n    <div id=\"borderDemo\">\n\n      <table class=\"table table-striped\">\n        <thead>\n          <tr>\n            <th>Nombre</th>\n            <th>Apellidos</th>\n            <th>Estado</th>\n            <th></th>\n            \n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let usuario of usuarios | async\">\n            <td>{{usuario.nombre}}</td>\n            <td>{{usuario.apellidos}}</td>\n            <td>{{usuario.activo}} </td>\n\n            <td>\n\n              <button (click)=\"usarioDetalles(usuario.username)\" class=\"btn\">\n                <img style=\"width: 100px;\"\n                  src=\"https://t3.ftcdn.net/jpg/00/25/91/34/240_F_25913480_iADFSb00chnZN4oyB7T6iiAtaFLVC2Dk.jpg\" alt=\"\"\n                  height=\"40\" />\n              </button>\n\n              <button (click)=\"deleteUsuario(usuario.username)\" class=\"btn\">\n                <img style=\"width: 30px;\"\n                  src=\"http://premium.wpmudev.org/blog/wp-content/uploads/2012/07/delete-big.jpg\" alt=\"10\"\n                  height=\"30\" /></button>\n\n\n\n\n\n            </td>\n\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n<div [style.display]=\"showModal ? 'block' : 'none'\" class=\"modal\" id=\"imagemodal\" tabindex=\"-1\" role=\"dialog\"\n    aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\" id=\"myModalLabel\">Login</h4>\n            </div>\n            <div class=\"modal-body\">\n                <form *ngIf=\"!isLoggedIn\" name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate\n                    style=\"align-items: center;\">\n\n\n                    <div class=\"form-group\">\n                        <label for=\"username\">Username</label>\n                        <input type=\"tel\" class=\"form-control\" name=\"username\" [(ngModel)]=\"form.username\" required\n                            #username=\"ngModel\" />\n                        <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"f.submitted && username.invalid\">\n                            Username es obligatorio!\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label>Password</label>\n\n                        <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"form.password\" required\n                            minlength=\"3\" #password=\"ngModel\" />\n\n                        <div *ngIf=\"f.submitted && password.invalid\" class=\"invalid-feedback\">\n                            <div *ngIf=\"password.errors.required\">Password is required</div>\n                            <div *ngIf=\"password.errors.minlength\">Password must be at least 3 characters</div>\n                        </div>\n                    </div>\n\n\n                    <div class=\"form-group form-check\">\n                        <label class=\"form-check-label\">\n                            <input class=\"form-check-input\" type=\"checkbox\" name=\"remember\"> Remember me\n                        </label>\n                    </div>\n\n\n                    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n                </form>\n            </div>\n\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-dark\" data-dismiss=\"modal\" (click)=\"hide()\">Close</button>\n\n            </div>\n        </div>\n    </div>\n</div>\n-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>profile works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/usuario-registro/usuario-registro.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/usuario-registro/usuario-registro.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/_helpers/auth.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/_helpers/auth.interceptor.ts ***!
  \**********************************************/
/*! exports provided: TOKEN_HEADER_KEY, InterceptorSkipHeader, AuthInterceptor, authInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_HEADER_KEY", function() { return TOKEN_HEADER_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptorSkipHeader", function() { return InterceptorSkipHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authInterceptorProviders", function() { return authInterceptorProviders; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/token-storage.service */ "./src/app/_services/token-storage.service.ts");




const TOKEN_HEADER_KEY = 'Authorization';
const InterceptorSkipHeader = 'X-Skip-Interceptor';
let AuthInterceptor = class AuthInterceptor {
    constructor(token) {
        this.token = token;
    }
    intercept(req, next) {
        let authReq = req;
        const token = this.token.getToken();
        if (token != null) {
            //provisional para evitar adding info
            //            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
            return next.handle(authReq);
        }
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"] }
];
AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], AuthInterceptor);

const authInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: AuthInterceptor, multi: true }
];


/***/ }),

/***/ "./src/app/_services/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const AUTH_API = 'http://localhost:8080/login'; // pending to custom and set proper uri up
const TOKEN_KEY = 'Authorization';
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }) //not used so far
};
let AuthService = class AuthService {
    constructor(handler) {
        this.handler = handler;
        this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"](handler);
    }
    loginb(credentials) {
        const postData = new FormData(); // use FormData for post username and password
        postData.append('username', credentials.username);
        postData.append('password', credentials.password);
        return this.httpClient.post(AUTH_API, postData);
        // continue - pending return bearer token !!!! to keep 
        // { headers: new HttpHeaders() });
    }
    loginC(credentials) {
        const headersIn = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json');
        const postData = new FormData(); // use FormData for post username and password
        postData.append('username', credentials.username);
        postData.append('password', credentials.password);
        return this.httpClient.post(AUTH_API, postData, { observe: 'response', responseType: 'json' });
    }
    /*
    ----------------------
    */
    login(credentials) {
        const postData = new FormData(); // use FormData for post username and password
        postData.append('username', credentials.username);
        postData.append('password', credentials.password);
        var options = {
            method: 'POST',
            url: 'http://192.168.1.10:8080/login',
            headers: {
                Host: '192.168.1.10:8080',
                Accept: '*/*',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            form: { username: 'jpb', password: '123' }
        };
        return this.httpClient.post(AUTH_API, options);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpBackend"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/_services/token-storage.service.ts":
/*!****************************************************!*\
  !*** ./src/app/_services/token-storage.service.ts ***!
  \****************************************************/
/*! exports provided: TokenStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorageService", function() { return TokenStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
let TokenStorageService = class TokenStorageService {
    constructor() { }
    signOut() {
        window.sessionStorage.clear();
    }
    saveToken(token) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    }
    getToken() {
        return sessionStorage.getItem(TOKEN_KEY);
    }
    saveUser(user) {
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    }
    getUser() {
        return JSON.parse(sessionStorage.getItem(USER_KEY));
    }
};
TokenStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TokenStorageService);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _lista_usuario_lista_usuario_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lista-usuario/lista-usuario.component */ "./src/app/lista-usuario/lista-usuario.component.ts");
/* harmony import */ var _detalles_usuario_detalles_usuario_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detalles-usuario/detalles-usuario.component */ "./src/app/detalles-usuario/detalles-usuario.component.ts");
/* harmony import */ var _crear_usuario_crear_usuario_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./crear-usuario/crear-usuario.component */ "./src/app/crear-usuario/crear-usuario.component.ts");
/* harmony import */ var _usuario_registro_usuario_registro_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usuario-registro/usuario-registro.component */ "./src/app/usuario-registro/usuario-registro.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");









const routes = [
    { path: '', redirectTo: 'homepage', pathMatch: 'full' },
    { path: 'homepage', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_8__["HomepageComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'usuarios', component: _lista_usuario_lista_usuario_component__WEBPACK_IMPORTED_MODULE_3__["ListaUsuarioComponent"] },
    { path: 'creacion', component: _crear_usuario_crear_usuario_component__WEBPACK_IMPORTED_MODULE_5__["CrearUsuarioComponent"] },
    { path: 'info/:username', component: _detalles_usuario_detalles_usuario_component__WEBPACK_IMPORTED_MODULE_4__["DetallesUsuarioComponent"] },
    { path: 'creacionbeta', component: _usuario_registro_usuario_registro_component__WEBPACK_IMPORTED_MODULE_6__["UsuarioRegistroComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
        declarations: []
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_services/token-storage.service */ "./src/app/_services/token-storage.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let AppComponent = class AppComponent {
    //Imported services for Login
    constructor(formBuilder, authService, tokenStorage, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.title = ' GESTION-USUARI@S';
        this.isLoggedIn = false;
        this.showUserStand = false;
        this.isLoginFailed = false;
        this.errorMessage = 'oh my god!!';
        this.submitted = false;
    }
    // SHOW LOGIN FORM POPUP (TRUE)
    show(id) {
        if (id == 'loginPopup') {
            this.showLogin = true; // Show-Hide Modal Check 
        }
        if (id == 'infoPopup') {
        }
    }
    // Bootstrap Modal Close event
    hide(id) {
        if (id == 'loginPopup') {
            this.showLogin = false;
        }
        if (id == 'infoPopup') {
            this.showInfo = false;
        }
    }
    ngOnInit() {
        // LOGIN FORM REFERENCES
        this.registerForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]]
        });
        this.isLoggedIn = !!this.tokenStorage.getToken();
        //STATUS LOGGEDIN REFERENCE FOR APP-ROOT
        if (this.isLoggedIn) {
            const user = this.tokenStorage.getUser();
            this.roles = user.roles;
            this.showUserStand = this.roles.includes('ROLE_USER');
            this.username = user.username;
        }
    }
    get f() { return this.registerForm.controls; }
    onSubmit() {
        console.log('onSubmit LOGIN');
        this.submitted = true;
        this.authService.loginC(this.registerForm.value)
            .subscribe(data => {
            this.tokenStorage.saveToken(data.token);
            this.tokenStorage.saveUser(data);
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getUser().roles;
            // this.reloadPage(); ver como hacer cuando isLoggedIn true
        }, err => {
            this.errorMessage = err.error.message;
            this.isLoginFailed = true;
        });
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        if (this.submitted) {
            this.showLogin = false;
        }
    }
    logout() {
        this.tokenStorage.signOut();
        /// pensar logout
        window.location.reload();
        this.router.navigate(['/homepage']);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _lista_usuario_lista_usuario_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lista-usuario/lista-usuario.component */ "./src/app/lista-usuario/lista-usuario.component.ts");
/* harmony import */ var _detalles_usuario_detalles_usuario_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detalles-usuario/detalles-usuario.component */ "./src/app/detalles-usuario/detalles-usuario.component.ts");
/* harmony import */ var _crear_usuario_crear_usuario_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./crear-usuario/crear-usuario.component */ "./src/app/crear-usuario/crear-usuario.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _usuario_registro_usuario_registro_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./usuario-registro/usuario-registro.component */ "./src/app/usuario-registro/usuario-registro.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_helpers/auth.interceptor */ "./src/app/_helpers/auth.interceptor.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");






















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _lista_usuario_lista_usuario_component__WEBPACK_IMPORTED_MODULE_5__["ListaUsuarioComponent"],
            _detalles_usuario_detalles_usuario_component__WEBPACK_IMPORTED_MODULE_6__["DetallesUsuarioComponent"],
            _crear_usuario_crear_usuario_component__WEBPACK_IMPORTED_MODULE_7__["CrearUsuarioComponent"],
            _usuario_registro_usuario_registro_component__WEBPACK_IMPORTED_MODULE_10__["UsuarioRegistroComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
            _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_13__["HomepageComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"]
        ],
        providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__["AuthInterceptor"], multi: true }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/crear-usuario/crear-usuario.component.css":
/*!***********************************************************!*\
  !*** ./src/app/crear-usuario/crear-usuario.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#borderDemo {\r\nborder: 5px outset rgba(58,164,152,0.79);\r\nborder-radius: 0px 25px 40px 26px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXItdXN1YXJpby9jcmVhci11c3VhcmlvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSx3Q0FBd0M7QUFDeEMsaUNBQWlDO0FBQ2pDIiwiZmlsZSI6InNyYy9hcHAvY3JlYXItdXN1YXJpby9jcmVhci11c3VhcmlvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYm9yZGVyRGVtbyB7XHJcbmJvcmRlcjogNXB4IG91dHNldCByZ2JhKDU4LDE2NCwxNTIsMC43OSk7XHJcbmJvcmRlci1yYWRpdXM6IDBweCAyNXB4IDQwcHggMjZweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/crear-usuario/crear-usuario.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/crear-usuario/crear-usuario.component.ts ***!
  \**********************************************************/
/*! exports provided: CrearUsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearUsuarioComponent", function() { return CrearUsuarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _usuario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../usuario */ "./src/app/usuario.ts");
/* harmony import */ var _usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../usuario.service */ "./src/app/usuario.service.ts");





let CrearUsuarioComponent = class CrearUsuarioComponent {
    constructor(usuarioService, router) {
        this.usuarioService = usuarioService;
        this.router = router;
        this.usuario = new _usuario__WEBPACK_IMPORTED_MODULE_3__["Usuario"]();
        this.submitted = false;
    }
    ngOnInit() {
    }
    nuevoUsuario() {
        this.submitted = false;
        this.usuario = new _usuario__WEBPACK_IMPORTED_MODULE_3__["Usuario"]();
    }
    save() {
        this.usuarioService.crearUsuario(this.usuario).subscribe(data => console.log(data), error => console.log(error));
        this.usuario = new _usuario__WEBPACK_IMPORTED_MODULE_3__["Usuario"]();
        this.gotoList();
    }
    onSubmit() {
        this.submitted = true;
        this.save();
    }
    gotoList() {
        // this.nuevoUsuario();  //no seguro que pasa , deberia fallar y devuelve lista
        this.router.navigate(['/usuarios']);
    }
};
CrearUsuarioComponent.ctorParameters = () => [
    { type: _usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CrearUsuarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-crear-usuario',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./crear-usuario.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/crear-usuario/crear-usuario.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./crear-usuario.component.css */ "./src/app/crear-usuario/crear-usuario.component.css")).default]
    })
], CrearUsuarioComponent);



/***/ }),

/***/ "./src/app/detalles-usuario/detalles-usuario.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/detalles-usuario/detalles-usuario.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFsbGVzLXVzdWFyaW8vZGV0YWxsZXMtdXN1YXJpby5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/detalles-usuario/detalles-usuario.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/detalles-usuario/detalles-usuario.component.ts ***!
  \****************************************************************/
/*! exports provided: DetallesUsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesUsuarioComponent", function() { return DetallesUsuarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _usuario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../usuario */ "./src/app/usuario.ts");
/* harmony import */ var _usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../usuario.service */ "./src/app/usuario.service.ts");





let DetallesUsuarioComponent = class DetallesUsuarioComponent {
    constructor(route, router, usuarioService) {
        this.route = route;
        this.router = router;
        this.usuarioService = usuarioService;
    }
    ngOnInit() {
        this.usuario = new _usuario__WEBPACK_IMPORTED_MODULE_3__["Usuario"]();
        this.username = this.route.snapshot.params['username'];
        this.usuarioService.getUsuario(this.username)
            .subscribe(data => {
            console.log(data);
            this.usuario = data;
        }, error => console.log(error));
    }
    list() {
        this.router.navigate(['usuarios']);
    }
};
DetallesUsuarioComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"] }
];
DetallesUsuarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detalles-usuario',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detalles-usuario.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/detalles-usuario/detalles-usuario.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detalles-usuario.component.css */ "./src/app/detalles-usuario/detalles-usuario.component.css")).default]
    })
], DetallesUsuarioComponent);



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html, body { height: 100%; width: 100%; }\r\nbody { \r\n    margin: 0; \r\n    font-family: 'Times New Roman', Times, serif;\r\n    display: grid;\r\n    justify-items: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    background-color: #3a3a3a;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhLFlBQVksRUFBRSxXQUFXLEVBQUU7QUFDeEM7SUFDSSxTQUFTO0lBQ1QsNENBQTRDO0lBQzVDLGFBQWE7SUFDYixxQkFBcUI7SUFDckIseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCwgYm9keSB7IGhlaWdodDogMTAwJTsgd2lkdGg6IDEwMCU7IH1cclxuYm9keSB7IFxyXG4gICAgbWFyZ2luOiAwOyBcclxuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2EzYTNhO1xyXG59Il19 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomepageComponent = class HomepageComponent {
};
HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-homepage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./homepage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")).default]
    })
], HomepageComponent);



/***/ }),

/***/ "./src/app/lista-usuario/lista-usuario.component.css":
/*!***********************************************************!*\
  !*** ./src/app/lista-usuario/lista-usuario.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#borderDemo {\r\nborder: 5px outset rgba(45,64,52,0.79);\r\nborder-radius: 0px 0px 15px 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdGEtdXN1YXJpby9saXN0YS11c3VhcmlvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxzQ0FBc0M7QUFDdEMsZ0NBQWdDO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvbGlzdGEtdXN1YXJpby9saXN0YS11c3VhcmlvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYm9yZGVyRGVtbyB7XHJcbmJvcmRlcjogNXB4IG91dHNldCByZ2JhKDQ1LDY0LDUyLDAuNzkpO1xyXG5ib3JkZXItcmFkaXVzOiAwcHggMHB4IDE1cHggMTVweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/lista-usuario/lista-usuario.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/lista-usuario/lista-usuario.component.ts ***!
  \**********************************************************/
/*! exports provided: ListaUsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaUsuarioComponent", function() { return ListaUsuarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../usuario.service */ "./src/app/usuario.service.ts");




let ListaUsuarioComponent = class ListaUsuarioComponent {
    constructor(usuarioService, router) {
        this.usuarioService = usuarioService;
        this.router = router;
    }
    ngOnInit() {
        // this.usuarioService.getUsuario.bind
        // (data => {
        //  this.usuario = data;
        // });
        this.reloadData(); // ok
    }
    reloadData() {
        return this.usuarios = this.usuarioService.getUsuariosList();
    }
    deleteUsuario(username) {
        this.usuarioService.deleteUsuario(username)
            .subscribe(data => {
            console.log(data);
            this.reloadData();
        }, error => console.log(error));
    }
    usarioDetalles(username) {
        this.router.navigate(['info/', username]);
    }
};
ListaUsuarioComponent.ctorParameters = () => [
    { type: _usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ListaUsuarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lista-usuario',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lista-usuario.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/lista-usuario/lista-usuario.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lista-usuario.component.css */ "./src/app/lista-usuario/lista-usuario.component.css")).default]
    })
], ListaUsuarioComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html, body { height: 100%; }\r\nbody { \r\n    margin: 0; \r\n    font-family: 'Times New Roman', Times, serif;\r\n    display: grid;\r\n    justify-items: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    background-color: #3a3a3a;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhLFlBQVksRUFBRTtBQUMzQjtJQUNJLFNBQVM7SUFDVCw0Q0FBNEM7SUFDNUMsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLCBib2R5IHsgaGVpZ2h0OiAxMDAlOyB9XHJcbmJvZHkgeyBcclxuICAgIG1hcmdpbjogMDsgXHJcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNhM2EzYTtcclxufSJdfQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/token-storage.service */ "./src/app/_services/token-storage.service.ts");




let LoginComponent = class LoginComponent {
    constructor(authService, tokenStorage) {
        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.form = {};
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = 'oh my god!!';
        this.roles = [];
    }
    ngOnInit() {
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true; //t cambiar a true
            this.roles = this.tokenStorage.getUser().roles;
        }
    }
    onSubmit() {
        this.authService.login(this.form).subscribe(data => {
            this.tokenStorage.saveToken(data.token);
            this.tokenStorage.saveUser(data);
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getUser().roles;
            this.reloadPage();
        }, err => {
            this.errorMessage = err.error.message;
            this.isLoginFailed = true;
        });
    }
    reloadPage() {
        window.location.reload();
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProfileComponent = class ProfileComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/usuario-registro/usuario-registro.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/usuario-registro/usuario-registro.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzdWFyaW8tcmVnaXN0cm8vdXN1YXJpby1yZWdpc3Ryby5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/usuario-registro/usuario-registro.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/usuario-registro/usuario-registro.component.ts ***!
  \****************************************************************/
/*! exports provided: UsuarioRegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioRegistroComponent", function() { return UsuarioRegistroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let UsuarioRegistroComponent = class UsuarioRegistroComponent {
    constructor(fb) {
        this.fb = fb;
        this.usuarioRegistro = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            userinfo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                apellidos: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                edad: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
            }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    ngOnInit() {
        // CONTINUAR AQUI!!!
    }
};
UsuarioRegistroComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
UsuarioRegistroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-usuario-registro',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./usuario-registro.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/usuario-registro/usuario-registro.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./usuario-registro.component.css */ "./src/app/usuario-registro/usuario-registro.component.css")).default]
    })
], UsuarioRegistroComponent);



/***/ }),

/***/ "./src/app/usuario.service.ts":
/*!************************************!*\
  !*** ./src/app/usuario.service.ts ***!
  \************************************/
/*! exports provided: UsuarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioService", function() { return UsuarioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let UsuarioService = class UsuarioService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080/manager-tool/users'; // provisional routing! to app1 
        // this.headers = new HttpHeaders({
        //   'Content-Type': 'application/json',
        //   'Content-Encoding': '',
        //   'Authorization': 'Basic' + btoa('jpb:123')
        // });
    }
    getUsuario(username) {
        return this.http.get(`${this.baseUrl}/${username}`, { responseType: 'text' });
        // return this.http.get(`${this.baseUrl}/${username}`, { headers: this.headers });
    }
    crearUsuario(usuario) {
        return this.http.post(this.baseUrl.concat('npsw'), usuario);
    }
    updateUsuario(username, value) {
        return this.http.put(`${this.baseUrl}/${username}`, value);
    }
    deleteUsuario(username) {
        return this.http.delete(`${this.baseUrl}/${username}`, { responseType: 'text' });
    }
    getUsuariosList() {
        // let headers = new HttpHeaders();
        // headers = headers.append('Authorization', 'Basic' + btoa('jpb:123'));//     pendiente revisar!!!!!
        // headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
        // return this.http.get(`${this.baseUrl}`, { headers: this.headers });
        return this.http.get(`${this.baseUrl}`, { responseType: 'json' });
    }
};
UsuarioService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UsuarioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], UsuarioService);



/***/ }),

/***/ "./src/app/usuario.ts":
/*!****************************!*\
  !*** ./src/app/usuario.ts ***!
  \****************************/
/*! exports provided: Usuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Usuario {
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jpb/angular-projects/UserManager-ClientSide_Local/UserManager-ClientSide/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map