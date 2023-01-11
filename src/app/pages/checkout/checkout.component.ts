import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { AppState } from "../../app.reducer";
import { Router } from "@angular/router";
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Product } from "../../interfaces/product";
import * as balanceActions from '../../actions/balance.actions';
import * as basketActions from '../../actions/basket.actions';
import * as boughtActions from '../../actions/bought.actions';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  basket: Product[] = [];
  balance = 0;
  total = 0;
  successful = false;
  checkoutForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    street: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  // Form getters
  get firstName() { return this.checkoutForm.get('firstName'); }
  get lastName() { return this.checkoutForm.get('lastName'); }
  get street() { return this.checkoutForm.get('street'); }
  get city() { return this.checkoutForm.get('city'); }
  get state() { return this.checkoutForm.get('state'); }
  get email() { return this.checkoutForm.get('email'); }

  constructor(private store: Store<AppState>, private router: Router) {
    this.store.select('balance').subscribe(balance => this.balance = balance);
    this.store.select('basket').subscribe((basket) => {
      this.basket = basket;
      this.total = basket.reduce((a, b) => a + (b['price'] || 0), 0);
    });

    if(this.total < 1 || (this.balance < this.total)) {
      this.router.navigate(['/']);
    }
  }

  /**
   * Function to send / store the information and set the current balance
   * @param form
   */
  onCheckout(form: FormGroup): void {
    if (form.invalid) {
      return ;
    }
    const props = { // Build object to send / store
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      street: form.value.street,
      city: form.value.city,
      state: form.value.state,
      email: form.value.email,
      products: this.basket,
      balance: this.balance
    };
    // this.service.sendInfo(props).subscribe(response => ...) // Send data to request
    this.balance -= this.total;
    this.store.dispatch( balanceActions.setBalance({ balance: this.balance }) );
    this.basket.map((product) => this.store.dispatch( boughtActions.addProduct( product ) )); // Loop to add bought product
    this.successful = true; // Set flag
    this.store.dispatch( basketActions.reset() ); // Reset the basket
  }
}
