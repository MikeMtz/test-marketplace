// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from "./pages-routing.module";
import { ReactiveFormsModule } from "@angular/forms";

// Components
import { HomeComponent } from './home/home.component';
import { BasketComponent } from './basket/basket.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    HomeComponent,
    BasketComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
