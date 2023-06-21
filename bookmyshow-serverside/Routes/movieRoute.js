const express = require("express");
const router = express.Router();
const controller = require("../Controller/movieController");

// Define routes for booking
router.post("/booking", controller.storeBooking);
router.get("/booking", controller.getBooking);

module.exports = router;
