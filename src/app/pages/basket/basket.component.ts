import { Component } from '@angular/core';
import { Product } from "../../interfaces/product";
import { Store } from "@ngrx/store";
import { AppState } from "../../app.reducer";
import * as basketActions from '../../actions/basket.actions';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {
  products: Product[] = [];
  total = 0;
  balance = 0;

  constructor(private store: Store<AppState>) {
    this.store.select('basket').subscribe((basket) => { // Select only 'basket' reducer to subscribe
      this.products = basket;
      this.total = basket.reduce((a, b) => a + (b['price'] || 0), 0);
    });
    this.store.select('balance').subscribe(balance => this.balance = balance); // Select only 'balance' reducer to subscribe
  }

  removeItem(product: Product): void {
    this.store.dispatch( basketActions.removeProduct({id: product.id}) ); // Send id to remove from State
  }
}
