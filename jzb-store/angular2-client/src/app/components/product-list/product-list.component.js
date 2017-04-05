"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_service_1 = require("../../services/product.service");
var router_1 = require("@angular/router");
var logger_service_1 = require("../../services/logger.service");
var ProductsComponent = (function () {
    function ProductsComponent(router, productService, logger) {
        this.router = router;
        this.productService = productService;
        this.logger = logger;
        this.title = 'Josh\'s Super Awesome Store 6';
    }
    ProductsComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService.getProducts()
            .then(function (products) { return _this.products = products; });
    };
    ProductsComponent.prototype.ngOnInit = function () {
        this.logger.logInfo('ProductsComponent:OnInit start');
        this.getProducts();
        this.logger.logInfo('ProductsComponent:OnInit end');
    };
    ProductsComponent.prototype.onSelect = function (product) {
        this.logger.logInfo('ProductsComponent.onSelect called');
        if (this.selectedProduct == product) {
            this.gotoDetail(product);
        }
        this.selectedProduct = product;
    };
    ProductsComponent.prototype.gotoDetail = function (product) {
        this.router.navigate(['/detail', product.id]);
    };
    ProductsComponent.prototype.edit = function (product) {
        this.router.navigate(['/editor', product.id]);
    };
    ProductsComponent.prototype.add = function (/*id: number,*/ sku, name, variant, description, price, currency, availability, disclaimer) {
        var _this = this;
        sku = sku.trim();
        name = name.trim();
        variant = variant.trim();
        description = description.trim();
        currency = currency.trim();
        availability = availability.trim();
        disclaimer = disclaimer.trim();
        if (!sku || !name || !description || !currency) {
            return;
        }
        this.productService.create(sku, name, variant, description, price, currency, availability, disclaimer)
            .then(function (product) {
            _this.products.push(product);
            _this.selectedProduct = null;
        });
    };
    ProductsComponent.prototype.delete = function (product) {
        var _this = this;
        this.productService.delete(product.id)
            .then(function () {
            _this.products = _this.products.filter(function (p) { return p != product; });
            if (_this.selectedProduct == product) {
                _this.selectedProduct = null;
            }
        });
    };
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    core_1.Component({
        selector: 'my-products',
        templateUrl: './product-list.component.html',
        styleUrls: ['./product-list.component.css', './../shared/product-detail-editor-shared.component.css'],
        providers: [product_service_1.ProductService, logger_service_1.LoggerService]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        product_service_1.ProductService,
        logger_service_1.LoggerService])
], ProductsComponent);
exports.ProductsComponent = ProductsComponent;
//# sourceMappingURL=product-list.component.js.map