const { User } = require("../../models");

const isUser = async (user) => {
  try {
    const res = await User.findOne({ email: user.email });
    if (res) return true;
    return false;
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong while checking if use exists.");
  }
};

module.exports = isUser;
