// essa pasta é pra reunir todas as rotas relacionas a usuario
// ela é chamada la no indexRoutes
// ela chama a função em controllers

import { validateSchema } from "@/middlewares/validateSchema";
import { Router } from "express";
import { contactsPost } from "@/controllers/contactsControllers";
import contactSchema from "@/schemas/contactSchemas";


const contactsRouter = Router();

contactsRouter.post("/contact", validateSchema(contactSchema), contactsPost);

export default contactsRouter;