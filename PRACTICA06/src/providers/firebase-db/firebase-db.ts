//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{ AngularFireDatabase} from 'angularfire2/database';
import { Contact } from '../../models/contact.model';

/*
  Generated class for the FirebaseDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseDbProvider {

  /*constructor(public http: HttpClient) {
    console.log('Hello FirebaseDbProvider Provider');
  }*/
  constructor ( public afDB: AngularFireDatabase){
    console.log('Hello FirebaseDb');
  }

  private ContactRef = this.afDB.list<Contact>('contactos');
  // Añadimos las funciones que modificarán nuestra base de datos
  guardaContacto(contacto: Contact){
    if(contacto.nombre ==""){
      contacto.nombre = "Antonio";
    }
    return this.afDB.database.ref('contactos/'+ contacto.nombre).set(contacto);
  }

  borrarContacto(nombre){
    this.afDB.database.ref('contactos/'+ nombre).remove();
  }
  getContacto(){
    return this.ContactRef.valueChanges();
  }
}
