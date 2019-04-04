import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
import {Usuario} from '../../models/usuario';
/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

	listaUsuarios: any;
	Email: string;
	contr: string;
	constructor(public navCtrl: NavController, public navParams: NavParams, public dbFirebase:FirebaseDbProvider, public viewCtrl: ViewController) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad RegistroPage');
	}
	
	cerrarModal(){
		let resultado = "Cerrado";
		this.viewCtrl.dismiss({result: resultado});
	}
	anadirUsuario(){
		let usuarioinfo: Usuario = {
			Correo : this.Email,
			contrasena : this.contr,
		};
		this.dbFirebase.guardaUsuario(usuarioinfo);
		//.then(res=>{alert(usuarioinfo.Correo + " guardado en FB")});
	}
}
