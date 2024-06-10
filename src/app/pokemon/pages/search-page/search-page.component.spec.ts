import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchPageComponent } from './search-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; // If needed
import { MatButtonModule } from '@angular/material/button'; // If needed
import { NoopAnimationsModule } from '@angular/platform-browser/animations'; // Optionally to avoid animation related issues

describe('SearchPageComponent', () => {
  let component: SearchPageComponent;
  let fixture: ComponentFixture<SearchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPageComponent ],
      imports: [
        MatFormFieldModule,
        MatInputModule, // If needed
        MatButtonModule, // If needed
        NoopAnimationsModule // Optionally to avoid animation related issues
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
