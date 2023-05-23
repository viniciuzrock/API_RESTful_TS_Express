require("dotenv").config()
import express from "express";
import config from "config";
import router from "./router";//routes
import db from "../config/db";
import Looger from "../config/logger";
const app = express()
const port = config.get<number>('port');//app port

app.use(express.json());//json middleware

app.use("/api/", router)

app.listen(port, async () => {
    await db();
    Looger.info(`Server is running on port ${port}`)
})
