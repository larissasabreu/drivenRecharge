import { Request, Response, NextFunction } from 'express';
import { Errors } from 'protocols/types';

export default function errorHandler(error: Errors, req: Request, res: Response, next: NextFunction) {
    if (error.type == "same_CPF") {
        return res.status(409).send(error.message);
    }

    if (error.type == "same_PhoneNumber") {
        return res.status(409).send(error.message);
    }

}
