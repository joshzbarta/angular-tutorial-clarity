import { Component, Input } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'product-detail',
  template: `
    <div class="product-details" *ngIf="product && !edit">
		<a class="toggleMode" (click)="toggleMode()">edit</a>
		<h2>
			{{product.name}} <span *ngIf="product.variant">({{product.variant}})</span>
		</h2>
		
		<div>&nbsp;
		<div class="sku" *ngIf="product.sku">SKU#{{product.sku}}</div>

		<div class="price">{{product.price}} {{product.currency}}</div>
		</div>
		<div class="description">{{product.description}}</div>
		<div class="disclaimer">{{product.disclaimer}}</div>
	</div>
	
	<div class="product-editor" *ngIf="product && edit">
		<a class="toggleMode" (click)="toggleMode()">details</a>
		<div class="editor-row">
			
			<div class="editor-item">
				<label>id: </label>{{product.id}}
			</div>
			
			<div class="editor-item">
				<label>sku:</label>
				<input [(ngModel)]="product.sku" placeholder="sku" />
			</div>
		</div>
		<div class="editor-row">
			
			<div class="editor-item">
				<label>price:</label>
				<input [(ngModel)]="product.price" placeholder="price" />
			</div>
			
			<div class="editor-item">
				<label>currency:</label>
				<input [(ngModel)]="product.currency" placeholder="currency" />
			</div>
			
			<div class="editor-item">
				<label>availability:</label>
				<input [(ngModel)]="product.availability" placeholder="availability" />
			</div>
		</div>
		<div class="editor-row">
			<div class="editor-item">
				<label>name:</label>
				<input [(ngModel)]="product.name" placeholder="name" />
			</div>
			
			<div class="editor-item">
				<label>variant:</label>
				<input [(ngModel)]="product.variant" placeholder="name" />
			</div>
		</div>
		<div>
			<label>description</label>
			<textarea [(ngModel)]="product.description" placeholder="description" ></textarea>
		</div>
		<div>
			<label>disclaimer</label>
			<textarea [(ngModel)]="product.disclaimer" placeholder="disclaimer" ></textarea>
		</div>
    </div>
	`,
	styles: [
		` 
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
.product-editor .toggleMode, .product-details .toggleMode {
	float: right;
	cursor: pointer;
	color: navy;
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
`
	]
})
export class ProductDetailComponent {
	@Input() product: Product;
	edit: boolean;
	toggleMode(): void {
		this.edit = !this.edit;
	}
}