
// const express = require("express")
// const mongoos = require("mongoose")
// const bodyParser = require("body-parser")
// const app = express();

// app.use(express.json())
// app.use(bodyParser.urlencoded())

// mongoos.connect( "mongodb://127.0.0.1:27017/moosadb")
// .then(() => console.log("Connected to MongoDB"))
// .catch((err) => console.error("Error connecting to MongoDB:", err));

// const userSchema = new mongoos.Schema({
//     name:String,
//     age:Number,
// })


// const usermodel = new mongoos.model("user",userSchema)

// app.get("/users", (req, res) => {
//     usermodel.find()
//     .then((users) => res.json(users))
        
// });

// app.post("/users", (req, res) => {
   
//     const { name, age } = req.body;

//     const user = new usermodel({
//         name: name,
//         age: age 
//     });

//     user.save()
//     res.json({ message: 'User updated successfully',user});
// });

// app.put("/users/:id", (req, res) => {
//     const { id } = req.params; // Extract the user ID from the route parameter
//     const { name, age } = req.body; // Extract the new values from the request body

//     usermodel.findByIdAndUpdate(
//         id, // ID of the user to update
//         { name: name, age: age }, // New values to update
//         { new: true } // Option to return the updated user document
//     )
//     .then((jhsd) => {
//         res.json({ message: 'User updated successfully', user: jhsd });
//     })
//     .catch((err) => res.status(500).send("Error updating user: " + err.message));
// });




// const PORT = process.env.PORT || 3000;
// app.listen(PORT,()=>console.log("server runned "+PORT))



// const express = require("express");
// const mongoose = require("mongoose");
// const app = express();

// app.use(express.json());

// mongoose.connect("mongodb://127.0.0.1:27017/moosadb")
//     .then(() => console.log("Connected to MongoDB"))
//     .catch((err) => console.error("Error connecting to MongoDB:", err));

// const userSchema = new mongoose.Schema({
//     name: String,
//     age: Number,
// });

// const usermodel = new mongoose.model("user", userSchema);

// app.get("/users", (req, res) => {
//     usermodel.find()
//         .then((users) => res.json(users))
//         .catch((err) => res.status(500).send("Error retrieving users: " + err.message));
// });

// app.post("/users", (req, res) => {
//     const { name, age } = req.body;

//     const user = new usermodel({
//         name: name,
//         age: age,
//     });

//     user.save()
//         .then((savedUser) => res.json({ message: 'User created successfully', user: savedUser }))
//         .catch((err) => res.status(500).send("Error saving user: " + err.message));
// });

// app.put("/users/:id", (req, res) => {
//     const { id } = req.params;
//     const { name, age } = req.body;

//     usermodel.findByIdAndUpdate(id, { name, age }, { new: true })
//         .then((updatedUser) => {
           
//                 res.json({ message: 'User updated successfully', user: updatedUser });
//         })
//         .catch((err) => res.status(500).send("Error updating user: " + err.message));
// });

// app.delete("/users/:id", (req, res) => {
//     const { id } = req.params; 

//     usermodel.findByIdAndDelete(id)
//         .then((deletedUser) => {
//             if (deletedUser) {
//                 res.json({ message: 'User deleted successfully', user: deletedUser });
//             } else {
//                 res.status(404).send("User not found");
//             }
//         })
//         .catch((err) => res.status(500).send("Error deleting user: " + err.message));
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log("Server running on port " + PORT));


const express = require("express")
const mongoose = require("mongoose")
const app = express();
app.use(express.json())
mongoose.connect("mongodb://127.0.0.1:27017/moosadb")
.then(()=>console.log("mongos runned"))
.catch((error)=>{
    console.log(error);
    
})

const sechema = new mongoose.Schema({
    name:String,
    age:Number
});
const mongoscheema = new mongoose.model("newuser",sechema)

app.post("/use",(req,res)=>{
    const {name,age}=req.body;
    
    const clinte = new mongoscheema({
        name: name,
        age: age
    });
    clinte.save()
    .then((savedUser) => res.json({ message: 'User created successfully', user: savedUser }))
})
app.get("/",(req,res)=>{
    mongoscheema.find()
    .then((newuser)=>res.json(newuser))
})
app.put("/use/:id",(req,res)=>{
    const id = req.params.id
    const {name,age} = req.body;
    mongoscheema.findByIdAndUpdate(
        id,
        {name,age},
        {new : true}

    )
    .then((updat)=>{
        res.json({massage:"update succsses"+updat})
    })
})

app.delete("use/:id",(req,res)=>{
    const id = req.params.id;  
    mongoscheema.findByIdAndDelete(id)
    .then((dele)=>res.json("userdleted"+ dele))
})
app.listen(3000,()=>console.log("server is runned"))
