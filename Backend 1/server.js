const express = require('express');
const bodyParser = require("body-parser")
const app = express();
const mongoose = require('mongoose')

app.use(bodyParser.json());
app.listen(3000, () => {
    console.log("App is listening on port no. 3000");
})


app.get('/', (req, res) => {
    res.send("This is home page ");
})
app.post('/api/cars/',(req, res) => {
    const {name, brand} = req.body;
    console.log("Name of car: ",name)
    console.log("Name of car brand: ", brand)
    res.send("Car registered successfully")
})

mongoose.connect('mongodb://localhost:27017/backendDB',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() => {
        console.log("Successfully establish connect with mongoDB");
})
.catch((error) => {
    console.log("Facing error while connecting with mongoDB");
})