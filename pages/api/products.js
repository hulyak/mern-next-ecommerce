import connectDb from '../../utils/connectDb';
import Product from '../../models/Product';

// connect to database
connectDb();

export default async (req, res) => {
  // console.log(req.method) // GET
  const products = await Product.find();
  res.status(200).json(products);
};
