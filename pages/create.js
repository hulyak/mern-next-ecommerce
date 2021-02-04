import { useState } from 'react';
import {
  Button,
  Form,
  Header,
  Icon,
  Input,
  TextArea,
  Image,
  Message,
} from 'semantic-ui-react';

const initialState = {
  name: '',
  price: '',
  media: '',
  description: '',
};

function CreateProduct() {
  const [product, setProduct] = useState(initialState);

  const [mediaPreview, setMediaPreview] = useState('');

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    if (name === 'media') {
      setProduct((prev) => ({ ...prev, media: files[0] }));
      setMediaPreview(window.URL.createObjectURL(files[0])); // create img preview
    } else {
      setProduct((prev) => ({ ...prev, [name]: value }));
      console.log(product);
    }
  };

  return (
    <>
      <Header as='h2' block>
        <Icon name='add' color='orange' />
        Create New Product
      </Header>
      <Form>
        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            name='name'
            label='Name'
            placeholder='Name'
            type='text'
            onChange={handleChange}
          />
          <Form.Field
            control={Input}
            name='price'
            label='Price'
            placeholder='Price'
            min='0.00'
            step='0.01'
            type='number'
            onChange={handleChange}
          />
          <Form.Field
            control={Input}
            name='media'
            label='Media'
            content='Select Image'
            type='file'
            accept='image/*'
            onChange={handleChange}
          />
        </Form.Group>
        <Image src={mediaPreview} rounded centered size='small' />

        <Form.Field
          control={TextArea}
          name='description'
          label='Description'
          placeholder='Description'
        />

        <Form.Field
          control={Button}
          color='blue'
          icon='pencil alternate'
          content='Submit'
          type='submit'
        />
      </Form>
    </>
  );
}

export default CreateProduct;
