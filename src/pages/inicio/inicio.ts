import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
//@Pipe
//@Directive
export class InicioPage {

  nombre: string;
  contrasenia: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

  irInfo(){
    this.navCtrl.push('InfoPage');
  }
  irVersion(){
    this.navCtrl.push('VersionPage');
  }
  irHomeCliente(){
    if(this.nombre == "Pepe"){ // Registro de un cliente
      if(this.contrasenia == "1234"){
        this.navCtrl.push('ClientePage');
      }
    }
    else{ // Registro de un camarero
      this.navCtrl.push('VersionPage');
    }
  }
  irHomeCamarero(){

  }
}
