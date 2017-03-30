import { InMemoryDbService } from 'angular-in-memory-web-api';
import { PRODUCTS } from './mock-products';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let products = PRODUCTS;
    return {products};
  }
}
