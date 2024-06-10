import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TarjetasPokemonComponent } from './tarjetas-pokemon.component';
import { Pokemons } from '../../interfaces/pokemon.interface';
import { MatCardModule } from '@angular/material/card'; // Ejemplo: Importar el módulo de tarjeta de Angular Material
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('TarjetasPokemonComponent', () => {
  let component: TarjetasPokemonComponent;
  let fixture: ComponentFixture<TarjetasPokemonComponent>;
  let emitSpy: jest.SpyInstance;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarjetasPokemonComponent],
      imports: [
        MatCardModule, // Importar los módulos necesarios aquí
        NoopAnimationsModule // Importar esto si estás usando animaciones en Angular Material
      ]
    });

    fixture = TestBed.createComponent(TarjetasPokemonComponent);
    component = fixture.componentInstance;
    emitSpy = jest.spyOn(component.clickeado, 'emit');
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
    jest.spyOn(console, 'error').mockImplementation();
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
    jest.spyOn(console, 'error').mockImplementation();
    component.emitirEvento();
    expect(console.error).toHaveBeenCalledWith('El ID no está definido en los datos o es 0');
  });

  it('should not emit event when data is not defined', () => {
    jest.spyOn(console, 'error').mockImplementation();
    component.emitirEvento();
    expect(emitSpy).not.toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith('El ID no está definido en los datos o es 0');
  });
});
