export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const query = resolvedSearchParams?.query || "";
  return {
    title: query ? `Busca por "${query}" - CineNext` : "Busca - CineNext",
    description: query
      ? `Resultados de busca para "${query}" no CineNext.`
      : "Busque filmes no CineNext.",
    openGraph: {
      title: query ? `Busca por "${query}" - CineNext` : "Busca - CineNext",
      description: query
        ? `Resultados de busca para "${query}" no CineNext.`
        : "Busque filmes no CineNext.",
      url: `https://yourdomain.com/busca${
        query ? `?query=${encodeURIComponent(query)}` : ""
      }`,
    },
    alternates: {
      canonical: `https://yourdomain.com/busca${
        query ? `?query=${encodeURIComponent(query)}` : ""
      }`,
    },
  };
}
import { Suspense } from "react";
import { SearchResults } from "@/components/busca/search-results";

function SearchResultsSkeleton() {
  return (
    <div className="mx-auto max-w-7xl pb-4 px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold">Página de Busca</h1>
      <div className="mt-4">
        <div className="h-8 w-64 bg-gray-200 animate-pulse rounded" />
        <div className="flex flex-wrap gap-4 mt-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-[185px] h-[278px] bg-gray-200 animate-pulse rounded" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) {
  return (
    <Suspense fallback={<SearchResultsSkeleton />}>
      <SearchResults searchParams={searchParams} />
    </Suspense>
  );
}
