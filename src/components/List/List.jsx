import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
function List({ movies }) {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ id, title, poster_path }) => {
        return (
          <li key={id}>
            <Link
              to={`${id}`}
              state={{ from: location.pathname + location.search }}
            >
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

List.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
    }).isRequired
  ).isRequired,
};

export default List;
