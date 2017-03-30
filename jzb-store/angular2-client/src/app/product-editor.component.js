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
var ProductEditorComponent = (function () {
    function ProductEditorComponent(router, productService, route, location, logger) {
        this.router = router;
        this.productService = productService;
        this.route = route;
        this.location = location;
        this.logger = logger;
    }
    ProductEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.logger.logInfo('ProductEditorComponent:OnInit start');
        this.route.params
            .switchMap(function (params) { return _this.productService.getProduct(+params['id']); })
            .subscribe(function (product) { return _this.product = product; });
        this.logger.logInfo('ProductEditorComponent:OnInit end');
    };
    ProductEditorComponent.prototype.toggleMode = function () {
        this.router.navigate(['/detail', this.product.id]);
    };
    ProductEditorComponent.prototype.goBack = function () {
        this.location.back();
    };
    ProductEditorComponent.prototype.save = function () {
        var _this = this;
        this.productService.update(this.product)
            .then(function () { return _this.goBack(); });
    };
    return ProductEditorComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", product_1.Product)
], ProductEditorComponent.prototype, "product", void 0);
ProductEditorComponent = __decorate([
    core_1.Component({
        selector: 'product-editor',
        templateUrl: './product-editor.component.html',
        styleUrls: ['./product-detail.component.css'] //use same stylesheet as product-detail for now
    }),
    __metadata("design:paramtypes", [router_2.Router,
        product_service_1.ProductService,
        router_1.ActivatedRoute,
        common_1.Location,
        logger_service_1.LoggerService])
], ProductEditorComponent);
exports.ProductEditorComponent = ProductEditorComponent;
//# sourceMappingURL=product-editor.component.js.map