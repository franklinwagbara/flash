const { User } = require("../models");
const { validateUser, extractErrors } = require("../validations");
const bcrypt = require("bcrypt");
const _ = require("lodash");

exports.get_users = async function (getUsers) {
  return await getUsers();
};

exports.register_user = async function ({ isUser, createUser }, user) {
  //validate user data
  try {
    const { error } = validateUser(user);

    if (error) return { status: 400, error: extractErrors(error) };

    //check if user exist in database
    if (await isUser(user))
      return { status: 400, error: { error: "User already exists!" } };

    //hash user password
    const hashedPassword = await bcrypt.hash(user.password, 12);

    //create user object and save
    const newUser = await createUser({ ...user, password: hashedPassword });

    //create a user session and persist
    const token = generateToken(newUser._id);

    //return created user object without the password field
    return {
      status: 200,
      res: {
        newUser: _.pick(newUser, ["_id", "username", "email"]),
        token: token,
      },
    };
  } catch (error) {
    console.log(error);
    return { status: 500, error: { error: error.message } };
  }
};
