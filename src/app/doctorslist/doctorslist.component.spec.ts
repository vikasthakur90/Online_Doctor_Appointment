import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorslistComponent } from './doctorslist.component';

describe('DoctorslistComponent', () => {
  let component: DoctorslistComponent;
  let fixture: ComponentFixture<DoctorslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
