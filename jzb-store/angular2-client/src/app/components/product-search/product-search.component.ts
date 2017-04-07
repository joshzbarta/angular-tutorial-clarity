import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { LoggerService } from '../../services/logger.service';
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { ProductSearchService } from '../../services/product-search.service';
import { Product } from '../../models/product';
@Component({
  selector: 'product-search',
  templateUrl: './product-search.component.html',
  styleUrls: [ './product-search.component.css' ],
  providers: [ProductSearchService]
})
export class ProductSearchComponent implements OnInit {
  products: Observable<Product[]>;
  private searchTerms = new Subject<string>();
  constructor(
    private productSearchService: ProductSearchService,
    private router: Router,
    private logger: LoggerService) {}
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.products = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.productSearchService.search(term)
        // or the observable of empty products if there was no search term
        : Observable.of<Product[]>([]))
      .catch(error => {
        // TODO: add real error handling
        this.logger.logInfo(error);
        return Observable.of<Product[]>([]);
      });
  }
  gotoDetail(product: Product): void {
    let link = ['/detail', product.id];
    this.router.navigate(link);
  }
}
