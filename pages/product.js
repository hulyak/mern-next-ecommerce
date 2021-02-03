import { useRouter } from 'next/router';
import axios from 'axios';
import ProductSummary from '../components/Product/ProductSummary';
import ProductAttributes from '../components/Product/ProductAttributes';

function Product({ product }) {
  // const router = useRouter();
  // const { _id } = router.query;

  return (
    <>
      <ProductSummary {...product} />
      <ProductAttributes {...product} />
    </>
  );
}

export async function getServerSideProps({ params: { _id } }) {
  const url = `http://localhost:3000/api/product/${_id}`;
  const res = await axios.get(url);
  // server side rendering
  return {
    props: { product: res.data }, // will be passed to the page component as props
  };
}

export default Product;
