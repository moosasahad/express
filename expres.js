// const express = require("express")

// const app = express()


// app.get("/",(req,res)=>{
//     res.send("hallow")
// })

// const port = process.env.port || 3000

// app.listen(port,()=>console.log("port 3000 reunned"))

const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies (for POST requests)
app.use(express.json());

// GET request - retrieve information
app.get('/hello', (req, res) => {
    res.send('Hello, World!');
});

// POST request - send data to the server
app.post('/submit', (req, res) => {
    const data = req.body; // Access the data sent in the request body
    res.json({ message: 'Data received', receivedData: data });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
