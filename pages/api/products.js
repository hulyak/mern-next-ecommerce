import products  from '../../static/products.json';
import connectDb from '../../utils/connectDb';

// connect to database
connectDb();

export default (req, res) => {
    // console.log(req.method) // GET
    res.status(200).json(products)
}