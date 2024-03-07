"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UniqueEntityID", {
    enumerable: true,
    get: function() {
        return UniqueEntityID;
    }
});
const _nodecrypto = require("node:crypto");
let UniqueEntityID = class UniqueEntityID {
    toString() {
        return this.value;
    }
    toValue() {
        return this.value;
    }
    equals(id) {
        return id.toValue() === this.value;
    }
    constructor(value){
        this.value = value ?? (0, _nodecrypto.randomUUID)();
    }
};

//# sourceMappingURL=unique-entity-id.js.map