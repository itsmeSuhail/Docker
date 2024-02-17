const express=require("express");
const cors=require("cors");
const axios=require("axios")
const port =process.env.PORT || 3001;
const app=express();
app.use(cors());
app.get("/hi",(req,res)=>{
res.status(200).json({message:"hello"})
})
app.get("/",async(req,res)=>{
const {data}=await axios.get("http://server:3000");
res.status(200).json(data);
});
app.listen(port,()=>{
console.log(`server started at http://localhost:${port}`);
});

