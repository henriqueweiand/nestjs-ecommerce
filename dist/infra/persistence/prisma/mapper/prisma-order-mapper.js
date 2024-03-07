"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PrismaOrderMapper", {
    enumerable: true,
    get: function() {
        return PrismaOrderMapper;
    }
});
const _order = require("../../../../domain/ecommerce/order");
let PrismaOrderMapper = class PrismaOrderMapper {
    static toDomain(entity) {
        const model = new _order.Order({
            id: entity.id,
            user: entity.user,
            total: entity.total,
            paymentId: entity.paymentId,
            paymentMethod: entity.paymentMethod
        });
        return model;
    }
    static toPrisma(order) {
        return {
            user: order.user,
            total: order.total,
            id: order.id,
            paymentId: order?.paymentId,
            paymentMethod: order?.paymentMethod
        };
    }
};

//# sourceMappingURL=prisma-order-mapper.js.map