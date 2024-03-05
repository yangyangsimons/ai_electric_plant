const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  firstname: {
    type: String,
    require: [true, "Please add name"],
  },
  lastname: {
    type: String,
    require: [true, "Please add name"],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
},{
  toJSON: {virtuals: true},
  toObject: {virtuals: true}
});

module.exports = mongoose.model("Profile", Schema);
