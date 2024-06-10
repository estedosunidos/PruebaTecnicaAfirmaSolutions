import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { LayaoutPageComponent } from './layaout-page.component';
import { PokemonsServiceService } from '../../services/pokemons-service.service';
import { Pokemons } from '../../interfaces/pokemon.interface';
import { MatSidenavContent, MatSidenavModule } from '@angular/material/sidenav';
import { DetallePokemonComponent } from '../detalle-pokemon/detalle-pokemon.component';
import { HttpClientModule } from '@angular/common/http';

describe('LayaoutPageComponent', () => {
  let component: LayaoutPageComponent;
  let fixture: ComponentFixture<LayaoutPageComponent>;
  let pokemonService: jest.Mocked<PokemonsServiceService>;

  beforeEach(async () => {
    const pokemonServiceMock = {
      getAllPokem: jest.fn(),
      getById: jest.fn(),
    };

    await TestBed.configureTestingModule({
      declarations: [LayaoutPageComponent, DetallePokemonComponent],
      imports: [MatSidenavModule,HttpClientModule],
      providers: [
        { provide: PokemonsServiceService, useValue: pokemonServiceMock }
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(LayaoutPageComponent);
    component = fixture.componentInstance;
    pokemonService = TestBed.inject(PokemonsServiceService) as jest.Mocked<PokemonsServiceService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not load pokemons if already loading', () => {
    component.isLoading = true;

    component.loadPokemons();

    expect(pokemonService.getAllPokem).not.toHaveBeenCalled();
  });

  it('should load pokemons successfully', () => {
    const mockPokemons: Pokemons[] = [
      {
        id: 1,
        name: 'Bulbasaur',
        abilities: [],
        base_experience: 0,
        forms: [],
        game_indices: [],
        height: 0,
        held_items: [],
        is_default: false,
        location_area_encounters: '',
        moves: [],
        order: 0,
        past_types: [],
        pic: '',
        species: undefined,
        sprites: undefined,
        stats: [],
        types: [],
        weight: 0
      },
      {
        id: 2,
        name: 'Ivysaur',
        abilities: [],
        base_experience: 0,
        forms: [],
        game_indices: [],
        height: 0,
        held_items: [],
        is_default: false,
        location_area_encounters: '',
        moves: [],
        order: 0,
        past_types: [],
        pic: '',
        species: undefined,
        sprites: undefined,
        stats: [],
        types: [],
        weight: 0
      }
    ];
    pokemonService.getAllPokem.mockReturnValue(of(mockPokemons));

    component.loadPokemons();

    expect(component.isLoading).toBe(true);
    expect(pokemonService.getAllPokem).toHaveBeenCalled();

    fixture.detectChanges();

    expect(component.pokemons).toEqual(mockPokemons);
    expect(component.isLoading).toBe(true);
  });

  it('should handle error when loading pokemons', () => {
    pokemonService.getAllPokem.mockReturnValue(throwError(() => new Error('Error')));

    component.loadPokemons();

    expect(component.isLoading).toBe(true);
    expect(pokemonService.getAllPokem).toHaveBeenCalled();

    fixture.detectChanges();

    expect(component.isLoading).toBe(true);
  });

  it('should select a pokemon successfully', () => {
    const mockPokemon: Pokemons = {
      id: 1,
      name: 'Bulbasaur',
      abilities: [],
      base_experience: 0,
      forms: [],
      game_indices: [],
      height: 0,
      held_items: [],
      is_default: false,
      location_area_encounters: '',
      moves: [],
      order: 0,
      past_types: [],
      pic: '',
      species: undefined,
      sprites: undefined,
      stats: [],
      types: [],
      weight: 0
    };
    pokemonService.getById.mockReturnValue(of(mockPokemon));

    component.tarjetaClickeada(1);

    expect(pokemonService.getById).toHaveBeenCalledWith(1);

    fixture.detectChanges();

    expect(component.selectedPokemon).toEqual(mockPokemon);
  });

  it('should handle error when selecting a pokemon', () => {
    pokemonService.getById.mockReturnValue(throwError(() => new Error('Error')));

    component.tarjetaClickeada(1);

    expect(pokemonService.getById).toHaveBeenCalledWith(1);

    fixture.detectChanges();

    expect(component.selectedPokemon).toBeUndefined();
  });
  it('should load pokemons successfully', () => {
    const pokemonList: any[] = [];
    const getAllPokemSpy = spyOn(pokemonService, 'getAllPokem').and.returnValue(of(pokemonList));

    component.loadPokemons();

    expect(component.isLoading).toBe(false);
    expect(getAllPokemSpy).toHaveBeenCalled();
    expect(component.isLoading).toBe(false);
  });

  it('should handle error when loading pokemons', async () => {
    const error = 'Error';
    const getAllPokemSpy = jest.spyOn(pokemonService, 'getAllPokem').mockReturnValue(await Promise.reject(error));

    await component.loadPokemons();

    expect(component.isLoading).toBe(false);
    expect(getAllPokemSpy).toHaveBeenCalled();

    getAllPokemSpy.mockRestore();
    expect(component.error).toEqual(error);
  });

});
