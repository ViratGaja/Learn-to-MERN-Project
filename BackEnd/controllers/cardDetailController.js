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

exports.getAllCardDetails = async (req, res) => {
  try {
    const cardDetails = await CardDetail.find({
      user: req.user.id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      cardDetails,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getCardDetailById = async (req, res) => {
  try {
    const cardDetail = await CardDetail.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!cardDetail) {
      return res.status(404).json({
        success: false,
        message: "Card detail not found",
      });
    }

    res.status(200).json({
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
