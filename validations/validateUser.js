const Joi = require("joi");

const UserValidationSchema = Joi.object({
  username: Joi.string().alphanum().min(5).max(60).required(),
  avatar: Joi.string(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
    })
    .required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
  confirm_password: Joi.ref("password"),
}).with("password", "confirm_password");

const validateUser = (user) => {
  return UserValidationSchema.validate(user, { abortEarly: false });
};

module.exports = validateUser;
