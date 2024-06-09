import { Component, Input } from '@angular/core';
import { Pokemon, Pokemons } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-detalle-pokemon',
  templateUrl: './detalle-pokemon.component.html',
  styleUrls: ['./detalle-pokemon.component.css']
})
export class DetallePokemonComponent {
 @Input() pokemon? :Pokemons | undefined
 /**
 * Returns a CSS class based on the provided Pokémon type.
 * @param tipo The Pokémon type.
 * @returns The CSS class corresponding to the Pokémon type.
 */
getTipoClass(tipo: string): string {
  switch (tipo) {
    case 'water':
      return 'water';
    case 'fire':
      return 'fire';
    case 'grass':
      return 'grass';
    case 'electric':
      return 'electric';
    case 'ice':
      return 'ice';
    case 'fighting':
      return 'fighting';
    case 'poison':
      return 'poison';
    case 'flying':
      return 'flying';
    case 'ground':
      return 'ground';
    case 'rock':
      return 'rock';
    case 'bug':
      return 'bug';
    case 'ghost':
      return 'ghost';
    case 'steel':
      return 'steel';
    case 'dragon':
      return 'dragon';
    case 'dark':
      return 'dark';
    case 'fairy':
      return 'fairy';
    case 'normal':
      return 'normal';
    case 'psychic':
      return 'psychic';
    default:
      return '';
  }
}

}


