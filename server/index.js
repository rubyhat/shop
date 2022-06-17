require("dotenv").config();
const express = require("express");
const cors = require("cors");

const sequelize = require("./db");
const models = require("./models");

const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorHandlingMiddleware"); // обязательно регистрировать в конце

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
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
