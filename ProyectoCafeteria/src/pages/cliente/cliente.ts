import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
import { PedidoPage } from '../pedido/pedido';
import { Producto} from '../../models/producto';
//import {} from '../../assets/imgs/edu.jpg';
import { LoginPage } from '../login/login';
import { Usuario } from '../../models/usuario';
/**
 * Generated class for the ClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cliente',
  templateUrl: 'cliente.html',
})
export class ClientePage {

   
  constructor(public navCtrl: NavController, public navParams: NavParams, public FbDB: FirebaseDbProvider) {

  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientePage');
  }
  AnadirProducto(){
    let InfoProducto : Producto = {
      Nombre: "Plato combinado 3",
      Descripcion: "Rico rico", 
      Disponible: 1,
      Imagen: '../../assets/imgs/edu.jpg' ,
      Pedido: false,
    }
    this.FbDB.guardaProducto(InfoProducto).then(res=>{alert(InfoProducto.Nombre)});
  }
  // Menú de opciones
  Reserva(){
    this.navCtrl.push(PedidoPage);
  }
  // Cerrar sesión
  logout(){
    this.FbDB.Cerrarsesion();
  }
}
