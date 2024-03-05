import { EnvService } from '@app/infra/env';
import { Injectable } from '@nestjs/common';
import Stripe from "stripe";

@Injectable()
export class StripeService {
    constructor(
        private envService: EnvService
    ) { }

    getInstance(): Stripe {
        const STRIPE_API_KEY = this.envService.get("STRIPE_API_KEY");

        const stripe = new Stripe(STRIPE_API_KEY, {
            apiVersion: "2023-10-16",
            typescript: true,
        });

        return stripe
    }
}
