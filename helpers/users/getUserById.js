const { User } = require("../../models");

const getUserById = async (userId) => {
  try {
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong while trying to find user.");
  }
};
module.exports = getUserById;
