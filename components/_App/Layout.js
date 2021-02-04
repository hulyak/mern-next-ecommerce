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

export default Layout;
