import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";




const app = express();

//middleware
dotenv.config()



//connect to a database
mongoose.connect("mongodb://localhost:27017/reastest-esatae", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to the database")
}).catch((error) => {
    console.log(error)
})
app.listen(3000, () => {
    console.log("server running at port 3000")
})