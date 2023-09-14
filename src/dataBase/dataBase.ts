// condigurando a conecção com o banco, ele chama o env

import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pg;

const configDatabase = {
  connectionString: process.env.DATABASE_URL,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false } 
      : false,
};

export const db = new Pool(configDatabase);
