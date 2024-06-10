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
  pagina: number = 1;
  size: number = 40;
  isLoading: boolean = false;
  selectedPokemon?: Pokemons;

  constructor(private pokemonservice: PokemonsServiceService) {}

  ngOnInit(): void {
    this.loadPokemons();
  }

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


  tarjetaClickeada(e: number) {
    console.log(e)
    this.pokemonservice.getById(e).subscribe(pokemon => {
      this.selectedPokemon = pokemon;
       console.log(this.selectedPokemon)
     });
  }
}
