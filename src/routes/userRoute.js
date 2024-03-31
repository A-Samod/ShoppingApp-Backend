const express = require("express");
const {
  healthCheck,
  loginUser,
  registerUser,
  productCreate,
  proddetail,
} = require("../controllers/userController");

const router = express.Router();

router.route("/healthCheck").get(healthCheck);
router.route("/user/register").post(registerUser);
router.route("/user/login").post(loginUser);
router.route("/product/create").post(productCreate);
router.route("/product/items").get(proddetail);

module.exports = { router };
