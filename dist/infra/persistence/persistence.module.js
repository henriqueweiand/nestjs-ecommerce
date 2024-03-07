"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PersistenceModule", {
    enumerable: true,
    get: function() {
        return PersistenceModule;
    }
});
const _common = require("@nestjs/common");
const _mongoosemodule = require("./mongoose/mongoose.module");
const _prismamodule = require("./prisma/prisma.module");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let PersistenceModule = class PersistenceModule {
    static async register({ global = false, type }) {
        return {
            global,
            module: PersistenceModule,
            imports: [
                type === 'mongoose' ? _mongoosemodule.MongooseModule : _prismamodule.PrismaModule
            ],
            exports: [
                type === 'mongoose' ? _mongoosemodule.MongooseModule : _prismamodule.PrismaModule
            ]
        };
    }
};
PersistenceModule = _ts_decorate([
    (0, _common.Module)({})
], PersistenceModule);

//# sourceMappingURL=persistence.module.js.map