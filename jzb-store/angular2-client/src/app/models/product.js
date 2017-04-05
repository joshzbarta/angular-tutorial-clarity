"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product = (function () {
    function Product(name, state) {
        if (state === void 0) { state = 'inactive'; }
        this.name = name;
        this.state = state;
        this.variant = '';
        this.price = 0;
        this.currency = '';
    }
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=product.js.map