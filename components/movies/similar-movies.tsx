import { getSimilarMovies } from "@/lib/api-tmdb";
import SimilarGrid from "./similar-grid";
import { cacheLife, cacheTag } from "next/cache";

export default async function SimilarMovies({ id }: { id: string }) {
  "use cache";
  cacheLife("hours");
  cacheTag(`similar-${id}`);
  
  const similarMovies = await getSimilarMovies(id);

  return (
    <section>
      <div>
        {similarMovies.length > 0 && (
          <SimilarGrid movieList={similarMovies} title="Filmes Similares" />
        )}
      </div>
    </section>
  );
}
