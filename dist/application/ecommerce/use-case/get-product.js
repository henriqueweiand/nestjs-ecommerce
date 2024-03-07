"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "GetProductUseCase", {
    enumerable: true,
    get: function() {
        return GetProductUseCase;
    }
});
const _common = require("@nestjs/common");
const _productrepositoy = require("../ports/product.repositoy");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let GetProductUseCase = class GetProductUseCase {
    async execute({}) {
        const response = await this.productRepository.findMany();
        return response;
    }
    constructor(productRepository){
        this.productRepository = productRepository;
    }
};
GetProductUseCase = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _productrepositoy.ProductRepository === "undefined" ? Object : _productrepositoy.ProductRepository
    ])
], GetProductUseCase);

//# sourceMappingURL=get-product.js.map