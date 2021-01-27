import mongoose from 'mongoose';
import shortId from 'shortId';

const { String, Number } = mongoose.Schema.Types;

const ProductsSchema = new mongoose.Schema({
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
    default: shortId.generate(),
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
export default mongoose.models.Product ||
  mongoose.model('Product', ProductsSchema);
