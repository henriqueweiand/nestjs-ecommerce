"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ProductController", {
    enumerable: true,
    get: function() {
        return ProductController;
    }
});
const _createproduct = require("../../application/ecommerce/use-case/create-product");
const _getproduct = require("../../application/ecommerce/use-case/get-product");
const _cachemanager = require("@nestjs/cache-manager");
const _common = require("@nestjs/common");
const _swagger = require("@nestjs/swagger");
const _httpcacheinterceptor = require("../persistence/cache/interceptor/http-cache.interceptor");
const _createproductdto = require("./dto/create-product.dto");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
let ProductController = class ProductController {
    async getAll() {
        const response = this.getProductUseCase.execute({});
        return response;
    }
    create(createProductDto) {
        const response = this.createProductUseCase.execute(createProductDto);
        return response;
    }
    constructor(createProductUseCase, getProductUseCase){
        this.createProductUseCase = createProductUseCase;
        this.getProductUseCase = getProductUseCase;
    }
};
_ts_decorate([
    (0, _common.Get)(''),
    (0, _cachemanager.CacheKey)('products'),
    (0, _common.UseInterceptors)(_httpcacheinterceptor.HttpCacheInterceptor),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", Promise)
], ProductController.prototype, "getAll", null);
_ts_decorate([
    (0, _common.Post)(''),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createproductdto.CreateProductDto === "undefined" ? Object : _createproductdto.CreateProductDto
    ]),
    _ts_metadata("design:returntype", void 0)
], ProductController.prototype, "create", null);
ProductController = _ts_decorate([
    (0, _common.Controller)('/product'),
    (0, _swagger.ApiTags)('Product'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createproduct.CreateProductUseCase === "undefined" ? Object : _createproduct.CreateProductUseCase,
        typeof _getproduct.GetProductUseCase === "undefined" ? Object : _getproduct.GetProductUseCase
    ])
], ProductController);

//# sourceMappingURL=product.controller.js.map