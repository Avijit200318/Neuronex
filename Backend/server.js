import app from "./app.js";
import http from "http";

const port = process.env.port || 3000;

const server = http.createServer(app);

server.listen(port, () => {
    console.log("server is running at port", port);
})