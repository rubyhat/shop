const Router = require("express");
const router = new Router();

router.post("/reg");
router.post("/login");
router.get("/auth", (req, res) => {
  res.status(200).json({ message: "working!" });
});

module.exports = router;
