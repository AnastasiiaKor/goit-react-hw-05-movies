import PropTypes from 'prop-types';
import TrendingList from '../../components/List/TrendingList';
import { Container } from './Home.styled';

function Home({ movies }) {
  return (
    <main>
      <Container>
        <h1>Trending for today</h1>
        <TrendingList movies={movies} />
      </Container>
    </main>
  );
}
Home.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default Home;
