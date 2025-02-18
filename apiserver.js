const express=require("express")
const app=express()
app.use(express.json())
let products=[]
app.get("/",(req,res)=>{
    res.send("<h1 style=color:red;text-align:center>Welcome to my website.</h1>")
})

app.get("/products",(req,res)=>{
    res.send(products)
})

app.post("/products",(req,res)=>{
    if (req.body)
        products.push(req.body)
    res.send(`<h1>Product is saved succesfully</h1>`)
})

app.put("/products",(req,res)=>{
    res.send(`<h1>The product is updated succesfully</h1>>`)
})

app.delete("/products",(req,res)=>{
    res.send(`<h1>The product is deleted</h1>`)
})

app.listen(3800,()=>console.log("api server is running on port 3800"))