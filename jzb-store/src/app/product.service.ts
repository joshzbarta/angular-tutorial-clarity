/**
 * Created by Joshua_Barta on 3/27/2017.
 */
import { Injectable } from '@angular/core'
import { Inject } from '@angular/core'
import { Product } from './product';
import { PRODUCTS } from './mock-products';
import { LoggerService } from './logger.service';


@Injectable()
export class ProductService {
  getProducts(): Promise<Product[]> {
    return Promise.resolve(PRODUCTS);
  }
  constructor( @Inject(LoggerService) private logger: LoggerService){}

  // based on https://angular.io/docs/ts/latest/tutorial/toh-pt4.html#!#slow
  getProductsSlow(): Promise<Product[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay

      this.logger.logInfo('making (mock) call to server...')
      setTimeout(() =>
          {
            resolve(this.getProducts());
            this.logger.logInfo('resolved (mock) call to server!');
          },

        2000);
    });
  }
}
