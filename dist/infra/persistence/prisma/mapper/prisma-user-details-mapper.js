"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PrismaUserDetailsMapper", {
    enumerable: true,
    get: function() {
        return PrismaUserDetailsMapper;
    }
});
const _user = require("../../../../domain/ecommerce/user");
const _prismaordermapper = require("./prisma-order-mapper");
let PrismaUserDetailsMapper = class PrismaUserDetailsMapper {
    static toDomain(entity) {
        const model = new _user.User({
            id: entity.id,
            name: entity.name,
            orders: !!entity.orders ? entity.orders.map((item)=>_prismaordermapper.PrismaOrderMapper.toDomain(item)) : []
        });
        return model;
    }
};

//# sourceMappingURL=prisma-user-details-mapper.js.map