import React from "react";

import { useQuery } from "@tanstack/react-query";
import { tmdb } from "@/assets/config/tmdb-client";
import { Loader2 } from "lucide-react";
import MoviesCollection from "./movies-collection/moviescollection";

export default function Popular() {
  const { data: movies, isLoading } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: async () => tmdb.get("/movie/popular").then((res) => res.data),
  });
  console.log(movies);
  if (isLoading) {
    return (
      <h1 className="flex items-center gap-x-2 text-xl px-4 py-2">
        <Loader2 className="animate-spin" />
        Loading
      </h1>
    );
  }

  return (
    <div>
      <MoviesCollection title="Popular" movies={movies.results} />
    </div>
  );
}
