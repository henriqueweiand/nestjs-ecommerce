"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PrismaOrderRepository", {
    enumerable: true,
    get: function() {
        return PrismaOrderRepository;
    }
});
const _common = require("@nestjs/common");
const _prismaorderdetailsmapper = require("../mapper/prisma-order-details-mapper");
const _prismaordermapper = require("../mapper/prisma-order-mapper");
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
let PrismaOrderRepository = class PrismaOrderRepository {
    async findMany() {
        const orders = await this.prisma.order.findMany({
            include: {
                orderProduct: true
            }
        });
        return orders.map((item)=>_prismaorderdetailsmapper.PrismaOrderDetailsMapper.toDomain(item));
    }
    async findById(id) {
        const order = await this.prisma.order.findFirst({
            where: {
                id
            },
            include: {
                orderProduct: true
            }
        });
        return _prismaorderdetailsmapper.PrismaOrderDetailsMapper.toDomain(order);
    }
    async create(orderInput) {
        const data = _prismaordermapper.PrismaOrderMapper.toPrisma(orderInput);
        const orderProducts = orderInput.orderProduct.map((orderProduct)=>({
                productId: orderProduct.product,
                price: orderProduct.price
            }));
        const order = await this.prisma.order.create({
            data: {
                ...data,
                orderProduct: {
                    create: orderProducts
                }
            },
            include: {
                orderProduct: true
            }
        });
        return _prismaordermapper.PrismaOrderMapper.toDomain(order);
    }
    async update(orderId, orderInput) {
        const data = _prismaordermapper.PrismaOrderMapper.toPrisma(orderInput);
        const order = await this.prisma.order.update({
            where: {
                id: orderId
            },
            data
        });
        return _prismaordermapper.PrismaOrderMapper.toDomain(order);
    }
    constructor(prisma){
        this.prisma = prisma;
    }
};
PrismaOrderRepository = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _prismaservice.PrismaService === "undefined" ? Object : _prismaservice.PrismaService
    ])
], PrismaOrderRepository);

//# sourceMappingURL=prisma-order.repositoy.js.map