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
var ProductCreatorComponent = (function () {
    function ProductCreatorComponent(router, productService, logger) {
        this.router = router;
        this.productService = productService;
        this.logger = logger;
        this.title = 'Josh\'s Super Awesome Store 6';
    }
    ProductCreatorComponent.prototype.ngOnInit = function () {
    };
    ProductCreatorComponent.prototype.add = function (/*id: number,*/ sku, name, variant, description, price, currency, availability, disclaimer) {
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
            //this.products.push(product);
            //this.selectedProduct = null;
        });
    };
    return ProductCreatorComponent;
}());
ProductCreatorComponent = __decorate([
    core_1.Component({
        selector: 'my-products',
        templateUrl: './product-list.component.html',
        styleUrls: ['./product-list.component.css', './../shared/product-detail-editor-shared.component.css'],
        providers: [product_service_1.ProductService, logger_service_1.LoggerService]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        product_service_1.ProductService,
        logger_service_1.LoggerService])
], ProductCreatorComponent);
exports.ProductCreatorComponent = ProductCreatorComponent;
//# sourceMappingURL=product-creator.component.js.map