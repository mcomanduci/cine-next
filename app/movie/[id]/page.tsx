import { Suspense } from "react";
import { MovieContent } from "@/components/movies/movie-content";
import { getMovieDetails, getPopularAllMovies } from "@/lib/api-tmdb";
import { Movie } from "@/types/movies";

interface MoviePageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  const movies = await getPopularAllMovies();

  return movies.map((movie: Movie) => ({
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

async function MoviePageContent({ params }: MoviePageProps) {
  const { id } = await params;
  const movie = await getMovieDetails(id);
  return <MovieContent movie={movie} />;
}

function MovieSkeleton() {
  return (
    <div className="mx-auto max-w-7xl pb-4 px-4 py-8 sm:px-6 lg:px-8">
      <div className="md:grid md:grid-cols-2 gap-8">
        <div className="mx-5 mt-5 space-y-4">
          <div className="h-12 bg-gray-200 animate-pulse rounded w-3/4" />
          <div className="h-6 bg-gray-200 animate-pulse rounded w-1/2" />
          <div className="h-24 bg-gray-200 animate-pulse rounded" />
        </div>
        <div className="hidden md:flex justify-center items-center">
          <div className="w-[300px] h-[450px] bg-gray-200 animate-pulse rounded" />
        </div>
      </div>
    </div>
  );
}

export default function MoviePage({ params }: MoviePageProps) {
  return (
    <Suspense fallback={<MovieSkeleton />}>
      <MoviePageContent params={params} />
    </Suspense>
  );
}
