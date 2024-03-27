const User = require("../models/user");

async function healthCheckData() {
  try {
    const msg = "Health Check Status : Success";
    return msg;
  } catch (error) {
    const msg = "Health Check Status : Failed";
    return msg;
  }
}


async function userRegister(username,email,password) {
    try {
     const newUser = new User({ username, email, password });
     const data = await newUser.save();
    return data;
    } catch (error) {
      return error;
    }
  }

  async function userLogin(email, password) {
    try {
        const user = await User.findOne().where({ email, password });
       
        console.log("response ++>>", user);
       
        return user;
    } catch (error) {
        return error;
    }
}

module.exports = {
  healthCheckData,
  userRegister,
  userLogin
};
