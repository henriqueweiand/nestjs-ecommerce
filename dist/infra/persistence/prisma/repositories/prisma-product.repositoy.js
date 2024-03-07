"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PrismaProductRepository", {
    enumerable: true,
    get: function() {
        return PrismaProductRepository;
    }
});
const _common = require("@nestjs/common");
const _prismaproductmapper = require("../mapper/prisma-product-mapper");
const _prismaservice = require("../prisma.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let PrismaProductRepository = class PrismaProductRepository {
    async findMany() {
        const products = await this.prisma.product.findMany();
        return products.map((item)=>_prismaproductmapper.PrismaProductMapper.toDomain(item));
    }
    async create(product) {
        const data = _prismaproductmapper.PrismaProductMapper.toPrisma(product);
        const entity = await this.prisma.product.create({
            data
        });
        return _prismaproductmapper.PrismaProductMapper.toDomain(entity);
    }
    constructor(prisma){
        this.prisma = prisma;
    }
};
PrismaProductRepository = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _prismaservice.PrismaService === "undefined" ? Object : _prismaservice.PrismaService
    ])
], PrismaProductRepository);

//# sourceMappingURL=prisma-product.repositoy.js.map