declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: "dev" | "prod";
        PORT?: string;
    }
}  