const Joi = require("joi");

const SaveValidationSchema = Joi.object({
  title: Joi.string(),
  user: Joi.string().required(),
  pins: Joi.array(),
});

const validateSave = (save) => {
  return SaveValidationSchema.validate(save, { abortEarly: false });
};

module.exports = validateSave;
