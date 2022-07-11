const { userServices } = require("../services");
const { isUser, createUser, generateToken, getUsers } = require("../helpers");

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

exports.user_register_post = async function (req, res) {
  try {
    const result = await userServices.register_user(
      { isUser, createUser },
      req.body
    );
    if (result.error) return res.status(result.status).send(result.error);

    res.cookie("access-token", result.res.token, {
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });
    return res.send(result.res.newUser);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: error.message });
  }
};

exports.user_login_post = async function (req, res) {
  //check if user is already logged in
  //validate user data
  //check if user exists
  //compare passwords
  //persist user session on client's machine
  //return user
};
