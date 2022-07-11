const { User } = require("../../models");

const isUser = async (user) => {
  try {
    const res = await User.findOne({ email: user.email });
    if (res) return true;
    return false;
  } catch (error) {
    console.error(error);
    throw new Error("Unable to find user.");
  }
};

module.exports = isUser;
