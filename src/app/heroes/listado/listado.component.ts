import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes:string[] = ['Spiderman','Ironman','Hulk','Thor'];
  borrados:string[] = [];

  borrarHeroe() {
    console.log("Borrando...")
    //this.borrados.push( )
    if (this.heroes.length > 0){
      let borrado:string = this.heroes.shift() || ""
      this.borrados.push( borrado )
    }  
  }
}

