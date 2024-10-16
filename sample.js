const express = require("express")

const app = express()

app.get("/",(req,res)=>{
    res.send("hallow home ")
})
app.get("/*",(req,res)=>{
    res.send("<h1>404</h1>")
})
app.get("/*",(req,res)=>{
    res.send("<h1>404</h1>")
})
app.get("/*",(req,res)=>{
    res.send("<h1>404</h1>")
    res.send("jkhdskfjhdsjkf")
})

app.get("/new",(req,res)=>{
    res.send("new path")
})
app.get("/active",(req,res)=>{
    res.send("active path")
})
app.get("/about",(req,res)=>{
    res.send("halow about welcome")
})
app.get("/shope",(req,res)=>{
    res.send("wlcome to shope")
})
app.get("/contact",(req,res)=>{
    res.send("hallow welcom to contact ")
})
app.get("/*",(req,res)=>{
    res.send("<h1> 404 error<h1>")
    res.send("<h1> erroe page not found <h1>")
})

const PORT = process.env.PORT || 3001 

app.listen(PORT,()=>console.log("port 2 running"))