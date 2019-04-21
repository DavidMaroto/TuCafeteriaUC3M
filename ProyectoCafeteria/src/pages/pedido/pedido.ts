import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
import { Producto } from '../../models/producto';
import { ClientePage } from '../cliente/cliente';
import { ListaHorasPage}  from '../lista-horas/lista-horas';

/**
 * Generated class for the PedidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pedido',
  templateUrl: 'pedido.html',
})
export class PedidoPage {
  
// Variables de 
  Hora_Minima : number;
  Hora_Maxima : number;
  Minuto_Minimo : number;
  Minuto_Maximo : number;
  constructor(public navCtrl: NavController, public DBFB: FirebaseDbProvider, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidoPage');
  }
  listaProductos: any;
  
  QuitarProducto(nombre){
    this.DBFB.borrarProducto(nombre);
    alert(nombre + "borrado");
  }
  ionViewDidEnter(){ 
    this.DBFB.getProducto().subscribe(listaProductos=>{this.listaProductos=listaProductos;})
  }
  PedirProducto(plato : Producto){
    plato.Pedido = true;
    this.DBFB.guardaProducto(plato);//.then(res=>{alert(plato.Nombre)});
  }
  NoPedirProducto(plato : Producto){
    plato.Pedido = false;
    this.DBFB.guardaProducto(plato);//.then(res=>{alert(plato.Nombre)});
  }
  FijarHora(){
    var today = new Date();
	 var datetime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), this.Hora_Minima);
	 today.setMinutes( today.getMinutes() + 20);
    if(this.Hora_Minima == null || this.Minuto_Minimo == null || this.Hora_Maxima == null || this.Minuto_Maximo == null || this.Hora_Maxima > 16 || this.Hora_Minima <= 8 || this.Minuto_Maximo > 59 || this.Minuto_Minimo < 0 ){
      alert("Pon las horas bien")
    }
	else if ( datetime < today){
	  alert("Tienes que dejarnos al menos 20 minutos de margen")
	}
    else{
      this.navCtrl.push(ListaHorasPage, {Hora_m: this.Hora_Minima, Minuto_m: this.Minuto_Minimo, Hora_M: this.Hora_Maxima, Minuto_M: this.Minuto_Maximo});
    }
  }
  Cancelar(){
	for (let plato of this.listaProductos){
		alert(plato.Nombre);
		plato.Pedido=false;
		this.DBFB.guardaProducto(plato);
    }
    this.navCtrl.push(ClientePage);
  }
}
