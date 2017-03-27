import { Component } from '@angular/core';
import { Product } from './product';


const PRODUCTS: Product[] = [
	{
		id: 1,
		sku: 'LS-BLU',
		name: 'Jedi Lightsaber',
		variant: 'Blue',
		description: 'For over a thousand generations, the Jedi Knights were the guardians of peace and justice in the Old Republic. Now you too can protect the galaxy with this real working lightsaber!',
		price: 700000,
		currency: 'imperial credits',
		availability: '',
		disclaimer: 'Not responsible for death, dismemberment, or loss of limb caused by misuse of product. Seriously, this is a blade of pure energy intended for use by highly-trained space wizards. Do you really need a warning?'
	},
	{
		id: 2,
		sku: 'FLUX-1985',
		name: 'Flux Capacitor',
		description: 'The great Dr. Emmett \"Doc\" Brown came up with the idea for the flux capacitor after falling off the toilet he was standing on while hanging a clock and hitting his head on the sink. Skip the concussion and order your own flux capacitor today ',
		availability: 'Sold Out',
		disclaimer: 'Not responsible for universe-destroying paradoxes.	Activation requires 1.21 gigawatts of electricity. Fusion power recommended, will run on plutonium or lightning. Compatibility not guaranteed with vehicles other than 1981, 1982, or 1983 DeLorean',
		variant: '',
		price: 0,
		currency: ''
	},
	{
		id: 3,
		sku: 'WAND-5597',
		name: 'Magic Wand',
		variant: '11", Holly, Phoenix Feather Core',
		description: 'Every good wizard needs a wand.',
		price: 7,
		currency: 'galleons',
		availability: 'Sold Out',
		disclaimer: 'Muggles are not supposed to have wands.'
	}
];

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
  `]
})



export class AppComponent  { 
	title = 'Josh\'s Super Awesome Store 3';
	products = PRODUCTS;
	
	selectedProduct: Product;
	onSelect(product: Product): void {
		this.selectedProduct = product;
	}
	
}
