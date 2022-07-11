const Joi = require("joi");

const PinValidationSchema = Joi.object({
  user: Joi.string().required(),
  title: Joi.string().min(3).max(30).alphanum().required(),
  image: Joi.string().required(),
  description: Joi.string(),
  comments: Joi.array(),
  postedBy: Joi.string(),
  likes: Joi.number(),
  saves: Joi.number(),
  shares: Joi.number(),
});

const validatePin = (pin) => {
  return PinValidationSchema.validate(pin, { abortEarly: false });
};

module.exports = validatePin;
