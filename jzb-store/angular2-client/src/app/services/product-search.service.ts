import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { LoggerService } from './logger.service';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Product } from '../models/product'

@Injectable()
export class ProductSearchService {
  constructor(private http: Http, private logger: LoggerService) { }

  search(term: string): Observable<Product[]> {
    return this.http
      .get(`app/products/?name=${term}`)
      .map(response => response.json().data as Product[]);
  }
}
