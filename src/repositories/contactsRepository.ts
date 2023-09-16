// essa função é chamada la no sevises

import { db } from "../dataBase/dataBase";
import { Contact, CreateContact } from "../protocols/protocols";

// criando o contato
async function createContactPost(body: CreateContact) {

    const query = `
      INSERT INTO contacts (name, kinship, "cellPhone", residential) VALUES ($1, $2, $3, $4);
    `;

    const values = [body.name, body.kinship || null, body.cellPhone, body.residential || null];

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

const contactRepository = {
    createContactPost, phoneExistsContactPost,
    contactGet
}

export default contactRepository;