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
var animations_1 = require("@angular/animations");
var product_service_1 = require("../../services/product.service");
var router_1 = require("@angular/router");
var logger_service_1 = require("../../services/logger.service");
var ProductsComponent = (function () {
    function ProductsComponent(router, productService, logger) {
        this.router = router;
        this.productService = productService;
        this.logger = logger;
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
    ProductsComponent.prototype.toggleAddProductForm = function () {
        this.selectedProduct = null;
    };
    ProductsComponent.prototype.logAnimationInfo = function (evt) {
        try {
            this.logger.logInfo(JSON.stringify(evt));
        }
        catch (ex) {
            this.logger.logInfo('"triggerName":"' + evt.triggerName + ',' +
                '"fromState":"' + evt.toState + ',' +
                '"fromState":"' + evt.toState + ',' +
                '"phaseName":"' + evt.phaseName + ',' +
                '"totalTime":"' + evt.totalTime);
        }
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
        providers: [product_service_1.ProductService, logger_service_1.LoggerService],
        animations: [
            animations_1.trigger('productActiveState', [
                animations_1.state('inactive', animations_1.style({
                    backgroundColor: '#eee',
                    transform: 'scale(1)'
                })),
                animations_1.state('active', animations_1.style({
                    backgroundColor: '#cfd8dc',
                    transform: 'scale(1.1)'
                })),
                animations_1.transition('* => void', [animations_1.animate('500ms', animations_1.style({ opacity: 0, transform: 'scale(0)' }))]),
                animations_1.transition('inactive => active', animations_1.animate('100ms ease-in')),
                animations_1.transition('active => inactive', animations_1.animate('100ms ease-out'))
            ]),
            animations_1.trigger('addProductFormState', [
                animations_1.state('expanded', animations_1.style({
                    transform: 'scale(1)'
                })),
                animations_1.state('collapsed', animations_1.style({
                    transform: 'scale(0)'
                })),
                animations_1.transition('expanded => collapsed', animations_1.animate('100ms ease-in')),
                animations_1.transition('collapsed => expanded', animations_1.animate('100ms ease-out'))
            ]),
            animations_1.trigger('showProductLinkState', [
                animations_1.transition(':enter', [animations_1.animate(1000, animations_1.style({ opacity: 1, width: 500, transform: 'scale(1)' }))]),
                animations_1.transition(':leave', [animations_1.animate(1000, animations_1.style({ opacity: 0, transform: 'scale(0) translateX(-100%)' }))])
            ])
        ]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        product_service_1.ProductService,
        logger_service_1.LoggerService])
], ProductsComponent);
exports.ProductsComponent = ProductsComponent;
//# sourceMappingURL=product-list.component.js.map