import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Router } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { LoggerService } from "../../services/logger.service";
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'product-editor',
  templateUrl: './product-editor.component.html',
	styleUrls: [ './../shared/product-detail-editor-shared.component.css'	] //use same stylesheet as product-detail for now
})

//TODO: refactor to extend ProductDetailComponent
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
    this.logger.logInfo('ProductEditorComponent:OnInit start');
    this.route.params
      .switchMap((params: Params) => this.productService.getProduct(+params['id']))
      .subscribe(product => this.product = product);
    this.logger.logInfo('ProductEditorComponent:OnInit end');
  }

	toggleMode(): void {
    this.router.navigate(['/detail', this.product.id]);
	}
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.productService.update(this.product)
      .then(() => this.goBack());
  }
}
