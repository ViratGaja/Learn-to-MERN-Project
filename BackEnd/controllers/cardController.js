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
      user: req.user.id, // login user
    });

    res.status(201).json({
      success: true,
      card, // ✅ VERY IMPORTANT
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
