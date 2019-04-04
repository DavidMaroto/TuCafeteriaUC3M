webpackJsonp([7],{

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_db_firebase_db__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cliente_cliente__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lista_horas_lista_horas__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PedidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PedidoPage = /** @class */ (function () {
    function PedidoPage(navCtrl, DBFB, navParams) {
        this.navCtrl = navCtrl;
        this.DBFB = DBFB;
        this.navParams = navParams;
    }
    PedidoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PedidoPage');
    };
    PedidoPage.prototype.QuitarProducto = function (nombre) {
        this.DBFB.borrarProducto(nombre);
        alert(nombre + "borrado");
    };
    PedidoPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.DBFB.getProducto().subscribe(function (listaProductos) { _this.listaProductos = listaProductos; });
    };
    PedidoPage.prototype.PedirProducto = function (plato) {
        plato.Pedido = true;
        this.DBFB.guardaProducto(plato).then(function (res) { alert(plato.Nombre); });
    };
    PedidoPage.prototype.NoPedirProducto = function (plato) {
        plato.Pedido = false;
        this.DBFB.guardaProducto(plato).then(function (res) { alert(plato.Nombre); });
    };
    PedidoPage.prototype.FijarHora = function () {
        if (this.Hora_Minima == null || this.Minuto_Minimo == null || this.Hora_Maxima == null || this.Minuto_Maximo == null) {
            alert("Pon las horas bien");
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__lista_horas_lista_horas__["a" /* ListaHorasPage */], { Hora_m: this.Hora_Minima, Minuto_m: this.Minuto_Minimo, Hora_M: this.Hora_Maxima, Minuto_M: this.Minuto_Maximo });
        }
    };
    PedidoPage.prototype.Cancelar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cliente_cliente__["a" /* ClientePage */]);
    };
    PedidoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pedido',template:/*ion-inline-start:"C:\Users\monte\OneDrive\Escritorio\IONIC\ProyectoCafeteria\src\pages\pedido\pedido.html"*/'<!--\n  Generated template for the PedidoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Pedido</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div id = "cabecera">\n      <img src = "../../assets/imgs/edu.jpg" alt = "#">\n    <p>Pedido</p>\n    </div>\n  <div id = "Carta" >\n    <div id="oferta" *ngFor = "let plato of listaProductos" >\n      <div *ngIf =\'plato.Disponible != 0\'> <!--Imprimo solo los disponibles-->\n        <div id = "fotito">\n            <img src = "{{plato.Imagen}}" alt = "#">\n        </div >\n        {{plato.Nombre}}\n        <br>\n        {{plato.Descripcion}}\n        <br>\n        <button ion-button small (click)="PedirProducto(plato)" > + </button>\n      </div>\n    </div>\n  </div>\n  <div id = "Pedido_a_realizar">\n   <div id="Resumen">\n      <div id="oferta" *ngFor = "let plato of listaProductos" >\n        <div *ngIf =\'plato.Pedido != false\'> <!--Imprimo solo los que el cliente ha pedido-->\n          <div id = "fotito">\n              <img src = "{{plato.Imagen}}" alt = "#">\n          </div >\n          {{plato.Nombre}}\n          <br>\n          {{plato.Descripcion}}\n          <br>\n          <button ion-button small (click)="NoPedirProducto(plato)" > - </button>\n        </div>\n      </div>\n   </div>\n   <div>\n     <input name = "hora mínima" size = 3% [(ngModel)]="Hora_Minima" type="text">:\n     <input name = "hora mínima" size = 3% [(ngModel)]="Minuto_Minimo" type="text">\n     <br>\n     <input name = "hora máxima" size = 3% [(ngModel)]="Hora_Maxima" type="text">:\n     <input name = "hora máxima" size = 3% [(ngModel)]="Minuto_Maximo" type="text">\n     <button ion-button small (click)="FijarHora()"> Fijar Hora</button>\n     <button ion-button small  (click)="Cancelar()"> Cancelar</button>\n   </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\monte\OneDrive\Escritorio\IONIC\ProyectoCafeteria\src\pages\pedido\pedido.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PedidoPage);
    return PedidoPage;
}());

//# sourceMappingURL=pedido.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaHorasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ListaHorasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListaHorasPage = /** @class */ (function () {
    function ListaHorasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.listado_horas = [];
        this.Hora_m = Number(navParams.get("Hora_m"));
        this.Minuto_m = Number(navParams.get("Minuto_m"));
        this.Hora_M = Number(navParams.get("Hora_M"));
        this.Minuto_M = Number(navParams.get("Minuto_M"));
        // Crear horas
        var minuto = Number(this.Minuto_m);
        for (var i = 0; i < 4; i++) {
            var str = '';
            if (i == 0) {
                str += this.Hora_m + ':' + minuto;
            }
            else {
                minuto += 10;
                if (minuto > 59) {
                    minuto -= 60;
                    this.Hora_m += 1;
                    str += this.Hora_m + ':' + minuto;
                }
                else {
                    str += this.Hora_m + ':' + minuto;
                }
            }
            this.listado_horas.push(str);
        }
    }
    ListaHorasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListaHorasPage');
    };
    ListaHorasPage.prototype.CogerHora = function (hora) {
        alert(hora);
        this.Seleccion = hora;
    };
    ListaHorasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lista-horas',template:/*ion-inline-start:"C:\Users\monte\OneDrive\Escritorio\IONIC\ProyectoCafeteria\src\pages\lista-horas\lista-horas.html"*/'<!--\n\n  Generated template for the ListaHorasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>ListaHoras</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list >\n\n    <ion-item *ngFor = "let hora of listado_horas">\n\n        <button ion-button (click)="CogerHora(hora)" >\n\n            {{hora}}\n\n        </button>\n\n    </ion-item>\n\n  </ion-list>\n\n  <input type = "text" size = 10% value="{{Seleccion}}">\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\monte\OneDrive\Escritorio\IONIC\ProyectoCafeteria\src\pages\lista-horas\lista-horas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListaHorasPage);
    return ListaHorasPage;
}());

//# sourceMappingURL=lista-horas.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_db_firebase_db__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registro_registro__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};



 // Este es mi modal
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, modalCtrl, dbFirebase) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.dbFirebase = dbFirebase;
    }
    // Modal del registro
    LoginPage.prototype.presentModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: __WEBPACK_IMPORTED_MODULE_3__registro_registro__["a" /* RegistroPage */],
                            componentProps: { value: 123 }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.abrirModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__registro_registro__["a" /* RegistroPage */]); // Creo el modal con la página que he creado
        modal.present(); // COn esto lo mostraré por pantalla
    };
    // Inicio de sesión
    LoginPage.prototype.IrHome = function () {
        this.user = {
            Correo: this.Email,
            contrasena: this.contr,
        };
        this.dbFirebase.Iniciodesesion(this.user).then(function (user) { });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\monte\OneDrive\Escritorio\IONIC\ProyectoCafeteria\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	\n	<div id = "formulario">\n		<h1> Iniciar sesión </h1>\n		<ion-label floating></ion-label>\n		<input type = "text"  name = "Email" [(ngModel)]="Email" placeholder= "Email">\n		<br>\n		<ion-label floating></ion-label>\n		<input type = "password" name = "Contrasenia" [(ngModel)]="contr" placeholder= "Contraseña">\n		<br>\n		<p (click)="abrirModal()"><a href="#"> ¿ No te has registrado aún ?</a></p>\n		<button ion-button (click)="IrHome()"> Empezar </button>\n	</div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\monte\OneDrive\Escritorio\IONIC\ProyectoCafeteria\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_db_firebase_db__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistroPage = /** @class */ (function () {
    function RegistroPage(navCtrl, navParams, dbFirebase, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbFirebase = dbFirebase;
        this.viewCtrl = viewCtrl;
    }
    RegistroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistroPage');
    };
    RegistroPage.prototype.cerrarModal = function () {
        var resultado = "Cerrado";
        this.viewCtrl.dismiss({ result: resultado });
    };
    RegistroPage.prototype.anadirUsuario = function () {
        var usuarioinfo = {
            Correo: this.Email,
            contrasena: this.contr,
        };
        this.dbFirebase.guardaUsuario(usuarioinfo);
        //.then(res=>{alert(usuarioinfo.Correo + " guardado en FB")});
    };
    RegistroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registro',template:/*ion-inline-start:"C:\Users\monte\OneDrive\Escritorio\IONIC\ProyectoCafeteria\src\pages\registro\registro.html"*/'<!--\n  Generated template for the RegistroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content padding>\n	<ion-card>\n		<ion-card-title>Registro</ion-card-title>\n		<ion-card-content padding>\n			<div id = "formulario">\n				<input type = "text"  name = "Nombre" [(ngModel)]="Email" placeholder = "Correo">\n				<br>\n				<input type = "password" name = "Contrasenia" [(ngModel)]="contr" placeholder= "Contraseña">\n				<br>\n			</div>\n			<button ion-button (click)="anadirUsuario()">Registrar</button>\n			<button ion-button (click)="cerrarModal()">Aceptar</button>\n		</ion-card-content>\n	</ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\monte\OneDrive\Escritorio\IONIC\ProyectoCafeteria\src\pages\registro\registro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
    ], RegistroPage);
    return RegistroPage;
}());

//# sourceMappingURL=registro.js.map

/***/ }),

/***/ 148:
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
webpackEmptyAsyncContext.id = 148;

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cliente/cliente.module": [
		442,
		6
	],
	"../pages/info/info.module": [
		443,
		1
	],
	"../pages/lista-horas/lista-horas.module": [
		444,
		5
	],
	"../pages/login/login.module": [
		445,
		4
	],
	"../pages/pedido/pedido.module": [
		446,
		3
	],
	"../pages/registro/registro.module": [
		447,
		2
	],
	"../pages/version/version.module": [
		448,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 191;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(305);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fireBaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_firebase_db_firebase_db__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_registro_registro__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_cliente_cliente__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_pedido_pedido__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_lista_horas_lista_horas__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Base de datos




// Lista de páginas






var fireBaseConfig = {
    apiKey: "AIzaSyCRiaoQAmewFZ1W_327xh6oJJN8kWxhurs",
    authDomain: "proyecto-final-dsi.firebaseapp.com",
    databaseURL: "https://proyecto-final-dsi.firebaseio.com",
    projectId: "proyecto-final-dsi",
    storageBucket: "proyecto-final-dsi.appspot.com",
    messagingSenderId: "210020373029"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_registro_registro__["a" /* RegistroPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_cliente_cliente__["a" /* ClientePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_pedido_pedido__["a" /* PedidoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_lista_horas_lista_horas__["a" /* ListaHorasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cliente/cliente.module#ClientePageModule', name: 'ClientePage', segment: 'cliente', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info/info.module#InfoPageModule', name: 'InfoPage', segment: 'info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lista-horas/lista-horas.module#ListaHorasPageModule', name: 'ListaHorasPage', segment: 'lista-horas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pedido/pedido.module#PedidoPageModule', name: 'PedidoPage', segment: 'pedido', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registro/registro.module#RegistroPageModule', name: 'RegistroPage', segment: 'registro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/version/version.module#VersionPageModule', name: 'VersionPage', segment: 'version', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(fireBaseConfig),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["b" /* AngularFireAuthModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_registro_registro__["a" /* RegistroPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_cliente_cliente__["a" /* ClientePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_pedido_pedido__["a" /* PedidoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_lista_horas_lista_horas__["a" /* ListaHorasPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseDbProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(240);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HttpClient } from '@angular/common/http';



/*
  Generated class for the FirebaseDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FirebaseDbProvider = /** @class */ (function () {
    /*constructor(public http: HttpClient) {
      console.log('Hello FirebaseDbProvider Provider');
    }*/
    function FirebaseDbProvider(afDB, AuthDB) {
        this.afDB = afDB;
        this.AuthDB = AuthDB;
        this.Carta = this.afDB.list('productos');
        console.log('Hello FirebaseDbProvider Provider');
    }
    // Para la gestión del menú
    FirebaseDbProvider.prototype.guardaProducto = function (plato) {
        return this.afDB.database.ref('productos/' + plato.Nombre).set(plato);
    };
    FirebaseDbProvider.prototype.borrarProducto = function (nombre) {
        this.afDB.database.ref('productos/' + nombre).remove();
    };
    FirebaseDbProvider.prototype.getProducto = function () {
        return this.Carta.valueChanges();
    };
    // Para iniciar sesión
    FirebaseDbProvider.prototype.guardaUsuario = function (usuario) {
        var _this = this;
        if (usuario.Correo == "") {
            usuario.Correo = "Antonio@gmail.com";
        }
        this.usuarioglobal = usuario;
        //return 
        this.AuthDB.auth.createUserWithEmailAndPassword(usuario.Correo, usuario.contrasena)
            .then(function (res) { _this.EnviarCorreo(_this.usuarioglobal); });
        //this.AuthDB.auth.sendPasswordResetEmail(usuario.Correo);
    };
    FirebaseDbProvider.prototype.Iniciodesesion = function (usuario) {
        return this.AuthDB.auth.signInWithEmailAndPassword(usuario.Correo, usuario.contrasena)
            .then(function (usuario) { return Promise.resolve(usuario); })
            .catch(function (err) { return Promise.reject(err); });
    };
    Object.defineProperty(FirebaseDbProvider.prototype, "sesion", {
        get: function () {
            return this.AuthDB.authState;
        },
        enumerable: true,
        configurable: true
    });
    FirebaseDbProvider.prototype.Cerrarsesion = function () {
        this.AuthDB.auth.signOut().then(function () { });
    };
    // Enviar correo de verificación
    FirebaseDbProvider.prototype.EnviarCorreo = function (user) {
        this.AuthDB.auth.sendPasswordResetEmail(user.Correo);
    };
    FirebaseDbProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], FirebaseDbProvider);
    return FirebaseDbProvider;
}());

//# sourceMappingURL=firebase-db.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebase_db_firebase_db__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_cliente_cliente__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// No hace falta importar aquí version e info
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, FrDB) {
        var _this = this;
        this.FrDB = FrDB;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]; // Página por la que comenzará la app
        platform.ready().then(function () {
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            // Para iniciar sesión
            _this.FrDB.sesion.subscribe(function (sesion) {
                if (sesion) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_cliente_cliente__["a" /* ClientePage */];
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
                }
            });
            //
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\monte\OneDrive\Escritorio\IONIC\ProyectoCafeteria\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\monte\OneDrive\Escritorio\IONIC\ProyectoCafeteria\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_db_firebase_db__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pedido_pedido__ = __webpack_require__(134);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClientePage = /** @class */ (function () {
    function ClientePage(navCtrl, navParams, FbDB) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.FbDB = FbDB;
    }
    ClientePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClientePage');
    };
    ClientePage.prototype.AnadirProducto = function () {
        var InfoProducto = {
            Nombre: "Plato combinado 3",
            Descripcion: "Rico rico",
            Disponible: 1,
            Imagen: '../../assets/imgs/edu.jpg',
            Pedido: false,
        };
        this.FbDB.guardaProducto(InfoProducto).then(function (res) { alert(InfoProducto.Nombre); });
    };
    // Menú de opciones
    ClientePage.prototype.Reserva = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pedido_pedido__["a" /* PedidoPage */]);
    };
    // Cerrar sesión
    ClientePage.prototype.logout = function () {
        this.FbDB.Cerrarsesion();
    };
    ClientePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cliente',template:/*ion-inline-start:"C:\Users\monte\OneDrive\Escritorio\IONIC\ProyectoCafeteria\src\pages\cliente\cliente.html"*/'<!--\n  Generated template for the ClientePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>PÁGINA PRINCIPAL</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<!--Cabecera-->\n	<h1>{{Nombre}}</h1>\n	<div id="body">\n		<div id = "cabecera">\n			<img src = "../../assets/imgs/edu.jpg" alt = "#">\n			\n			<button ion-button  >\n				<ion-icon name = "cog"> Ajustes</ion-icon>\n			</button>\n		</div>\n		<!--Menú de opciones-->\n		<div id = "Menu">\n			<ion-list>\n				<ion-item>\n					<button ion-button small >\n						<ion-icon name = "cog"> Guía</ion-icon>\n					</button>\n				</ion-item>\n				<ion-item >\n					<button ion-button small >\n						<ion-icon name = "cog"> Carta</ion-icon>\n					</button>\n				</ion-item>\n				<ion-item>\n					<button ion-button small (click)="Reserva()" >\n						<ion-icon name = "cog"> Reserva</ion-icon>\n					</button>\n				</ion-item>\n				<ion-item>\n					<button ion-button small >\n						<ion-icon name = "cog"> Información</ion-icon>\n					</button>\n				</ion-item>\n				<ion-item>\n					<button ion-button small >\n						<ion-icon name = "cog"> Cafeterías</ion-icon>\n					</button>\n				</ion-item>\n				<ion-item>\n					<button ion-button small (click)="AnadirProducto()">\n						<ion-icon name = "cog"> Añadir a la carta</ion-icon>\n					</button>\n				</ion-item>\n			</ion-list>\n		</div>\n		<!--Sección de pedidos actuales y extraviados-->\n		<div id = "Pedido_actual">\n			<p>Información del pedido actual</p>\n		</div>\n		<div id = "Pedidos_otros">\n			<p>Información de pedidos preparados para coger y pagar</p>\n		</div>\n		\n		<button ion-button (click)="logout()">Cerrar Sesión</button>	\n	</div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\monte\OneDrive\Escritorio\IONIC\ProyectoCafeteria\src\pages\cliente\cliente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */]])
    ], ClientePage);
    return ClientePage;
}());

//# sourceMappingURL=cliente.js.map

/***/ })

},[285]);
//# sourceMappingURL=main.js.map