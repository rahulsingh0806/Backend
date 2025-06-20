<<<<<<< HEAD
const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () =>{
    mongoose.connect(process.env.DB_URL,{
        useUnifiedTopology:true,
        useNewUrlParser:true
    })
    .then(() => {
        console.log("DB is connected successfully");
    })
    .catch((error) => {
        console.log(error);
        console.log("Facing issue while connecting to the DB");
    })
}

=======
const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () =>{
    mongoose.connect(process.env.DB_URL,{
        useUnifiedTopology:true,
        useNewUrlParser:true
    })
    .then(() => {
        console.log("DB is connected successfully");
    })
    .catch((error) => {
        console.log(error);
        console.log("Facing issue while connecting to the DB");
    })
}

>>>>>>> 31e40b3 (Initial commit)
module.exports = dbConnect;