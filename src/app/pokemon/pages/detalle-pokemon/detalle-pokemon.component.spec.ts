import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DetallePokemonComponent } from "./detalle-pokemon.component";

describe('DetallePokemonComponent', () => {
  let component: DetallePokemonComponent;
  let fixture: ComponentFixture<DetallePokemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallePokemonComponent],
    });
    fixture = TestBed.createComponent(DetallePokemonComponent);
    component = fixture.componentInstance;
  });

  it('should return the correct class for each type', () => {
    expect(component.getTipoClass('water')).toEqual('water');
    expect(component.getTipoClass('fire')).toEqual('fire');
    expect(component.getTipoClass('grass')).toEqual('grass');
    expect(component.getTipoClass('electric')).toEqual('electric');
    expect(component.getTipoClass('ice')).toEqual('ice');
    expect(component.getTipoClass('fighting')).toEqual('fighting');
    expect(component.getTipoClass('poison')).toEqual('poison');
    expect(component.getTipoClass('flying')).toEqual('flying');
    expect(component.getTipoClass('rock')).toEqual('rock');
    expect(component.getTipoClass('bug')).toEqual('bug');
    expect(component.getTipoClass('ghost')).toEqual('ghost');
    expect(component.getTipoClass('steel')).toEqual('steel');
    expect(component.getTipoClass('dragon')).toEqual('dragon');
    expect(component.getTipoClass('dark')).toEqual('dark');
    expect(component.getTipoClass('fairy')).toEqual('fairy');
    expect(component.getTipoClass('normal')).toEqual('normal');
    expect(component.getTipoClass('psychic')).toEqual('psychic');
    expect(component.getTipoClass('ground')).toEqual('ground');


  });

  it('should return an empty string for unknown types', () => {
    expect(component.getTipoClass('unknown')).toEqual('');
  });
});
