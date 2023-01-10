import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAppointmentHistoryComponent } from './patient-appointment-history.component';

describe('PatientAppointmentHistoryComponent', () => {
  let component: PatientAppointmentHistoryComponent;
  let fixture: ComponentFixture<PatientAppointmentHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientAppointmentHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientAppointmentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
