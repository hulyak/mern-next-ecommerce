// import { useRouter } from 'next/router';
import axios from 'axios';
import ProductAttributes from '../../components/Product/ProductAttributes';
import ProductSummary from '../../components/Product/ProductSummary';
import baseUrl from '../../utils/baseUrl';

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

export async function getServerSideProps(context) {
  const { _id } = context.query;
  const url = `${baseUrl}/api/product/${_id}`;
  const res = await axios.get(url);
  // server side rendering
  return {
    props: { product: res.data }, // will be passed to the page component as props
  };
}

export default Product;
