const express = require("express");
const router = express.Router();

const { createCard } = require("../controllers/cardController"); // ✅
const auth = require("../middleware/auth"); // ✅

router.post("/add", auth, createCard);

module.exports = router;
