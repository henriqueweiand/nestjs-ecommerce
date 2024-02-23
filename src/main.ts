import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EnvService } from './infra/env/env.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    snapshot: true,
  })

  const configService = app.get(EnvService)
  const port = configService.get('PORT')

  await app.listen(port);
}
bootstrap();
