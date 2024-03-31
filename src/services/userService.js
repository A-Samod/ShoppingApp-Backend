const bcrypt = require("bcryptjs");
const User = require("../models/user");
const Product = require("../models/product");

async function healthCheckData() {
  try {
    const msg = "Health Check Status : Success";
    return msg;
  } catch (error) {
    const msg = "Health Check Status : Failed";
    return msg;
  }
}

async function userRegister(username, email, password) {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    const data = await newUser.save();

    console.log("dataaa ++>>", data);
    return data;
  } catch (error) {
    return error;
  }
}

async function userLogin(email, password) {
  try {
    // const user = await User.findOne().where({ email, password });
    const user = await User.findOne({ email });

    if (!user) {
      return 404;
    }

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return null;
    }

    console.log("response ++>>", user);

    return user;
  } catch (error) {
    return error;
  }
}

async function productCreate1(dataq) {
  try {
    const newProduct = new Product(dataq);
    const data = await newProduct.save();
    return data;
  } catch (error) {
    return error;
  }
}

async function productDetails() {
  try {
    const data = await Product.find({}, { _id: 0, _v: 0 });
    return data;
  } catch (error) {
    return error;
  }
}

module.exports = {
  healthCheckData,
  userRegister,
  userLogin,
  productCreate1,
  productDetails,
};
