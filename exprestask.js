const express = require("express")
const app = express()

app.use(express.json());

let users = []

app.get('/',(req,res)=>{
    res.send(users)
})
app.post('/user',(req,res)=>{
    const {name,email,username}=req.body;
    const newuser ={
        id: users.length+1,
        name,
        email,
        username

    };
    users.push(newuser)
    res.status(201).json( {message :'user created sucsessfull', user:users});
})
app.put('/user/:id',(req,res)=>{
    const userid = parseInt(req.params.id)
    const user = users.find(us=>us.id==userid)
    console.log(user);
    
    const {name,email,username}=req.body;
    if(!user){
        return res.status(404).json({ message: 'user not found' });
    }
    user.name = name;
    user.username = username;
    user.email = email;
    res.json({ message: 'User updated successfully', user: users });

})
app.get('/user/:id',(req,res)=>{
    const userId = parseInt(req.params.id)
    const user = users.find(u => u.id == userId)
    res.send(user)
})
app.delete('/user/:id',(req,res)=>{
    const userId = parseInt(req.params.id)
    if(!userId) {
        res.status(404).json({ message : "usernot found"})
    }
    users = users.filter(use=>use.id !== userId)
    res.json({ message: 'User deleted successfully' });
})

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>console.log(`server running in ${PORT}`))