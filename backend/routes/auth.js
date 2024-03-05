const express = require("express");
const router = express.Router();
const {protect} = require("../middlewares/auth");
const {register, login} = require("../controllers/auth");

const advancedResults = require("../middlewares/advancedResults");

router.post("/register",register);
router.post("/login",login);

module.exports = router;