import { NgModule }      from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { DashboardComponent }  from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductEditorComponent } from './components/product-editor/product-editor.component';

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
