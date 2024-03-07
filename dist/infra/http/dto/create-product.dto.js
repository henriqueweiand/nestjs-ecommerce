"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateProductDto", {
    enumerable: true,
    get: function() {
        return CreateProductDto;
    }
});
const _swagger = require("@nestjs/swagger");
const _classvalidator = require("class-validator");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let CreateProductDto = class CreateProductDto {
};
_ts_decorate([
    (0, _swagger.ApiProperty)(),
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.IsNotEmpty)(),
    _ts_metadata("design:type", String)
], CreateProductDto.prototype, "title", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)(),
    (0, _classvalidator.IsNumber)(),
    (0, _classvalidator.IsNotEmpty)(),
    _ts_metadata("design:type", Number)
], CreateProductDto.prototype, "price", void 0);

//# sourceMappingURL=create-product.dto.js.map