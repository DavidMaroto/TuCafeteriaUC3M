import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LlamadaPage } from './llamada';

@NgModule({
  declarations: [
    LlamadaPage,
  ],
  imports: [
    IonicPageModule.forChild(LlamadaPage),
  ],
})
export class LlamadaPageModule {}
