import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  group,
  keyframes
} from '@angular/animations';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { LoggerService } from '../../services/logger.service';


@Component({
  selector: 'my-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css', './../shared/product-detail-editor-shared.component.css'],
  //providers: [ProductService, LoggerService],
  animations: [
    trigger('productActiveState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('* => void', [animate('500ms', style({opacity: 0, transform: 'scale(0)'}))]),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ]),
      trigger('addProductFormState', [
        state('expanded', style({
          transform: 'scale(1)'
        })),
        state('collapsed',   style({
          transform: 'scale(0)'
        })),
        transition('expanded => collapsed', animate('100ms ease-in')),
        transition('collapsed => expanded', animate('100ms ease-out'))
      ]),
    trigger('showProductLinkState', [
      transition('void => *',[
        style({ transform: 'translateX(50px)', opacity: 0}),
        group([
          animate(1000, style({width:500, transform: 'translateX(0)'})),
          animate(1000, style({opacity:1}))
        ]),
      transition(':leave', [animate(1000, style({opacity: 0, transform: 'scale(0) translateX(-100%)'}))])
    ])
  ])]
})

export class ProductsComponent implements OnInit {
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
		this.selectedProduct = product;
	}
  gotoDetail(product: Product): void {
    this.router.navigate(['/detail', product.id]);
  }

  edit(product: Product): void {
    this.router.navigate(['/editor', product.id]);
  }

  toggleAddProductForm(): void {
    this.selectedProduct = null;
  }

  logAnimationInfo(evt: any): void {
   try {
     this.logger.logInfo( JSON.stringify(evt));
   }
   catch(ex){
     this.logger.logInfo(
     '"triggerName":"'+evt.triggerName+','+
     '"fromState":"'+evt.toState+','+
     '"fromState":"'+evt.toState+','+
     '"phaseName":"'+evt.phaseName+','+
     '"totalTime":"'+evt.totalTime);
   }

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
