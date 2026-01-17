const CardDetail = require("../models/CardDetails");

exports.createCardDetail = async (req, res) => {
  try {
    const { title, para, detail } = req.body;

    if (!title || !para || !detail) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const cardDetail = await CardDetail.create({
      title,
      para,
      detail,
      user: req.user.id,
    });

    res.status(201).json({
      success: true,
      cardDetail,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
