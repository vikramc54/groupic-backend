import { HttpStatusCodes } from "../enums/http";

class BadRequestException extends HttpException {
    constructor(message: string="Bad Request", data?: any) {
        super(HttpStatusCodes.ClientError.BAD_REQUEST, message, data);
    }
}

class UnauthorizedException extends HttpException {
    constructor(message: string="Unauthorized", data?: any) {
        super(HttpStatusCodes.ClientError.UNAUTHORIZED, message, data);
    }
}

class ForbiddenException extends HttpException {
    constructor(message: string="Forbidden", data?: any) {
        super(HttpStatusCodes.ClientError.FORBIDDEN, message, data);
    }
}

class NotFoundException extends HttpException {
    constructor(message: string="Not Found", data?: any) {
        super(HttpStatusCodes.ClientError.NOT_FOUND, message, data);
    }
}

export {
    BadRequestException,
    UnauthorizedException,
    ForbiddenException,
    NotFoundException
};