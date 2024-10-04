import { Component } from '@angular/core';
import { Alumno } from './models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  inputType= 'password';

  mostrarParrafo = true;

  title = 'clase-04-interpolacion-directivas';
  frutas= ['Pera', 'Manzana', 'Durazno'];
  persona= {
    nombre: 'Rodrigo',
    apellido: 'Riveros',
  }

  inputValor = 'Valor por defecto';

  price = 9999;

  today = new Date();

  alumnos: Alumno[] = [
    {
      nombre: 'Naruto',
      estaAprobado: false,
    },
    {
      nombre: 'Sasuke',
      estaAprobado: true,
    },
    {
      nombre: 'Sakura',
      estaAprobado: true,
    },
  ];

  estadoCompra: 'PENDIENTE' | 'APROBADA' | 'ENTREGADA' = 'ENTREGADA';

  mostrarInputType(): void{
    if(this.inputType === 'password'){
      this.inputType = 'text';
    } 
  }
  ocultarInputType(): void{
    if(this.inputType === 'text'){
      this.inputType = 'password';
    } 
  }
}
