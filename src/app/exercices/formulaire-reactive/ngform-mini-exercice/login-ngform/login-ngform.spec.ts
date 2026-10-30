import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginNgform } from './login-ngform';

describe('LoginNgform', () => {
  let component: LoginNgform;
  let fixture: ComponentFixture<LoginNgform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginNgform],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginNgform);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
