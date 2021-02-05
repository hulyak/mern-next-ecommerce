import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Input } from 'semantic-ui-react';
import cookie from 'js-cookie';
import axios from 'axios';
import catchErrors from '../../utils/catchErrors';
import baseUrl from '../../utils/baseUrl';

function AddProductToCart({ user, productId }) {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    let timeout;
    if (success) {
      timeout = setTimeout(() => setSuccess(false), 3000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [success]);

  const handleAddProductToCart = async () => {
    try {
      setLoading(true);
      const url = `${baseUrl}/api/cart`;
      const payload = { quantity, productId };
      // only the currently authorized user add to cart
      const token = cookie.get('token');
      const headers = { headers: { Authorization: token } };
      // updating the cart
      await axios.put(url, payload, headers);
      setSuccess(true);
    } catch (err) {
      catchErrors(err, window.alert);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Input
      type='number'
      min='1'
      value={quantity}
      onChange={(e) => setQuantity(Number(e.target.value))}
      placeholder='quantity'
      action={
        user && success
          ? {
              color: 'blue',
              content: 'Item added',
              icon: 'plus cart',
              disabled: true,
            }
          : user
          ? {
              color: 'orange',
              content: 'Add To Cart',
              icon: 'plus cart',
              loading: loading,
              disabled: loading,
              onClick: handleAddProductToCart,
            }
          : {
              color: 'blue',
              content: 'Sign up to purchase',
              icon: 'signup',
              onClick: () => router.push('/signup'),
            }
      }
    />
  );
}

export default AddProductToCart;
