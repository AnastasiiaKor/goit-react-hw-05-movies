import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByKeyword } from 'services/api';
import List from 'components/List/List';
import { toast, ToastContainer } from 'react-toastify';

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
      <form onSubmit={formSubmitHandler}>
        <input autoComplete="off" name="query" type="text" autoFocus />
        <button type="submit">Search</button>
      </form>
      <List movies={results} />
      <ToastContainer />
    </main>
  );
}
export default Movies;
