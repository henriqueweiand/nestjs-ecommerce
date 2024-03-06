import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EnvService } from './infra/env/env.service';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    snapshot: true,
    rawBody: true,
  })

  const configService = app.get(EnvService)
  const port = configService.get('PORT')

  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
  }));

  const config = new DocumentBuilder()
    .setTitle('API')
    .setVersion('0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
}
bootstrap();
