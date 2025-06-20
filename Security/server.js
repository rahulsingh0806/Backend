<<<<<<< HEAD
const express = require('express');
const app = express();
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const connectDB = require("./config/database");

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use("/api/v1", authRoutes);

app.get("/", (req, res) => {
    res.send(`<h1>This is HomePage</h1>`);
})

connectDB();

app.listen(PORT, () => {
    console.log(`App is listening on Port No. ${PORT}`);
})

=======
const express = require('express');
const app = express();
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const connectDB = require("./config/database");

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use("/api/v1", authRoutes);

app.get("/", (req, res) => {
    res.send(`<h1>This is HomePage</h1>`);
})

connectDB();

app.listen(PORT, () => {
    console.log(`App is listening on Port No. ${PORT}`);
})

>>>>>>> 31e40b3 (Initial commit)
