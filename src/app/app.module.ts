import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioAlumnoComponent } from './formulario-alumno/formulario-alumno.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarAlumnosComponent } from './listar-alumnos/listar-alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioAlumnoComponent,
    ListarAlumnosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
