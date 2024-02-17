const express=require("express");
const port=3000;
const app=express();
app.get("/",(req,res)=>{
res.status(200).json({name:"dev",age:23,money:"1 trillion"});
});
               //hell
app.listen(port,()=>{
console.log(`server is running at http://localhost:${port}`);
});

