import PropTypes from 'prop-types';
import placeholder from '../../images/placeholder.webp';
import { List, Item, MovieLink } from './List.styled';

function TrendingList({ movies }) {
  return (
    <List>
      {movies.map(({ id, title, poster_path }) => {
        return (
          <Item key={id}>
            <MovieLink to={`/movies/${id}`} state={{ from: '/' }}>
              <div>
                <img
                  loading="lazy"
                  src={
                    poster_path
                      ? 'https://image.tmdb.org/t/p/w500' + poster_path
                      : placeholder
                  }
                  alt={title}
                />
              </div>

              <p>{title}</p>
            </MovieLink>
          </Item>
        );
      })}
    </List>
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
