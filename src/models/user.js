const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = new Schema({
  username: { type: String },
  email:{type:String},
  password: { type: String },
  status:{type:Number}
});

module.exports = mongoose.model("user", User);
