// essa função é chamada la no sevises

import { db } from "../dataBase/dataBase";
import { Contact, CreateContact } from "../protocols/protocols";

// criando o contato
async function createContactPost(body: CreateContact) {

    const query = `
      INSERT INTO contacts (name, kinship, "cellPhone", residential) VALUES ($1, $2, $3, $4);
    `;

    const values = [body.name, body.kinship || '', body.cellPhone, body.residential || ''];

    const serveSend = await db.query<Contact>(query, values)
    return serveSend;
}

// verificar se o celular ja existe
async function phoneExistsContactPost(phone: string) {

    const result = await db.query<Contact>(`
   SELECT * FROM contacts WHERE "cellPhone" = $1;`, [phone]);
    return result.rows;
};

//pegar todos os contatos
async function contactGet() {

    const result = await db.query<Contact>(`
   SELECT * FROM contacts ;`);
    return result.rows;
};

// verificar se o contato ja existe
async function idExistsContactPost(id: any) {

    const result = await db.query<Contact>(`
   SELECT * FROM contacts WHERE id = $1;`, [id]);
    return result.rows;
};

// atualizando os contatos
export async function updateContactPut(body: CreateContact, id: number) {
    const query = `
    UPDATE contacts SET name = $1, kinship = $2, "cellPhone" = $3, residential = $4  WHERE id = $5;
  `;

    const values = [body.name, body.kinship || '', body.cellPhone, body.residential || '', id];

    const result = await db.query(query, values)
    return result;
};

// apagar contato
async function contactDelete(id: any) {

    const result = await db.query<Contact>(`
    DELETE FROM contacts WHERE id = $1;`, [id])
    return result.rows;
};

const contactRepository = {
    createContactPost, phoneExistsContactPost, contactDelete,
    contactGet, updateContactPut, idExistsContactPost
}

export default contactRepository;