const Joi = require("joi");

const schema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
    })
    .required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});

const validateEmailAndPassword = function (user) {
  return schema.validate(user, { abortEarly: false });
};

module.exports = validateEmailAndPassword;
