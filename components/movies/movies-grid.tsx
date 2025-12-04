import MovieCard from "./movie-card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Movie } from "@/types/movies";
import { cacheLife } from "next/cache";

export default async function MoviesGrid({
  movieList,
  title,
}: {
  movieList: Movie[];
  title: string;
}) {
  return (
    <>
      <div className="mt-8">
        <h2 className="px-4 pb-4 text-2xl font-title">{title}</h2>
      </div>
      <ScrollArea>
        <div className="flex gap-6 pb-4 max-w-7xl px-4">
          {movieList.map((movie: Movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </>
  );
}
