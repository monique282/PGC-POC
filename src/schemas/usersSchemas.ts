import { Users } from "@/protocols/protocols";
import Joi from "joi";

const usersSchema = Joi.object<Users>({
    name: Joi.string().min(2).max(50).required(),
    email: Joi.string().required(),
    password: Joi.string().min(4).required(),
})

export default usersSchema;