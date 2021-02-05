import { Header, Segment, Button, Icon, Item } from 'semantic-ui-react';
import { useRouter } from 'next/router';

function CartItemList({ products, user }) {
  const router = useRouter();
  // const user = true;
  if (products.length === 0) {
    return (
      <Segment secondary color='yellow' inverted textAlign='center' placeholder>
        <Header icon>
          <Icon name='shopping basket' />
          No Products in your cart. Add Some!
        </Header>
        <div>
          {user ? (
            <Button color='orange' onClick={() => router.push('/')}>
              View Products
            </Button>
          ) : (
            <Button color='olive' onClick={() => router.push('/login')}>
              Login to Add Products
            </Button>
          )}
        </div>
      </Segment>
    );
  }
  // return <Item.Group items={}></Item.Group>;
}

export default CartItemList;
