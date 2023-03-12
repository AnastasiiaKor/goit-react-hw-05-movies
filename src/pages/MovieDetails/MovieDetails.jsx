import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { getMovieById } from 'services/api';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    async function getDetails() {
      try {
        const film = await getMovieById(id);
        setMovie(film);
        setIsLoaded(true);
      } catch (error) {
        console.log(error);
      }
    }
    getDetails();
  }, [id]);

  if (isLoaded) {
    return (
      <main>
        <Link to={`${location.state.from}`}>&larr; Go back</Link>
        <div>
          <img
            src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
            alt={movie.title}
          />
        </div>

        <div>
          <h1>
            {movie.title} (
            {movie.release_date && movie.release_date.slice(0, 4)})
          </h1>
          <p>User score: {(movie.vote_average * 10).toFixed()}%</p>
          <b>Overview</b>
          <p>{movie.overview}</p>
          <p>
            <b> Genres: </b>
            {movie.genres.length > 3
              ? movie.genres
                  .slice(0, 3)
                  .map(genre => <span key={genre.id}>{genre.name} </span>)
              : movie.genres.map(genre => (
                  <span key={genre.id}>{genre.name} </span>
                ))}
          </p>
          <ul>
            <li>
              <Link
                to="cast"
                state={{
                  from: `${location.state.from}`,
                }}
              >
                Cast
              </Link>
            </li>
            <li>
              <Link
                to="reviews"
                state={{
                  from: `${location.state.from}`,
                }}
              >
                Reviews
              </Link>
            </li>
          </ul>
          <Suspense fallback={<div>Loading ...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    );
  }
}
export default MovieDetails;
