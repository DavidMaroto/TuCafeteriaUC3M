import { Component , Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Coche,EstadoCoche} from './coche';// Aquí exportamos los métodos y atributos de la clase Coche.


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Venta de coches de segunda mano';
  public EstadoCoche:any = EstadoCoche;

  public coches:Array<Coche>=[  new Coche('renault','scenic',new Date(2007,10,1),new  Date(2018,3,1),5000,'',EstadoCoche.BUENO),new Coche('seat','ibiza',new Date(2003,4,12),new Date(2018,2,1),1200,'',EstadoCoche.BUENO),new Coche('renault','megane',new Date(2006,12,23),new Date(2018,2,1),3500,'',EstadoCoche.MALO),new Coche('tesla','model 3',new Date(2006,12,23),new Date(2018,2,1),4000,'',EstadoCoche.BUENO)];

  public filtro:string="";

  public Filtrar():Array<number>{
  	// FUnción que devuelve un número
  	var filtrado:Array<number>=[];
  	var indice:number=0;

  	for(var coche of this.coches){ // recorro el array de coches creado arriba
  		if(coche.marca.lastIndexOf(this.filtro, 0) == 0){
  			filtrado.push(indice);
  			indice=indice+1;
  		}
  	}
  	return filtrado;
  }

  public vender(id){
  	this.coches.splice(id,1);
  }

  public Rebajado(id){
  	this.coches[id].rebajar();
  }
 }
  

