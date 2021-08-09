import { Component } from '@angular/core';
import { BdzService } from '../services/bdz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  //@Input() personajes: Personaje[] = []

  get personajes() {
    return this.BdzService.personajes;
  }

  constructor( private BdzService: BdzService ){}
}
