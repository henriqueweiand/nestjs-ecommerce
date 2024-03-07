"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CheckoutCompleteUseCase", {
    enumerable: true,
    get: function() {
        return CheckoutCompleteUseCase;
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
let CheckoutCompleteUseCase = class CheckoutCompleteUseCase {
    /*
    * This method is not abstracted, but it is a good example of how to handle webhooks in a controller.
    */ async execute({ headers, req }) {
        const signature = headers['stripe-signature'];
        if (!signature) {
            throw new Error('Invalid signature');
        }
        const order = await this.paymentRepository.complete({
            signature,
            req: req.rawBody
        });
        return order;
    }
    constructor(paymentRepository){
        this.paymentRepository = paymentRepository;
    }
};
CheckoutCompleteUseCase = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _paymentrepositoy.PaymentRepository === "undefined" ? Object : _paymentrepositoy.PaymentRepository
    ])
], CheckoutCompleteUseCase);

//# sourceMappingURL=checkout-complete.js.map