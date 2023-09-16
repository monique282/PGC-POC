
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
   return result;
};

// função para verificar as coisas referentes ao contato na hora da atualização
async function contactPut(body: CreateContact, id: any): Promise<CreateContact> {

   // verificar se o contato que quer ser atualizado existe
   const contactExistsId = await contactRepository.idExistsContactPost(id);

   // pegando a requicição e vendo se ja não existe um usuario com aquele id
   if (contactExistsId.length === 0) {
      throw errors.notFound("Contato não existe");
   };

   // requisição para ver se o celular ja foi cadastrado
   const contactExists = await contactRepository.phoneExistsContactPost(body.cellPhone);

   // pegando a requicição e vendo se ja existe o celular cadastrado
   if (contactExists.length > 0) {
      throw errors.conflict("Celular já cadastrado");
   };

   // se tudo der certo
   await contactRepository.updateContactPut(body, id);
   return;
};

// função para verificar as coisas referentes contato na hora de deletar
async function contactDelete(id: any): Promise<void> {

   // verificar se o contato que quer deletar existe
   const contactExistsId = await contactRepository.idExistsContactPost(id);

   // pegando a requicição e vendo se ja não existe um usuario com aquele id
   if (contactExistsId.length === 0) {
      throw errors.notFound("Contato não existe");
   };

   // se tudo der certo
   await contactRepository.contactDelete(id);
   return;
};

const contactServises = {
   contactPost, contactGet, contactPut, contactDelete
};

export default contactServises;