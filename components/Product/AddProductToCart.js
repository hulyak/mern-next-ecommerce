import { Input } from 'semantic-ui-react';

function AddProductToCart() {
  return (
    <>
      <Input
        type='number'
        min='1'
        value={1}
        placeholder='quantity'
        action={{ color: 'orange', content: 'Add To Cart', icon: 'plus cart' }}
      />
    </>
  );
}

export default AddProductToCart;
