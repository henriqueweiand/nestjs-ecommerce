"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PrismaUserRepository", {
    enumerable: true,
    get: function() {
        return PrismaUserRepository;
    }
});
const _common = require("@nestjs/common");
const _prismausermapper = require("../mapper/prisma-user-mapper");
const _prismaservice = require("../prisma.service");
const _prismauserdetailsmapper = require("../mapper/prisma-user-details-mapper");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let PrismaUserRepository = class PrismaUserRepository {
    async findMany() {
        const users = await this.prisma.user.findMany({
            include: {
                orders: true
            }
        });
        return users.map((item)=>_prismauserdetailsmapper.PrismaUserDetailsMapper.toDomain(item));
    }
    async create(user) {
        const data = _prismausermapper.PrismaUserMapper.toPrisma(user);
        const entity = await this.prisma.user.create({
            data
        });
        return _prismausermapper.PrismaUserMapper.toDomain(entity);
    }
    async appendOrder(userId, orderId) {
        const user = await this.prisma.user.update({
            where: {
                id: userId
            },
            data: {
                orders: {
                    connect: {
                        id: orderId
                    }
                }
            }
        });
        return _prismausermapper.PrismaUserMapper.toDomain(user);
    }
    constructor(prisma){
        this.prisma = prisma;
    }
};
PrismaUserRepository = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _prismaservice.PrismaService === "undefined" ? Object : _prismaservice.PrismaService
    ])
], PrismaUserRepository);

//# sourceMappingURL=prisma-user.repositoy.js.map