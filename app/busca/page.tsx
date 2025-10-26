export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const query = resolvedSearchParams?.query || "";
  return {
    title: query ? `Busca por "${query}" - CineNext` : "Busca - CineNext",
    description: query
      ? `Resultados de busca para "${query}" no CineNext.`
      : "Busque filmes no CineNext.",
    openGraph: {
      title: query ? `Busca por "${query}" - CineNext` : "Busca - CineNext",
      description: query
        ? `Resultados de busca para "${query}" no CineNext.`
        : "Busque filmes no CineNext.",
      url: `https://yourdomain.com/busca${
        query ? `?query=${encodeURIComponent(query)}` : ""
      }`,
    },
    alternates: {
      canonical: `https://yourdomain.com/busca${
        query ? `?query=${encodeURIComponent(query)}` : ""
      }`,
    },
  };
}
import MovieCard from "@/components/movies/movie-card";
import { searchMovies } from "@/lib/api-tmdb";
import { Movie } from "@/types/movies";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const query = resolvedSearchParams?.query || "";
  const movies = await searchMovies(query);

  if (!movies || movies.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">Nenhum resultado encontrado</h1>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl pb-4 px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold">Página de Busca</h1>
      {query && (
        <div className="mt-4">
          <h2 className="text-xl">{`Resultados para: ${query}`}</h2>
          <ul className="flex flex-wrap gap-4 mt-4">
            {movies.map((movie: Movie) => (
              <li key={movie.id}>
                <MovieCard movie={movie} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
