//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Usuario} from '../../models/usuario';
import { Producto } from '../../models/producto';



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
	constructor(public afDB:AngularFireDatabase, private AuthDB: AngularFireAuth) {
		console.log('Hello FirebaseDbProvider Provider');
	}
	private Carta = this.afDB.list<Producto>('productos');
	
	usuarioglobal: Usuario;

	// Para la gestión del menú
	guardaProducto(plato : Producto){
		return this.afDB.database.ref('productos/'+ plato.Nombre).set(plato);
	}
	borrarProducto(nombre){
    this.afDB.database.ref('productos/'+ nombre).remove();
  }
  getProducto(){
    return this.Carta.valueChanges();
	}
	

	// Para iniciar sesión
	guardaUsuario( usuario : Usuario){
		if(usuario.Correo == ""){
			usuario.Correo = "Antonio@gmail.com";
		}
		this.usuarioglobal = usuario;
		//return 
		this.AuthDB.auth.createUserWithEmailAndPassword(usuario.Correo, usuario.contrasena)
		.then((res)=>{this.EnviarCorreo(this.usuarioglobal)});
		//this.AuthDB.auth.sendPasswordResetEmail(usuario.Correo);
	}

	Iniciodesesion(usuario : Usuario){
		return this.AuthDB.auth.signInWithEmailAndPassword(usuario.Correo, usuario.contrasena)
		.then(usuario=>Promise.resolve(usuario))
		.catch(err => Promise.reject(err));
	}
	get sesion(){
		return this.AuthDB.authState;
	}

	Cerrarsesion(){
		this.AuthDB.auth.signOut().then(()=>{})
	}

	// Enviar correo de verificación
	EnviarCorreo(user : Usuario){
		this.AuthDB.auth.sendPasswordResetEmail(user.Correo);
	}
}
