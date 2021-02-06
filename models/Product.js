import mongoose from 'mongoose';
import { nanoid } from 'nanoid';

const ProductsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  sku: {
    type: String,
    unique: true,
    default: nanoid(),
  },
  description: {
    type: String,
    required: true,
  },
  mediaUrl: {
    type: String,
    required: true,
  },
});

// if we have already a Product model use it otherwise create a new one.
const Product =
  mongoose.models.Product || mongoose.model('Product', ProductsSchema);

export default Product;
