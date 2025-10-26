import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Movie } from "@/types/movies";
import SimilarCard from "./similar-card";

export default async function SimilarGrid({
  movieList,
  title,
}: {
  movieList: Movie[];
  title: string;
}) {
  return (
    <section>
      <div>
        <div className="mt-8 mx-5">
          <h2 className="pb-4 text-2xl font-title">{title}</h2>
        </div>
        <ScrollArea>
          <div className="flex gap-6 pb-4 max-w-7xl px-5">
            {movieList.map((movie: Movie) => (
              <SimilarCard key={movie.id} movie={movie} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="hidden" />
        </ScrollArea>
      </div>
    </section>
  );
}
