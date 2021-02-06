const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://next_shop.vercel.app'
    : 'http://localhost:3000';

export default baseUrl;
