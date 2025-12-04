import { cacheLife, cacheTag } from "next/cache";

const apiKey = process.env.TMDB_API_KEY;

export async function getPopularMovies() {
  "use cache";
  cacheLife("hours");
  cacheTag("popular-movies");

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=1`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch popular movies");
  }
  const data = await response.json();
  const top10 = data.results.slice(0, 10);
  return top10;
}

export async function getPopularAllMovies() {
  "use cache";
  cacheLife("hours");
  cacheTag("popular-movies");

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=1`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch popular movies");
  }
  const data = await response.json();
  return data.results;
}

export async function getTopRatedMovies() {
  "use cache";
  cacheLife("hours");
  cacheTag("top-rated-movies");

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=pt-BR&page=1`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch top rated movies");
  }
  const data = await response.json();
  const top10 = data.results.slice(0, 10);
  return top10;
}

export async function getUpcomingMovies() {
  "use cache";
  cacheLife("hours");
  cacheTag("upcoming-movies");

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=pt-BR&page=1`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch upcoming movies");
  }
  const data = await response.json();
  const top10 = data.results.slice(0, 10);
  return top10;
}

export async function getMovieDetails(id: string) {
  "use cache";
  cacheLife("days");
  cacheTag(`movie-${id}`);

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=pt-BR`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch movie details");
  }
  const data = await response.json();
  return data;
}

export async function getSimilarMovies(id: string) {
  "use cache";
  cacheLife("hours");
  cacheTag(`similar-movies-${id}`);

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}&language=pt-BR&page=1`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch similar movies");
  }
  const data = await response.json();
  const top10 = data.results.slice(0, 10);

  return top10;
}

export async function searchMovies(query: string) {
  "use cache";
  cacheLife("minutes");
  cacheTag(`search-${query}`);

  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=pt-BR&query=${encodeURIComponent(
      query
    )}&page=1&include_adult=false`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch search results");
  }
  const data = await response.json();
  return data.results;
}
