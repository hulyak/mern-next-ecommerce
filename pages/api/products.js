import Product from '../../models/Product';
import connectDb from '../../utils/connectDb';

// connect to database
connectDb();

export default async (req, res) => {
  // console.log(req.method) // GET
  const products = await Product.find();
  res.status(200).json(products);
};
