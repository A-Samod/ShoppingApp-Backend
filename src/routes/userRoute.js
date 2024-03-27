const express = require("express");
const {
  getWeatherData,
  healthCheck,
  loginUser,
  registerUser
} = require("../controllers/userController");

const router = express.Router();

router.route("/healthCheck").get(healthCheck);
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

module.exports = { router };
