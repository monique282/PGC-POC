import { Contact } from "@/protocols/protocols";
import Joi from "joi";

const contactSchema = Joi.object<Contact>({
    name: Joi.string().min(2).max(50).required(),
    kinship: Joi.string().required(),
    cellPhone: Joi.string().min(10).max(11).required(),
    residential: Joi.string().min(10).max(11),
})

export default contactSchema;