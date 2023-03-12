import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import placeholder from '../../images/placeholder.webp';
import { List, Item } from './List.styled';

function MovieList({ movies }) {
  const location = useLocation();

  return (
    <List>
      {movies.map(({ id, title, poster_path }) => {
        return (
          <Item key={id}>
            <Link
              to={`${id}`}
              state={{ from: location.pathname + location.search }}
            >
              <img
                loading="lazy"
                src={
                  poster_path
                    ? 'https://image.tmdb.org/t/p/w500' + poster_path
                    : placeholder
                }
                alt={title}
              />
              <p>{title}</p>
            </Link>
          </Item>
        );
      })}
    </List>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
    }).isRequired
  ).isRequired,
};

export default MovieList;
