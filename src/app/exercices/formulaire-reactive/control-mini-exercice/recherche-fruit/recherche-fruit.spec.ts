import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RechercheFruit } from './recherche-fruit';

describe('RechercheFruit', () => {
  let component: RechercheFruit;
  let fixture: ComponentFixture<RechercheFruit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RechercheFruit],
    }).compileComponents();

    fixture = TestBed.createComponent(RechercheFruit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
