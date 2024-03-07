"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PrismaUserMapper", {
    enumerable: true,
    get: function() {
        return PrismaUserMapper;
    }
});
const _user = require("../../../../domain/ecommerce/user");
let PrismaUserMapper = class PrismaUserMapper {
    static toDomain(entity) {
        const model = new _user.User({
            id: entity.id,
            name: entity.name
        });
        return model;
    }
    static toPrisma(user) {
        return {
            name: user.name
        };
    }
};

//# sourceMappingURL=prisma-user-mapper.js.map