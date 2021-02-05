import cookie from 'js-cookie';
import Router from 'next/router';

export const handleLogin = (token) => {
  cookie.set('token', token); // name: value
  Router.push('/account');
};
