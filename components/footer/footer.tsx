import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-grad border-t mt-auto">
      <div className="mx-auto max-w-7xl pb-4 px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-3">
            <Link href="/" className="inline-flex items-center">
              <span className="text-2xl font-bold text-primary font-title">
                CineNext
              </span>
            </Link>
          </div>

          <div className="text-sm text-muted-foreground">
            Dados fornecidos por{" "}
            <a
              href="https://www.themoviedb.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              The Movie Database (TMDB)
            </a>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t">
          <p className="text-center text-sm text-muted-foreground">
            CineNext @ 2025. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
