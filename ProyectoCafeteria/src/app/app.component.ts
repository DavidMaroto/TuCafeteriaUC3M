import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirebaseDbProvider} from '../providers/firebase-db/firebase-db';
import { ClientePage } from '../pages/cliente/cliente';



import { LoginPage} from '../pages/login/login';
// No hace falta importar aquí version e info


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage; // Página por la que comenzará la app

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private FrDB: FirebaseDbProvider) {
    platform.ready().then(() => {
      this.rootPage = LoginPage;
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      // Para iniciar sesión
      this.FrDB.sesion.subscribe(sesion=>{
        if(sesion){
          this.rootPage = ClientePage;
        }
        else{
          this.rootPage = LoginPage;
        }
      })

      //
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
