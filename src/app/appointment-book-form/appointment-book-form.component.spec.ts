import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentBookFormComponent } from './appointment-book-form.component';

describe('AppointmentBookFormComponent', () => {
  let component: AppointmentBookFormComponent;
  let fixture: ComponentFixture<AppointmentBookFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentBookFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentBookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
