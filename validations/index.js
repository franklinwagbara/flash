const validateUser = require("./validateUser");
const validatePin = require("./validatePin");
const validateSave = require("./validateSave");
const validateComment = require("./validateComment");
const validateEmailAndPassword = require("./validateEmailAndPassword");
const extractErrors = require("./extractErrors");

module.exports = {
  validateUser,
  validatePin,
  validateComment,
  validateSave,
  extractErrors,
  validateEmailAndPassword,
};
