import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pokemon, Pokemons } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonsServiceService {
  private baseUrl = 'https://pokeapi.co/api/v2';
  private page: number = 1;
  private size: number = 3000;

  constructor(private http: HttpClient) {}

 /**
 * Retrieves a list of Pokémon from the API based on the current page and size settings.
 * @returns An observable containing an array of Pokémon.
 */
getAllPokem(): Observable<Pokemons[]> {
  const offset = this.size * (this.page - 1);
  return this.http.get<Pokemons[]>(`${this.baseUrl}/pokemon?limit=${this.size}&offset=${offset}`).pipe(
    map((resp: any) => this.transformSmallPokemon(resp))
  );
}

/**
 * Retrieves a Pokémon by its ID from the API.
 * @param id The ID of the Pokémon to retrieve.
 * @returns An observable containing the Pokémon data.
 */
getById(id: number): Observable<Pokemons> {
  return this.http.get<Pokemons>(`${this.baseUrl}/pokemon/${id}`);
}

/**
 * Transforms the API response into an array of Pokémon objects with simplified data.
 * Increments the page counter for pagination.
 * @param resp The API response containing Pokémon data.
 * @returns An array of Pokémon with simplified data.
 */
private transformSmallPokemon(resp: any): Pokemons[] {
  const pokemonList: Pokemons[] = resp.results.map((poke: any) => {
    const id = poke.url.split('/')[6];
    const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return {
      id,
      name: poke.name,
      pic: pic
    };
  });
  this.page++;
  return pokemonList;
}

}
