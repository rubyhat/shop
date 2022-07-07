const Router = require("express");
const router = new Router();

const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/reg", userController.reg);
router.post("/login", userController.login);
router.get("/auth", authMiddleware, userController.check);
router.get("/all", userController.getAll); // добавить проверку на роль

module.exports = router;
