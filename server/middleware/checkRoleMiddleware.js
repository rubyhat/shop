const jwt = require("jsonwebtoken");
const ApiError = require("../errors/ApiError");

module.exports = function (role) {
  return function (req, res, next) {
    if (req.method === "OPTIONS") {
      next();
    }

    try {
      const token = req.headers.authorization.split(" ")[1]; // Bearer token_code

      if (!token) {
        return next(ApiError.noAuth("Токен авторизации не задан"));
      }

      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      if (decoded.role !== role) {
        return next(
          ApiError.forbidden("Данный раздел доступен только для администратора")
        );
      }
      req.user = decoded;
      next();
    } catch (e) {
      return next(
        ApiError.noAuth("Неверный токен авторизации / Не авторизован")
      );
    }
  };
};
