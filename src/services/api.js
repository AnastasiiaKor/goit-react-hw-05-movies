import { instance, KEY } from './instance';

//TRENDING
export async function getTrending() {
  const response = await instance(
    `trending/movie/day?api_key=${KEY}&page=1&language=en-US`
  );
  return response.data.results;
}

//SEARCH
export async function getMoviesByKeyword(keyword) {
  const response = await instance(
    `search/movie?api_key=${KEY}&page=1&query=${keyword}&language=en-US`
  );
  return response.data.results;
}
//DETAILS
export async function getMovieById(id) {
  const response = await instance(
    `movie/${id}?api_key=${KEY}&append_to_response=videos&language=en-US`
  );
  return response.data;
}

//CAST
export async function getMovieCast(id) {
  const response = await instance(
    `movie/${id}/credits?api_key=${KEY}&language=en-US`
  );
  return response.data.cast;
}

//REVIEWS
export async function getMovieReviews(id) {
  const response = await instance(
    `movie/${id}/reviews?api_key=${KEY}&language=en-US`
  );
  return response.data.results;
}
