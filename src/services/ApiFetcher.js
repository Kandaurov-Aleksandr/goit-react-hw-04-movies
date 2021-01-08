import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const apiKey = "132f2a543c82d69a556f0bb280a697a7";

const defaultMoviesFetcher = async () => {
  const { data } = await axios.get(`trending/movie/day?api_key=${apiKey}`);

  return data;
};

const searchFetcher = async (query, page = 1) => {
  const { data } = await axios.get(
    `search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=${page}&include_adult=false`
  );

  return data;
};

const movieDetailsFetcher = async (movieID) => {
  const { data } = await axios.get(
    `movie/${movieID}?api_key=${apiKey}&language=en-US`
  );
  return data;
};

const movieCastFetcher = async (movieID) => {
  const { data } = await axios.get(
    `movie/${movieID}/credits?api_key=${apiKey}`
  );

  return data;
};

const movieReviewFetcher = async (movieID) => {
  const { data } = await axios.get(
    `movie/${movieID}/reviews?api_key=${apiKey}&language=en-US&page=1`
  );
  return data;
};

export default {
  defaultMoviesFetcher,
  searchFetcher,
  movieDetailsFetcher,
  movieCastFetcher,
  movieReviewFetcher,
};
