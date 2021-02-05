import { Segment } from 'semantic-ui-react';
import CartItemList from '../components/Cart/CartItemList';
import CartSummary from '../components/Cart/CartSummary';
import { parseCookies } from 'nookies';
import baseUrl from '../utils/baseUrl';
import axios from 'axios';

const Cart = ({ products }) => {
  console.log(products);
  return (
    <Segment>
      <CartItemList />
      <CartSummary />
    </Segment>
  );
};

export default Cart;

// authenticated request
export async function getServerSideProps(context) {
  const { token } = parseCookies(context);
  if (!token) {
    return { props: { products: [] } };
  }
  const url = `${baseUrl}/api/cart`;
  const payload = { headers: { Authorization: token } };
  const res = await axios.get(url, payload);
  return { props: { products: res.data } };
}
