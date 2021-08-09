import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/bdz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: "Maestro Roshi",
    poder: 1000
  }

  constructor() {}

}
