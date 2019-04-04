import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaHorasPage } from './lista-horas';

@NgModule({
  declarations: [
    ListaHorasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaHorasPage),
  ],
})
export class ListaHorasPageModule {}
