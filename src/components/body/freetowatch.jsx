import React, { useEffect } from "react";

import { useQuery } from "@tanstack/react-query";
import { tmdb } from "@/assets/config/tmdb-client";
import { Loader2 } from "lucide-react";
import MoviesCollection from "./movies-collection/moviescollection";

export default function FreeToWatch() {
  const title = {
    headings: "Free To Watch",
    children: null,
  };

  const { data: movies, isLoading } = useQuery({
    queryKey: ["movies"],
    queryFn: async () => tmdb.get("/genre/movie/list").then((res) => res.data),
    refetchInterval: 60 * 60 * 1000,
  });
  if (isLoading)
    return (
      <h1 className="text-xl flex items-center gap-2 px-4 py-2">
        <Loader2 className="animate-spin" />
        Loading....
      </h1>
    );
  return (
    <div>
      <MoviesCollection title={title} movies={movies} />
    </div>
  );
}
