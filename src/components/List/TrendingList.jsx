import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function TrendingList({ movies }) {
  return (
    <ul>
      {movies.map(({ id, title, poster_path }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: '/' }}>
              <img
                loading="lazy"
                src={'https://image.tmdb.org/t/p/w500' + poster_path}
                alt={title}
              />
              <p>{title}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

TrendingList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default TrendingList;
