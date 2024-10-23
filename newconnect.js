const express = require("express")
const mongoose = require("mongoose")
const app = express();
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/moosadb")
.then(()=>console.log("mongos runned"))
.catch((error)=>{
    console.log(error);
    
})
const schema = new mongoose.Schema({
    name:String,
    age:Number

})
const newmongos = new mongoose.model("sample",schema)

app.post("/",(req,res)=>{
    const {name,age} = req.body
    const clint = new newmongos({
        name,age
    })
    clint.save()
    .then((data)=>res.json(data))
})


app.listen(3000,()=>console.log("server is runned 3000"))