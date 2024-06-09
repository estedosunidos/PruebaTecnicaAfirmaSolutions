import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TarjetasPokemonComponent } from './tarjetas-pokemon.component';
import { Pokemons } from '../../interfaces/pokemon.interface';

describe('TarjetasPokemonComponent', () => {
  let component: TarjetasPokemonComponent;
  let fixture: ComponentFixture<TarjetasPokemonComponent>;
  let emitSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarjetasPokemonComponent]
    });

    fixture = TestBed.createComponent(TarjetasPokemonComponent);
    component = fixture.componentInstance;
    emitSpy = spyOn(component.clickeado, 'emit');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event with ID when data is defined', () => {
    const testData: Pokemons = {
      id: 1, name: 'Pikachu', pic: 'pikachu.jpg', base_experience: 100, height: 40, is_default: false,
      order: 0,
      weight: 0,
      abilities: [],
      forms: [],
      game_indices: [],
      held_items: [],
      location_area_encounters: '',
      moves: [],
      species: undefined,
      sprites: undefined,
      stats: [],
      types: [],
      past_types: []
    };
    component.data = testData;
    component.emitirEvento();
    expect(emitSpy).toHaveBeenCalledWith(1);
  });

  it('should log error when data id is not defined', () => {
    const testData: Pokemons = {
      id: 1, name: 'Pikachu', pic: 'pikachu.jpg', base_experience: 100, height: 40, is_default: false,
      order: 0,
      weight: 0,
      abilities: [],
      forms: [],
      game_indices: [],
      held_items: [],
      location_area_encounters: '',
      moves: [],
      species: undefined,
      sprites: undefined,
      stats: [],
      types: [],
      past_types: []
    };
    component.data = testData;
    spyOn(console, 'error');
    component.emitirEvento();
    expect(console.error).toHaveBeenCalledWith('El ID no está definido en los datos o es 0');
  });

  it('should log error when data id is 0', () => {
    const testData: Pokemons = {
      id: 0, name: 'Pikachu', pic: 'pikachu.jpg', base_experience: 100, height: 40, is_default: false,
      order: 0,
      weight: 0,
      abilities: [],
      forms: [],
      game_indices: [],
      held_items: [],
      location_area_encounters: '',
      moves: [],
      species: undefined,
      sprites: undefined,
      stats: [],
      types: [],
      past_types: []
    };
    component.data = testData;
    spyOn(console, 'error');
    component.emitirEvento();
    expect(console.error).toHaveBeenCalledWith('El ID no está definido en los datos o es 0');
  });

  it('should not emit event when data is not defined', () => {
    spyOn(console, 'error');
    component.emitirEvento();
    expect(emitSpy).not.toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith('El ID no está definido en los datos o es 0');
  });
});
