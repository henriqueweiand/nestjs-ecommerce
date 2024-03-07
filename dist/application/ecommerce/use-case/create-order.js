"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateOrderUseCase", {
    enumerable: true,
    get: function() {
        return CreateOrderUseCase;
    }
});
const _order = require("../../../domain/ecommerce/order");
const _common = require("@nestjs/common");
const _orderrepositoy = require("../ports/order.repositoy");
const _orderproduct = require("../../../domain/ecommerce/order-product");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let CreateOrderUseCase = class CreateOrderUseCase {
    async execute({ user, orderProduct }) {
        let total = 0;
        const order = new _order.Order({
            user
        });
        const createdOrderProduct = orderProduct.map((product)=>{
            total += product.price;
            return new _orderproduct.OrderProduct({
                product: product.product,
                price: product.price
            });
        });
        order.total = total;
        order.orderProduct = createdOrderProduct;
        const createdOrder = await this.orderRepository.create(order);
        const response = await this.orderRepository.findById(createdOrder.id);
        return response;
    }
    constructor(orderRepository){
        this.orderRepository = orderRepository;
    }
};
CreateOrderUseCase = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _orderrepositoy.OrderRepository === "undefined" ? Object : _orderrepositoy.OrderRepository
    ])
], CreateOrderUseCase);

//# sourceMappingURL=create-order.js.map