// esse arquivo serve pra unir todos que eu estou escrevendo Rotas que esta dentro de Routes
// lebrando que todas as Rotas aqui vai pro app

import { Router } from "express";
import usersRouter from "./usersRoutes";

const router = Router()

router.use([
    //rotas das usuario
    usersRouter,

]);

export default router;