import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LayaoutPageComponent } from './layaout-page.component';
import { PokemonsServiceService } from '../../services/pokemons-service.service';
import { of } from 'rxjs';
import { Pokemons } from '../../interfaces/pokemon.interface';


describe('LayaoutPageComponent', () => {
  let component: LayaoutPageComponent;
  let fixture: ComponentFixture<LayaoutPageComponent>;
  let pokemonsService: PokemonsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayaoutPageComponent],
      imports: [HttpClientTestingModule],
      providers: [PokemonsServiceService]
    });

    fixture = TestBed.createComponent(LayaoutPageComponent);
    component = fixture.componentInstance;
    pokemonsService = TestBed.inject(PokemonsServiceService);
    spyOn(pokemonsService, 'getAllPokem').and.returnValue(of([{ id: 1, name: 'Pikachu', pic: '', base_experience: 0, height: 0, is_default: false }]));
    spyOn(pokemonsService, 'getById').and.returnValue(of({ id: 1, name: 'Pikachu', pic: '', base_experience: 0, height: 0, is_default: false }));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load pokemons on init', () => {
    component.ngOnInit();
    expect(pokemonsService.getAllPokem).toHaveBeenCalled();
  });

  it('should handle scroll event', () => {
    component.onScroll();
    expect(pokemonsService.getAllPokem).toHaveBeenCalled();
  });

  it('should handle card click', () => {
    const id = 1;
    component.tarjetaClickeada(id);
    expect(pokemonsService.getById).toHaveBeenCalledWith(id);
  });


    it('should apply filter', () => {
      const testData: Pokemons[] = [
        {
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
        },

      ];

      component.pokemons = testData;
      component.searchTerm = 'pika';
      component.applyFilter();

      expect(component.filteredPokemons.length).toBe(1);
      expect(component.filteredPokemons[0].name).toBe('Pikachu');
  });
})
