// essa pasta serve somente pra validade se o que a pessoa digiotou esta correto com o que foi solicitado
// essa pasta é solicitada em dentro da pasta Routes e usada no arquivo expecifico necessario

import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";

export function validateSchema(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.validate(req.body);
    if (validation.error) {
      return res.status(422).send({ error: validation.error.message });
    }

    next();
  };
}





