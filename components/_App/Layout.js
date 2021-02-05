import { Container } from 'semantic-ui-react';
import Header from './Header';
import Meta from './Meta';

function Layout({ children, user }) {
  return (
    <>
      <Meta />
      <Header user={user} />
      <Container text style={{ paddingTop: '1em' }}>
        {children}
      </Container>
    </>
  );
}

export default Layout;
