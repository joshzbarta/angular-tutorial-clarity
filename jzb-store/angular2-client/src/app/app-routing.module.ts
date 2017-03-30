import { NgModule }      from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { DashboardComponent }  from './dashboard.component';
import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditorComponent } from './product-editor.component';

const routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'detail/:id', component: ProductDetailComponent },
  { path: 'editor/:id', component: ProductEditorComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
