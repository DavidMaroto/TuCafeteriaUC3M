import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Contact} from '../../models/contact.model';
import { FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public dbFirebase: FirebaseDbProvider) {

  }
  listaContactos:any;
  addContacto(){
    let infoContacto : Contact = {
      nombre: "Antonio",
      movil: "66666666666",
      organizacion: "Pepephone",
      correo: "textodeejemplo@gmail.com",
    }
    this.dbFirebase.guardaContacto(infoContacto).then(res=>{alert(infoContacto.nombre)});
  }
  deleteContacto(nombre){
    this.dbFirebase.borrarContacto(nombre);
    alert(nombre + "borrado");
  }
  /*ionViewDidEnter(){ // Si no comento esto da fallo de Object(...) is not a function
    this.dbFirebase.getContacto().subscribe(listaContactos=>{this.listaContactos=this.listaContactos;})
  }*/
}
