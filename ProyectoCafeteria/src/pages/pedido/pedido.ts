import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
import { Producto } from '../../models/producto';
import { ClientePage } from '../cliente/cliente';

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

  constructor(public navCtrl: NavController, public DBFB: FirebaseDbProvider, public navParams: NavParams) {
  }
  nombre: String;
  descripcion: String;
  disponibilidad: number;

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidoPage');
  }
  listaProductos:any;
  
  QuitarProducto(nombre){
    this.DBFB.borrarProducto(nombre);
    alert(nombre + "borrado");
  }
  ionViewDidEnter(){ // Si no comento esto da fallo de Object(...) is not a function
    this.DBFB.getProducto().subscribe(listaProductos=>{this.listaProductos=listaProductos;})
  }
  PedirProducto(plato : Producto){
    plato.Pedido = true;
    this.DBFB.guardaProducto(plato).then(res=>{alert(plato.Nombre)});
  }
  NoPedirProducto(plato : Producto){
    plato.Pedido = false;
    this.DBFB.guardaProducto(plato).then(res=>{alert(plato.Nombre)});
  }
  FijarHora(){

  }
  Cancelar(){
    this.navCtrl.push(ClientePage);
  }
}
