import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivePatientsComponent } from './active-patients.component';

describe('ActivePatientsComponent', () => {
  let component: ActivePatientsComponent;
  let fixture: ComponentFixture<ActivePatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivePatientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivePatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
