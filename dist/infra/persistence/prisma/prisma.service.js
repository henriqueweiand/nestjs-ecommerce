"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PrismaService", {
    enumerable: true,
    get: function() {
        return PrismaService;
    }
});
const _common = require("@nestjs/common");
const _client = require("@prisma/client");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let PrismaService = class PrismaService extends _client.PrismaClient {
    onModuleInit() {
        return this.$connect();
    }
    onModuleDestroy() {
        return this.$disconnect();
    }
    constructor(){
        super({
            log: [
                'warn',
                'error'
            ]
        });
    }
};
PrismaService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [])
], PrismaService);

//# sourceMappingURL=prisma.service.js.map