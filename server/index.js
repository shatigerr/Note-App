import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser"
import cors from "cors"
import db from "./config/db.js";
import Note from "./models/note.js";
import router from "./routes/router.js";


dotenv.config()
db()

const app = express()
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/",router);

app.listen(process.env.PORT);