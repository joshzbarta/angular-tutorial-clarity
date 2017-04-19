import { Component, Input, OnInit } from '@angular/core';
import { Location  }                from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Product } from '../../models/product';
import { SpinnyDirective } from "../../directives/spinny/spinny.directive";
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
      state('center', style({transform:'rotate(0deg)  '}) ),
      transition('center <=> left', animate('500ms',
        keyframes([
          style({transform:'rotate(0deg)',     offset: 0}),
          style({transform:'rotate(10deg)',     offset: .25}),
          style({transform:'rotate(0deg)',     offset: .5}),
          style({transform:'rotate(-10deg)',     offset: .75})
        ])
      )),
      transition('center <=> right', animate('500ms',
        keyframes([
          style({transform:'rotate(0deg)',     offset: 0}),
          style({transform:'rotate(10deg)',     offset: .25}),
          style({transform:'rotate(0deg)',     offset: .5}),
          style({transform:'rotate(-10deg)',     offset: .75})
        ])
      )),
      transition('left <=> right', animate('500ms',
        keyframes([
          style({transform:'rotate(0deg)',     offset: 0}),
          style({transform:'rotate(10deg)',     offset: .25}),
          style({transform:'rotate(0deg)',     offset: .5}),
          style({transform:'rotate(-10deg)',     offset: .75})
        ])
      ))
    ])
  ]
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product;
  edit: boolean;
  wiggleState: string;
  hold: boolean;
  addToCartText: string;
  constructor(
    private router: Router,
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location,
    private logger: LoggerService
  ) {
    this.wiggleState = 'center';
    this.hold=false;
    this.addToCartText = 'Add to Cart';
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

  //How best to encapsulate this stuff? I'd like to have a  wiggleDirective or something...?
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
    this.logger.logInfo('wiggleHold '+this.hold);
      this.hold = true;
  }

  wiggleFlip(){
    if(!this.hold) return;
    this.logger.logInfo('wiggleFlip '+this.hold);
    var state = this.wiggleState;

    if(state!='center')
    {
      this.wiggleState = state == 'left' ? 'right' : 'left';
    }

    this.hold=false;
  }

  addToCart($event:any){

    if(this.addToCartText=='Add to Cart'){
      this.addToCartText = 'In Cart';
    }
    else{
      this.addToCartText = 'Add to Cart';
    }

  }

  //temporary implementations, these should really be part of the Product class, but I keep getting
  // canAddToCart is not a function. Don't know why...
  canAddToCart() : boolean {
    return this.product.availability!='Sold Out';
  }


  getFormattedPrice(product: Product): string {
    if (product.currency.length === 1) {
      return product.currency + '' + product.price;
    }
    else {
      return product.price + ' ' + product.currency;
    }
  }}
