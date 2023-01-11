// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";

// Components
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutsComponent } from './layouts.component';

@NgModule({
  declarations: [
    NavbarComponent,
    LayoutsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutsModule { }
