const express = require("express");
const mongoose = require("mongoose");
const { router } = require("./src/routes/userRoute");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

require("dotenv").config();

//swagger
const swaggerDoc = require("./swagger-docs/info");
const swaggerUi = require("swagger-ui-express");

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use("/user", router);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
