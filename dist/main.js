"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _core = require("@nestjs/core");
const _appmodule = require("./app.module");
const _envservice = require("./infra/env/env.service");
const _swagger = require("@nestjs/swagger");
const _common = require("@nestjs/common");
async function bootstrap() {
    const app = await _core.NestFactory.create(_appmodule.AppModule, {
        snapshot: true,
        rawBody: true
    });
    const configService = app.get(_envservice.EnvService);
    const port = configService.get('PORT');
    app.useGlobalPipes(new _common.ValidationPipe({
        transform: true,
        whitelist: true
    }));
    const config = new _swagger.DocumentBuilder().setTitle('API').setVersion('0.1').build();
    const document = _swagger.SwaggerModule.createDocument(app, config);
    _swagger.SwaggerModule.setup('api', app, document);
    await app.listen(port);
}
bootstrap();

//# sourceMappingURL=main.js.map