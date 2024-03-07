"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MongooseOrderRepository", {
    enumerable: true,
    get: function() {
        return MongooseOrderRepository;
    }
});
const _orderproductrepositoy = require("../../../../application/ecommerce/ports/order-product.repositoy");
const _userrepositoy = require("../../../../application/ecommerce/ports/user.repositoy");
const _common = require("@nestjs/common");
const _mongoose = require("@nestjs/mongoose");
const _mongoose1 = /*#__PURE__*/ _interop_require_wildcard(require("mongoose"));
const _orderentity = require("../entities/order.entity");
const _mongooseordermapper = require("../mapper/mongoose-order-mapper");
const _mongooseorderdetailsmapper = require("../mapper/mongoose-order-details-mapper");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
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
let MongooseOrderRepository = class MongooseOrderRepository {
    async findMany() {
        const findQuery = await this.orderModel.find().populate([
            'orderProduct'
        ]);
        return findQuery.map((item)=>_mongooseorderdetailsmapper.MongooseOrderDetailsMapper.toDomain(item));
    }
    async findById(id) {
        const findQuery = await this.orderModel.findById(id).populate([
            'orderProduct'
        ]);
        return _mongooseorderdetailsmapper.MongooseOrderDetailsMapper.toDomain(findQuery);
    }
    async create(orderInput) {
        let orderProductIds = [];
        if (orderInput?.orderProduct.length) {
            orderProductIds = await Promise.all(orderInput.orderProduct.map(async (orderProduct)=>{
                const orderProductCreated = await this.orderProductRepository.create(orderProduct);
                return orderProductCreated.id;
            }));
        }
        const data = _mongooseordermapper.MongooseOrderMapper.toMongoose(orderInput);
        const order = new this.orderModel({
            ...data,
            user: {
                "_id": new _mongoose1.default.Types.ObjectId(orderInput.user)
            },
            orderProduct: orderProductIds
        });
        await this.userRepository.appendOrder(orderInput.user, order.id);
        const savedOrder = await order.save();
        return _mongooseordermapper.MongooseOrderMapper.toDomain(savedOrder);
    }
    async update(orderId, orderInput) {
        const preparedData = _mongooseordermapper.MongooseOrderMapper.toMongoose(orderInput);
        const order = await this.orderModel.findOneAndUpdate({
            _id: orderId
        }, preparedData, {
            new: true
        }).exec();
        return _mongooseordermapper.MongooseOrderMapper.toDomain(order);
    }
    constructor(orderModel, orderProductRepository, userRepository){
        this.orderModel = orderModel;
        this.orderProductRepository = orderProductRepository;
        this.userRepository = userRepository;
    }
};
MongooseOrderRepository = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _mongoose.InjectModel)(_orderentity.Order.name)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _mongoose1.Model === "undefined" ? Object : _mongoose1.Model,
        typeof _orderproductrepositoy.OrderProductRepository === "undefined" ? Object : _orderproductrepositoy.OrderProductRepository,
        typeof _userrepositoy.UserRepository === "undefined" ? Object : _userrepositoy.UserRepository
    ])
], MongooseOrderRepository);

//# sourceMappingURL=mongoose-order.repositoy.js.map