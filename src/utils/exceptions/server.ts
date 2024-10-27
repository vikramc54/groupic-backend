import { HttpStatusCodes } from "@/enums/http";

class InternalServerErrorException extends HttpException {
    constructor(message: string="Internal Server Error", data?: any) {
        super(HttpStatusCodes.ServerError.INTERNAL_SERVER_ERROR, message, data);
    }
}

export {
    InternalServerErrorException
};