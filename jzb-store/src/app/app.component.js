"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Product = (function () {
    function Product() {
    }
    return Product;
}());
exports.Product = Product;
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Josh\'s Super Awesome Store3';
        this.product = {
            id: 1,
            sku: 'LS-BLU',
            name: 'Jedi Lightsaber',
            variant: 'Blue',
            description: 'For over a thousand generations, the Jedi Knights were the guardians of peace and justice in the Old Republic. Now you too can protect the galaxy with this real working lightsaber!',
            price: '700000',
            currency: 'imperial credits',
            disclaimer: 'Not responsible for death, dismemberment, or loss of limb caused by misuse of product. Seriously, this is a blade of pure energy intended for use by highly-trained space wizards. Do you really need a warning?'
        };
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <h1>{{title}}</h1>\n  <div class=\"box\">\n\t<h2>{{product.name}} ({{product.variant}})</h2>\n\t<div>&nbsp;\n\t<div class=\"sku\">SKU#{{product.sku}}</div>\n\t\n\t<div class=\"price\">{{product.price}} {{product.currency}}</div>\n\t</div>\n\t<div class=\"details\">{{product.description}}</div>\n\t<div class=\"tiny\">{{product.disclaimer}}</div>\n   </div>\n   \n   <div class=\"box\">\n    <div>\n\t\t<label>id: </label>{{product.id}}\n\t\t\n\t\t<label>sku:</label>\n\t\t<input [(ngModel)]=\"product.sku\" placeholder=\"sku\" />\n\t</div>\n\t<div>\n\t\t\n\t\t\n\t\t<label>price:</label>\n\t\t<input [(ngModel)]=\"product.price\" placeholder=\"price\" />\n\t\t\n\t\t<label>currency:</label>\n\t\t<input [(ngModel)]=\"product.currency\" placeholder=\"currency\" />\n\t</div>\n\t<div>\n\t\t<label>name:</label>\n\t\t<input [(ngModel)]=\"product.name\" placeholder=\"name\" />\n\t\t\n\t\t<label>variant:</label>\n\t\t<input [(ngModel)]=\"product.variant\" placeholder=\"name\" />\n\t</div>\n\t<div>\n\t\t<label>description</label><br/>\n\t\t<textarea [(ngModel)]=\"product.description\" placeholder=\"description\" ></textarea>\n\t</div>\n\t<div>\n\t\t<label>disclaimer</label><br/>\n\t\t<textarea [(ngModel)]=\"product.disclaimer\" placeholder=\"disclaimer\" ></textarea>\n\t</div>\n    </div>\n   \n\t\n   \n  ",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map