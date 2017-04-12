import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { LoggerService } from '../../services/logger.service';


@Component({
  selector: 'my-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css',  '../../../directives/spinny/spinny.directive.css', './../shared/product-detail-editor-shared.component.css']
  //,  providers: [ProductService, LoggerService]
})

export class ProductCreatorComponent implements OnInit {
	title = 'Josh\'s Super Awesome Store 6';

	products: Product[];
  selectedProduct: Product;

  constructor(private router: Router,
              private productService: ProductService,
              private logger: LoggerService){}

  ngOnInit(): void {

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
        //this.products.push(product);
        //this.selectedProduct = null;
      });
  }
}
