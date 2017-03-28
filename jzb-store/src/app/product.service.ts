/**
 * Created by Joshua_Barta on 3/27/2017.
 */
import { Injectable } from '@angular/core'
import { Product } from './product';
import { PRODUCTS } from './mock-products';

@Injectable()
export class ProductService {
  getProducts(): Product[] {
    return PRODUCTS;
  }
}
