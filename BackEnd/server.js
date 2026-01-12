const express=require("express");
const cors=require("cors")
const dotenv=require("dotenv")
const mongoose=require("mongoose")
dotenv.config()

const app=express()


app.use(cors());
app.use(express.json())

mongoose.connect("mongodb+srv://gajapathi787_db_user:ACmVEYhIGT4qFkRd@cluster0.rw2fkzm.mongodb.net/?appName=Cluster0")
.then(()=>console.log("DB Connected Successfully"))
.catch(err=>console.log(err))


app.get("/",(req,res)=>{
    res.send("Backend is running bro")
})

app.listen(5000,()=>{
    console.log("PORT 5000 IS RUNNING");
    
})