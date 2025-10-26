import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export default function DesktopMenu() {
  return (
    <nav className="md:flex gap-12 hidden">
      <ul className="flex gap-8 items-center text-xl">
        {/* <Link href="/" className="text-primary hover:underline">
          Home
        </Link>
        <Link href="/search" className="text-primary hover:underline">
          Pesquisa
        </Link> */}
        <Link
          href="/login"
          className="text-primary hover:underline"
        >
          Entrar
        </Link>
        <Link
          href="/login?mode=signup"
          className="text-primary hover:underline"
        >
          Cadastrar
        </Link>
      </ul>
      <ModeToggle />
    </nav>
  );
}
