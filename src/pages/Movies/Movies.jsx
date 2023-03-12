import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByKeyword } from 'services/api';
import MovieList from '../../components/List/MovieList';
import { toast, ToastContainer } from 'react-toastify';
import { Container } from '../../components/SharedLayout/SharedLayout.styled';
import { Form, Button } from './Movies.styled';

function Movies() {
  const [results, setResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const formSubmitHandler = event => {
    event.preventDefault();
    setSearchParams({ query: event.target.query.value });
    event.target.reset();
  };

  useEffect(() => {
    async function fetch(query) {
      try {
        const results = await getMoviesByKeyword(query.trim());
        if (results.length) {
          setResults([...results]);
          return;
        }
        toast.error('No movies found. Try one more time )');
      } catch (error) {
        console.log(error);
      }
    }
    if (query) {
      fetch(query);
    }
  }, [query]);
  return (
    <main>
      <Container>
        <Form onSubmit={formSubmitHandler}>
          <input autoComplete="off" name="query" type="text" autoFocus />
          <Button type="submit">Search</Button>
        </Form>
        <MovieList movies={results} />
        <ToastContainer />
      </Container>
    </main>
  );
}
export default Movies;
