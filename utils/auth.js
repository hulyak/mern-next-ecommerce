import cookie from 'js-cookie';
import router from 'next/router';

export const handleLogin = (token) => {
  cookie.set('token', token); // name: value
  router.push('/account');
};
