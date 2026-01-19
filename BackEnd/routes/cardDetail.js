const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const {
  createCardDetail,
  getAllCardDetails,
  getCardDetailById,
} = require("../controllers/cardDetailController");

router.post("/add", auth, createCardDetail);
router.get("/all", auth, getAllCardDetails);


module.exports = router;
