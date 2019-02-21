// Este archivo implementa la lógica de la aplicación. Aquí pondremos nuestras variables

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Micropráctica-1';

  // Nuestras variables, que las usaremos en el html

  private menu:Array<[string,number,number]>=[["Big Mac", 4.50 , 508],["Cuarto de libra", 3.0 , 536 ],["Big Big Mac",6.50, 742]];
  public codProducto = -1;
  public Cuenta:number=0.0;
  public Kcal:number = 0.0;
  public lineas:Array<[string,number,number]>=[];

  // Métodos que usaremos
  public addLinea(){ // Añadimos tapa con precio en la parte de abajo y calculamos el total

  	var tapa=this.menu[this.codProducto][0]; // Cojo el nombre del plato
  	var precio:number=this.menu[this.codProducto][1]; // Cojo el precio del plato
	  var cal:number=this.menu[this.codProducto][2];
  	this.lineas.push([tapa,precio,cal]); // Hago la lista que se mostrará al hacer click en el cuadrado de consumiciones
  	this.Cuenta=this.Cuenta+precio;
	  this.Kcal= this.Kcal+cal;

  }

  public delLinea(i){ // Añadimos la funcionalidad de borrar una tapa

  	this.Cuenta-=this.lineas[i][1];
	  this.Kcal-=this.lineas[i][2]
  	this.lineas.splice(i,1); // ¿ Qué hace splice?
  }

  // Ahora tenemos métodos y variables que usaremos para nuestro prototipo, es hora de ponerlos en el app.component.html
}
