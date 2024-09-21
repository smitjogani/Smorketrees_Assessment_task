const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser');
const {connectDB} = require('./config/dbConnect')
require("dotenv").config()

const userRoutes = require('./api/routes/user.router')

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use("/address", userRoutes);

app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server run on ${PORT}`);
})