const express = require("express");
const router = express.Router();
const {protect} = require("../middlewares/auth");

const { getProfile, updateProfile, createProfile } = require("../controllers/profile");
router.put("/",protect, updateProfile);
router.get("/",protect, getProfile);
//router.post("/",protect, createProfile);
module.exports = router;