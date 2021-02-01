import { Container } from 'semantic-ui-react';
import Header from './Header';
import Meta from './Meta';

function Layout({ children }) {
  return (
    <>
      <Meta />
      <Header />
      <Container text style={{ paddingTop: '1em' }}>
        {children}
      </Container>
    </>
  );
}
//  "axios": "^0.19.0",
//     "bcrypt": "^3.0.6",
//     "js-cookie": "^2.2.0",
//     "jsonwebtoken": "^8.5.1",
//     "mongoose": "^5.6.7",
//     "next": "^10.0.5",
//     "nookies": "^2.0.8",
//     "nprogress": "^0.2.0",
//     "react": "^17.0.1",
//     "react-dom": "^17.0.1",
//     "react-stripe-checkout": "^2.6.3",
//     "semantic-ui-react": "^0.87.3",
//     "shortid": "^2.2.14",
//     "stripe": "^7.5.0",
//     "uuid": "^3.3.2",
//     "validator": "^11.1.0"

export default Layout;
