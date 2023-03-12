import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, Header, List, Link } from './SharedLayout.styled';
import { RotatingLines } from 'react-loader-spinner';

function SharedLayout() {
  return (
    <div>
      <Header>
        <Container>
          <nav>
            <List>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/movies">Movies</Link>
              </li>
            </List>
          </nav>
        </Container>
      </Header>
      <Suspense
        fallback={
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
}

export default SharedLayout;
