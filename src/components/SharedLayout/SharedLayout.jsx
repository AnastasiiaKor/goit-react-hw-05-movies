import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, Header, List, Link } from './SharedLayout.styled';

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
      <Suspense fallback={<div>Loading ...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default SharedLayout;
