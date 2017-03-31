import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { LoggerService } from '../../services/logger.service';


@Component({
  selector: 'my-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css', './../shared/product-detail-editor-shared.component.css'],
  providers: [ProductService, LoggerService]
})

export class ProductsComponent implements OnInit {
	title = 'Josh\'s Super Awesome Store 6';

	products: Product[];
  selectedProduct: Product;

  constructor(private router: Router,
              private productService: ProductService,
              private logger: LoggerService){}
  getProducts(): void {
    this.productService.getProducts()
      .then(products => this.products=products);
  }
  ngOnInit(): void {
    this.logger.logInfo('ProductsComponent:OnInit start');
    this.getProducts();
    this.logger.logInfo('ProductsComponent:OnInit end');
  }
	onSelect(product: Product): void {
    this.logger.logInfo('ProductsComponent.onSelect called');
    if(this.selectedProduct==product)
    {
      this.gotoDetail(product);
    }

		this.selectedProduct = product;
	}
  gotoDetail(product: Product): void {
    this.router.navigate(['/detail', product.id]);
  }

  edit(product: Product): void {
    this.router.navigate(['/editor', product.id]);
  }

  add(/*id: number,*/
  sku: string,
  name: string,
  variant: string,
  description: string,
  price: number,
  currency: string,
  availability: string,
  disclaimer: string): void {
    sku = sku.trim();
    name = name.trim();
    variant = variant.trim();
    description = description.trim();
    currency = currency.trim();
    availability = availability.trim();
    disclaimer = disclaimer.trim();

    if (!sku || !name || !description || !currency) { return; }

    this.productService.create(sku,
      name,
      variant,
      description,
      price,
      currency,
      availability,
      disclaimer)
      .then(product => {
        this.products.push(product);
        this.selectedProduct = null;
      });
  }

  delete(product: Product) : void{
    this.productService.delete(product.id)
      .then(()=>{
          this.products = this.products.filter(p=>p!=product);
          if(this.selectedProduct==product) {
            this.selectedProduct = null;
          }
      });
  }
}
