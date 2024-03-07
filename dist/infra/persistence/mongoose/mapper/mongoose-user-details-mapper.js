"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MongooseUserDetailsMapper", {
    enumerable: true,
    get: function() {
        return MongooseUserDetailsMapper;
    }
});
const _user = require("../../../../domain/ecommerce/user");
const _mongooseordermapper = require("./mongoose-order-mapper");
let MongooseUserDetailsMapper = class MongooseUserDetailsMapper {
    static toDomain(entity) {
        const model = new _user.User({
            id: entity._id.toString(),
            name: entity.name,
            orders: !!entity.orders ? entity.orders.map((order)=>_mongooseordermapper.MongooseOrderMapper.toDomain(order)) : []
        });
        return model;
    }
};

//# sourceMappingURL=mongoose-user-details-mapper.js.map