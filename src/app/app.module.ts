//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutsModule } from "./layouts/layouts.module";
import { AppRoutingModule } from './app-routing.module';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

//environment
import { environment } from '../environments';

// NgRx
import { StoreModule } from "@ngrx/store";
import { basketReducer } from "./reducers/basket.reducer";
import { balanceReducer } from "./reducers/balance.reducer";
import { boughtReducer } from "./reducers/bought.reducer";

// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    StoreModule.forRoot({
      basket: basketReducer,
      balance: balanceReducer,
      bought: boughtReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
