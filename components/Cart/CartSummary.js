import { useEffect, useState } from 'react';
import { Button, Divider, Segment } from 'semantic-ui-react';
import calculateCartTotal from '../../utils/calculateCartTotal';

function CartSummary({ products }) {
  const [isCartEmpty, setCartEmpty] = useState(false);
  const [cartAmount, setCartAmount] = useState(0);
  const [stripeAmount, setStripeAmount] = useState(0);

  useEffect(() => {
    const { cartTotal, stripeTotal } = calculateCartTotal(products);
    setCartAmount(cartTotal);
    setStripeAmount(stripeTotal);
    setCartEmpty(products.length === 0);
  }, [products]);

  return (
    <>
      <Divider />
      <Segment clearing size='large'>
        <strong>Subtotal: </strong> ${cartAmount}
        <Button
          icon='cart'
          disabled={isCartEmpty}
          color='yellow'
          floated='right'
          content='Checkout'
        />
      </Segment>
    </>
  );
}

export default CartSummary;
