import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { AppState } from "../../app.reducer";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  items = 0;
  balance = 0;

  constructor(private store: Store<AppState>) {
      this.store.subscribe(data => { // Subscribe to Store NgRx
        this.balance = data.balance;
        this.items = data.basket.length;
      })
  }

}
