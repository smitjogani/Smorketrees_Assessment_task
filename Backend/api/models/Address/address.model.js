const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AddressSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Address = mongoose.model("Address", AddressSchema);
module.exports = Address;