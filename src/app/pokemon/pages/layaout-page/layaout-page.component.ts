import { Component, OnInit } from '@angular/core';
import { Pokemons } from '../../interfaces/pokemon.interface';
import { PokemonsServiceService } from '../../services/pokemons-service.service';

@Component({
  selector: 'app-layaout-page',
  templateUrl: './layaout-page.component.html',
  styleUrls: ['./layaout-page.component.css']
})
export class LayaoutPageComponent implements OnInit {
  pokemons: Pokemons[] = [];
  pages: number = 1;
  size: number = 40;
  isLoading: boolean = false;
  selectedPokemon?: Pokemons;
  filteredPokemons: Pokemons[] = []; // Array de Pokémon filtrado
  searchTerm: string = ''; // Término de búsqueda


  constructor(private pokemonservice: PokemonsServiceService) {}

  ngOnInit(): void {
    // Cargar los Pokémon al iniciar
    this.loadPokemons();
  }

  /**
   * Loads more Pokémon data if not already loading.
   */
  loadPokemons(): void {
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;
    this.pokemonservice.getAllPokem().subscribe(resp => {
      this.pokemons = [...this.pokemons, ...resp];
      this.isLoading = false;
    }, () => {
      this.isLoading = false;
    });
  }

  /**
   * Handles the scroll event to load more Pokémon data.
   */
  onScroll(): void {
    this.loadPokemons();
  }

  /**
   * Retrieves and sets the selected Pokémon when a card is clicked.
   * @param id The ID of the selected Pokémon.
   */
  tarjetaClickeada(id: number) {
    this.pokemonservice.getById(id).subscribe(pokemon => {
      this.selectedPokemon = pokemon;
    });
  }

  /**
   * Filters the list of Pokémon based on the search term.
   */
  applyFilter() {
    if (this.searchTerm) {
      this.filteredPokemons = this.pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredPokemons = this.pokemons;
    }
  }

}
