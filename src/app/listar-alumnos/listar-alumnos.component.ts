import { Component } from '@angular/core';
import { ServicioAlumnoService } from '../servicio-alumno.service';
import { ActivatedRoute } from '@angular/router';
import { alumno } from '../alumno_interfaz/alumno_interfaz';

@Component({
  selector: 'app-listar-alumnos',
  templateUrl: './listar-alumnos.component.html',
  styleUrls: ['./listar-alumnos.component.css']
})
export class ListarAlumnosComponent {
  id=0
  dni=""
  nombre=""
  horas_formacion=0
  listaAlum:alumno[]=[]
constructor(public miServicio:ServicioAlumnoService, public activatedRoute:ActivatedRoute){}
ngOnInit(){
  //data devuelve el array de alumnos envuelto en un observable, .subscribe lo desenvuelve
  this.miServicio.mostrarAlumnoServicio().subscribe(data=>{
    this.listaAlum=data
  })
}
}
