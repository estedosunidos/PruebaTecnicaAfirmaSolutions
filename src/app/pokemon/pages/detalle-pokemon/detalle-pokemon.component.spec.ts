import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DetallePokemonComponent } from "./detalle-pokemon.component";

describe('DetallePokemonComponent', () => {
  let component: DetallePokemonComponent;
  let fixture: ComponentFixture<DetallePokemonComponent>; // Declarar fixture fuera del beforeEach

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallePokemonComponent],
    });
    fixture = TestBed.createComponent(DetallePokemonComponent); // Asignar valor a fixture
    component = fixture.componentInstance;
  });

  it('should return the correct class for each type', () => {
    expect(component.getTipoClass('water')).toEqual('water');
    expect(component.getTipoClass('fire')).toEqual('fire');
    expect(component.getTipoClass('grass')).toEqual('grass');

  });

  it('should return an empty string for unknown types', () => {
    expect(component.getTipoClass('unknown')).toEqual('');
  });
});
