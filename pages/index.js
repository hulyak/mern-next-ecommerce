import axios from 'axios';
import ProductList from '../components/Index/ProductList';
import Meta from '../components/_App/Meta';
import baseUrl from '../utils/baseUrl';

function Home({ products }) {
  return (
    <>
      <Meta />
      <ProductList products={products} />
    </>
  );
}

export async function getServerSideProps(context) {
  const url = `${baseUrl}/api/products`;
  const res = await axios.get(url);
  return { props: { products: res.data } };
}

export default Home;
