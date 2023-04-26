import { Injectable } from '@angular/core';
import { alumno } from './alumno_interfaz/alumno_interfaz';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioAlumnoService {

  constructor() { }
  listaAlumnos:alumno[]=[
    {id:1, dni:'57389234P', nombre:'Raul', horas_formacion:50},
    {id:2, dni:'00000000T', nombre:'Juli', horas_formacion:15},
    {id:3, dni:'22223333H', nombre:'Jose', horas_formacion:26}
  ]
  
  // buscarAlumnoServicio(): Observable<alumno>{
  //   return 
  // }

  mostrarAlumnoServicio():Observable<alumno[]>{
    return of(this.listaAlumnos)
  }
  actualizaAlumnoServicio(alumnoObjeto:alumno){
    //buscar indice
    let elementIndex = this.listaAlumnos.findIndex((obj => obj.id == alumnoObjeto.id));
    //modificacion
    this.listaAlumnos[elementIndex].id = alumnoObjeto.id;
    this.listaAlumnos[elementIndex].dni = alumnoObjeto.dni;
    this.listaAlumnos[elementIndex].nombre = alumnoObjeto.nombre;
    this.listaAlumnos[elementIndex].horas_formacion = alumnoObjeto.horas_formacion;
    //console.log("After update: ", osArray[elementIndex]);
  }
  altaAlumnoServicio(alumnoObjeto:alumno){
      this.listaAlumnos.push(alumnoObjeto)
  }
}
