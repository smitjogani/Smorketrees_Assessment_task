const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true, 
    },
    addresses: [
        {
            type: Schema.Types.ObjectId,
            ref: "Address",
        },
    ],
});

const user = mongoose.model("User", userSchema);
module.exports = user;