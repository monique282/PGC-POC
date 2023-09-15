// essa pasta é pra reunir todas as rotas relacionas a usuario
// ela é chamada la no indexRoutes
// ela chama a função em controllers

import { validateSchema } from "@/middlewares/validateSchema";
import usersSchema from "@/schemas/usersSchemas";
import { Router } from "express";


const usersRouter = Router();

usersRouter.post("/users", validateSchema(usersSchema), );

export default usersRouter;