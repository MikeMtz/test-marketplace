import { Injectable } from '@angular/core';
import { Product } from "../interfaces/product";

// import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // urlBase = 'https:example.com/api/v1/';  // Set URL Base for REST
  // headers: { headers: HttpHeaders; } | undefined; // Set HTTP Headers

  constructor(
      // private http: HttpClient // HTTP Client service declaration
  ) { }

  /**
   * Get products by HTTP request / Dummy object
   */
  getProducts(): Product[] {
    // return this.http.get(this.urlBase + 'products', this.headers); // REST way
    let products: Product[] = []; // Dummy array
    for(let i = 1; i < 37; i ++) {
      products.push({
        id: i,
        name: 'Product ' + i,
        price: Math.floor(Math.random() * 1000) + 50,
        image: 'https://picsum.photos/300/300?random=' + i, // External URL
      });
    }
    return products;
  }
}
