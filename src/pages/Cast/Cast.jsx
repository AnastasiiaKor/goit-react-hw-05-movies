import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCast } from 'services/api';
import placeholder from '../../images/placeholder.webp';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import { List, Item } from '../../components/List/List.styled';

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
        <Container>
          <List>
            {results.map(({ name, character, profile_path, id }) => (
              <Item key={id}>
                <div>
                  <img
                    src={
                      profile_path
                        ? 'https://image.tmdb.org/t/p/w500' + profile_path
                        : placeholder
                    }
                    alt={name}
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                <p>
                  <b>Name:</b> {name}
                </p>
                <p>
                  <b>Character:</b> {character}
                </p>
              </Item>
            ))}
          </List>
        </Container>
      </section>
    );
  }
}

export default Cast;
