"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateOrderDto", {
    enumerable: true,
    get: function() {
        return CreateOrderDto;
    }
});
const _swagger = require("@nestjs/swagger");
const _classvalidator = require("class-validator");
const _createorderproductdto = require("./create-order-product.dto");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let CreateOrderDto = class CreateOrderDto {
};
_ts_decorate([
    (0, _swagger.ApiProperty)(),
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.IsNotEmpty)(),
    _ts_metadata("design:type", String)
], CreateOrderDto.prototype, "user", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        required: true,
        type: _createorderproductdto.CreateOrderProductDto,
        nullable: false,
        isArray: true
    }),
    (0, _classvalidator.IsNotEmpty)(),
    _ts_metadata("design:type", Array)
], CreateOrderDto.prototype, "orderProduct", void 0);

//# sourceMappingURL=create-order.dto.js.map