const Card = require("../models/card");

exports.createCard = async (req, res) => {
  try {
    const { title, para } = req.body;

    if (!title || !para) {
      return res.status(400).json({
        success: false,
        message: "All fields required",
      });
    }

    const card = await Card.create({
      title,
      para,
      user: req.user.id,
    });

    res.status(201).json({
      success: true,
      card,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ✅ NEW FUNCTION: Get all cards for logged-in user
exports.getAllCards = async (req, res) => {
  try {
    const cards = await Card.find({ user: req.user.id }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      cards,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
