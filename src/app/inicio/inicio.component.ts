import { Component } from '@angular/core';

@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html'
})
export class InicioComponent {
  
  public title:string;

  constructor() {
      this.title = "Bienvenido a Control de Empleados";
  }
}