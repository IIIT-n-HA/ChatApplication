const express = require("express");
const router = express.Router();
const protectRoute = require("../middleware/protectRoute.js");
const getUsersForSidebar = require("../controllers/user.controller.js");

router.get("/", protectRoute, getUsersForSidebar);

module.exports = router;
