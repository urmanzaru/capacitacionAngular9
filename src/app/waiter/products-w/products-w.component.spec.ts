import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsWComponent } from './products-w.component';

describe('ProductsWComponent', () => {
  let component: ProductsWComponent;
  let fixture: ComponentFixture<ProductsWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsWComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
