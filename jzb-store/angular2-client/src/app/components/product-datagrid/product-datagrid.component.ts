import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger,state,style,animate,transition,group,keyframes} from '@angular/animations';

import { LoggerService } from '../../services/logger.service';

import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'my-product-datagrid',
  templateUrl: './product-datagrid.component.html',
  styleUrls: ['./product-datagrid.component.css', './../shared/product-detail-editor-shared.component.css'],
  animations: [
    trigger('productActiveState', []),
    trigger('addProductFormState', [
        state('expanded',  style({transform: 'scale(1)'})),
        state('collapsed', style({transform: 'scale(0)'})),
        transition('expanded => collapsed', animate('100ms ease-in')),
        transition('collapsed => expanded', animate('100ms ease-out'))
      ])
  ]
})

export class ProductDatagridComponent implements OnInit {
	products: Product[];
  addProductFormState: string;
  constructor(private router: Router,
              private productService: ProductService,
              private logger: LoggerService){
    this.addProductFormState = 'collapsed';
  }

  getProducts(): void {
    this.productService.getProducts()
      .then(products => this.products=products);
  }

  ngOnInit(): void {
    this.logger.logInfo('ProductsComponent:OnInit start');
    this.getProducts();
    this.logger.logInfo('ProductsComponent:OnInit end');
  }

  gotoDetail(product: Product): void {
    this.router.navigate(['/detail', product.id]);
  }

  onEdit(product: Product): void {
    this.router.navigate(['/editor', product.id]);
  }

  onDelete(product: Product) : void{
    this.productService.delete(product.id)
      .then(()=>{
        this.products = this.products.filter(p=>p!=product);
      });
  }

  toggleAddProductForm(): void {
    this.addProductFormState = this.addProductFormState=='collapsed'?'expanded':'collapsed';
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
      });
  }


}
