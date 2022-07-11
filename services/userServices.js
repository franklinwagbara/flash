const { User } = require("../models");
const {
  validateUser,
  extractErrors,
  validateEmailAndPassword,
} = require("../validations");
const bcrypt = require("bcrypt");
const _ = require("lodash");

exports.get_users = async function (getUsers) {
  return await getUsers();
};

exports.login_user = async function ({ isUser, getUser }, user) {
  try {
    //valiate user
    const { error } = validateEmailAndPassword(user);
    if (error) return { status: 400, error: { error: extractErrors(error) } };

    //check if user exist in database
    const userFound = await getUser(user);
    if (!userFound)
      throw new Error("There was a problem with your login credentials.");

    //compare password
    const isPasswordMatch = await bcrypt.compare(
      user.password,
      userFound.password
    );

    if (isPasswordMatch)
      return {
        status: 200,
        res: { user: _.pick(userFound, ["username", "email"]) },
      };
    else throw new Error("There was a problem with your login credentials.");
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

exports.register_user = async function ({ isUser, createUser }, user) {
  //validate user data
  try {
    const { error } = validateUser(user);

    if (error) return { status: 400, error: extractErrors(error) };

    //check if user exist in database
    if (await isUser(user)) throw new Error("User already exists!");

    //hash user password
    const hashedPassword = await bcrypt.hash(user.password, 12);

    //create user object and save
    const newUser = await createUser({ ...user, password: hashedPassword });

    //return created user object without the password field
    return {
      status: 200,
      res: {
        newUser: _.pick(newUser, ["_id", "username", "email"]),
      },
    };
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
