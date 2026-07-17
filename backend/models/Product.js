import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  brand: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  rating: {
    type: Number,
    default: 5,
  },

  stock: {
    type: Number,
    default: 10,
  },

  description: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Product", productSchema);