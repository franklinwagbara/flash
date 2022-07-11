const jwt = require("jsonwebtoken");

generateToken = (user_id) => {
  return jwt.sign({ user_id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

module.exports = generateToken;
