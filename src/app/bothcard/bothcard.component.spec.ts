import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BothcardComponent } from './bothcard.component';

describe('BothcardComponent', () => {
  let component: BothcardComponent;
  let fixture: ComponentFixture<BothcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BothcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BothcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
