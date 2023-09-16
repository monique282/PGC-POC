import { type } from "os";

export type Contact = {
    id: number;
    name: string;
    kinship?: string;
    cellPhone: string;
    residential?: string;
}

export type CreateContact = Omit<Contact, "id"> 

export type CustomError = {
    type: string;
    message: string;
}

