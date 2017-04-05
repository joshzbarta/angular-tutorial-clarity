"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mock_products_1 = require("../mock-products");
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var products = mock_products_1.PRODUCTS;
        return { products: products };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map