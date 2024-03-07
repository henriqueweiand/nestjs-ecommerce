"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "HttpCacheInterceptor", {
    enumerable: true,
    get: function() {
        return HttpCacheInterceptor;
    }
});
const _cachemanager = require("@nestjs/cache-manager");
const _common = require("@nestjs/common");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let HttpCacheInterceptor = class HttpCacheInterceptor extends _cachemanager.CacheInterceptor {
    trackBy(context) {
        const request = context.switchToHttp().getRequest();
        const { httpAdapter } = this.httpAdapterHost;
        const isGetRequest = httpAdapter.getRequestMethod(request) === 'GET';
        const excludePaths = [];
        if (!isGetRequest || isGetRequest && excludePaths.includes(httpAdapter.getRequestUrl(request))) {
            return undefined;
        }
        return httpAdapter.getRequestUrl(request);
    }
};
HttpCacheInterceptor = _ts_decorate([
    (0, _common.Injectable)()
], HttpCacheInterceptor);

//# sourceMappingURL=http-cache.interceptor.js.map