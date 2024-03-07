"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MongooseUserRepository", {
    enumerable: true,
    get: function() {
        return MongooseUserRepository;
    }
});
const _common = require("@nestjs/common");
const _mongoose = require("@nestjs/mongoose");
const _mongoose1 = /*#__PURE__*/ _interop_require_wildcard(require("mongoose"));
const _userentity = require("../entities/user.entity");
const _mongooseusermapper = require("../mapper/mongoose-user-mapper");
const _mongooseuserdetailsmapper = require("../mapper/mongoose-user-details-mapper");
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
let MongooseUserRepository = class MongooseUserRepository {
    async findMany() {
        const findQuery = await this.userModel.find().populate([
            'orders'
        ]);
        return findQuery.map((item)=>_mongooseuserdetailsmapper.MongooseUserDetailsMapper.toDomain(item));
    }
    async create(user) {
        const data = _mongooseusermapper.MongooseUserMapper.toMongoose(user);
        const entity = new this.userModel({
            ...data
        });
        await entity.save();
        return _mongooseusermapper.MongooseUserMapper.toDomain(entity);
    }
    async appendOrder(id, order) {
        const updatedUser = await this.userModel.findByIdAndUpdate(id, {
            $push: {
                orders: new _mongoose1.default.Types.ObjectId(order)
            }
        }, {
            new: true
        });
        return _mongooseusermapper.MongooseUserMapper.toDomain(updatedUser);
    }
    constructor(userModel){
        this.userModel = userModel;
    }
};
MongooseUserRepository = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _mongoose.InjectModel)(_userentity.User.name)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _mongoose1.Model === "undefined" ? Object : _mongoose1.Model
    ])
], MongooseUserRepository);

//# sourceMappingURL=mongoose-user.repositoy.js.map