import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule }     from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

import { AppComponent }  from './app.component';

import { DashboardComponent }  from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductEditorComponent } from './components/product-editor/product-editor.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { DemoListComponent } from './components/demo-list/demo-list.component';
import { Demo001Component } from './components/demo001/demo001.component';
import { Demo002Component } from './components/demo002/demo002.component';

import { ProductService } from './services/product.service';
import { LoggerService } from './services/logger.service';
import { SilentLoggerService } from './services/silent-logger.service';
import { HighlightDirective } from './directives/highlight.directive';
import { LensDirective } from './directives/lens.directive';
import { SpinnyDirective } from './directives/spinny/spinny.directive';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductsComponent,
    ProductDetailComponent,
    ProductEditorComponent,
    ProductSearchComponent,
    Demo001Component,
    Demo002Component,
    DemoListComponent,
    HighlightDirective,
    LensDirective,
    SpinnyDirective
  ],
  providers: [
    {provide: ProductService, useClass: ProductService },
    {provide: LoggerService, useClass: LoggerService }
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
