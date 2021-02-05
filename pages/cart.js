import { useState } from 'react';
import cookie from 'js-cookie';
import { parseCookies } from 'nookies';
import axios from 'axios';
import { Segment } from 'semantic-ui-react';
import CartItemList from '../components/Cart/CartItemList';
import CartSummary from '../components/Cart/CartSummary';
import baseUrl from '../utils/baseUrl';
import catchErrors from '../utils/catchErrors';

const Cart = ({ products, user }) => {
  const [cartProducts, setCartProducts] = useState(products);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const handleCheckout = async (paymentData) => {
    try {
      setLoading(true);
      const url = `${baseUrl}/api/checkout`;
      const token = cookie.get('token');
      const payload = { paymentData };
      const headers = { headers: { Authorization: token } };
      await axios.post(url, payload, headers);
      setSuccess(true);
    } catch (err) {
      catchErrors(err, window.alert);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Segment loading={loading}>
      <CartItemList
        products={cartProducts}
        user={user}
        handleRemoveFromCart={handleRemoveFromCart}
        success={success}
      />
      <CartSummary
        products={cartProducts}
        handleCheckout={handleCheckout}
        success={success}
      />
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
