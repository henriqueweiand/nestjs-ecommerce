"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "envSchema", {
    enumerable: true,
    get: function() {
        return envSchema;
    }
});
const _zod = require("zod");
const envSchema = _zod.z.object({
    DATABASE_URL: _zod.z.string().url(),
    MONGODB_URL: _zod.z.string().url(),
    PORT: _zod.z.coerce.number().optional().default(3000),
    CACHE_TTL: _zod.z.coerce.number().optional().default(5),
    CACHE_MAX: _zod.z.coerce.number().optional().default(10),
    STRIPE_API_KEY: _zod.z.coerce.string(),
    CHECKOUT_SUCCESS_URL: _zod.z.coerce.string(),
    STRIPE_WEBHOOK_SECRET: _zod.z.coerce.string()
});

//# sourceMappingURL=env.js.map