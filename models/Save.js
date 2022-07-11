const { Schema, model } = require("mongoose");
const Joi = require("joi");

const SaveSchema = new Schema({
  title: { type: String },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  pins: [{ type: Schema.Types.ObjectId, ref: "Pin" }],
});

const Save = model("Save", SaveSchema);

module.exports = Save;
