import { Component } from '@angular/core';
import { Product } from "../../interfaces/product";
import { ProductsService } from "../../services/products.service";
import { Store } from "@ngrx/store";
import { AppState } from "../../app.reducer";
import * as basketActions from '../../actions/basket.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    products: Product[] = [];
    basket: Product[] = [];
    bought: Product[] = [];

    constructor( private productService: ProductsService, private store: Store<AppState> ) {
      this.store.select('basket').subscribe((basket) => this.basket = basket);
      this.store.select('bought').subscribe((bought) => this.bought = bought);
      this.getProducts();
    }

    /**
     * Function to set the marketplace products
     */
    getProducts(): void {
        const products = this.productService.getProducts(); // Change to .subscribe() on http request
        products.map((p) => {
           p.disabled = this.basket.findIndex((b) => b.id === p.id) > -1; // Disabled if is in basket
           p.bought = this.bought.findIndex((b) => b.id === p.id) > -1; // Validation to show / hide product
           return p;
        });
        this.products = products;
    }

    /**
     * Add product when click on products
     * @param product
     */
    addToBasket(product: Product): void {
        if (!product.disabled) { // If it's disabled (already on basket)
            this.store.dispatch( basketActions.addProduct(product) );
            product.disabled = true;
        }
    }
}
