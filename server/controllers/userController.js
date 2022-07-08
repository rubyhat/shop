const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const ApiError = require("../errors/ApiError");
const { User, Basket } = require("../models");

const generateToken = (id, login, role) => {
  return jwt.sign({ id, login, role }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

class UserController {
  async reg(req, res, next) {
    const { login, password, role, phone, name, fio, email } = req.body;
    if (!login || !password || !phone) {
      return next(ApiError.badRequest("Пустой логин или пароль"));
    }

    const candidate = await User.findOne({ where: { login } });

    if (candidate) {
      return next(
        ApiError.badRequest("Пользователь с таким логином уже существует")
      );
    }

    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({
      login,
      role,
      password: hashPassword,
      phone,
      name,
      fio,
      email,
    });
    const basket = await Basket.create({ userId: user.id });
    const token = generateToken(
      user.id,
      user.login,
      user.role,
      user.phone,
      user.email,
      user.fio
    );

    return res.json({ token });
  }

  async login(req, res, next) {
    const { login, password } = req.body;
    if (!login || !password) {
      return next(ApiError.badRequest("Пустой логин или пароль"));
    }

    const user = await User.findOne({ where: { login } });

    if (!user) {
      return next(
        ApiError.badRequest("Пользователя с таким логином не существует")
      );
    }

    const comparePassword = bcrypt.compareSync(password, user.password);

    if (!comparePassword) {
      return next(ApiError.badRequest("Неверный пароль"));
    }
    const token = generateToken(user.id, user.login, user.role);
    return res.json({ token });
  }

  async check(req, res, next) {
    const token = generateToken(req.user.id, req.user.login, req.user.role);
    res.json({ token });
  }

  async getAll(req, res, next) {
    const users = await User.findAll();
    return res.json(users);
  }
}

module.exports = new UserController();
