const express=require("express")
const app=express()

app.get("/",(req,res)=>{
     res.send("<h1>hello from express</h1>")
})
app.get("/about",(req,res)=>{ 
        res.send("<h1>hello from About page</h1>")
})
app.get("/test",(req,res)=>{
     res.send("<h1>hello from test</h1>")
})
app.use((req,res)=>{
    res.send("<h1>404 Page not found</h1>")
})
app.listen(4500,()=>console.log("epxress server is running on port 4500"))