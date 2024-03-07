"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MongooseModule", {
    enumerable: true,
    get: function() {
        return MongooseModule;
    }
});
const _orderproductrepositoy = require("../../../application/ecommerce/ports/order-product.repositoy");
const _orderrepositoy = require("../../../application/ecommerce/ports/order.repositoy");
const _productrepositoy = require("../../../application/ecommerce/ports/product.repositoy");
const _userrepositoy = require("../../../application/ecommerce/ports/user.repositoy");
const _env = require("../../env");
const _common = require("@nestjs/common");
const _mongoose = require("@nestjs/mongoose");
const _orderproductentity = require("./entities/order-product.entity");
const _orderentity = require("./entities/order.entity");
const _productentity = require("./entities/product.entity");
const _userentity = require("./entities/user.entity");
const _mongooseorderproductrepositoy = require("./repositories/mongoose-order-product.repositoy");
const _mongooseorderrepositoy = require("./repositories/mongoose-order.repositoy");
const _mongooseproductrepositoy = require("./repositories/mongoose-product.repositoy");
const _mongooseuserrepositoy = require("./repositories/mongoose-user.repositoy");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let MongooseModule = class MongooseModule {
};
MongooseModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _mongoose.MongooseModule.forRootAsync({
                imports: [
                    _env.EnvModule
                ],
                useFactory: (envService)=>({
                        uri: envService.get('MONGODB_URL')
                    }),
                inject: [
                    _env.EnvService
                ]
            }),
            _mongoose.MongooseModule.forFeature([
                {
                    name: _userentity.User.name,
                    schema: _userentity.UserSchema
                },
                {
                    name: _productentity.Product.name,
                    schema: _productentity.ProductSchema
                },
                {
                    name: _orderentity.Order.name,
                    schema: _orderentity.OrderSchema
                },
                {
                    name: _orderproductentity.OrderProduct.name,
                    schema: _orderproductentity.OrderProductSchema
                }
            ])
        ],
        providers: [
            {
                provide: _productrepositoy.ProductRepository,
                useClass: _mongooseproductrepositoy.MongooseProductRepository
            },
            {
                provide: _userrepositoy.UserRepository,
                useClass: _mongooseuserrepositoy.MongooseUserRepository
            },
            {
                provide: _orderrepositoy.OrderRepository,
                useClass: _mongooseorderrepositoy.MongooseOrderRepository
            },
            {
                provide: _orderproductrepositoy.OrderProductRepository,
                useClass: _mongooseorderproductrepositoy.MongooseOrderProductRepository
            }
        ],
        exports: [
            _productrepositoy.ProductRepository,
            _userrepositoy.UserRepository,
            _orderrepositoy.OrderRepository,
            _orderproductrepositoy.OrderProductRepository
        ]
    })
], MongooseModule);

//# sourceMappingURL=mongoose.module.js.map