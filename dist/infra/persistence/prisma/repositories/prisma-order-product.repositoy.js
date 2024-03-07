"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PrismaOrderProductRepository", {
    enumerable: true,
    get: function() {
        return PrismaOrderProductRepository;
    }
});
const _common = require("@nestjs/common");
const _prismaorderproductmapper = require("../mapper/prisma-order-product-mapper");
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
let PrismaOrderProductRepository = class PrismaOrderProductRepository {
    async create(orderProduct) {
        const data = _prismaorderproductmapper.PrismaOrderProductMapper.toPrisma(orderProduct);
        const createdOrderProduct = await this.prisma.orderProduct.create({
            data
        });
        return _prismaorderproductmapper.PrismaOrderProductMapper.toDomain(createdOrderProduct);
    }
    async createMany(orderProducts) {
        if (orderProducts.length === 0) {
            return [];
        }
        const data = _prismaorderproductmapper.PrismaOrderProductMapper.toPrismaCreateMany(orderProducts);
        const createdOrderProducts = await this.prisma.$transaction(data.map((item)=>this.prisma.orderProduct.create({
                data: item
            })));
        return createdOrderProducts.map(_prismaorderproductmapper.PrismaOrderProductMapper.toDomain);
    }
    constructor(prisma){
        this.prisma = prisma;
    }
};
PrismaOrderProductRepository = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _prismaservice.PrismaService === "undefined" ? Object : _prismaservice.PrismaService
    ])
], PrismaOrderProductRepository);

//# sourceMappingURL=prisma-order-product.repositoy.js.map