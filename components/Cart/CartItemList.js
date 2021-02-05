import { Header, Segment, Button, Icon, Item } from 'semantic-ui-react';
import { useRouter } from 'next/router';

function CartItemList({ products, user }) {
  const router = useRouter();
  // const user = true;

  function mapCartToProducts(products) {
    return products.map((p) => ({
      childKey: p.product._id,
      header: (
        <Item.Header
          as='a'
          onClick={() => router.push(`/product/${p.product._id}`)}
        >
          {p.product.name}
        </Item.Header>
      ),
      image: p.product.mediaUrl,
      meta: `${p.quantity} x ${p.product.price}`,
      fluid: 'true',
      extra: (
        <Button
          basic
          icon='remove'
          floated='right'
          onClick={() => console.log(p.product._id)}
        />
      ),
    }));
  }
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
  return <Item.Group divided items={mapCartToProducts(products)}></Item.Group>;
}

export default CartItemList;
