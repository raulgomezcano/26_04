import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioAlumnoComponent } from './formulario-alumno/formulario-alumno.component';
import { ListarAlumnosComponent } from './listar-alumnos/listar-alumnos.component';

const routes: Routes = [
  {path:"", component:ListarAlumnosComponent,children:[
    {path:"formulario/:id",component:FormularioAlumnoComponent},
    {path:"alta",component:FormularioAlumnoComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
