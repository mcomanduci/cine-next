import HomeTitle from "@/components/home/home-title";
import MoviesGrid from "@/components/movies/movies-grid";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/api-tmdb";

export async function generateMetadata() {
  return {
    title: "CineNext - Descubra Filmes Populares, Em Breve e Bem Avaliados",
    description:
      "Explore os filmes mais populares, lançamentos e os mais bem avaliados no CineNext. Encontre seu próximo filme favorito!",
    openGraph: {
      title: "CineNext - Descubra Filmes Populares, Em Breve e Bem Avaliados",
      description:
        "Explore os filmes mais populares, lançamentos e os mais bem avaliados no CineNext.",
      url: "https://yourdomain.com/",
      images: [
        {
          url: "https://yourdomain.com/og-image.png",
          width: 1200,
          height: 630,
          alt: "CineNext - Filmes Populares",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "CineNext - Descubra Filmes Populares, Em Breve e Bem Avaliados",
      description:
        "Explore os filmes mais populares, lançamentos e os mais bem avaliados no CineNext.",
      images: ["https://yourdomain.com/og-image.png"],
    },
    alternates: {
      canonical: "https://yourdomain.com/",
    },
  };
}

export default async function Home() {
  const popularMovies = await getPopularMovies();
  const topRatedMovies = await getTopRatedMovies();
  const upcomingMovies = await getUpcomingMovies();

  return (
    <div className="mx-auto max-w-7xl pb-4 px-4 py-8 sm:px-6 lg:px-8">
      <HomeTitle />
      <MoviesGrid movieList={popularMovies} title="Filmes Populares" />
      <MoviesGrid
        movieList={topRatedMovies}
        title="Filmes Mais Bem Avaliados"
      />
      <MoviesGrid movieList={upcomingMovies} title="Filmes em Breve" />
    </div>
  );
}
