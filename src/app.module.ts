import { Module } from '@nestjs/common';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { ProductModule } from './application/ecommerce/product.module';
import { EnvModule } from './infra/env';

@Module({
  imports: [
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
    }),
    EnvModule,
    ProductModule,
  ],
})
export class AppModule { }
