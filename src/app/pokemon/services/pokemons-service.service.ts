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

  getAllPokem(): Observable<Pokemons[]> {
    const offset = this.size * (this.page - 1);
    return this.http.get<Pokemons[]>(`${this.baseUrl}/pokemon?limit=${this.size}&offset=${offset}`).pipe(
      map((resp: any) => this.transformSmallPokemon(resp))
    );
  }
  getById(id: number): Observable<Pokemons> {
    return this.http.get<Pokemons>(`${this.baseUrl}/pokemon/${id}`);
  }


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
