const express=require("express");
const cors=require("cors")
const dotenv=require("dotenv")
const mongoose=require("mongoose")
dotenv.config()
const authRoutes = require("./routes/auth");
const cardRoutes = require("./routes/card");
const cardDetailRoutes = require("./routes/cardDetail");
const app=express()


app.use(cors());
app.use(express.json())

mongoose.connect("mongodb+srv://gajapathi787_db_user:ACmVEYhIGT4qFkRd@cluster0.rw2fkzm.mongodb.net/?appName=Cluster0")
.then(()=>console.log("DB Connected Successfully"))
.catch(err=>console.log(err))


app.get("/",(req,res)=>{
    res.send("Backend is running bro")
})

//Auth routes
app.use("/api/auth", authRoutes);
app.use("/api/card", cardRoutes);
app.use("/api/card-detail", cardDetailRoutes)
// Error Handle

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).json({
        success:false,
        message:"Something went wrong",
        error:err.message
    })
})






app.listen(5000,()=>{
    console.log("PORT 5000 IS RUNNING");
    
})