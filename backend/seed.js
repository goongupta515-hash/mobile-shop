import mongoose from "mongoose";
import dotenv from "dotenv";

import Product from "./models/Product.js";
import products from "./data/products.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

console.log(products.length); // should print 10

try {
  await Product.deleteMany();

  const result = await Product.insertMany(products);

  console.log(result.length);

  console.log("Products Imported Successfully");
} catch (err) {
  console.error(err);
}

process.exit();