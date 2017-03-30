import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }  from './app.component';

import { DashboardComponent }  from './dashboard.component';
import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditorComponent } from './product-editor.component';

import { ProductService } from './product.service';
import { LoggerService } from './logger.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [ AppComponent,
    DashboardComponent,
    ProductsComponent,
    ProductDetailComponent,
    ProductEditorComponent
  ],
  providers: [ ProductService, LoggerService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
