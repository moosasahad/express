const express= require("express")
const path = require("path")

const app = express()

app.use(express.static("folder"))

app.get("*",(req,res)=>{
    res.send("404")
})

const port = process.env.port || 3000;y6y
app.listen(port,()=>console.log("port running"))