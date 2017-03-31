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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Created by Joshua_Barta on 3/27/2017.
 */
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var logger_service_1 = require("./logger.service");
var ProductService = (function () {
    function ProductService(logger, http) {
        this.logger = logger;
        this.http = http;
        this.productsUrl = 'api/products';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    ProductService.prototype.getProduct = function (id) {
        var url = this.productsUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    ProductService.prototype.getProducts = function () {
        return this.http.get(this.productsUrl).toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    ProductService.prototype.handleError = function (error) {
        this.logger.logError('ProductService failed to load products!');
        return Promise.reject(error.message || error);
    };
    // based on https://angular.io/docs/ts/latest/tutorial/toh-pt4.html#!#slow
    ProductService.prototype.getProductsSlow = function () {
        var _this = this;
        return new Promise(function (resolve) {
            // Simulate server latency with 2 second delay
            _this.logger.logInfo('making (mock) call to server...');
            setTimeout(function () {
                resolve(_this.getProducts());
                _this.logger.logInfo('resolved (mock) call to server!');
            }, 2000);
        });
    };
    ProductService.prototype.getProductsCached = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.logger.logInfo('getting product data');
            if (_this.cachedProducts) {
                _this.logger.logInfo('return cached products');
                resolve(_this.cachedProducts);
            }
            else {
                _this.logger.logInfo('get products from (mock) server');
                _this.getProductsSlow()
                    .then(function (products) { return resolve(_this.cachedProducts = products); });
            }
        });
    };
    ProductService.prototype.create = function (/*id: number,*/ sku, name, variant, description, price, currency, availability, disclaimer) {
        return this.http
            .post(this.productsUrl, JSON.stringify({
            /*id: number,*/
            sku: sku,
            name: name,
            variant: variant,
            description: description,
            price: price,
            currency: currency,
            availability: availability,
            disclaimer: disclaimer
        }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    ProductService.prototype.update = function (product) {
        var url = this.productsUrl + "/" + product.id;
        return this.http
            .put(url, JSON.stringify(product), { headers: this.headers })
            .toPromise()
            .then(function () { return product; })
            .catch(this.handleError);
    };
    ProductService.prototype.delete = function (id) {
        var url = this.productsUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable(),
    __param(0, core_2.Inject(logger_service_1.LoggerService)),
    __metadata("design:paramtypes", [logger_service_1.LoggerService, http_1.Http])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map