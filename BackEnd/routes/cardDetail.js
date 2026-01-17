const express = require("express");
const router = express.Router();

const { createCardDetail } = require("../controllers/cardDetailController");
const auth = require("../middleware/auth");

router.post("/add", auth, createCardDetail);

module.exports = router;
