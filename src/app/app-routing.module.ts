import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from "./layouts/layouts.component";

const routes: Routes = [
  { path: '', component: LayoutsComponent, loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
