"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MongooseOrderMapper", {
    enumerable: true,
    get: function() {
        return MongooseOrderMapper;
    }
});
const _order = require("../../../../domain/ecommerce/order");
let MongooseOrderMapper = class MongooseOrderMapper {
    static toDomain(entity) {
        const model = new _order.Order({
            id: entity._id.toString(),
            user: entity.user.toString(),
            total: entity.total,
            status: entity.status,
            paymentId: entity.paymentId,
            paymentMethod: entity.paymentMethod
        });
        return model;
    }
    static toMongoose(order) {
        return {
            total: order.total,
            user: order.user,
            status: order.status,
            paymentId: order?.paymentId,
            paymentMethod: order?.paymentMethod
        };
    }
};

//# sourceMappingURL=mongoose-order-mapper.js.map