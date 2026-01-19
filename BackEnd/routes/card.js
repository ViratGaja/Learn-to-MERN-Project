const express = require("express");
const router = express.Router();

const { createCard, getAllCards } = require("../controllers/cardController");
const auth = require("../middleware/auth");

router.post("/add", auth, createCard);
router.get("/all", auth, getAllCards); 
module.exports = router;
