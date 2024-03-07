"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MongooseUserMapper", {
    enumerable: true,
    get: function() {
        return MongooseUserMapper;
    }
});
const _user = require("../../../../domain/ecommerce/user");
let MongooseUserMapper = class MongooseUserMapper {
    static toDomain(entity) {
        const model = new _user.User({
            id: entity._id.toString(),
            name: entity.name
        });
        return model;
    }
    static toMongoose(user) {
        return {
            name: user.name
        };
    }
};

//# sourceMappingURL=mongoose-user-mapper.js.map