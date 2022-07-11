const Joi = require("joi");

const CommentValidationSchema = Joi.object({
  comment: Joi.string().required(),
  postedBy: Joi.string().required(),
  pin: Joi.string().required(),
  likes: Joi.number(),
  created_at: Joi.date(),
});

const validateComment = (comment) => {
  return CommentValidationSchema.validate(comment, { abortEarly: false });
};

module.exports = validateComment;
