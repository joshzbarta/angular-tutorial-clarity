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
var product_1 = require("./product");
var ProductDetailComponent = (function () {
    function ProductDetailComponent() {
    }
    ProductDetailComponent.prototype.toggleMode = function () {
        this.edit = !this.edit;
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
        template: "\n    <div class=\"product-details\" *ngIf=\"product && !edit\">\n\t\t<a class=\"toggleMode\" (click)=\"toggleMode()\">edit</a>\n\t\t<h2>\n\t\t\t{{product.name}} <span *ngIf=\"product.variant\">({{product.variant}})</span>\n\t\t</h2>\n\t\t\n\t\t<div>&nbsp;\n\t\t<div class=\"sku\" *ngIf=\"product.sku\">SKU#{{product.sku}}</div>\n\n\t\t<div class=\"price\">{{product.price}} {{product.currency}}</div>\n\t\t</div>\n\t\t<div class=\"description\">{{product.description}}</div>\n\t\t<div class=\"disclaimer\">{{product.disclaimer}}</div>\n\t</div>\n\t\n\t<div class=\"product-editor\" *ngIf=\"product && edit\">\n\t\t<a class=\"toggleMode\" (click)=\"toggleMode()\">details</a>\n\t\t<div class=\"editor-row\">\n\t\t\t\n\t\t\t<div class=\"editor-item\">\n\t\t\t\t<label>id: </label>{{product.id}}\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"editor-item\">\n\t\t\t\t<label>sku:</label>\n\t\t\t\t<input [(ngModel)]=\"product.sku\" placeholder=\"sku\" />\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"editor-row\">\n\t\t\t\n\t\t\t<div class=\"editor-item\">\n\t\t\t\t<label>price:</label>\n\t\t\t\t<input [(ngModel)]=\"product.price\" placeholder=\"price\" />\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"editor-item\">\n\t\t\t\t<label>currency:</label>\n\t\t\t\t<input [(ngModel)]=\"product.currency\" placeholder=\"currency\" />\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"editor-item\">\n\t\t\t\t<label>availability:</label>\n\t\t\t\t<input [(ngModel)]=\"product.availability\" placeholder=\"availability\" />\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"editor-row\">\n\t\t\t<div class=\"editor-item\">\n\t\t\t\t<label>name:</label>\n\t\t\t\t<input [(ngModel)]=\"product.name\" placeholder=\"name\" />\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"editor-item\">\n\t\t\t\t<label>variant:</label>\n\t\t\t\t<input [(ngModel)]=\"product.variant\" placeholder=\"name\" />\n\t\t\t</div>\n\t\t</div>\n\t\t<div>\n\t\t\t<label>description</label>\n\t\t\t<textarea [(ngModel)]=\"product.description\" placeholder=\"description\" ></textarea>\n\t\t</div>\n\t\t<div>\n\t\t\t<label>disclaimer</label>\n\t\t\t<textarea [(ngModel)]=\"product.disclaimer\" placeholder=\"disclaimer\" ></textarea>\n\t\t</div>\n    </div>\n\t",
        styles: [
            " \n\t\t.product-details, .product-editor {\n\tborder: solid black 2px;\n\twidth: 50%;\n\tpadding: 20px;\n}\n.product-details, .product-editor \n.product-details .description{\n\tmargin-top: 10px;\n}\n.product-details .disclaimer {\n\tfont-size: 50%;\n\tmargin-top: 10px;\n}\n.product-details .sku {\n\tfont-style: italic;\n\tfloat: left;\n}\n.product-details .price {\n\tfont-style: italic;\n\tfloat: right;\n}\n.product-editor .toggleMode, .product-details .toggleMode {\n\tfloat: right;\n\tcursor: pointer;\n\tcolor: navy;\n}\n.product-editor textarea {\n\twidth: 80%;\n\theight:80px;\n}\n.product-editor label {\n\tfont-size: 80%;\n\twidth: 20px;\n\tdisplay: block;\n}\n\n.editor-item {\n\tdisplay: inline-block;\n\tmargin-bottom: 5px;\n\tmin-width: 25px;\n}\n"
        ]
    })
], ProductDetailComponent);
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map