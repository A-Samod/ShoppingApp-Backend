const { response } = require("express");
const {
  fetchWeatherData,
  healthCheckData,
  userLogin,
  userRegister,
  productCreate1,
  productDetails,
} = require("../services/userService");

async function healthCheck(req, res) {
  try {
    const msg = await healthCheckData();
    console.log("Health Check Status : Success");
    res.status(200).json({
      status: 200,
      data: msg,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      data: msg,
      error: error.message,
      message: "Health Check Failed",
    });
  }
}

async function registerUser(req, res) {
  try {
    console.log("req.body", req.body);
    const { username, email, password } = req.body;
    const data = await userRegister(username, email, password);
    console.log("data controller ===>>>", data);
    res.status(200).json({
      status: 200,
      message: "success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      error: error.message,
    });
  }
}

async function loginUser(req, res) {
  try {
    console.log("req.body", req.body);
    const { email, password } = req.body;
    const data = await userLogin(email, password);

    console.log("data ===>>>", data);

    if (!data) {
      return res.status(404).json({
        status: 404,
        message: "password incorrect",
      });
    }

    if (data == 404) {
      return res.status(404).json({
        status: 404,
        message: "email not found",
      });
    }

    res.status(200).json({
      status: 200,
      message: "success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      error: error.message,
    });
  }
}

async function productCreate(req, res) {
  try {
    console.log("req.body ++", req.body);
    const dataq = req.body;
    const data = await productCreate1(dataq);
    res.status(200).json({
      status: 200,
      message: "success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      error: error.message,
    });
  }
}

async function proddetail(req, res) {
  try {
    const data = await productDetails();
    console.log("data ++>>", typeof data);
    res.status(200).json({
      data: data,
      message: "Data retrieved successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      error: error.message,
    });
  }
}

module.exports = {
  healthCheck,
  registerUser,
  loginUser,
  productCreate,
  proddetail,
};
