import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { EnvService } from './env.service';

describe('EnvService', () => {
  let service: EnvService;
  let configService: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EnvService,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<EnvService>(EnvService);
    configService = module.get<ConfigService>(ConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('exchangeApiKey', () => {
    it('should return the exchangeApiKey value', () => {
      const PORT = 3000;
      jest.spyOn(configService, 'get').mockReturnValue(PORT);

      expect(service.get('PORT')).toEqual(PORT);
      expect(configService.get).toHaveBeenCalledWith('PORT', { infer: true });
    });
  });
});
