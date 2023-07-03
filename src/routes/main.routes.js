const { Router } = require("express");
const { getFruits, postFruit, fruitPost, postMessage, getMessages } = require("../controllers/main.controller");
const fileUpload = require("../middlewares/fileUpload.middleware");
const { tokenMiddleware } = require("../middlewares/token.middleware");

const router = new Router();

router.get("/", getFruits);
router.get("/dashboard/postFruit", fruitPost);
router.post("/postFruit", tokenMiddleware, fileUpload, postFruit);
router.post("/postMessage", postMessage);
router.get("/dashboard/getMessages", tokenMiddleware, getMessages);


module.exports = router;
