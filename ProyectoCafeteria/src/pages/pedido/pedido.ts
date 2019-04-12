import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
import { Producto } from '../../models/producto';
import { ClientePage } from '../cliente/cliente';
<<<<<<< HEAD
import { ListaHorasPage}  from '../lista-horas/lista-horas';
=======
>>>>>>> master

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
  Hora_Minima : Number;
  Hora_Maxima : Number;
  Minuto_Minimo : Number;
  Minuto_Maximo : Number;

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
<<<<<<< HEAD
    if(this.Hora_Minima == null || this.Minuto_Minimo == null || this.Hora_Maxima == null || this.Minuto_Maximo == null ){
      alert("Pon las horas bien")
    }
    else{
      this.navCtrl.push(ListaHorasPage, {Hora_m: this.Hora_Minima, Minuto_m: this.Minuto_Minimo, Hora_M: this.Hora_Maxima, Minuto_M: this.Minuto_Maximo});
    }
    
=======

>>>>>>> master
  }
  Cancelar(){
    this.navCtrl.push(ClientePage);
  }
}
