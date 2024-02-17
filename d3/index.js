const express=require("express");
const port=process.env.port ||3000;
const app=express();
app.get("/",(req,res)=>{
res.json({message:"hello"})
})
app.get("/hi",(req,res)=>{
res.status(200).json({message:"hello ji bhaisab"})
})

console.log("hello ji");
app.listen(port,()=>{
console.log(`http://localhost:${port}`)
})
