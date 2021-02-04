import { Header, Segment, Button, Icon } from 'semantic-ui-react';

function CartItemList() {
  const user = true;
  return (
    <Segment secondary color='yellow' inverted textAlign='center' placeholder>
      <Header icon>
        <Icon name='shopping basket' />
        No Products in your cart. Add Some!
      </Header>
      <div>
        {user ? (
          <Button color='orange'>View Products</Button>
        ) : (
          <Button color='olive'>Login to Add Products</Button>
        )}
      </div>
    </Segment>
  );
}

export default CartItemList;
