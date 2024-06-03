
import express, { Express, Request, Response } from "express";
import * as dotenv from 'dotenv'
import { dataBase } from "./dataBase/dbConnection";
import contentRouter from "./Routes/router"
import cors from 'cors';
dotenv.config();

dotenv.config();
const app: Express = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//connect Databse
dataBase()
app.use("/content",contentRouter)

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});