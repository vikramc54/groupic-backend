import { z } from 'zod';

const envSchema = z.object({
    NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
    PORT: z.preprocess((value) => {
        return typeof value === 'string' ? parseInt(value, 10) : value;
    }, z.number().int().min(1).max(65535).default(8000)),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
    console.error("Environment validation error:", parsedEnv.error.flatten().fieldErrors);
    process.exit(1);
}

const env = parsedEnv.data;
export default env;