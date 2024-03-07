"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PrismaModule", {
    enumerable: true,
    get: function() {
        return PrismaModule;
    }
});
const _productrepositoy = require("../../../application/ecommerce/ports/product.repositoy");
const _common = require("@nestjs/common");
const _prismaservice = require("./prisma.service");
const _env = require("../../env");
const _orderproductrepositoy = require("../../../application/ecommerce/ports/order-product.repositoy");
const _userrepositoy = require("../../../application/ecommerce/ports/user.repositoy");
const _orderrepositoy = require("../../../application/ecommerce/ports/order.repositoy");
const _prismaproductrepositoy = require("./repositories/prisma-product.repositoy");
const _prismauserrepositoy = require("./repositories/prisma-user.repositoy");
const _prismaorderrepositoy = require("./repositories/prisma-order.repositoy");
const _prismaorderproductrepositoy = require("./repositories/prisma-order-product.repositoy");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let PrismaModule = class PrismaModule {
};
PrismaModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _env.EnvModule
        ],
        providers: [
            _prismaservice.PrismaService,
            {
                provide: _productrepositoy.ProductRepository,
                useClass: _prismaproductrepositoy.PrismaProductRepository
            },
            {
                provide: _userrepositoy.UserRepository,
                useClass: _prismauserrepositoy.PrismaUserRepository
            },
            {
                provide: _orderrepositoy.OrderRepository,
                useClass: _prismaorderrepositoy.PrismaOrderRepository
            },
            {
                provide: _orderproductrepositoy.OrderProductRepository,
                useClass: _prismaorderproductrepositoy.PrismaOrderProductRepository
            }
        ],
        exports: [
            _prismaservice.PrismaService,
            _productrepositoy.ProductRepository,
            _userrepositoy.UserRepository,
            _orderrepositoy.OrderRepository,
            _orderproductrepositoy.OrderProductRepository
        ]
    })
], PrismaModule);

//# sourceMappingURL=prisma.module.js.map