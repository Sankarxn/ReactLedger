import express from "express";
import cors from "cors";
import mongoose from "mongoose"; 
import employeeroutes from "./routes/employeeroutes.js";

mongoose.connect("mongodb://localhost:27017/EMP").then(()=>{
    console.log("MongoDb Connected Successfully");
}).catch((error)=>{
    console.log("MongoDb Connection Error",error);
});

const server=express();
server.use((express.json)());
server.use(cors({origin:"http://localhost:5173"}));
server.listen(5000,()=>{
    console.log("Server started on port 5000");
})

server.use("/employee", employeeroutes)