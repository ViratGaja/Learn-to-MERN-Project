const mongoose = require("mongoose");

const cardDetailSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    para: {
      type: String,
      required: true,
    },
    detail: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CardDetail", cardDetailSchema);
