
// Esto tal cual es lo que se crea al crear el proyecto, hay que añadir el import del módulo FormsModule, que es el que usaremos para los formularios 

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms'; // Este es el que hay que importar

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ // Aquí es donde añadimos los módulos
    BrowserModule,FormsModule, // Añadimos este módulo que es para formularios
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
