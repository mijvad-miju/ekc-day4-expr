const express=require("express")
const app=express()
app.use(express.json())
const middleWare=(req,res,next)=>
{
    console.log('middleware is working');
    //logic
    next()
}
//registering  middleware
app.use(middleWare)
app.get("/",(req,res)=>{
    res.send("<h1>Home</h1>")
})
app.get("/test",(req,res)=>{
    res.send('<h>testing</h1>')
})
app.listen(4000,()=>console.log("api server is running on port 4000"))
