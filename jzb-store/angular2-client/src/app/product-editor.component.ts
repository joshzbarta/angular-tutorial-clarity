import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Router } from '@angular/router';
import { Product } from './product';
import { ProductService } from './product.service';
import { LoggerService } from "./logger.service";
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'product-editor',
  templateUrl: './product-editor.component.html',
	styleUrls: [ './product-detail.component.css'	] //use same stylesheet as product-detail for now
})
export class ProductEditorComponent implements OnInit {
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
    this.router.navigate(['/detail', this.product.id]);
	}
  goBack(): void {
    this.location.back();
  }
}
