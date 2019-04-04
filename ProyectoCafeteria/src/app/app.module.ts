import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// Base de datos
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FirebaseDbProvider } from '../providers/firebase-db/firebase-db';

// Lista de páginas

import { MyApp } from './app.component';
import { RegistroPage } from '../pages/registro/registro';
import { ClientePage } from '../pages/cliente/cliente';
import { LoginPage } from '../pages/login/login';
import { PedidoPage } from '../pages/pedido/pedido';
import { ListaHorasPage}  from '../pages/lista-horas/lista-horas';

export const fireBaseConfig={
  apiKey: "AIzaSyCRiaoQAmewFZ1W_327xh6oJJN8kWxhurs",
  authDomain: "proyecto-final-dsi.firebaseapp.com",
  databaseURL: "https://proyecto-final-dsi.firebaseio.com",
  projectId: "proyecto-final-dsi",
  storageBucket: "proyecto-final-dsi.appspot.com",
  messagingSenderId: "210020373029"
}

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegistroPage,
    ClientePage,
    PedidoPage,
    ListaHorasPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(fireBaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegistroPage,
    ClientePage,
    PedidoPage,
    ListaHorasPage,

  ],
  providers: [ // Para nuestros propios servicios
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseDbProvider,
  ]
})
export class AppModule {}
