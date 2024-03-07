"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MongooseOrderProductMapper", {
    enumerable: true,
    get: function() {
        return MongooseOrderProductMapper;
    }
});
const _orderproduct = require("../../../../domain/ecommerce/order-product");
let MongooseOrderProductMapper = class MongooseOrderProductMapper {
    static toDomain(entity) {
        const model = new _orderproduct.OrderProduct({
            id: entity._id.toString(),
            product: entity.product.toString(),
            price: entity.price
        });
        return model;
    }
    static toMongoose(orderProducts) {
        return {
            price: orderProducts.price,
            product: orderProducts.product
        };
    }
};

//# sourceMappingURL=mongoose-order-product-mapper.js.map