import { CheckoutUrlUseCase } from '@app/application/ecommerce/use-case/checkout-url';
import { CacheKey } from '@nestjs/cache-manager';
import {
    Body,
    Controller,
    Get,
    Headers,
    Param,
    Post,
    UseInterceptors
} from '@nestjs/common';
import { Request } from 'express';
import { ApiTags } from '@nestjs/swagger';
import { HttpCacheInterceptor } from '../persistence/cache/interceptor/http-cache.interceptor';
import { CheckoutCompleteUseCase } from '@app/application/ecommerce/use-case/checkout-complete';

@Controller('/checkout')
@ApiTags('Checkout')
export class CheckoutController {
    constructor(
        private checkoutUrlUseCase: CheckoutUrlUseCase,
        private checkoutCompleteUseCase: CheckoutCompleteUseCase,
    ) { }

    @Get(':orderId/url')
    @CacheKey(':orderId/url')
    @UseInterceptors(HttpCacheInterceptor)
    checkoutUrl(@Param('orderId') orderId: string) {
        const response = this.checkoutUrlUseCase.execute(orderId);
        return response;
    }

    @Post('completed')
    checkoutComplete(
        @Headers() requestHeaders: Request['headers'],
        @Body() requestBody: Request['body'],
    ) {
        const response = this.checkoutCompleteUseCase.execute({
            headers: requestHeaders,
            body: requestBody
        });
        return response;
    }
}
