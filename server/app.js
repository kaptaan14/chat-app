import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.route.js"
import userRoutes from "./routes/user.route.js"
import connectToMongoDb from "./db/connectToMongoDb.js";
import cookieParser from "cookie-parser"
import { app, server } from "./socket/socket.js"
import path from "path"


dotenv.config();
const PORT = process.env.PORT || 8000;

const __dirname = path.resolve();

//middlewares
app.use(express.json());
app.use(cookieParser())

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes)

app.use(express.static(path.join(__dirname, "/client/dist")))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"))
})

server.listen(PORT, ()=>{
    connectToMongoDb();
    console.log(`Server running on PORT ${PORT}`)
})