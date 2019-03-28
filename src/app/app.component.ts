import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



import { InicioPage} from '../pages/inicio/inicio';
// No hace falta importar aquí version e info


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = InicioPage; // Página por la que comenzará la app

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
