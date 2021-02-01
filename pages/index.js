import axios from 'axios';
import ProductList from '../components/Index/ProductList';
import Meta from '../components/_App/Meta';

function Home({ products }) {
  return (
    <>
      <Meta />
      <ProductList product={products} />
      home
    </>
  );
}

export const getStaticProps = async (context) => {
  const url = 'http://localhost:3000/api/products';
  const res = await axios.get(url);
  return { props: { products: res.data } };
};

export default Home;
