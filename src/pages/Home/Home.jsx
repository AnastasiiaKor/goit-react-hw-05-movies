import PropTypes from 'prop-types';
import TrendingList from '../../components/List/TrendingList';
function Home({ movies }) {
  return (
    <main>
      <h1>Trending for today</h1>
      <TrendingList movies={movies} />
    </main>
  );
}
Home.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default Home;
