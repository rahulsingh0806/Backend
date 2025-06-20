const express = require("express");
const app = express();
const dbConnect = require("./config/database");
require("dotenv").config();
const blog = require("./routes/blog");
const PORT = process.env.PORT || 4000;

// middleware to parse response body
app.use(express.json());

app.use("/api/v1",blog);

// making connect with the db
dbConnect();

app.listen(PORT, ()=>{
    console.log(`Server is working on Port No, ${PORT}`)
})

// Default route

app.get('/',(req,res) =>{
    res.send(`<h1 align="center">Daily Blog HomePage</h1>`);
})