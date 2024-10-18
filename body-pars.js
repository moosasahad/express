const bodyParser = require("body-parser")
const express = require("express")

const app = express();
app.use(bodyParser.urlencoded())
app.get('/',(req,res)=>{
    res.send("hallow")
    console.log(req.body);
    
}).listen(3000)