import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import {FirebaseDbProvider} from '../providers/firebase-db/firebase-db';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import{LibretaContactosPage} from '../pages/libreta-contactos/libreta-contactos';
import{AcercaDePage} from '../pages/acerca-de/acerca-de';
import{NuevoContactoPage} from '../pages/nuevo-contacto/nuevo-contacto';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ContactService} from '../services/contact.service'
import { Services } from '@angular/core/src/view';


export const fireBaseConfig={
  apiKey: "AIzaSyBWJtrfWoZPPR4jlgHfg2FywkajiWbDR5o",
  authDomain: "micropractica6-82952.firebaseapp.com",
  databaseURL: "https://micropractica6-82952.firebaseio.com",
  projectId: "micropractica6-82952",
  storageBucket: "micropractica6-82952.appspot.com",
  messagingSenderId: "1043291041191"
}
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LibretaContactosPage,
    AcercaDePage,
    NuevoContactoPage,
    

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(fireBaseConfig),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LibretaContactosPage,
    AcercaDePage,
    NuevoContactoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContactService,
    FirebaseDbProvider
  ]
})
export class AppModule {}
