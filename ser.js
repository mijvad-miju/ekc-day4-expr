const express=require("express")
const app=express()
app.get("/",(req,res)=>{
    res.send("<h1 style=color:red;text-align:center>Welcome to my website.</h1>")
})
app.get("/products/:id",(req,res)=>{
    let prodid=req.params.id
    res.send(`Details of product with id ${prodid}`)
})
app.get("/search",(req,res)=>{
    //eg:http://localhost:4500/search?name=redmi&cate=mobile
    if(req.query.name && req.query.cate)
        res.send(`<h1>Details for searched product with name ${req.query.name} and category ${req.query.cate}</h1>`)
    else
        res.send(`not found`)
})
app.listen(4501,()=>console.log("epxress server is running on port 4501"))
