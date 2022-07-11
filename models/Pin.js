const { Schema, model } = require("mongoose");
const Joi = require("joi");

const PinSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  postedBy: { type: Schema.Types.ObjectId, ref: "User", require: true },
  likes: { type: Number, default: 0 },
  saves: { types: Number, default: 0 },
  shares: { type: Number, default: 0 },
});

const Pin = model("Pin", PinSchema);

module.exports = Pin;
