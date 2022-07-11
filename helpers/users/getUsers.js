const { User } = require("../../models");

const getUsers = async function () {
  try {
    const users = await User.find().select("username email");
    return users;
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong while trying to get users.");
  }
};

module.exports = getUsers;
