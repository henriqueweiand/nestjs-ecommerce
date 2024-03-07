"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MongooseOrderDetailsMapper", {
    enumerable: true,
    get: function() {
        return MongooseOrderDetailsMapper;
    }
});
const _order = require("../../../../domain/ecommerce/order");
const _mongooseorderproductmapper = require("./mongoose-order-product-mapper");
let MongooseOrderDetailsMapper = class MongooseOrderDetailsMapper {
    static toDomain(entity) {
        const model = new _order.Order({
            id: entity._id.toString(),
            user: entity.user.toString(),
            total: entity.total,
            orderProduct: !!entity.orderProduct ? entity.orderProduct.map((order)=>_mongooseorderproductmapper.MongooseOrderProductMapper.toDomain(order)) : [],
            status: entity.status,
            paymentId: entity.paymentId,
            paymentMethod: entity.paymentMethod
        });
        return model;
    }
};

//# sourceMappingURL=mongoose-order-details-mapper.js.map