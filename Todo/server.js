const express = require('express');
const app = express();
require("dotenv").config();
const todoRoutes = require("./routes/todoRoutes");
const connectDB = require("./config/database");

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use("/api/v1", todoRoutes);
app.get("/", (req, res) => {
    res.send(`<h1>This is HomePage</h1>`);
})
connectDB();

app.listen(PORT, () => {
    console.log(`App is listening on Port No. ${PORT}`);
})

