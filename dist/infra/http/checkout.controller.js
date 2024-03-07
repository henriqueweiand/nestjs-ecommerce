"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CheckoutController", {
    enumerable: true,
    get: function() {
        return CheckoutController;
    }
});
const _checkouturl = require("../../application/ecommerce/use-case/checkout-url");
const _cachemanager = require("@nestjs/cache-manager");
const _common = require("@nestjs/common");
const _checkoutcomplete = require("../../application/ecommerce/use-case/checkout-complete");
const _swagger = require("@nestjs/swagger");
const _httpcacheinterceptor = require("../persistence/cache/interceptor/http-cache.interceptor");
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
let CheckoutController = class CheckoutController {
    checkoutUrl(orderId) {
        const response = this.checkoutUrlUseCase.execute(orderId);
        return response;
    }
    checkoutComplete(requestHeaders, req) {
        const response = this.checkoutCompleteUseCase.execute({
            headers: requestHeaders,
            req: req
        });
        return response;
    }
    constructor(checkoutUrlUseCase, checkoutCompleteUseCase){
        this.checkoutUrlUseCase = checkoutUrlUseCase;
        this.checkoutCompleteUseCase = checkoutCompleteUseCase;
    }
};
_ts_decorate([
    (0, _common.Get)(':orderId/url'),
    (0, _cachemanager.CacheKey)(':orderId/url'),
    (0, _common.UseInterceptors)(_httpcacheinterceptor.HttpCacheInterceptor),
    _ts_param(0, (0, _common.Param)('orderId')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", void 0)
], CheckoutController.prototype, "checkoutUrl", null);
_ts_decorate([
    (0, _common.Post)('completed'),
    _ts_param(0, (0, _common.Headers)()),
    _ts_param(1, (0, _common.Req)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Object,
        typeof _common.RawBodyRequest === "undefined" ? Object : _common.RawBodyRequest
    ]),
    _ts_metadata("design:returntype", void 0)
], CheckoutController.prototype, "checkoutComplete", null);
CheckoutController = _ts_decorate([
    (0, _common.Controller)('/checkout'),
    (0, _swagger.ApiTags)('Checkout'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _checkouturl.CheckoutUrlUseCase === "undefined" ? Object : _checkouturl.CheckoutUrlUseCase,
        typeof _checkoutcomplete.CheckoutCompleteUseCase === "undefined" ? Object : _checkoutcomplete.CheckoutCompleteUseCase
    ])
], CheckoutController);

//# sourceMappingURL=checkout.controller.js.map