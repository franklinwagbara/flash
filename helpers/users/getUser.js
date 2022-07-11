const { User } = require("../../models");

const getUser = async (user) => {
  try {
    //console.log("usersssss: ", user);
    const _user = await User.findOne({ email: user.email });
    return _user;
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong while trying to find user.");
  }
};

module.exports = getUser;
