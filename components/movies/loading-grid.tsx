import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { Skeleton } from "../ui/skeleton";

export default async function LoadingGrid() {
  return (
    <>
      <div className="mt-8 mx-5">
        <h2 className="pb-4 text-2xl font-title">Filmes Similares</h2>
      </div>
      <ScrollArea>
        <div className="flex gap-6 pb-4 max-w-7xl px-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton
              key={i}
              className="p-0 overflow-hidden flex-shrink-0 w-24 md:w-28 lg:w-32 gap-2 sm:gap-4 h-[141px] md:h-[165px] lg:h-[189px]"
            />
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="hidden" />
      </ScrollArea>
    </>
  );
}
