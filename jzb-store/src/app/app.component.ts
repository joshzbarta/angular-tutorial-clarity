import { Component } from '@angular/core';

export class Product {
	id: number;
	sku: string;
	name: string;
	variant: string;
	description: string;
	price: number;
	currency: string;
	disclaimer: string;
}

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <div class="box">
	<h2>{{product.name}} ({{product.variant}})</h2>
	<div>&nbsp;
	<div class="sku">SKU#{{product.sku}}</div>
	
	<div class="price">{{product.price}} {{product.currency}}</div>
	</div>
	<div class="details">{{product.description}}</div>
	<div class="tiny">{{product.disclaimer}}</div>
   </div>
   
   <div class="box">
    <div>
		<label>id: </label>{{product.id}}
		
		<label>sku:</label>
		<input [(ngModel)]="product.sku" placeholder="sku" />
	</div>
	<div>
		
		
		<label>price:</label>
		<input [(ngModel)]="product.price" placeholder="price" />
		
		<label>currency:</label>
		<input [(ngModel)]="product.currency" placeholder="currency" />
	</div>
	<div>
		<label>name:</label>
		<input [(ngModel)]="product.name" placeholder="name" />
		
		<label>variant:</label>
		<input [(ngModel)]="product.variant" placeholder="name" />
	</div>
	<div>
		<label>description</label><br/>
		<textarea [(ngModel)]="product.description" placeholder="description" ></textarea>
	</div>
	<div>
		<label>disclaimer</label><br/>
		<textarea [(ngModel)]="product.disclaimer" placeholder="disclaimer" ></textarea>
	</div>
    </div>
   
	
   
  `,
})
export class AppComponent  { 
	title = 'Josh\'s Super Awesome Store',
	product = {
		id: 1,
		sku: 'LS-BLU',
		name: 'Jedi Lightsaber',
		variant: 'Blue',
		description: 'For over a thousand generations, the Jedi Knights were the guardians of peace and justice in the Old Republic. Now you too can protect the galaxy with this real working lightsaber!',
		price: '700000',
		currency: 'imperial credits',
		disclaimer: 'Not responsible for death, dismemberment, or loss of limb caused by misuse of product. Seriously, this is a blade of pure energy intended for use by highly-trained space wizards. Do you really need a warning?'
	};
}
