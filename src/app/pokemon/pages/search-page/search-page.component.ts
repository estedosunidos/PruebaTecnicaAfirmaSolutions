import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Pokemons } from '../../interfaces/pokemon.interface';
import { PokemonsServiceService } from '../../services/pokemons-service.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  @Input() pokemon: Pokemons | undefined;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
