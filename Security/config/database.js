<<<<<<< HEAD
const mongoose = require("mongoose");
require('dotenv').config();

const connectDB = () => {
    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true 
    })
    .then(() => {
        console.log("Database connect established successfully");
    })
    .catch((error) => {
        console.log("Facing error while connecting to the database : ", error);
        process.exit(1); 
    })
}

=======
const mongoose = require("mongoose");
require('dotenv').config();

const connectDB = () => {
    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true 
    })
    .then(() => {
        console.log("Database connect established successfully");
    })
    .catch((error) => {
        console.log("Facing error while connecting to the database : ", error);
        process.exit(1); 
    })
}

>>>>>>> 31e40b3 (Initial commit)
module.exports = connectDB;