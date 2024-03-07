"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Product", {
    enumerable: true,
    get: function() {
        return Product;
    }
});
const _entity = require("../../core/entities/entity");
let Product = class Product extends _entity.Entity {
    get id() {
        return this.props.id;
    }
    get title() {
        return this.props.title;
    }
    get price() {
        return this.props.price;
    }
    constructor(props){
        super(props);
    }
};

//# sourceMappingURL=product.js.map