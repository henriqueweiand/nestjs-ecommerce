import { Module } from '@nestjs/common';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { EcommerceModule } from './application/ecommerce/ecommerce.module';
import { PersistenceModule } from './infra/persistence/persistence.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
    }),
    PersistenceModule.register({
      type: 'mongoose',
      global: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'api'),

    }),
    EcommerceModule
  ],
})
export class AppModule { }
