const { Router } = require("express");
const {
  adminLogin,
  loginPage,
  dashboard,
} = require("../controllers/admin.controller");
const { tokenMiddleware } = require("../middlewares/token.middleware");

const router = new Router();

router.get("/admin/login", loginPage);
router.post("/admin/login", adminLogin);
router.get("/dashboard", tokenMiddleware, dashboard);

module.exports = router;
