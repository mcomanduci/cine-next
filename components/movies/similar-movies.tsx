import { getSimilarMovies } from "@/lib/api-tmdb";
import SimilarGrid from "./similar-grid";

export default async function SimilarMovies({ id }: { id: string }) {
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
