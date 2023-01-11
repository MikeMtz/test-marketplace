import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should get an array of products", () => {
    const items = service.getProducts();
    expect(items.length).toBeGreaterThanOrEqual(0);
  });
});
