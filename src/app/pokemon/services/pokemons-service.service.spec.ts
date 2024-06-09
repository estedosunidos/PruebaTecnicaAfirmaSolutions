import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PokemonsServiceService } from './pokemons-service.service';

describe('PokemonsServiceService', () => {
  let service: PokemonsServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokemonsServiceService]
    });
    service = TestBed.inject(PokemonsServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all pokemons', () => {
    const mockResponse = {
      results: [
        { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
        { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' }
      ]
    };

    service.getAllPokem().subscribe((pokemons) => {
      expect(pokemons.length).toBe(2);
      expect(pokemons[0].name).toBe('bulbasaur');
      expect(pokemons[1].name).toBe('ivysaur');
    });

    const req = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon?limit=3000&offset=0');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should get a pokemon by id', () => {
    const mockResponse = { id: 1, name: 'bulbasaur' };

    service.getById(1).subscribe((pokemon) => {
      expect(pokemon.id).toBe(1);
      expect(pokemon.name).toBe('bulbasaur');
    });

    const req = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/1');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
