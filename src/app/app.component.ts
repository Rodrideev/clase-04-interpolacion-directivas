import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  inputType= 'password';

  title = 'clase-04-interpolacion-directivas';
  frutas= ['Pera', 'Manzana', 'Durazno'];
  persona= {
    nombre: 'Rodrigo',
    apellido: 'Riveros',
  }

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
