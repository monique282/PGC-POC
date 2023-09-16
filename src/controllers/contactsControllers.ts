// essa pasta é chamada la em routes
// ela chama a servises

import { Request, Response } from "express";
import { CreateContact} from "../protocols/protocols";
import httpStatus from "http-status";
import contactServises from "../services/contactServices";

// essa função serve para cadastrar um contato
export async function contactsPost(req: Request, res: Response): Promise<void>  {

  // recebendo as informações do body
  const body = req.body as CreateContact

  // fazendo a requisição para o service para enviar os dados para o banco
  const result = await contactServises.contactPost(body);
  
  // se tudo der certo
  res.sendStatus(httpStatus.OK);
;
}

