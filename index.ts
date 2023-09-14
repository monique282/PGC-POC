import cors from "cors";
import express, { json } from "express";
import "express-async-errors";
import dotenv from "dotenv";


//configuração da API
dotenv.config();

const app = express();

app.use(cors());
app.use(json());

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));