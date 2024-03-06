import { Module } from '@nestjs/common'
import { EnvService } from './env.service'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV === 'test' ? '.env.example' : '.env',
      isGlobal: false,
    }),
  ],
  providers: [EnvService],
  exports: [EnvService],
})
export class EnvModule { }
