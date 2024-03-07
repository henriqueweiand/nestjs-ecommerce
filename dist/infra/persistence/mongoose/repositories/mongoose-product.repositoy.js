"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MongooseProductRepository", {
    enumerable: true,
    get: function() {
        return MongooseProductRepository;
    }
});
const _productentity = require("../entities/product.entity");
const _common = require("@nestjs/common");
const _mongooseproductmapper = require("../mapper/mongoose-product-mapper");
const _mongoose = require("@nestjs/mongoose");
const _mongoose1 = require("mongoose");
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
let MongooseProductRepository = class MongooseProductRepository {
    async findMany() {
        const products = await this.productModel.find();
        return products.map((item)=>_mongooseproductmapper.MongooseProductMapper.toDomain(item));
    }
    async create(product) {
        const data = _mongooseproductmapper.MongooseProductMapper.toMongoose(product);
        const entity = await this.productModel.create(data);
        return _mongooseproductmapper.MongooseProductMapper.toDomain(entity);
    }
    constructor(productModel){
        this.productModel = productModel;
    }
};
MongooseProductRepository = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _mongoose.InjectModel)(_productentity.Product.name)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _mongoose1.Model === "undefined" ? Object : _mongoose1.Model
    ])
], MongooseProductRepository);

//# sourceMappingURL=mongoose-product.repositoy.js.map