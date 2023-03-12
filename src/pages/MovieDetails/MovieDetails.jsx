import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { getMovieById } from 'services/api';
import { RotatingLines } from 'react-loader-spinner';
import { Container } from '../../components/SharedLayout/SharedLayout.styled';
import { Wrapper, StyledLink, StyledList } from './MovieDetails.styled';

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
        <Container>
          <StyledLink to={`${location.state.from}`}>&larr; Go back</StyledLink>
          <Wrapper>
            <img
              src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
              alt={movie.title}
            />

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
            </div>
          </Wrapper>
          <StyledList>
            <li>
              <StyledLink
                to="cast"
                state={{
                  from: `${location.state.from}`,
                }}
              >
                Cast
              </StyledLink>
            </li>
            <li>
              <StyledLink
                to="reviews"
                state={{
                  from: `${location.state.from}`,
                }}
              >
                Reviews
              </StyledLink>
            </li>
          </StyledList>
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
        </Container>
      </main>
    );
  }
}
export default MovieDetails;
