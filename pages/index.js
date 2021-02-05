import axios from 'axios';
import ProductList from '../components/Index/ProductList';
import ProductPagination from '../components/Index/ProductPagination';
import Meta from '../components/_App/Meta';
import baseUrl from '../utils/baseUrl';

function Home({ products, totalPages }) {
  return (
    <>
      <Meta />
      <ProductList products={products} />
      <ProductPagination totalPages={totalPages} />
    </>
  );
}

export async function getServerSideProps(context) {
  const page = context.query.page ? context.query.page : '1';
  const size = 9;
  const url = `${baseUrl}/api/products`;
  const payload = { params: { page, size } };
  const res = await axios.get(url, payload);
  return { props: res.data };
}

export default Home;
