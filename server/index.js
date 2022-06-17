require("dotenv").config(); // for env process
const express = require("express");
const cors = require("cors"); // for localhost
const fileUpload = require("express-fileupload"); // for getting files from requests
const path = require("path");

const sequelize = require("./db");
const models = require("./models");

const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorHandlingMiddleware"); // обязательно регистрировать в конце

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static"))); // for detected static images in folder static
app.use(fileUpload({}));
app.use("/api", router);

// Обработка ошибок, последний Middleware
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
