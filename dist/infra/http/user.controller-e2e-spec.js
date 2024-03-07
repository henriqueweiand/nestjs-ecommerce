"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _createuser = require("../../application/ecommerce/use-case/create-user");
const _getuser = require("../../application/ecommerce/use-case/get-user");
const _testing = require("@nestjs/testing");
const _supertest = /*#__PURE__*/ _interop_require_default(require("supertest"));
const _cachemodule = require("../persistence/cache/cache.module");
const _persistencemodule = require("../persistence/persistence.module");
const _usercontroller = require("./user.controller");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
describe('UsersController', ()=>{
    let httpServer;
    let app;
    beforeAll(async ()=>{
        const moduleRef = await _testing.Test.createTestingModule({
            imports: [
                _cachemodule.CacheManagerModule,
                _persistencemodule.PersistenceModule.register({
                    type: 'mongoose',
                    global: true
                })
            ],
            controllers: [
                _usercontroller.UserController
            ],
            providers: [
                _createuser.CreateUserUseCase,
                _getuser.GetUserUseCase
            ]
        }).compile();
        app = moduleRef.createNestApplication();
        await app.init();
        httpServer = app.getHttpServer();
    });
    afterAll(async ()=>{
        await app.close();
    });
    describe('UserController', ()=>{
        it('should create user', async ()=>{
            const createDto = {
                name: 'Jonh Doe'
            };
            const response = await (0, _supertest.default)(httpServer).post('/user').send(createDto);
            expect(response.status).toBe(201);
            expect(response.body.props.name).toEqual(createDto.name);
        });
    });
});

//# sourceMappingURL=user.controller-e2e-spec.js.map