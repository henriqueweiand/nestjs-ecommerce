"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "OrderProduct", {
    enumerable: true,
    get: function() {
        return OrderProduct;
    }
});
const _entity = require("../../core/entities/entity");
let OrderProduct = class OrderProduct extends _entity.Entity {
    get id() {
        return this.props.id;
    }
    get product() {
        return this.props.product;
    }
    get orderId() {
        return this.props.orderId;
    }
    get price() {
        return this.props.price;
    }
    get currentState() {
        return this.props;
    }
    constructor(props){
        super(props);
    }
};

//# sourceMappingURL=order-product.js.map