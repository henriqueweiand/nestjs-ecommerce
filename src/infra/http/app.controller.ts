import {
    Controller,
    Get
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('/')
@ApiTags('App')
export class AppController {
    @Get('')
    getAll() {
        return 'ok';
    }
}
