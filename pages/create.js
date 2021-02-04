import axios from 'axios';
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
import baseUrl from '../utils/baseUrl';

const initialState = {
  name: '',
  price: '',
  media: '',
  description: '',
};

function CreateProduct() {
  const [product, setProduct] = useState(initialState);
  const [mediaPreview, setMediaPreview] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  // input onChange event handler
  const handleChange = (event) => {
    const { name, value, files } = event.target;
    if (name === 'media') {
      setProduct((prev) => ({ ...prev, media: files[0] }));
      setMediaPreview(window.URL.createObjectURL(files[0])); // create img preview
    } else {
      setProduct((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleImageUpload = async () => {
    const data = new FormData();
    data.append('file', product.media);
    data.append('upload_preset', 'nextshop');
    data.append('cloud_name', 'dsgtouzfc');
    const response = await axios.post(process.env.CLOUDINARY_URL, data);
    const mediaUrl = response.data.url;
    return mediaUrl;
  };

  // submit form
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const mediaUrl = await handleImageUpload();
    const url = `${baseUrl}/api/product`;
    const payload = { ...product, mediaUrl };
    const response = await axios.post(url, payload);
    setLoading(false);
    console.log(response);
    // clear input fields
    setProduct(initialState);
    setSuccessMessage(true);
  };

  return (
    <>
      <Header as='h2' block>
        <Icon name='add' color='orange' />
        Create New Product
      </Header>
      <Form onSubmit={handleSubmit} success={successMessage} loading={loading}>
        <Message
          success
          icon='check'
          header='Success'
          content='Your product has been created'
        />
        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            name='name'
            label='Name'
            placeholder='Name'
            type='text'
            onChange={handleChange}
            value={product.name}
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
            value={product.price}
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
          onChange={handleChange}
          value={product.description}
        />

        <Form.Field
          control={Button}
          color='blue'
          icon='pencil alternate'
          content='Submit'
          type='submit'
          disabled={loading}
        />
      </Form>
    </>
  );
}

export default CreateProduct;
