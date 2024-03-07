"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "OrderController", {
    enumerable: true,
    get: function() {
        return OrderController;
    }
});
const _createorder = require("../../application/ecommerce/use-case/create-order");
const _getorder = require("../../application/ecommerce/use-case/get-order");
const _getorders = require("../../application/ecommerce/use-case/get-orders");
const _httpcacheinterceptor = require("../persistence/cache/interceptor/http-cache.interceptor");
const _cachemanager = require("@nestjs/cache-manager");
const _common = require("@nestjs/common");
const _swagger = require("@nestjs/swagger");
const _createorderdto = require("./dto/create-order.dto");
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
let OrderController = class OrderController {
    getOne(id) {
        const response = this.getOrderUseCase.execute(id);
        return response;
    }
    getAll() {
        const response = this.getOrdersUseCase.execute({});
        return response;
    }
    create(createOrderDto) {
        const response = this.createOrderUseCase.execute(createOrderDto);
        return response;
    }
    constructor(createOrderUseCase, getOrderUseCase, getOrdersUseCase){
        this.createOrderUseCase = createOrderUseCase;
        this.getOrderUseCase = getOrderUseCase;
        this.getOrdersUseCase = getOrdersUseCase;
    }
};
_ts_decorate([
    (0, _common.Get)(':id'),
    (0, _cachemanager.CacheKey)('order'),
    (0, _common.UseInterceptors)(_httpcacheinterceptor.HttpCacheInterceptor),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", void 0)
], OrderController.prototype, "getOne", null);
_ts_decorate([
    (0, _common.Get)(''),
    (0, _cachemanager.CacheKey)('orders'),
    (0, _common.UseInterceptors)(_httpcacheinterceptor.HttpCacheInterceptor),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", void 0)
], OrderController.prototype, "getAll", null);
_ts_decorate([
    (0, _common.Post)(''),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createorderdto.CreateOrderDto === "undefined" ? Object : _createorderdto.CreateOrderDto
    ]),
    _ts_metadata("design:returntype", void 0)
], OrderController.prototype, "create", null);
OrderController = _ts_decorate([
    (0, _common.Controller)('/order'),
    (0, _swagger.ApiTags)('Order'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createorder.CreateOrderUseCase === "undefined" ? Object : _createorder.CreateOrderUseCase,
        typeof _getorder.GetOrderUseCase === "undefined" ? Object : _getorder.GetOrderUseCase,
        typeof _getorders.GetOrdersUseCase === "undefined" ? Object : _getorders.GetOrdersUseCase
    ])
], OrderController);

//# sourceMappingURL=order.controller.js.map