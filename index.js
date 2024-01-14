import express, { request, response } from "express";
import studentRouter from "./Routes.js";


const app = express() ;
app.use(express.json());
app.get("/", (request, response)=>{
    response.send('Créer API REST');
});

app.use("/personnes",studentRouter)

app.listen(90, ()=> console.log(`The server is running on port 90`))