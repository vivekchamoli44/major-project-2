const express=require("express");
const app=express();
const mongoose=require("mongoose");

app.listen(8080,()=>{
    console.log("Port is listening ");
})

const MONGO_URL="mongodb://127.0.0.1:27017/medico" 

main().then(()=>{
    console.log("Database connected");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
}

app.get("/",(req,res)=>{
    res.send("Root");
})
