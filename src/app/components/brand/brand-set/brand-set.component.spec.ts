import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandSetComponent } from './brand-set.component';

describe('BrandSetComponent', () => {
  let component: BrandSetComponent;
  let fixture: ComponentFixture<BrandSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
