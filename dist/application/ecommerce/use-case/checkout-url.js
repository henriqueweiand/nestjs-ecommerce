"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CheckoutUrlUseCase", {
    enumerable: true,
    get: function() {
        return CheckoutUrlUseCase;
    }
});
const _common = require("@nestjs/common");
const _paymentrepositoy = require("../ports/payment.repositoy");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let CheckoutUrlUseCase = class CheckoutUrlUseCase {
    async execute(orderId) {
        const URL = await this.paymentRepository.generateUrl(orderId);
        return URL;
    }
    constructor(paymentRepository){
        this.paymentRepository = paymentRepository;
    }
};
CheckoutUrlUseCase = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _paymentrepositoy.PaymentRepository === "undefined" ? Object : _paymentrepositoy.PaymentRepository
    ])
], CheckoutUrlUseCase);

//# sourceMappingURL=checkout-url.js.map