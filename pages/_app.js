import Layout from '../components/_App/Layout';
import App from 'next/app';
import { parseCookies, destroyCookie } from 'nookies';
import { redirectUser } from '../utils/auth';
import baseUrl from '../utils/baseUrl';
import axios from 'axios';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const { token } = parseCookies(ctx);

    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    if (!token) {
      const isProtectedRoute =
        ctx.pathname === '/account' || ctx.pathname === '/create';
      if (isProtectedRoute) {
        redirectUser(ctx, '/login');
      }
    } else {
      try {
        const payload = { headers: { Authorization: token } };
        const url = `${baseUrl}/api/account`;
        const response = await axios.get(url, payload);
        const user = response.data;
        const isRoot = user.role === 'root';
        const isAdmin = user.role === 'admin';
        // if authenticated but not of role 'admin' or 'root', redirect from '/create' page
        const isNotPermitted =
          !(isRoot || isAdmin) && ctx.pathname === '/create';
        if (isNotPermitted) {
          redirectUser(ctx, '/');
        }
        pageProps.user = user;
      } catch (error) {
        console.error('Error getting current user', error);
        // Throw out invalid token
        destroyCookie(ctx, 'token');
        // redirect to login page
        redirectUser(ctx, '/login');
      }
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;

// function MyApp({ Component, pageProps }) {
//   return (
//     <Layout {...pageProps}>
//       <Component {...pageProps} />
//     </Layout>
//   );
// }

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
// //
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//   const { token } = parseCookies(appContext);

//   // if (Component.getInitialProps) {
//   //   pageProps = await Component.getInitialProps(ctx);
//   // }

//   if (!token) {
//     const isProtectedRoute =
//       appContext.pathname === '/account' || appContext.pathname === '/create';
//     if (isProtectedRoute) {
//       redirectUser(appContext, '/login');
//     }
//   } else {
//     try {
//       const payload = { headers: { Authorization: token } };
//       const url = `${baseUrl}/api/account`;
//       const response = await axios.get(url, payload);
//       const user = response.data;
//       appProps.user = user;
//     } catch (error) {
//       console.error('Error getting current user', error);
//     }
//   }

//   return { ...appProps };
// };
