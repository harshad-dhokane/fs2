import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginApplication } from './login-application';

describe('LoginApplication', () => {
  let component: LoginApplication;
  let fixture: ComponentFixture<LoginApplication>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginApplication]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginApplication);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
