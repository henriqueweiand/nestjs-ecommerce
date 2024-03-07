"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CacheManagerModule", {
    enumerable: true,
    get: function() {
        return CacheManagerModule;
    }
});
const _env = require("../../env");
const _cachemanager = require("@nestjs/cache-manager");
const _common = require("@nestjs/common");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let CacheManagerModule = class CacheManagerModule {
};
CacheManagerModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _cachemanager.CacheModule.registerAsync({
                isGlobal: false,
                imports: [
                    _env.EnvModule
                ],
                useFactory: async (configService)=>({
                        ttl: configService.get('CACHE_TTL'),
                        max: configService.get('CACHE_MAX')
                    }),
                inject: [
                    _env.EnvService
                ]
            })
        ],
        exports: [
            _cachemanager.CacheModule
        ]
    })
], CacheManagerModule);

//# sourceMappingURL=cache.module.js.map