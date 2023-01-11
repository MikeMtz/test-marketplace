import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BasketComponent } from "./basket/basket.component";
import { CheckoutComponent } from "./checkout/checkout.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'checkout', component: CheckoutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
