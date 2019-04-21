import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
import { PedidoPage } from '../pedido/pedido';
import { Producto} from '../../models/producto';
//import {} from '../../assets/imgs/edu.jpg';
import { LoginPage } from '../login/login';
import { LocalNotifications} from '@ionic-native/local-notifications/ngx';
import { Usuario } from '../../models/usuario';
/**
 * Generated class for the CamareroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-camarero',
  templateUrl: 'camarero.html',
})
export class CamareroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public DBFB: FirebaseDbProvider, private localNotifications: LocalNotifications) {

  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad CamareroPage');
  }
  AnadirProducto(){
    let InfoProducto : Producto = {
      Nombre: "Plato combinado 4",
      Descripcion: "Rico rico", 
      Disponible: 1,
      Imagen: '../../assets/imgs/edu.jpg' ,
      Pedido: false,
    }
    this.DBFB.guardaProducto(InfoProducto).then(res=>{alert(InfoProducto.Nombre)});
  }
  listaProductos : any;
  ionViewDidEnter(){ // Si no comento esto da fallo de Object(...) is not a function
    this.DBFB.getProducto().subscribe(listaProductos=>{this.listaProductos=listaProductos;})
  }
  // Menú de opciones
  Reserva(){
    this.navCtrl.push(PedidoPage);
  }
  // Cerrar sesión
  logout(){
    this.navCtrl.push(LoginPage);
  }
  aceptar(){
	alert("pedido aceptado");
  }
  
}
