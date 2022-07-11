const { User } = require("../../models");
const _ = require("lodash");

const createUser = async (user) => {
  try {
    const newUser = new User(_.pick(user, ["username", "email", "password"]));
    return await newUser.save();
  } catch (error) {
    console.error(error);
    throw new Error("Unable to create user.");
  }
};

module.exports = createUser;
