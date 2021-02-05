import { useEffect, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Button, Divider, Segment } from 'semantic-ui-react';
import calculateCartTotal from '../../utils/calculateCartTotal';

function CartSummary({ products, handleCheckout, success }) {
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
        {/* checkout popup */}
        <StripeCheckout
          name='Next Shop'
          amount={stripeAmount}
          // show the first image in users cart
          image={products.length > 0 ? products[0].product.mediaUrl : ''}
          currency='USD'
          shippingAddress={true}
          billingAddress={true}
          zipCode={true}
          token={handleCheckout}
          triggerEvent='onClick'
          stripeKey='pk_test_51HPvyOHWgAakhkXvbvihEYVXXrcZM1uD7LluF0dSZooVYF1NRsbh4CCTJPqFz0EO7oo4Ulu2YtiF4aKitO1rDwrL00xtLEMal7'
        >
          <Button
            icon='cart'
            disabled={isCartEmpty || success}
            color='yellow'
            floated='right'
            content='Checkout'
          />
        </StripeCheckout>
      </Segment>
    </>
  );
}

export default CartSummary;
