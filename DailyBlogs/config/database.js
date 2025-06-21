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

module.exports = dbConnect;