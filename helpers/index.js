const isUser = require("./users/isUser");
const createUser = require("./users/createUser");
const generateToken = require("./auth/generateToken");
const getUsers = require("./users/getUsers");

module.exports = { isUser, createUser, generateToken, getUsers };
