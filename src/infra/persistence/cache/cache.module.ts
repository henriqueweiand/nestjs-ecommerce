import { EnvModule, EnvService } from '@app/infra/env';
import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';

@Module({
    imports: [
        CacheModule.registerAsync({
            imports: [EnvModule],
            useFactory: async (configService: EnvService) => ({
                ttl: configService.get('CACHE_TTL'),
                max: configService.get('CACHE_MAX'),
            }),
            inject: [EnvService],
        }),
    ],
    exports: [CacheModule],
})
export class CacheManagerModule { }
