const jwt = require("jsonwebtoken");
const { getUserById } = require("../helpers/users");

const requireAuth = async (req, res, next) => {
  try {
    //get token from cookie
    const token = req.cookies["access-token"];

    //verify the token
    if (token) {
      const { user_id } = jwt.verify(token, process.env.JWT_SECRET);
      const user = await getUserById(user_id);

      if (user) {
        req.user = _.pick(user, ["_id", "username", "email"]);
        return next();
      } else {
        throw new Error("Unauthorized access!");
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(401).send({ error: error.message });
  }
};
module.exports = requireAuth;
