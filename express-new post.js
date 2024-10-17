const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

let user = []
app.post("/user", (req,res)=>{
    const {name,email,username} = req.body;

    const newUser ={
        id :user.length+1,
        name,
        email,
        username
    };
    user.push(newUser)
    res.status(201).json({massage:"user created succsessfully ",user: newUser})

})
app.get('/user',(req,res)=>{
    res.send(user)
})

app.get('/user/:id',(req,res)=>{
    const userid = parseInt(req.params.id)
    const users = user.find(user => user.id === userid)

    if(!users){
        return res.status(404).json({ message : 'user not found'})
    }
    res.json(users)
})
app.put('/user/:id', (req, res) => {
    const userid = parseInt(req.params.id);
    const { name, username, email } = req.body;

    const users = user.find(u => u.id === userid);

    if (!users) {
        return res.status(404).json({ message: 'user not found' });
    }

    users.name = name;
    users.username = username;
    users.email = email;

    res.json({ message: 'User updated successfully', user: users });
});
app.delete('/user/:id',(req,res)=>{
    const userid = parseInt(req.params.id);
    const usere = user.find(u=>u.id === userid)

    if(!usere){
        res.status(404).json({ message : "usernot found"})
    
    }
    user = user.filter(use => use.id !== userid)
    res.json({ message: 'User deleted successfully' });
})


const PORT = process.env.PORT || 4000

app.listen(PORT,()=>console.log(`server is rennud in ${PORT}`))