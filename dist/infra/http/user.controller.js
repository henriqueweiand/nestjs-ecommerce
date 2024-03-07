"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UserController", {
    enumerable: true,
    get: function() {
        return UserController;
    }
});
const _createuser = require("../../application/ecommerce/use-case/create-user");
const _common = require("@nestjs/common");
const _createuserdto = require("./dto/create-user.dto");
const _getuser = require("../../application/ecommerce/use-case/get-user");
const _swagger = require("@nestjs/swagger");
const _cachemanager = require("@nestjs/cache-manager");
const _httpcacheinterceptor = require("../persistence/cache/interceptor/http-cache.interceptor");
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
let UserController = class UserController {
    getAll() {
        const response = this.getUserUseCase.execute({});
        return response;
    }
    create(createUserDto) {
        const response = this.createUserUseCase.execute(createUserDto);
        return response;
    }
    constructor(createUserUseCase, getUserUseCase){
        this.createUserUseCase = createUserUseCase;
        this.getUserUseCase = getUserUseCase;
    }
};
_ts_decorate([
    (0, _common.Get)(''),
    (0, _cachemanager.CacheKey)('users'),
    (0, _common.UseInterceptors)(_httpcacheinterceptor.HttpCacheInterceptor),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", void 0)
], UserController.prototype, "getAll", null);
_ts_decorate([
    (0, _common.Post)(''),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createuserdto.CreateUserDto === "undefined" ? Object : _createuserdto.CreateUserDto
    ]),
    _ts_metadata("design:returntype", void 0)
], UserController.prototype, "create", null);
UserController = _ts_decorate([
    (0, _common.Controller)('/user'),
    (0, _swagger.ApiTags)('User'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createuser.CreateUserUseCase === "undefined" ? Object : _createuser.CreateUserUseCase,
        typeof _getuser.GetUserUseCase === "undefined" ? Object : _getuser.GetUserUseCase
    ])
], UserController);

//# sourceMappingURL=user.controller.js.map