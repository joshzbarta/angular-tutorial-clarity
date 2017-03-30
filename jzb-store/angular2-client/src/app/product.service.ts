/**
 * Created by Joshua_Barta on 3/27/2017.
 */
import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Product } from './product';
import { PRODUCTS } from './mock-products';
import { LoggerService } from './logger.service';


@Injectable()
export class ProductService {
  cachedProducts: Product[];
  private productsUrl = 'api/products';
  constructor( @Inject(LoggerService) private logger: LoggerService, private http: Http){}

  getProducts(): Promise<Product[]> {
    return this.http.get(this.productsUrl).toPromise()
      .then(response => response.json().data as Product[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  // based on https://angular.io/docs/ts/latest/tutorial/toh-pt4.html#!#slow
  getProductsSlow(): Promise<Product[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay

      this.logger.logInfo('making (mock) call to server...');
      setTimeout(() =>
          {
            resolve(this.getProducts());
            this.logger.logInfo('resolved (mock) call to server!');
          },

        2000);
    });
  }

  getProductsCached(): Promise<Product[]>{
    return new Promise(resolve => {
      this.logger.logInfo('getting product data');
        if(this.cachedProducts)
        {
          this.logger.logInfo('return cached products');
          resolve(this.cachedProducts);
        }
        else{
          this.logger.logInfo('get products from (mock) server');
          this.getProductsSlow()
            .then(products => resolve(this.cachedProducts=products) );
        }
    })
  }

  getProduct(id: number): Promise<Product> {
    return this.getProductsCached()
      .then(products => products.find(product => product.id === id));
  }


}
