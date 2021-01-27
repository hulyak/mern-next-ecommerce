import axios from 'axios';

function Home({ products }) {
  console.log(products);
  return <>home</>;
}

// initial props will be added to Home component's props
Home.getInitialProps = async () => {
  // fetch data on server
  // return response data as an object, because props is an object
  const url = 'http://localhost:3000/api/products';
  const res = await axios.get(url);
  return { products: res.data };
  // note: this object will be merged with existing props
};
export default Home;
