"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AppModule", {
    enumerable: true,
    get: function() {
        return AppModule;
    }
});
const _common = require("@nestjs/common");
const _devtoolsintegration = require("@nestjs/devtools-integration");
const _ecommercemodule = require("./application/ecommerce/ecommerce.module");
const _persistencemodule = require("./infra/persistence/persistence.module");
const _servestatic = require("@nestjs/serve-static");
const _path = require("path");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let AppModule = class AppModule {
};
AppModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _devtoolsintegration.DevtoolsModule.register({
                http: process.env.NODE_ENV !== 'production'
            }),
            _persistencemodule.PersistenceModule.register({
                type: 'mongoose',
                global: true
            }),
            _servestatic.ServeStaticModule.forRoot({
                rootPath: (0, _path.join)(__dirname, '..', 'api')
            }),
            _ecommercemodule.EcommerceModule
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map