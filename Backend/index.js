import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";
import authRouter from "./routes/auth.route.js";

dotenv.config();

const __dirname = path.resolve();

const app = express();

app.use(express.json());
app.use(cookieParser());


app.listen(3000, () => {
    console.log("server is running at port 3000");
})

// api routes here

app.use("/api/auth", authRouter);

app.use(express.static(path.join(__dirname, '/Frontend/dist')));

app.get(/^\/(?!api|static).*$/, (req, res) => {
    res.sendFile(path.join(__dirname, 'Frontend', 'dist', 'index.html'));
});

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,    
        statusCode,
        message,
    });
});