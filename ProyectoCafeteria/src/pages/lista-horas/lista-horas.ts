import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListaHorasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-horas',
  templateUrl: 'lista-horas.html',
})
export class ListaHorasPage {

  public Hora_m: number;
  public Minuto_m: number ;
  public Hora_M:  number ;
  public Minuto_M:  number ;
  public Seleccion : string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.Hora_m = Number(navParams.get("Hora_m"));
    this.Minuto_m = Number(navParams.get("Minuto_m"));
    this.Hora_M = Number(navParams.get("Hora_M"));
    this.Minuto_M = Number(navParams.get("Minuto_M"));

    // Crear horas
    let minuto: number = Number(this.Minuto_m);
    for(var i = 0; i < 4; i++ ){
      let str = '';
      if(i == 0){
        str += this.Hora_m + ':' + minuto;
      }
      else{
        minuto +=10;
        if(minuto > 59){
          minuto -= 60;
          this.Hora_m += 1;
          str += this.Hora_m + ':' + minuto;
        }
        else{
          str += this.Hora_m + ':' + minuto;
        }
      }
      this.listado_horas.push(str);
    }
  }

  public listado_horas : Array<string> = [];
  public aux_horas;
  public aux_minutos;

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaHorasPage');
  }
  CogerHora(hora: string){
    alert(hora);
    this.Seleccion = hora;
  }
}
