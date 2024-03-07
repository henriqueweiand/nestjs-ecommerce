"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Order", {
    enumerable: true,
    get: function() {
        return Order;
    }
});
const _entity = require("../../core/entities/entity");
let Order = class Order extends _entity.Entity {
    get id() {
        return this.props.id;
    }
    get user() {
        return this.props.user;
    }
    get total() {
        return this.props.total;
    }
    get orderProduct() {
        return this.props.orderProduct;
    }
    get status() {
        return this.props.status;
    }
    get paymentId() {
        return this.props.paymentId;
    }
    get paymentMethod() {
        return this.props.paymentMethod;
    }
    get currentState() {
        return this.props;
    }
    set status(status) {
        this.props.status = status;
    }
    set paymentId(paymentId) {
        this.props.paymentId = paymentId;
    }
    set paymentMethod(paymentMethod) {
        this.props.paymentMethod = paymentMethod;
    }
    set orderProduct(orderProduct) {
        this.props.orderProduct = orderProduct;
    }
    set total(total) {
        this.props.total = total;
    }
    constructor(props){
        props.total = props.total ?? 0;
        props.status = props.status ?? "open";
        super(props);
    }
};

//# sourceMappingURL=order.js.map