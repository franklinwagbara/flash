const isUser = require("./users/isUser");
const createUser = require("./users/createUser");
const generateToken = require("./auth/generateToken");
const getUsers = require("./users/getUsers");
const getUser = require("./users/getUser");
const getUserById = require("./users/getUserById");

module.exports = {
  isUser,
  createUser,
  generateToken,
  getUsers,
  getUser,
  getUserById,
};
