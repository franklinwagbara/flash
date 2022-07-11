const { Schema, model } = require("mongoose");
const Joi = require("joi");

const CommentSchema = new Schema(
  {
    comment: { type: String, required: true },
    postedBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
    pin: { type: Schema.Types.ObjectId, ref: "Pin", required: true },
    likes: { type: Number },
    created_at: { type: Date, default: new Date() },
  },
  { timestamps: true }
);

const Comment = model("Comment", CommentSchema);

module.exports = Comment;
