"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Product: function() {
        return Product;
    },
    ProductSchema: function() {
        return ProductSchema;
    }
});
const _mongoose = require("@nestjs/mongoose");
const _mongoose1 = /*#__PURE__*/ _interop_require_default(require("mongoose"));
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
let Product = class Product {
};
_ts_decorate([
    (0, _mongoose.Prop)(),
    _ts_metadata("design:type", String)
], Product.prototype, "title", void 0);
_ts_decorate([
    (0, _mongoose.Prop)(),
    _ts_metadata("design:type", Number)
], Product.prototype, "price", void 0);
_ts_decorate([
    (0, _mongoose.Prop)({
        type: [
            {
                type: _mongoose1.default.Schema.Types.ObjectId,
                ref: 'OrderProduct'
            }
        ]
    }),
    _ts_metadata("design:type", Array)
], Product.prototype, "orderProduct", void 0);
Product = _ts_decorate([
    (0, _mongoose.Schema)()
], Product);
const ProductSchema = _mongoose.SchemaFactory.createForClass(Product);

//# sourceMappingURL=product.entity.js.map