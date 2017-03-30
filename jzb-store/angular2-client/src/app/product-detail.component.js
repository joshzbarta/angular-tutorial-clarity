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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var router_2 = require("@angular/router");
var product_1 = require("./product");
var product_service_1 = require("./product.service");
var logger_service_1 = require("./logger.service");
require("rxjs/add/operator/switchMap");
var ProductDetailComponent = (function () {
    function ProductDetailComponent(router, productService, route, location, logger) {
        this.router = router;
        this.productService = productService;
        this.route = route;
        this.location = location;
        this.logger = logger;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.logger.logInfo('ProductDetailComponent:OnInit start');
        this.route.params
            .switchMap(function (params) { return _this.productService.getProduct(+params['id']); })
            .subscribe(function (product) { return _this.product = product; });
        this.logger.logInfo('ProductDetailComponent:OnInit end');
    };
    ProductDetailComponent.prototype.toggleMode = function () {
        this.router.navigate(['/editor', this.product.id]);
    };
    ProductDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return ProductDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", product_1.Product)
], ProductDetailComponent.prototype, "product", void 0);
ProductDetailComponent = __decorate([
    core_1.Component({
        selector: 'product-detail',
        templateUrl: './product-detail.component.html',
        styleUrls: ['./product-detail.component.css']
    }),
    __metadata("design:paramtypes", [router_2.Router,
        product_service_1.ProductService,
        router_1.ActivatedRoute,
        common_1.Location,
        logger_service_1.LoggerService])
], ProductDetailComponent);
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map