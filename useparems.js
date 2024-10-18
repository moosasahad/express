const express = require('express')
const app = express()

app.get('/user/:id',(req,res)=>{
    const userid = req.params.id
    res.send(userid)

})
app.get('/users/:id', (req, res) => {
    const userId = req.params.id; // Access the value of the `id` parameter
    res.send(`User ID is: ${userId}`);
});

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>console.log("port is runned"))