const { model, Schema } = require("mongoose");

const schema = new Schema(
  {
    fruitName: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Fruit", schema);
