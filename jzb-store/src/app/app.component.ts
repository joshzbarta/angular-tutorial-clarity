import { Component } from '@angular/core';

export class Product {
	id: number;
	sku: string;
	name: string;
	variant: string;
	description: string;
	price: number;
	currency: string;
	availability: string;
	disclaimer: string;
	constructor(){
		this.variant = '';
		this.price=0;
		this.currency='';
	}
}

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
		disclaimer: 'Not responsible for universe-destroying paradoxes.	Activation requires 1.21 gigawatts of electricity. Fusion power recommended, will run on plutonium or lightning. Compatibility not guaranteed with vehicles other than 1981, 1982, or 1983 DeLorean'
	},
	{
		id: 3,
		sku: 'WAND-5597',
		name: 'Magic Wand',
		variant: '11", Holly, Phoenix Feather Core'
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

 
    
  
	<div class="product-details" *ngIf="selectedProduct && !edit">
		<a class="toggleMode" (click)="toggleMode()">edit</a>
		<h2>
			{{selectedProduct.name}} <span *ngIf="selectedProduct.variant">({{selectedProduct.variant}})</span>
		</h2>
		
		<div>&nbsp;
		<div class="sku" *ngIf="selectedProduct.sku">SKU#{{selectedProduct.sku}}</div>

		<div class="price">{{selectedProduct.price}} {{selectedProduct.currency}}</div>
		</div>
		<div class="description">{{selectedProduct.description}}</div>
		<div class="disclaimer">{{selectedProduct.disclaimer}}</div>
	</div>
   
    <div class="product-editor" *ngIf="selectedProduct && edit">
		<a class="toggleMode" (click)="toggleMode()">details</a>
		<div class="editor-row">
			
			<div class="editor-item">
				<label>id: </label>{{selectedProduct.id}}
			</div>
			
			<div class="editor-item">
				<label>sku:</label>
				<input [(ngModel)]="selectedProduct.sku" placeholder="sku" />
			</div>
		</div>
		<div class="editor-row">
			
			<div class="editor-item">
				<label>price:</label>
				<input [(ngModel)]="selectedProduct.price" placeholder="price" />
			</div>
			
			<div class="editor-item">
				<label>currency:</label>
				<input [(ngModel)]="selectedProduct.currency" placeholder="currency" />
			</div>
			
			<div class="editor-item">
				<label>availability:</label>
				<input [(ngModel)]="selectedProduct.availability" placeholder="availability" />
			</div>
		</div>
		<div class="editor-row">
			<div class="editor-item">
				<label>name:</label>
				<input [(ngModel)]="selectedProduct.name" placeholder="name" />
			</div>
			
			<div class="editor-item">
				<label>variant:</label>
				<input [(ngModel)]="selectedProduct.variant" placeholder="name" />
			</div>
		</div>
		<div>
			<label>description</label>
			<textarea [(ngModel)]="selectedProduct.description" placeholder="description" ></textarea>
		</div>
		<div>
			<label>disclaimer</label>
			<textarea [(ngModel)]="selectedProduct.disclaimer" placeholder="disclaimer" ></textarea>
		</div>
    </div>
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
  .product-details, .product-editor {
	border: solid black 2px;
	width: 50%;
	padding: 20px;
}
  .product-details, .product-editor 
.product-details .description{
	margin-top: 10px;
}
.product-details .disclaimer {
	font-size: 50%;
	margin-top: 10px;
}
.product-details .sku {
	font-style: italic;
	float: left;
}
.product-details .price {
	font-style: italic;
	float: right;
}
.product-editor textarea {
	width: 80%;
	height:80px;
}
.product-editor label {
	font-size: 80%;
	width: 20px;
	display: block;
}

.editor-item {
	display: inline-block;
	margin-bottom: 5px;
	min-width: 25px;
}
.product-editor .toggleMode, .product-details .toggleMode {
	float: right;
	cursor: pointer;
	color: navy;
}
  
  `]
})



export class AppComponent  { 
	title = 'Josh\'s Super Awesome Store 3';
	products = PRODUCTS;
	edit: boolean;
	
	onSelect(product: Product): void {
		this.selectedProduct = product;
	}
	toggleMode(): void {
		this.edit = !this.edit;
	}
}
