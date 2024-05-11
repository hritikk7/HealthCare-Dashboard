const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  user_id: { type: Number, required: true },
  username: { type: String, required: true },
  password: { type: Number, require: true },

});

module.exports = model("User", userSchema);
