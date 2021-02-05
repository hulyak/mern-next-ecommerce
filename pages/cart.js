import { useState } from 'react';
import cookie from 'js-cookie';
import { parseCookies } from 'nookies';
import axios from 'axios';
import { Segment } from 'semantic-ui-react';
import CartItemList from '../components/Cart/CartItemList';
import CartSummary from '../components/Cart/CartSummary';
import baseUrl from '../utils/baseUrl';

const Cart = ({ products, user }) => {
  const [cartProducts, setCartProducts] = useState(products);

  const handleRemoveFromCart = async (productId) => {
    const url = `${baseUrl}/api/cart`;
    const token = cookie.get('token');
    const payload = {
      params: { productId },
      headers: { Authorization: token },
    };
    const response = await axios.delete(url, payload);
    setCartProducts(response.data);
  };

  return (
    <Segment>
      <CartItemList
        products={cartProducts}
        user={user}
        handleRemoveFromCart={handleRemoveFromCart}
      />
      <CartSummary products={cartProducts} />
    </Segment>
  );
};

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

export default Cart;
