import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Router } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { LoggerService } from "../../services/logger.service";
import 'rxjs/add/operator/switchMap';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  group,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
	styleUrls: [ './../shared/product-detail-editor-shared.component.css', './product-detail.css'	],
  animations: [
    trigger('wiggleState',[
      state('left', style({ transform: 'rotate(-10deg)' }) ),
      state('center', style({transforma:'rotate(0deg)  '}) ),
      state('right', style({ transform: 'rotate(10deg)' }) ),
      transition('left <=> center', animate('100ms ease-in')),
      transition('center <=> right', animate('100ms ease-in')),
      transition('left <=> right', animate('200ms ease-in'))
    ])
  ]
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product;
  edit: boolean;
  wiggleState: string;
  hold: boolean;
  constructor(
    private router: Router,
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location,
    private logger: LoggerService
  ) {
    this.wiggleState = 'center';
    this.hold=false;
  }

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

  wiggleStart(){
    if(this.hold) return;
    this.logger.logInfo('wiggleStart '+this.hold);
    this.wiggleState = 'left';
  }

  wiggleStop(){
    this.logger.logInfo('wiggleStop '+this.hold);
    this.wiggleState = 'center';
  }

  wiggleHold() {
      this.hold = true;
  }

  wiggleFlip(){

    this.logger.logInfo('wiggleFlip '+this.hold);
    var state = this.wiggleState;
    if(this.hold && state!='center')
    {
      this.wiggleState = state == 'left' ? 'right' : 'left';
    }
    this.hold=false;
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
