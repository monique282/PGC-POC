// essa função é chamada la no sevises

import { db } from "@/dataBase/dataBase";
import { CreateContact } from "@/protocols/protocols";


async function createContactPost(body: CreateContact) {

    const query = `
      INSERT INTO contact (name, kinship, "cellPhone", residential) VALUES ($1, $2, $3, $4)
    `;

    const values = [body.name, body.kinship || null, body.cellPhone, body.residential || null];

    const serveSend = await db.query<CreateContact>(query, values)
    return serveSend;
}

// verificar se o celular ja existe
async function phoneExistsContactPost(phone: string) {
    const result = await db.query<CreateContact>(`
   SELECT * FROM contact WHERE  cellPhone = $1`, [phone]);
    return result.rows;
}

const contactRepository = {
    createContactPost, phoneExistsContactPost
}

export default contactRepository;