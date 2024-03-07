"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _testing = require("@nestjs/testing");
const _config = require("@nestjs/config");
const _envservice = require("./env.service");
describe('EnvService', ()=>{
    let service;
    let configService;
    beforeEach(async ()=>{
        const module = await _testing.Test.createTestingModule({
            providers: [
                _envservice.EnvService,
                {
                    provide: _config.ConfigService,
                    useValue: {
                        get: jest.fn()
                    }
                }
            ]
        }).compile();
        service = module.get(_envservice.EnvService);
        configService = module.get(_config.ConfigService);
    });
    it('should be defined', ()=>{
        expect(service).toBeDefined();
    });
    describe('exchangeApiKey', ()=>{
        it('should return the exchangeApiKey value', ()=>{
            const PORT = 3000;
            jest.spyOn(configService, 'get').mockReturnValue(PORT);
            expect(service.get('PORT')).toEqual(PORT);
            expect(configService.get).toHaveBeenCalledWith('PORT', {
                infer: true
            });
        });
    });
});

//# sourceMappingURL=env.service.unit-spec.js.map