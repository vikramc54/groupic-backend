import { Router, Request, Response, NextFunction, RequestHandler } from "express";

class AppRouter {
    private router: Router;

    constructor() {
        this.router = Router();
    }

    public get(path: string, ...handlers: RequestHandler[]) {
        this.router.get(path, ...this.wrapHandlers(handlers));
    }

    public post(path: string, ...handlers: RequestHandler[]) {
        this.router.post(path, ...this.wrapHandlers(handlers));
    }

    public put(path: string, ...handlers: RequestHandler[]) {
        this.router.put(path, ...this.wrapHandlers(handlers));
    }

    public patch(path: string, ...handlers: RequestHandler[]) {
        this.router.patch(path, ...this.wrapHandlers(handlers));
    }

    public delete(path: string, ...handlers: RequestHandler[]) {
        this.router.delete(path, ...this.wrapHandlers(handlers));
    }

    // Internal method to wrap async handlers in error-catching logic
    private wrapHandlers(handlers: RequestHandler[]) {
        return handlers.map((handler) => {
            return (req: Request, res: Response, next: NextFunction) => {
                Promise.resolve(handler(req, res, next)).catch(next);
            };
        });
    }

    // Use valueOf to return the router when this class is passed to app.use()
    public valueOf() {
        return this.router;
    }
}

export default AppRouter;