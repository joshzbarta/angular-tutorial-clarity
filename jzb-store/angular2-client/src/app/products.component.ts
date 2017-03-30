import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Product } from './product';
import { ProductService } from './product.service';
import { Router } from '@angular/router';
import { LoggerService } from './logger.service';


@Component({
  selector: 'my-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
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
    this.productService.getProductsCached()
      .then(products => this.products=products);
  }
  ngOnInit(): void {
    this.logger.logInfo('ProductsComponent:OnInit start');
    this.getProducts();
    this.logger.logInfo('ProductsComponent:OnInit end');
  }
	onSelect(product: Product): void {
    this.logger.logInfo('ProductsComponent.onSelect called');
		this.selectedProduct = product;
	}
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedProduct.id]);
  }

}
