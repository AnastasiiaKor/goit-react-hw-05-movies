import { useState, useEffect, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getTrending } from 'services/api';
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import('../pages/Home/Home'));
const SharedLayout = lazy(() =>
  import('../components/SharedLayout/SharedLayout')
);
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../pages/Cast/Cast'));
const Reviews = lazy(() => import('../pages/Reviews/Reviews'));

export const App = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetch() {
      try {
        const movies = await getTrending();
        setMovies([...movies]);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home movies={movies} />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home movies={movies} />} />
      </Route>
    </Routes>
  );
};
