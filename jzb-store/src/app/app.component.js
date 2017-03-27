"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var PRODUCTS = [
    {
        id: 1,
        sku: 'LS-BLU',
        name: 'Jedi Lightsaber',
        variant: 'Blue',
        description: 'For over a thousand generations, the Jedi Knights were the guardians of peace and justice in the Old Republic. Now you too can protect the galaxy with this real working lightsaber!',
        price: 700000,
        currency: 'imperial credits',
        availability: '',
        disclaimer: 'Not responsible for death, dismemberment, or loss of limb caused by misuse of product. Seriously, this is a blade of pure energy intended for use by highly-trained space wizards. Do you really need a warning?'
    },
    {
        id: 2,
        sku: 'FLUX-1985',
        name: 'Flux Capacitor',
        description: 'The great Dr. Emmett \"Doc\" Brown came up with the idea for the flux capacitor after falling off the toilet he was standing on while hanging a clock and hitting his head on the sink. Skip the concussion and order your own flux capacitor today ',
        availability: 'Sold Out',
        disclaimer: 'Not responsible for universe-destroying paradoxes.	Activation requires 1.21 gigawatts of electricity. Fusion power recommended, will run on plutonium or lightning. Compatibility not guaranteed with vehicles other than 1981, 1982, or 1983 DeLorean',
        variant: '',
        price: 0,
        currency: ''
    },
    {
        id: 3,
        sku: 'WAND-5597',
        name: 'Magic Wand',
        variant: '11", Holly, Phoenix Feather Core',
        description: 'Every good wizard needs a wand.',
        price: 7,
        currency: 'galleons',
        availability: 'Sold Out',
        disclaimer: 'Muggles are not supposed to have wands.'
    }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Josh\'s Super Awesome Store 3';
        this.products = PRODUCTS;
    }
    AppComponent.prototype.onSelect = function (product) {
        this.selectedProduct = product;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  \n  <h1>{{title}}</h1>\n  <ul class=\"product-list\">\n\t<li *ngFor=\"let product of products\" (click)=\"onSelect(product)\" [class.selected]=\"product==selectedProduct\">\n\t\t<span class=\"product-id\">\n\t\t\t{{product.id}}\n\t\t</span>\n\t\t<span class=\"product-sku\">{{product.sku}}</span>\n\t\t\n\t\t<span class=\"product-name\" >\n\t\t\t<span>{{product.name}}</span> \n\t\t \n\t\t\t<span *ngIf=\"product.variant\">({{product.variant}})</span>\n\t\t </span>\n\t</li>\n  </ul>\n\n  <product-detail [product]=\"selectedProduct\"></product-detail>\n   \n\n  ",
        styles: ["\n\t.product-list {\n\t\tmargin: 0 0 2em 0;\n\t\tlist-style-type: none;\n\t\tpadding: 0;\n\t\twidth: 40em;\n\t}\n\t.product-list .product-id {\n\t\twidth: 2em;\n\t\tdisplay: inline-block;\n\t}\n\t.product-list .product-sku {\n\t\twidth: 8em;\n\t\tdisplay: inline-block;\n\t}\n\t.selected {\n\t\tbackground-color: #CFD8DC !important;\n\t\tcolor: white;\n\t}\n\t\n  .product-list li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .2em .5em .2em .5em;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .product-list li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .product-list li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n\tfont-weight: bold;\n  }\n  .product-list .product-name, .product-list .product-id, .product-list .product-sku  {\n    position: relative;\n    top: 3px;\n  }  \n  "]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map