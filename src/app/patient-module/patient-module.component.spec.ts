import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientModuleComponent } from './patient-module.component';

describe('PatientModuleComponent', () => {
  let component: PatientModuleComponent;
  let fixture: ComponentFixture<PatientModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
