import Product from '../../../models/Product';

export default async (req, res) => {
  const { _id } = req.query; // object, get the _id
  const product = await Product.findOne({ _id });
  res.status(200).json(product);
};
