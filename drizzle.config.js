import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
    schema: "./src/db/schema.js",
    out: "./drizzle",
    dialect: "mysql",
    dbCredentials: {
        host: "crudtask-karthi-ompoi.e.aivencloud.com",
        user: process.env.SQL_USERNAME,
        database: process.env.SQL_DATABASE,
        password: process.env.SQL_PASSWORD,
        port:'27486'
    }});
