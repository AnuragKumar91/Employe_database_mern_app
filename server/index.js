import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser"
import cors from "cors";
import route from "./routes/userRoute.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());


const PORT = process.env.PORT || 7000;

mongoose.connect("mongodb://localhost:27017").then(()=>{

    console.log("DB connected successfully");

    app.listen(PORT, ()=>{
        console.log(`Server is running on port: ${PORT}`);
    })

}).catch(error => console.log(error));


app.use("/api", route);