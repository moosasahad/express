const express = require('express')
const app = express()

app.get('/search', (req, res) => {
    const term = req.query.term; // Access the value of the `term` parameter
    const page = req.query.page; // Access the value of the `page` parameter
    res.send(`Search term is: ${term}, page number is: ${page}`);
});
const PORT = process.env.PORT || 3000

app.listen(PORT,()=>console.log("port is runned "+PORT))