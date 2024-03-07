import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EnvService } from './infra/env/env.service';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const configService = app.get(EnvService)
  const port = configService.get('PORT')
  
  function getSwaggerServerUrl() {
    switch (process.env.NODE_ENV) {
      case 'production':
        return 'https://nestjs-ecommerce-alpha.vercel.app/api';
      default:
        return `http://localhost:${port}/api`;
    }
  }
  
  const app = await NestFactory.create(AppModule, {
    snapshot: true,
    rawBody: true,
  })

  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
  }));

  const config = new DocumentBuilder()
    .setTitle('API')
    .setVersion('0.1')
    .addServer(getSwaggerServerUrl())
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
}
bootstrap();
