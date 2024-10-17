const express = require("express")

const app = express()

app.get('/',(req,res)=>{
    res.send("hallow home")
}),
app.get('/contact',(req,res)=>{
    res.send("hallow contact")
})

const PORT = process.env.PORT  || 3000

app.listen(PORT)
