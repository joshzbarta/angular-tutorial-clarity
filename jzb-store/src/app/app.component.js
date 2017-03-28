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
var product_service_1 = require("./product.service");
var logger_service_1 = require("./logger.service");
var AppComponent = (function () {
    function AppComponent(productService, logger) {
        this.productService = productService;
        this.logger = logger;
        this.title = 'Josh\'s Super Awesome Store 5';
    }
    AppComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService.getProductsSlow()
            .then(function (products) { return _this.products = products; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.logger.logInfo('AppComponent:OnInit start');
        this.getProducts();
        this.logger.logInfo('AppComponent:OnInit end');
    };
    AppComponent.prototype.onSelect = function (product) {
        this.logger.logInfo('AppComponent.onSelect called');
        this.selectedProduct = product;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  \n  <h1>{{title}}</h1>\n  <ul class=\"product-list\">\n\t<li *ngFor=\"let product of products\" (click)=\"onSelect(product)\" [class.selected]=\"product==selectedProduct\">\n\t\t<span class=\"product-id\">\n\t\t\t{{product.id}}\n\t\t</span>\n\t\t<span class=\"product-sku\">{{product.sku}}</span>\n\t\t\n\t\t<span class=\"product-name\" >\n\t\t\t<span>{{product.name}}</span> \n\t\t \n\t\t\t<span *ngIf=\"product.variant\">({{product.variant}})</span>\n\t\t </span>\n\t</li>\n  </ul>\n\n  <product-detail [product]=\"selectedProduct\"></product-detail>\n   \n\n  ",
        styles: ["\n\t.product-list {\n\t\tmargin: 0 0 2em 0;\n\t\tlist-style-type: none;\n\t\tpadding: 0;\n\t\twidth: 40em;\n\t}\n\t.product-list .product-id {\n\t\twidth: 2em;\n\t\tdisplay: inline-block;\n\t}\n\t.product-list .product-sku {\n\t\twidth: 8em;\n\t\tdisplay: inline-block;\n\t}\n\t.selected {\n\t\tbackground-color: #CFD8DC !important;\n\t\tcolor: white;\n\t}\n\t\n  .product-list li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .2em .5em .2em .5em;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .product-list li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .product-list li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n\tfont-weight: bold;\n  }\n  .product-list .product-name, .product-list .product-id, .product-list .product-sku  {\n    position: relative;\n    top: 3px;\n  }  \n  "],
        providers: [product_service_1.ProductService, logger_service_1.LoggerService]
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService, logger_service_1.LoggerService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map