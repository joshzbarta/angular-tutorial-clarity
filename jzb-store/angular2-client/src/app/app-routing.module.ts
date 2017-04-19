import { NgModule }      from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { DashboardComponent }  from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/product-list/product-list.component';
import { ProductDatagridComponent } from './components/product-datagrid/product-datagrid.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductEditorComponent } from './components/product-editor/product-editor.component';
import { DemoListComponent } from './components/demo-list/demo-list.component';
import { Demo001Component } from './components/demo001/demo001.component';
import { Demo002Component } from './components/demo002/demo002.component';
const routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'productDatagrid', component: ProductDatagridComponent },
  { path: 'demos', component: DemoListComponent },
  { path: 'demo001', component: Demo001Component },
  { path: 'demo002', component: Demo002Component },
  { path: 'detail/:id', component: ProductDetailComponent },
  { path: 'editor/:id', component: ProductEditorComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
