"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PrismaProductMapper", {
    enumerable: true,
    get: function() {
        return PrismaProductMapper;
    }
});
const _product = require("../../../../domain/ecommerce/product");
let PrismaProductMapper = class PrismaProductMapper {
    static toDomain(entity) {
        const model = new _product.Product({
            id: entity.id,
            title: entity.title,
            price: entity.price
        });
        return model;
    }
    static toPrisma(product) {
        return {
            title: product.title,
            price: product.price
        };
    }
};

//# sourceMappingURL=prisma-product-mapper.js.map