import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import { LoggerService } from './logger.service';
@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService, private logger: LoggerService) { }

  ngOnInit(): void {
    this.logger.logInfo('DashboardComponent:OnInit start');
    this.productService.getProducts()
      .then(products => this.products = products.slice(2, 4));
    this.logger.logInfo('DashboardComponent:OnInit end');
  }
}
