const Router = require("express");
const router = new Router();

const deviceController = require("../controllers/deviceController");
const checkRoleMiddleware = require("../middleware/checkRoleMiddleware");

router.post("/create", checkRoleMiddleware("ADMIN"), deviceController.create);
router.get("/all", deviceController.getAll);
router.get("/:id", deviceController.getSingle);

module.exports = router;
