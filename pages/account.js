import { parseCookies } from 'nookies';
import AccountHeader from '../components/Account/AccountHeader';
import AccountOrders from '../components/Account/AccountOrders';
import axios from 'axios';
import baseUrl from '../utils/baseUrl';

function Account({ user, orders }) {
  // console.log(orders);
  return (
    <>
      <AccountHeader {...user} />
      <AccountOrders orders={orders} />
    </>
  );
}

// fetch orders
export async function getServerSideProps(context) {
  const { token } = parseCookies(context);
  if (!token) {
    return { orders: [] };
  }
  const payload = { headers: { Authorization: token } };
  const url = `${baseUrl}/api/orders`;
  const response = await axios.get(url, payload);
  return { props: response.data };
}

export default Account;
