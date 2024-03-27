const { response } = require("express");
const {
    fetchWeatherData,
    healthCheckData,
    userLogin,userRegister
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
            const {username, email, password} = req.body;
          const data = await userRegister(username, email, password);
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
            const {email, password} = req.body;
          const data = await userLogin(email, password);

          console.log("data ===>>>", data);

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
  
  module.exports = {
    healthCheck,
    registerUser,
    loginUser
  };
  