import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCast } from 'services/api';

function Cast() {
  const { id } = useParams();
  const [results, setResults] = useState([]);
  const [gotCast, setGotCast] = useState(false);

  useEffect(() => {
    async function fetchCast() {
      try {
        const cast = await getMovieCast(id);
        setResults([...cast]);
        setGotCast(true);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCast();
  }, [id]);

  if (gotCast) {
    return (
      <section>
        <ul>
          {results.map(({ name, character, profile_path, id }) => (
            <li key={id}>
              <img
                src={'https://image.tmdb.org/t/p/w500' + profile_path}
                alt={name}
              />
              <p>
                <b>Name:</b> {name}
              </p>
              <p>
                <b>Character:</b> {character}
              </p>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default Cast;
