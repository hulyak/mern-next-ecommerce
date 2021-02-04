import { Button, Divider, Segment } from 'semantic-ui-react';

function CartSummary() {
  return (
    <>
      <Divider />
      <Segment clearing size='large'>
        <strong>Subtotal: </strong> $0.00
        <Button icon='cart' color='yellow' floated='right' content='Checkout' />
      </Segment>
    </>
  );
}

export default CartSummary;
