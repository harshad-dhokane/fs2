import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuneStudents } from './pune-students';

describe('PuneStudents', () => {
  let component: PuneStudents;
  let fixture: ComponentFixture<PuneStudents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PuneStudents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuneStudents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
