import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Usuario} from '../../models/usuario';
import { FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
import { RegistroPage } from '../registro/registro'; // Este es mi modal
import { ClientePage } from '../cliente/cliente';
import { CamareroPage } from '../camarero/camarero';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	
	public Email: string;
	public contr: string;
	public user : Usuario;
	listaUsuarios:any;
	constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public dbFirebase:FirebaseDbProvider) {
	}
	// Modal del registro
	async presentModal() {
	const modal = await this.modalCtrl.create({
	  component: RegistroPage,
	  componentProps: { value: 123 }
	});
	return await modal.present();
	}
	ionViewDidLoad() {
		console.log('ionViewDidLoad LoginPage');
	}
	abrirModal(){
		let modal = this.modalCtrl.create(RegistroPage); // Creo el modal con la página que he creado
		modal.present(); // COn esto lo mostraré por pantalla
	}

	// Inicio de sesión
	IrHome(){
		this.user  = {
			Correo: this.Email,
			contrasena: this.contr,
		}
		if(this.user.Correo == "camarero"){
			this.navCtrl.push(CamareroPage);
		}
		else{
			this.dbFirebase.Iniciodesesion(this.user).then((user)=>{});
		}
		
	}
}
