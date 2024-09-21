const mongoose = require('mongoose')
require("dotenv").config()

const mongodbUrl = process.env.DBURL;

const connectDB = () => {
    try {
        if(mongoose.connect(mongodbUrl))
        {
            console.log("Database connected");
        }
    } catch (error) {
        console.log("Db connection error", error);
    }
}

module.exports = { connectDB };