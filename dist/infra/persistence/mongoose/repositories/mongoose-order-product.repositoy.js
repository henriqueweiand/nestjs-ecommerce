"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MongooseOrderProductRepository", {
    enumerable: true,
    get: function() {
        return MongooseOrderProductRepository;
    }
});
const _orderproductentity = require("../entities/order-product.entity");
const _common = require("@nestjs/common");
const _mongooseorderproductmapper = require("../mapper/mongoose-order-product-mapper");
const _mongoose = require("mongoose");
const _mongoose1 = require("@nestjs/mongoose");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
let MongooseOrderProductRepository = class MongooseOrderProductRepository {
    async create(orderProduct) {
        const data = _mongooseorderproductmapper.MongooseOrderProductMapper.toMongoose(orderProduct);
        const createdOrderProduct = await this.productOrderModel.create(data);
        return _mongooseorderproductmapper.MongooseOrderProductMapper.toDomain(createdOrderProduct);
    }
    async createMany(orderProducts) {
        if (orderProducts.length === 0) {
            return [];
        }
        const data = orderProducts.map((product)=>_mongooseorderproductmapper.MongooseOrderProductMapper.toMongoose(product));
        const createdOrderProductProducts = await this.productOrderModel.create(data);
        return createdOrderProductProducts.map(_mongooseorderproductmapper.MongooseOrderProductMapper.toDomain);
    }
    constructor(productOrderModel){
        this.productOrderModel = productOrderModel;
    }
};
MongooseOrderProductRepository = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _mongoose1.InjectModel)(_orderproductentity.OrderProduct.name)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _mongoose.Model === "undefined" ? Object : _mongoose.Model
    ])
], MongooseOrderProductRepository);

//# sourceMappingURL=mongoose-order-product.repositoy.js.map