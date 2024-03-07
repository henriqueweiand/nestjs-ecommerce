"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MongooseProductMapper", {
    enumerable: true,
    get: function() {
        return MongooseProductMapper;
    }
});
const _product = require("../../../../domain/ecommerce/product");
let MongooseProductMapper = class MongooseProductMapper {
    static toDomain(entity) {
        const model = new _product.Product({
            id: entity._id.toString(),
            title: entity.title,
            price: entity.price
        });
        return model;
    }
    static toMongoose(product) {
        return {
            title: product.title,
            price: product.price
        };
    }
};

//# sourceMappingURL=mongoose-product-mapper.js.map