const express = require("express");
const app = express();
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const connectDB = require("./config/database");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());
app.use("/api/v1", authRoutes);

app.get("/", (req, res) => {
    res.send(`<h1>This is HomePage</h1>`);
})

connectDB();

app.listen(PORT, () => {
    console.log(`App is listening on Port No. ${PORT}`);
})
