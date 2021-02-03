import axios from 'axios';
import ProductList from '../components/Index/ProductList';
import Meta from '../components/_App/Meta';

function Home({ products }) {
  return (
    <>
      <Meta />
      <ProductList products={products} />
    </>
  );
}

// computes hits when rendering the page not in build tims
export async function getStaticProps(context) {
  const url = 'http://localhost:3000/api/products';
  const res = await axios.get(url);
  return { props: { products: res.data } };
}

export default Home;
