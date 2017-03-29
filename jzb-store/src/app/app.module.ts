import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { DashboardComponent }  from './dashboard.component';
import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail.component';


import { ProductService } from './product.service';
import { LoggerService } from './logger.service';

@NgModule({
  imports: [
	BrowserModule,
	FormsModule,
  RouterModule.forRoot([
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'detail/:id', component: ProductDetailComponent },
    ])
  ],
  declarations: [ AppComponent, DashboardComponent, ProductsComponent, ProductDetailComponent  ],
  providers: [ ProductService, LoggerService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
