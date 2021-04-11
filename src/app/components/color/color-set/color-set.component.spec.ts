import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorSetComponent } from './color-set.component';

describe('ColorSetComponent', () => {
  let component: ColorSetComponent;
  let fixture: ComponentFixture<ColorSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
