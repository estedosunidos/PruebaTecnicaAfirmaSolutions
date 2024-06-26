import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemons } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-tarjetas-pokemon',
  templateUrl: './tarjetas-pokemon.component.html',
  styleUrls: ['./tarjetas-pokemon.component.css']
})
export class TarjetasPokemonComponent {
 @Input()data?:Pokemons
 @Input() seleccionado:boolean = false
 @Output() clickeado = new EventEmitter<number>();

/**
 * Emits an event with the ID of the clicked item.
 * If the ID is not defined in the data or is 0, an error is logged.
 */
emitirEvento(): void {
  if (this.data && this.data.id) {
    this.clickeado.emit(this.data.id);
  } else {
    console.error('El ID no está definido en los datos o es 0');
  }
}
}
