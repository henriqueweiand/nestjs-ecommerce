import { z } from 'zod'

export const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  MONGODB_URL: z.string().url(),
  PORT: z.coerce.number().optional().default(3000),
  CACHE_TTL: z.coerce.number().optional().default(5),
  CACHE_MAX: z.coerce.number().optional().default(10),
})

export type Env = z.infer<typeof envSchema>
