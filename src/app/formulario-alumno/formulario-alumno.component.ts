import { Component, OnInit } from '@angular/core';
import { alumno } from '../alumno_interfaz/alumno_interfaz';
import { FormControl, FormGroup } from '@angular/forms';
import { ServicioAlumnoService } from '../servicio-alumno.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.css']
})
export class FormularioAlumnoComponent implements OnInit {
  id:number
  dni:string
  nombre:string
  horas_formacion:number

constructor(public miServicio:ServicioAlumnoService, private router:Router,public activatedRoute: ActivatedRoute){
}
formulario:FormGroup= new FormGroup({
  id : new FormControl(0),
      dni : new FormControl(''),
      nombre : new FormControl(''),
      horas_formacion : new FormControl(0)
});
Alumno:alumno
ngOnInit(){
  
  //
 
  //Recoger parametro id
  this.activatedRoute.params.subscribe(data=>{
    this.id=data['id'];
    
    this.dni=this.miServicio.listaAlumnos[this.id -1].dni
    this.nombre=this.miServicio.listaAlumnos[this.id -1].nombre
    this.horas_formacion=this.miServicio.listaAlumnos[this.id -1].horas_formacion
    this.formulario=new FormGroup({
      id : new FormControl(this.id),
      dni : new FormControl(this.dni),
      nombre : new FormControl(this.nombre),
      horas_formacion : new FormControl(this.horas_formacion)
    });
  })
  //para saber si se ha pasado un id o no -> modificar o agregar
}
aceptarFormulario(){
  alert("El id recibido tras el subscribe es: " + this.id)
  if(this.id==undefined){
    alert("Entra en alta")
    let nuevo:alumno={id:this.formulario.value['id'], dni:this.formulario.value['dni'], nombre:this.formulario.value['nombre'], horas_formacion:this.formulario.value['horas_formacion']}
    this.miServicio.altaAlumnoServicio(nuevo)
    this.router.navigate([""]);
  }
  else{
    alert("Entra en modificar")
    this.miServicio.actualizaAlumnoServicio({id:this.formulario.value['id'], dni:this.formulario.value['dni'], nombre:this.formulario.value['nombre'], horas_formacion:this.formulario.value['horas_formacion']})
    this.router.navigate(["", this.id]);
  }
}
}
