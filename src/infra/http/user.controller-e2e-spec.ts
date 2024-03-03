import { CreateUserUseCase } from '@app/application/ecommerce/use-case/create-user';
import { GetUserUseCase } from '@app/application/ecommerce/use-case/get-user';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { CacheManagerModule } from '../persistence/cache/cache.module';
import { PersistenceModule } from '../persistence/persistence.module';
import { CreateUserDto } from './dto/create-user.dto';
import { UserController } from './user.controller';

describe('UsersController', () => {
    let httpServer: any;
    let app: any;

    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [
                CacheManagerModule,
                PersistenceModule.register({
                    type: 'mongoose',
                    global: true,
                }),
            ],
            controllers: [UserController],
            providers: [CreateUserUseCase, GetUserUseCase],
        }).compile();

        app = moduleRef.createNestApplication();
        await app.init();

        httpServer = app.getHttpServer();
    });

    afterAll(async () => {
        await app.close();
    });

    describe('UserController', () => {
        it('should create user', async () => {
            const createDto: CreateUserDto = {
                name: 'Jonh Doe',
            };
            const response = await request(httpServer)
                .post('/user')
                .send(createDto);

            expect(response.status).toBe(201);
            expect(response.body.props.name).toEqual(createDto.name);
        });
    });
});
