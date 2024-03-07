"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "StripeModule", {
    enumerable: true,
    get: function() {
        return StripeModule;
    }
});
const _paymentrepositoy = require("../../../application/ecommerce/ports/payment.repositoy");
const _common = require("@nestjs/common");
const _stripepaymentrepositoy = require("./stripe-payment.repositoy");
const _env = require("../../env");
const _stripeservice = require("./stripe.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let StripeModule = class StripeModule {
};
StripeModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _env.EnvModule
        ],
        providers: [
            _stripeservice.StripeService,
            {
                provide: _paymentrepositoy.PaymentRepository,
                useClass: _stripepaymentrepositoy.StripePaymentRepository
            }
        ],
        exports: [
            _paymentrepositoy.PaymentRepository
        ]
    })
], StripeModule);

//# sourceMappingURL=stripe.module.js.map