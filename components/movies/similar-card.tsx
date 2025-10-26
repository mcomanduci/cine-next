import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getGenres } from "@/helper/genres";
import { Movie } from "@/types/movies";
import { Badge } from "@/components/ui/badge";

import Image from "next/image";
import { StarIcon } from "lucide-react";
import Link from "next/link";

export default function SimilarCard({ movie }: { movie: Movie }) {
  return (
    <Link href={`/movie/${movie.id}`}>
      <Card className="p-0 overflow-hidden flex-shrink-0 w-24 md:w-28 lg:w-32 gap-2 sm:gap-4 h-full">
        <CardContent className="px-0">
          <div className="w-full h-auto relative">
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
              className="object-cover"
            />
            <p className="absolute bottom-0 bg-black/30 text-xs text-white w-full p-1 line-clamp-1">
              {movie.title}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
