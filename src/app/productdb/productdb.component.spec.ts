import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdbComponent } from './productdb.component';

describe('ProductdbComponent', () => {
  let component: ProductdbComponent;
  let fixture: ComponentFixture<ProductdbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductdbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
