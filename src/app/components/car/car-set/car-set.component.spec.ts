import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSetComponent } from './car-set.component';

describe('CarSetComponent', () => {
  let component: CarSetComponent;
  let fixture: ComponentFixture<CarSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
