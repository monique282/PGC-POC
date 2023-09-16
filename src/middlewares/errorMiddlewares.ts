// essa pasta serve para eu reunir todos os erro em um so lugar 

import { CustomError } from "../protocols/protocols";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";


export default function errorHandler (error: CustomError, req: Request, res: Response, next: NextFunction){

// erro de "conflito" 409
if(error.type === "conflict"){
    return res.status(httpStatus.CONFLICT).send(error.message);
};

// erro de "não encontrado" 404
if(error.type === "notFound"){
    return res.status(httpStatus.NOT_FOUND).send(error.message);
};

return res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Sorry, something went wrong");
};