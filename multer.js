const express = require("express")
const multer = require("multer")
const app = express()

const storage = multer.diskStorage({
    destination: (req,file,cd)=>{
        cd(null, '/uploads')
    },
    filename: (req,file,cd)=>{
        cd(null, file.originalname)
    }
})

const upload = multer({dest: 'uploads/'});
app.get('/',(req,res)=>{
    res.send("hellow world")
}); 

app.post('/upload',upload.single('file'),(req,res)=>{
    res.send(req.file)

})

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>console.log(`sarver running in port ${PORT}`))