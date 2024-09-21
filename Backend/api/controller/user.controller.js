const User = require("../models/User/user.model");
const Address = require("../models/Address/address.model");

const createUserWithAddress = async (req, res) => {
  try {
    const { name, address } = req.body;

    let user = await User.findOne({ name });

    if (user) {
      const newAddress = new Address({ address, user: user._id });
      const savedAddress = await newAddress.save();

      user.addresses.push(savedAddress._id);
      await user.save();

      res.status(201).json({ message: "Address added to existing user", user, address: savedAddress });
    } else {
      const newUser = new User({ name });
      const savedUser = await newUser.save();

      const newAddress = new Address({ address, user: savedUser._id });
      const savedAddress = await newAddress.save();

      savedUser.addresses.push(savedAddress._id);
      await savedUser.save();

      res.status(201).json({ message: "New user and address created", user: savedUser, address: savedAddress });
    }
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports = { createUserWithAddress };
