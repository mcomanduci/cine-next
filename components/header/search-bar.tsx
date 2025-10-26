"use client";

import { useState } from "react";
import { z } from "zod";
import { Input } from "../ui/input";

const searchSchema = z.object({
  query: z.string().trim().min(1, "Insira uma consulta de busca válida"),
});

export default function SearchBar() {
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    const fd = new FormData(form);
    const query = String(fd.get("query") || "");

    const result = searchSchema.safeParse({ query });
    if (!result.success) {
      e.preventDefault();
      setError(result.error.issues[0].message);
      return;
    }

    setError(null);
  }

  return (
    <form
      className="w-full max-w-sm"
      method="get"
      action="/busca"
      onSubmit={onSubmit}
    >
      <Input
        name="query"
        type="text"
        placeholder={error ? error : `Buscar filmes...`}
        className={error ? `placeholder:text-red-500/60` : ""}
      />
      <button type="submit" className="hidden">
        Buscar
      </button>
    </form>
  );
}
