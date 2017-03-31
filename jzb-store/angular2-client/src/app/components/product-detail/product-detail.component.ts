import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Router } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { LoggerService } from "../../services/logger.service";
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
	styleUrls: [ './../shared/product-detail-editor-shared.component.css'	]
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product;
  edit: boolean;
  constructor(
    private router: Router,
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location,
    private logger: LoggerService
  ) {}

  ngOnInit(): void {
    this.logger.logInfo('ProductDetailComponent:OnInit start');
    this.route.params
      .switchMap((params: Params) => this.productService.getProduct(+params['id']))
      .subscribe(product => this.product = product);
    this.logger.logInfo('ProductDetailComponent:OnInit end');
  }

  toggleMode(): void {
    this.router.navigate(['/editor', this.product.id]);
  }
  goBack(): void {
    this.location.back();
  }

  //temporary implementation
  getFormattedPrice(product: Product): string{
    if(product.currency.length===1){
      return product.currency+''+product.price;
    }
    else {
      return product.price+' '+product.currency;
    }
  }
}
