import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Product } from './product';

import { ProductService } from './product.service';
import { LoggerService } from './logger.service';


@Component({
  selector: 'my-app',
  template: `
  
  <h1>{{title}}</h1>
  <ul class="product-list">
	<li *ngFor="let product of products" (click)="onSelect(product)" [class.selected]="product==selectedProduct">
		<span class="product-id">
			{{product.id}}
		</span>
		<span class="product-sku">{{product.sku}}</span>
		
		<span class="product-name" >
			<span>{{product.name}}</span> 
		 
			<span *ngIf="product.variant">({{product.variant}})</span>
		 </span>
	</li>
  </ul>

  <product-detail [product]="selectedProduct"></product-detail>
   

  `,
  styles: [`
	.product-list {
		margin: 0 0 2em 0;
		list-style-type: none;
		padding: 0;
		width: 40em;
	}
	.product-list .product-id {
		width: 2em;
		display: inline-block;
	}
	.product-list .product-sku {
		width: 8em;
		display: inline-block;
	}
	.selected {
		background-color: #CFD8DC !important;
		color: white;
	}
	
  .product-list li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .2em .5em .2em .5em;
    height: 1.6em;
    border-radius: 4px;
  }
  .product-list li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .product-list li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
	font-weight: bold;
  }
  .product-list .product-name, .product-list .product-id, .product-list .product-sku  {
    position: relative;
    top: 3px;
  }  
  `],
  providers: [ProductService, LoggerService]
})



export class AppComponent implements OnInit {
	title = 'Josh\'s Super Awesome Store 4';

	products: Product[];
  selectedProduct: Product;

  constructor(private productService: ProductService, private logger: LoggerService){}
  getProducts(): void {
    this.products = this.productService.getProducts();
  }
  ngOnInit(): void {
    this.logger.logInfo('AppComponent:OnInit start')
    this.getProducts();
    this.logger.logInfo('AppComponent:OnInit end')
  }
	onSelect(product: Product): void {
    this.logger.logInfo('AppComponent.onSelect called')
		this.selectedProduct = product;
	}

}
