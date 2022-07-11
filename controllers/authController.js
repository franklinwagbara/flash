const { userServices } = require("../services");
const {
  isUser,
  createUser,
  generateToken,
  getUsers,
  getUser,
} = require("../helpers");

exports.user_list = async function (req, res) {
  //get all users
  try {
    const users = await userServices.get_users(getUsers);
    return res.send(users);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: error.message });
  }
};

exports.user_login_post = async function (req, res) {
  try {
    //login the user
    const loginUser = await userServices.login_user(
      { isUser, getUser },
      req.body
    );

    //generate token
    const token = generateToken(loginUser.res.user._id);

    //persist user session on client's machine
    res.cookie("access-token", token, {
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });
    //return user
    return res.send({ token: token, user: loginUser.res?.user });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: error.message });
  }
};

exports.user_register_post = async function (req, res) {
  try {
    const result = await userServices.register_user(
      { isUser, createUser },
      req.body
    );
    if (result.error) return res.status(result.status).send(result.error);

    //generate token
    const token = generateToken(result.res?.newUser._id);

    //create a user session and persist
    res.cookie("access-token", token, {
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });
    return res.send(result.res?.newUser);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: error.message });
  }
};
