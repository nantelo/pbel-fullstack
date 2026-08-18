const express=require("express");
const port=8000;

const app=express();
app.get("/",(req,res)=>{
  res.send(`<h2 style="color:teal; text-align:center">this is my server</h2>`);
});
app.get("/product",(req,res)=>{
 res.send("product page")
});
app.listen(port,()=>{
  console.log(`server running at ${port}`);
});