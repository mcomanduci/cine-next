import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";

export default function MobileMenu() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="flex justify-between mr-6">
              CineNext
              <ModeToggle />
            </SheetTitle>
          </SheetHeader>
          <nav className="p-4">
            <ul className="flex flex-col gap-4">
              <Link href="/" className="text-primary hover:underline">
                Home
              </Link>
              <Link href="/" className="text-primary hover:underline">
                Pesquisa
              </Link>
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
