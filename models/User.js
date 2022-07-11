const { Schema, model } = require("mongoose");
const Joi = require("joi");

const UserSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    avatar: { type: String },
    friends: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const User = model("User", UserSchema);

module.exports = User;
