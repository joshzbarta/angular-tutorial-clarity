/**
 * Created by Joshua_Barta on 3/27/2017.
 */
import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Product } from '../models/product';
import { PRODUCTS } from '../mock-products';
import { LoggerService } from './logger.service';


@Injectable()
export class ProductService {
  private cachedProducts: Product[];
  private productsUrl = 'api/products';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor( @Inject(LoggerService) private logger: LoggerService, private http: Http){}

  getProduct(id: number): Promise<Product> {
    const url = `${this.productsUrl}/${id}`;

    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Product)
      .catch(this.handleError);
  }

  getProducts(): Promise<Product[]> {
    return this.http.get(this.productsUrl).toPromise()
      .then(response => response.json().data as Product[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    this.logger.logError('ProductService failed to load products!');
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

  create(/*id: number,*/
         sku: string,
         name: string,
         variant: string,
         description: string,
         price: number,
         currency: string,
         availability: string,
         disclaimer: string): Promise<Product> {
    return this.http
      .post(this.productsUrl, JSON.stringify({
        /*id: number,*/
        sku: sku,
        name: name,
        variant: variant,
        description: description,
        price: price,
        currency: currency,
        availability: availability,
        disclaimer: disclaimer
      }), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Product)
      .catch(this.handleError);
  }

  update(product: Product): Promise<Product> {
    const url = `${this.productsUrl}/${product.id}`;
    return this.http
      .put(url, JSON.stringify(product), {headers: this.headers})
      .toPromise()
      .then(() => product)
      .catch(this.handleError);
  }



  delete(id: number): Promise<void> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}
