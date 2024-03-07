"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PrismaOrderDetailsMapper", {
    enumerable: true,
    get: function() {
        return PrismaOrderDetailsMapper;
    }
});
const _order = require("../../../../domain/ecommerce/order");
const _prismaorderproductmapper = require("./prisma-order-product-mapper");
let PrismaOrderDetailsMapper = class PrismaOrderDetailsMapper {
    static toDomain(entity) {
        const model = new _order.Order({
            id: entity.id,
            user: entity.user,
            total: entity.total,
            orderProduct: !!entity.orderProduct ? entity.orderProduct.map((item)=>_prismaorderproductmapper.PrismaOrderProductMapper.toDomain(item)) : [],
            status: entity.status,
            paymentId: entity.paymentId,
            paymentMethod: entity.paymentMethod
        });
        return model;
    }
};

//# sourceMappingURL=prisma-order-details-mapper.js.map