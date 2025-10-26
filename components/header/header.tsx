import DesktopMenu from "./desktop-menu";
import MobileMenu from "./mobile-menu";
import Link from "next/link";
import SearchBar from "./search-bar";

export default function Header() {
  return (
    <>
      <header className="w-full bg-grad shadow-sm font-title">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/">
            <h1 className="text-3xl font-bold leading-tight text-primary">
              CineNext
            </h1>
          </Link>
          <SearchBar />
          <DesktopMenu />
          <MobileMenu />
        </div>
      </header>
    </>
  );
}
