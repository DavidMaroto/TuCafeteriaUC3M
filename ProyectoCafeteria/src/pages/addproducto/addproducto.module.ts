import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddProductoPage } from './addproducto';

@NgModule({
  declarations: [
    AddProductoPage,
  ],
  imports: [
    IonicPageModule.forChild(AddProductoPage),
  ],
})
export class AddProductoPageModule {}
