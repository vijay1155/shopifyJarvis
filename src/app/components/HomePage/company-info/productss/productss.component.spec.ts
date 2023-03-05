import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductssComponent } from './productss.component';

describe('ProductsComponent', () => {
  let component: ProductssComponent;
  let fixture: ComponentFixture<ProductssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
