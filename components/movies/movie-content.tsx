import LoadingGrid from "@/components/movies/loading-grid";
import SimilarMovies from "@/components/movies/similar-movies";
import Image from "next/image";
import { Suspense } from "react";

interface MovieContentProps {
  movie: any; // Movie details from TMDB API
}

export function MovieContent({ movie }: MovieContentProps) {
  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Movie",
          name: movie.title,
          datePublished: movie.release_date,
          description: movie.overview,
          image: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
          genre: movie.genres?.map((g: { name: string }) => g.name),
          duration: `${movie.runtime} min`,
        })}
      </script>

      <div className="absolute inset-0 -z-10 h-full w-full">
        <div className="absolute inset-0 bg-black/90 z-10" />
        {movie.backdrop_path && (
          <Image
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
            fill
            priority
            className="z-0 object-cover"
          />
        )}
      </div>
      <section className="md:grid md:grid-cols-2 flex-1 mx-auto max-w-7xl pb-4 px-4 py-8 sm:px-6 lg:px-8 w-full">
        <div className="mx-5 mt-5">
          <h1 className="font-title text-4xl font-semibold">{movie.title}</h1>
          <p className="mt-1 text-sm space-x-4 text-gray-500">
            {movie.genres && movie.genres.length > 0 && (
              <span className="mt-2 text-sm">
                {movie.genres
                  .map((genre: { id: number; name: string }) => genre.name)
                  .join(", ")}
              </span>
            )}
            {movie.release_date && (
              <span className="mt-2 text-sm">
                {movie.release_date.slice(0, 4)}
              </span>
            )}
            {movie.runtime && (
              <span className="mt-2 text-sm">{movie.runtime} minutos</span>
            )}
          </p>
          <p className="mt-4 text-[15px] text-gray-400">{movie.overview}</p>
        </div>
        <div className="w-full h-full justify-center items-center mx-auto hidden md:flex">
          <Image
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "/no_image.jpg"
            }
            alt={movie.title}
            width={500}
            height={750}
            className="object-cover rounded-md mx-auto mt-5 md:mt-0 h-full w-auto shadow-[0px_0px_12px_4px] shadow-white/10"
          />
        </div>
        <Suspense
          fallback={
            <div className="col-span-2">
              <LoadingGrid />
            </div>
          }
        >
          <div className="col-span-2">
            <SimilarMovies id={movie.id.toString()} />
          </div>
        </Suspense>
      </section>
    </>
  );
}
