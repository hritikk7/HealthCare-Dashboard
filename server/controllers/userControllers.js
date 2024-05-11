const User = require("../models/users");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//Register User
exports.registerUser = async (req, res) => {
  const { email, username, password } = req.body;
  try {
    if (!email || !username || !password) {
      return res.status(400).json({
        message: "Fill all the fields",
      });
    }

    const existingEmail = await User.findOne({ email });
    const existingUserName = await User.findOne({ username });

    if (existingEmail || existingUserName) {
      return res.status(400).json({
        message: "User already exists !!",
      });
    }
    const lowerEmail = email.toLowerCase();
    const hashedPassKey = bcrypt.hashSync(password, 8);
    let token = jwt.sign({ email, username }, "shhhhh", {
      expiresIn: 86400, // expires in 24 hours
    });
    const newUser = User({
      user_id: 1,
      email: lowerEmail,
      password: hashedPassKey,
      username,
    });

    await newUser.save();

    return res.status(200).json({
      message: "Registration Succesfull",
    });
  } catch (err) {
    console.log("Error regestring  user:", err);
    return res.status(500).json({ error: "Error regestring user" });
  }
};

//Login for a patient
exports.loginUser = async (req, res) => {
  const { email, username, password } = req.body;
  try {
    if ((!email && !username) || !password) {
      return res.status(400).json({
        message: "Fill all the fields",
      });
    }

    const user = await User.findOne({ $or: [{ email }, { username }] });
    if (user) {
      console.log(user);
      return res.status(200).json({
        message: "user  found",
      })
    } else {
      return res.status(404).json({
        message: "user not found",
      });
    }
  } catch (err) {
    console.log("Error loggin  user:", err);
    return res.status(500).json({ error: "Error regestring user" });
  }

  return res.status(200).json({
    message: "req recieved",
  });
};
