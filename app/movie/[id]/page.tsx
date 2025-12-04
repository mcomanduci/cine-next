import { Suspense } from "react";
import { MovieContent } from "@/components/movies/movie-content";
import {
  getMovieDetails,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/api-tmdb";
import { Movie } from "@/types/movies";

interface MoviePageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  const [popularMovies, topRatedMovies, upcomingMovies] = await Promise.all([
    getPopularMovies(),
    getTopRatedMovies(),
    getUpcomingMovies(),
  ]);

  // Combine all movies and remove duplicates
  const allMovies = [...popularMovies, ...topRatedMovies, ...upcomingMovies];
  const uniqueMovies = Array.from(
    new Map(allMovies.map((movie) => [movie.id, movie])).values()
  );

  return uniqueMovies.map((movie: Movie) => ({
    id: movie.id.toString(),
  }));
}

export async function generateMetadata({ params }: MoviePageProps) {
  const { id } = await params;
  const movie = await getMovieDetails(id);
  return {
    title: movie.title + " - CineNext",
    description: movie.overview,
    openGraph: {
      title: movie.title,
      description: movie.overview,
      url: `https://cine-next.vercel.app/movie/${movie.id}`,
      images: [
        {
          url: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

function MovieSkeleton() {
  return (
    <>
      {/* Background skeleton */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        <div className="absolute inset-0 bg-black/90 z-10" />
        <div className="z-0 w-full h-full bg-gray-800 animate-pulse" />
      </div>

      {/* Content skeleton */}
      <section className="md:grid md:grid-cols-2 flex-1 mx-auto max-w-7xl pb-4 px-4 py-8 sm:px-6 lg:px-8 w-full">
        <div className="mx-5 mt-5">
          {/* Title skeleton */}
          <div className="h-10 bg-gray-700 animate-pulse rounded w-3/4 mb-4" />
          
          {/* Metadata skeleton (genres, year, runtime) */}
          <div className="flex gap-4 mb-4">
            <div className="h-5 bg-gray-700 animate-pulse rounded w-32" />
            <div className="h-5 bg-gray-700 animate-pulse rounded w-16" />
            <div className="h-5 bg-gray-700 animate-pulse rounded w-24" />
          </div>

          {/* Overview skeleton */}
          <div className="space-y-2 mt-4">
            <div className="h-4 bg-gray-700 animate-pulse rounded w-full" />
            <div className="h-4 bg-gray-700 animate-pulse rounded w-full" />
            <div className="h-4 bg-gray-700 animate-pulse rounded w-5/6" />
            <div className="h-4 bg-gray-700 animate-pulse rounded w-4/6" />
          </div>
        </div>

        {/* Poster skeleton */}
        <div className="w-full h-full justify-center items-center mx-auto hidden md:flex">
          <div className="w-[300px] h-[450px] bg-gray-700 animate-pulse rounded shadow-[0px_0px_12px_4px] shadow-white/10" />
        </div>

        {/* Similar movies section skeleton */}
        <div className="col-span-2 mt-8 mx-5">
          <div className="h-8 bg-gray-700 animate-pulse rounded w-48 mb-4" />
          <div className="flex gap-6 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-[185px] h-[278px] bg-gray-700 animate-pulse rounded flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default function MoviePage({ params }: MoviePageProps) {
  return (
    <Suspense fallback={<MovieSkeleton />}>
      <MovieContent params={params} />
    </Suspense>
  );
}
