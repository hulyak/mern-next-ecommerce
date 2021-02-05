import cookie from 'js-cookie';
import router from 'next/router';

export const handleLogin = (token) => {
  cookie.set('token', token); // name: value
  router.push('/account');
};

export function redirectUser(ctx, location) {
  if (ctx.req) {
    //   redirect user
    ctx.res.writeHead(302, { Location: location });
    ctx.res.end();
  } else {
    router.push(location);
  }
}

// remove the token
export const handleLogout = (token) => {
  cookie.remove('token');
  router.push('/login');
};
