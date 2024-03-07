"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "HttpModule", {
    enumerable: true,
    get: function() {
        return HttpModule;
    }
});
const _common = require("@nestjs/common");
const _cachemodule = require("../persistence/cache/cache.module");
const _ordercontroller = require("./order.controller");
const _productcontroller = require("./product.controller");
const _usercontroller = require("./user.controller");
const _createorder = require("../../application/ecommerce/use-case/create-order");
const _createproduct = require("../../application/ecommerce/use-case/create-product");
const _createuser = require("../../application/ecommerce/use-case/create-user");
const _getorder = require("../../application/ecommerce/use-case/get-order");
const _getproduct = require("../../application/ecommerce/use-case/get-product");
const _getuser = require("../../application/ecommerce/use-case/get-user");
const _checkouturl = require("../../application/ecommerce/use-case/checkout-url");
const _checkoutcontroller = require("./checkout.controller");
const _paymentmodule = require("../payment/payment.module");
const _getorders = require("../../application/ecommerce/use-case/get-orders");
const _checkoutcomplete = require("../../application/ecommerce/use-case/checkout-complete");
const _appcontroller = require("./app.controller");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let HttpModule = class HttpModule {
};
HttpModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _paymentmodule.PaymentModule,
            _cachemodule.CacheManagerModule
        ],
        controllers: [
            _appcontroller.AppController,
            _productcontroller.ProductController,
            _usercontroller.UserController,
            _ordercontroller.OrderController,
            _checkoutcontroller.CheckoutController
        ],
        providers: [
            _createproduct.CreateProductUseCase,
            _getproduct.GetProductUseCase,
            _createuser.CreateUserUseCase,
            _getuser.GetUserUseCase,
            _getorder.GetOrderUseCase,
            _getorders.GetOrdersUseCase,
            _createorder.CreateOrderUseCase,
            _checkouturl.CheckoutUrlUseCase,
            _checkoutcomplete.CheckoutCompleteUseCase
        ],
        exports: []
    })
], HttpModule);

//# sourceMappingURL=http.module.js.map