const mongoose = require("mongoose");

const { Schema } = mongoose;

const offerSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  urlImage: {
    type: Array,
    required: true
  },
  tags: {
    type: String,
    required: true
  }
}, 
{timestamps: true}
);

const Offer = mongoose.model(
  "Offer",
  offerSchema
);

module.exports = {
  offerSchema
};