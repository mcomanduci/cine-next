const apiKey = process.env.TMDB_API_KEY;

export async function getPopularMovies() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=1`,
    { next: { revalidate: 3600 } }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch popular movies");
  }
  const data = await response.json();
  const top10 = data.results.slice(0, 10);
  return top10;
}

export async function getTopRatedMovies() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=pt-BR&page=1`,
    { next: { revalidate: 3600 } }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch top rated movies");
  }
  const data = await response.json();
  const top10 = data.results.slice(0, 10);
  return top10;
}

export async function getUpcomingMovies() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=pt-BR&page=1`,
    { next: { revalidate: 3600 } }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch upcoming movies");
  }
  const data = await response.json();
  const top10 = data.results.slice(0, 10);
  return top10;
}

export async function getMovieDetails(id: string) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=pt-BR`,
    { next: { revalidate: 3600 } }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch movie details");
  }
  const data = await response.json();
  return data;
}

export async function getSimilarMovies(id: string) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}&language=pt-BR&page=1`,
    { next: { revalidate: 3600 } }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch similar movies");
  }
  const data = await response.json();
  const top10 = data.results.slice(0, 10);

  return top10;
}

export async function searchMovies(query: string) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=pt-BR&query=${encodeURIComponent(
      query
    )}&page=1&include_adult=false`,
    { next: { revalidate: 3600 } }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch search results");
  }
  const data = await response.json();
  return data.results;
}
