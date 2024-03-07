"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "StripeService", {
    enumerable: true,
    get: function() {
        return StripeService;
    }
});
const _env = require("../../env");
const _common = require("@nestjs/common");
const _stripe = /*#__PURE__*/ _interop_require_default(require("stripe"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let StripeService = class StripeService {
    getInstance() {
        const STRIPE_API_KEY = this.envService.get("STRIPE_API_KEY");
        const stripe = new _stripe.default(STRIPE_API_KEY, {
            apiVersion: "2023-10-16",
            typescript: true
        });
        return stripe;
    }
    constructor(envService){
        this.envService = envService;
    }
};
StripeService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _env.EnvService === "undefined" ? Object : _env.EnvService
    ])
], StripeService);

//# sourceMappingURL=stripe.service.js.map