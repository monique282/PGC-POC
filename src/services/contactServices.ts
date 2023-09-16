
// essa função serve para poder tratar os assuntos de serviços
// ela é chamada nos controles
// ela chama o repository

import { errors } from "../errors/allMistakes";
import { Contact, CreateContact } from "../protocols/protocols";
import contactRepository from "../repositories/contactsRepository";

// função para verificar as coisas referentes ao cadastro de contato
async function contactPost(body: CreateContact): Promise<CreateContact> {

   // requisição para ver se o celular ja foi cadastrado
   const contactExists = await contactRepository.phoneExistsContactPost(body.cellPhone);

   // pegando a requicição e vendo se ja existe o celular cadastrado
   if (contactExists.length > 0) {
      throw errors.conflict("Celular já cadastrado");
   }

   // se tudo der certo
   await contactRepository.createContactPost(body);
   return;
};

// função para pegar os contatos
async function contactGet(): Promise<Contact[]> {

   // ceu certo kkk
   const result = await contactRepository.contactGet();
   console.log(result)
   return result;
};

const contactServises = {
   contactPost, contactGet
};

export default contactServises;