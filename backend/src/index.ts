import express from "express";
import authRoutes from "./routes/authRoutes";
import messageRoutes from "./routes/messageRoutes";
import cookieParser from "cookie-parser";
import {app, server} from "../socket/socket"

import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT ||  8080;

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.get('/', (req, res) => {
    res.send("Hello world");
});

server.listen(PORT, () => {
    console.log("Server is running on port", +PORT);
});
