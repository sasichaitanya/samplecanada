import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveProductsComponent } from './live-products.component';

describe('LiveProductsComponent', () => {
  let component: LiveProductsComponent;
  let fixture: ComponentFixture<LiveProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
