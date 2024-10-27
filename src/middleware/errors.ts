import { HttpStatusCodes } from "@/enums/http";
import { Request, Response, NextFunction } from "express";

function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    if (err instanceof HttpException) {
        res.status(err.statusCode).json({
            message: err.message,
            ...(err.data && { data: err.data })
        });
        return;
    }

    console.error(err, req, next);
    res.status(HttpStatusCodes.ServerError.INTERNAL_SERVER_ERROR).json({
        message: "Internal Server Error",
    });
}

export default errorHandler;