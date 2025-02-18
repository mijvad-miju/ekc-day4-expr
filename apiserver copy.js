const express=require("express")
const app=express()
app.route("/products")
.get("/",(req,res)=>{
    res.send("<h1 style=color:red;text-align:center>Welcome to my website.</h1>")
})

.get("/products",(req,res)=>{
    let prodid=req.params.id
    res.send(`<h1>The following are the product details.</h1>`)
})

.post("/products",(req,res)=>{
    let prodid=req.params.id
    res.send(`<h1>Product is saved succesfully</h1>`)
})

.put("/products",(req,res)=>{
    let prodid=req.params.id
    res.send(`<h1>The product is updated succesfully</h1>>`)
})

.delete("/products",(req,res)=>{
    let prodid=req.params.id
    res.send(`<h1>The product is deleted</h1>`)
})

app.listen(3800,()=>console.log("api server is running on port 3800"))