import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDashComponent } from './patient-dash.component';

describe('PatientDashComponent', () => {
  let component: PatientDashComponent;
  let fixture: ComponentFixture<PatientDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
