import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { ErrorHandler } from "./utils/ErrorHandler.js"

const app = express();
dotenv.config();


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to MongoDB")
    } catch (error) {
        throw error;
    }
    };
    // test to see if app is connected to db by addind or delecting ip address
    mongoose.connection.on("disconnected", ()=> {
        console.log("mongoDb Disconnected!")
    })
    
    mongoose.connection.on('connected', ()=>{
    console.log("mongoDb Connected!")
    })

// middlewares

// it's for ErrorHandling
app.use(ErrorHandler);  

app.listen(8080, () => {
    connect();
    console.log("server running at port 8000")
})

