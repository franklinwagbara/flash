const express = require("express");
const { authController } = require("../controllers");

const router = express.Router();

/*
    @Route  GET /api/auth/users
    @Desc   Returns all the users
    @Access Private
*/
router.get("/users", authController.user_list);

/*
    @Route  POST /api/auth/register
    @Desc   Register user with username, email, password, image
    @Access Public
*/
router.post("/register", authController.user_register_post);

/*
    @Route  POST /api/auth/login
    @Desc   Login user with email and password 
    @Access Public
*/
router.post("/login", authController.user_login_post);

module.exports = router;
