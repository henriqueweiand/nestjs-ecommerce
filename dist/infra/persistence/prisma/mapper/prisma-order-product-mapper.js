"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PrismaOrderProductMapper", {
    enumerable: true,
    get: function() {
        return PrismaOrderProductMapper;
    }
});
const _orderproduct = require("../../../../domain/ecommerce/order-product");
let PrismaOrderProductMapper = class PrismaOrderProductMapper {
    static toDomain(entity) {
        const model = new _orderproduct.OrderProduct({
            id: entity.id,
            product: entity.productId,
            orderId: entity.orderId,
            price: entity.price
        });
        return model;
    }
    static toPrisma(orderProducts) {
        return {
            productId: orderProducts.product,
            orderId: orderProducts.orderId,
            price: orderProducts.price
        };
    }
    static toPrismaCreateMany(orderProducts) {
        return orderProducts.map((product)=>({
                productId: product.product,
                orderId: product.orderId,
                price: product.price
            }));
    }
};

//# sourceMappingURL=prisma-order-product-mapper.js.map