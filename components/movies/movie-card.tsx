import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getGenres } from "@/helper/genres";
import { Movie } from "@/types/movies";
import { Badge } from "@/components/ui/badge";

import Image from "next/image";
import { StarIcon } from "lucide-react";
import Link from "next/link";

export default function MovieCard({ movie }: { movie: Movie }) {
  const genre = getGenres(movie.genre_ids[0]);
  return (
    <Link href={`/movie/${movie.id}`}>
      <Card className="p-0 overflow-hidden flex-shrink-0 w-48 md:w-56 lg:w-64 gap-2 sm:gap-4 h-full">
        <CardHeader className="px-0">
          <div className="w-full h-auto relative aspect-[2/3]">
            <Badge
              variant="default"
              className="absolute top-2 right-2 bg-card  text-primary text-xs flex items-center gap-1 px-2 py-1 rounded-full font-semibold"
            >
              <StarIcon className="fill-amber-300" />
              {movie.vote_average.toFixed(1)}
            </Badge>
            <Image
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "/no_image.jpg"
              }
              alt={movie.title}
              width={500}
              height={750}
            />
          </div>
          <CardTitle className="px-2 md:px-4 mt-2">
            <h2 className="sm:text-lg md:text-xl font-title line-clamp-1">
              {movie.title}
            </h2>
            <span className="text-xs text-gray-400">
              {movie.release_date.slice(0, 4)} • {genre?.name}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pb-3 sm:pb-4 px-2 md:px-4">
          <p className="text-xs sm:text-sm line-clamp-2 sm:line-clamp-3 text-gray-400">
            {movie.overview || "Resumo não disponível."}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
