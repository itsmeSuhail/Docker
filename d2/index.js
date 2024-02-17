const express=require("express");
const cors=require("cors");
const port =process.env.PORT || 3000;
const app=express();
app.use(cors());
app.get("/",(req,res)=>{
res.status(200).json({name:"dev",age:19,roll:19});
});
app.listen(port,()=>{
console.log(`server started at http://localhost:${port}`);
});
