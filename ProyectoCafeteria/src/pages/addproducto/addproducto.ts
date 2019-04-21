import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
import {Usuario} from '../../models/usuario';
import { Producto} from '../../models/producto';
import {CamareroPage } from '../camarero/camarero';

/**
 * Generated class for the AddProductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addproducto',
  templateUrl: 'addproducto.html',
})
export class AddProductoPage {

	listaUsuarios: any;
	Nombre: string;
	Descripcion: string;
	Disponible: number;
	Imagen: string;
	Precio: number;
	constructor(public navCtrl: NavController, public navParams: NavParams, public dbFirebase:FirebaseDbProvider, public viewCtrl: ViewController) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad AddProductoPage');
	}
	
	Aceptar(){
		let InfoProducto : Producto = {
		  Nombre: this.Nombre,
		  Descripcion: this.Descripcion, 
		  Disponible: this.Disponible,
		  Imagen: '../../assets/imgs/' + this.Imagen + '.jpg',
		  Precio: this.Precio,
		  Pedido: false,
		  Hora: "",
		}
		this.dbFirebase.guardaProducto(InfoProducto).then(res=>{alert(InfoProducto.Nombre)});
		this.navCtrl.push(CamareroPage);
	}
}
