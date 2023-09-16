// essa pasta é chamada la em routes
// ela chama a servises

import { Request, Response } from "express";
import { CreateContact } from "../protocols/protocols";
import httpStatus from "http-status";
import contactServises from "../services/contactServices";

// essa função serve para cadastrar um contato
export async function contactsPost(req: Request, res: Response): Promise<void> {

  // recebendo as informações do body
  const body = req.body as CreateContact

  // fazendo a requisição para o service para enviar os dados para o banco
  const result = await contactServises.contactPost(body);

  // se tudo der certo
  res.sendStatus(httpStatus.OK);
  ;
}

// essa função serve para pegar os contatos
export async function contactsGet(req: Request, res: Response): Promise<void> {

  // fazendo a requisição para o service para enviar os dados para o banco
  const result = await contactServises.contactGet();

  // se tudo der certo
  res.status(httpStatus.OK).send(result);

};

// essa função serve para atualizar os contatos
export async function contactsPut(req: Request<{ id: string }>, res: Response): Promise<void> {

  // pegando o id pelo paramentros
  const id: number = parseInt(req.params.id, 10);

  console.log(id)
  // recebendo as informações do body
  const body = req.body as CreateContact

  console.log(body)
  // fazendo a requisição para o service para enviar os dados para o banco
  const result = await contactServises.contactPut(body, id);

  // se tudo der certo
  res.status(httpStatus.OK).send(result);

};

// essa função serve para deletar um contato
export async function contactsDelete(req: Request<{ id: string }>, res: Response): Promise<void> {

  // pegando o id pelo paramentros
  const id: number = parseInt(req.params.id, 10);
  console.log(id)

  // fazendo a requisição para o service para apagar o contatos
  const result = await contactServises.contactDelete(id);

  // se tudo der certo
  res.status(httpStatus.OK).send(result);

};
