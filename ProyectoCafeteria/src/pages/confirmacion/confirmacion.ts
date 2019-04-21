import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
import { Producto } from '../../models/producto';
import { ClientePage } from '../cliente/cliente';
import { PedidoPage } from '../pedido/pedido';

/**
 * Generated class for the ConfirmacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirmacion',
  templateUrl: 'confirmacion.html',
})
export class ConfirmacionPage {

  Seleccion : string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public DBFB: FirebaseDbProvider) {
    this.Seleccion = navParams.get("Hora_Final");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmacionPage');
  }

  listaProductos : any;
  ionViewDidEnter(){ // Si no comento esto da fallo de Object(...) is not a function
    this.DBFB.getProducto().subscribe(listaProductos=>{this.listaProductos=listaProductos;})
  }
  Confirmar(){
	for (let i of this.listaProductos){
		if(i.Pedido==true){
			i.Hora=this.Seleccion;
			this.DBFB.guardaProducto(i);
		}
	}
    this.navCtrl.push(ClientePage);
  }
  Cancelar(){
    this.navCtrl.push(PedidoPage);
  }
}
