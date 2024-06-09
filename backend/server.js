import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import TodoRoutes from "./Routes/todoRoutes.js";
import 'dotenv/config'

//app config
const app = express()
const port = 4000;

//middleware
app.use(cors())
app.use(express.json())


//endpoint for testing
app.get("/",(req,res)=>{
    res.send("successfully running")
})

//endpoint
app.use("/api/todos",TodoRoutes)

//database connection
connectDB();

app.listen(port,()=>{
    console.log(`succesfully running in port http://localhost:${port}`)
})

