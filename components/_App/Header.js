import { Menu, Container, Icon } from 'semantic-ui-react';
import Link from 'next/link';
import Image from 'next/image';
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

function Header() {
  const user = true;
  const router = useRouter();

  function isActive(route) {
    return route === router.pathname;
  }
  return (
    <Menu stackable fluid id='menu' inverted>
      <Container text>
        <Link href='/'>
          <Menu.Item header active={isActive('/')}>
            <Image width={60} height={50} src='/logo.png' />
            NextShop
          </Menu.Item>
        </Link>

        <Link href='/cart'>
          <Menu.Item header active={isActive('/cart')}>
            <Icon name='cart' size='large' />
            Cart
          </Menu.Item>
        </Link>

        {user && (
          <Link href='/create'>
            <Menu.Item header active={isActive('/create')}>
              <Icon name='add square' size='large' />
              Create
            </Menu.Item>
          </Link>
        )}

        {user ? (
          <>
            <Link href='/account'>
              <Menu.Item header active={isActive('/account')}>
                <Icon name='user' size='large' />
                Account
              </Menu.Item>
            </Link>

            <Menu.Item header>
              <Icon name='sign out' size='large' />
              Logout
            </Menu.Item>
          </>
        ) : (
          <>
            <Link href='/login'>
              <Menu.Item header active={isActive('/login')}>
                <Icon name='sign in' size='large' />
                Login
              </Menu.Item>
            </Link>

            <Link href='/signup'>
              <Menu.Item header active={isActive('/signup')}>
                <Icon name='signup' size='large' />
                Sign Up
              </Menu.Item>
            </Link>
          </>
        )}
      </Container>
    </Menu>
  );
}

export default Header;
