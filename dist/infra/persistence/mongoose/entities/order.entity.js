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
    Order: function() {
        return Order;
    },
    OrderSchema: function() {
        return OrderSchema;
    }
});
const _mongoose = require("@nestjs/mongoose");
const _mongoose1 = /*#__PURE__*/ _interop_require_default(require("mongoose"));
const _classtransformer = require("class-transformer");
const _orderproductentity = require("./order-product.entity");
const _userentity = require("./user.entity");
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
let Order = class Order {
};
_ts_decorate([
    (0, _mongoose.Prop)({
        type: _mongoose1.default.Schema.Types.ObjectId,
        ref: _userentity.User.name
    }),
    (0, _classtransformer.Type)(()=>_userentity.User),
    _ts_metadata("design:type", typeof _userentity.User === "undefined" ? Object : _userentity.User)
], Order.prototype, "user", void 0);
_ts_decorate([
    (0, _mongoose.Prop)({
        type: [
            {
                type: _mongoose1.default.Schema.Types.ObjectId,
                ref: _orderproductentity.OrderProduct.name
            }
        ]
    }),
    _ts_metadata("design:type", Array)
], Order.prototype, "orderProduct", void 0);
_ts_decorate([
    (0, _mongoose.Prop)(),
    _ts_metadata("design:type", Number)
], Order.prototype, "total", void 0);
_ts_decorate([
    (0, _mongoose.Prop)({
        default: 'open'
    }),
    _ts_metadata("design:type", String)
], Order.prototype, "status", void 0);
_ts_decorate([
    (0, _mongoose.Prop)({
        index: true
    }),
    _ts_metadata("design:type", String)
], Order.prototype, "paymentId", void 0);
_ts_decorate([
    (0, _mongoose.Prop)({
        index: true
    }),
    _ts_metadata("design:type", String)
], Order.prototype, "paymentMethod", void 0);
Order = _ts_decorate([
    (0, _mongoose.Schema)()
], Order);
const OrderSchema = _mongoose.SchemaFactory.createForClass(Order);

//# sourceMappingURL=order.entity.js.map