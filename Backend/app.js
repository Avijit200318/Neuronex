import cookieParser from "cookie-parser";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

const __dirname = path.resolve();

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("hello world");
})

// api routes here

app.use(express.static(path.join(__dirname, '/Frontend/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'Frontend', 'dist', 'index.html'));
});

export default app;