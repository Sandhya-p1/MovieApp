import React from "react";

import { useQuery } from "@tanstack/react-query";
import { tmdb } from "@/assets/config/tmdb-client";
import { Loader2 } from "lucide-react";
import MoviesCollection from "./movies-collection/moviescollection";

export default function NowPlaying() {
  const { data: movies, isLoading } = useQuery({
    queryKey: ["nowplayingmovies"],
    queryFn: async () => tmdb.get("/movie/now_playing").then((res) => res.data),
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
      <MoviesCollection title="Now Playing" movies={movies.results} />
    </div>
  );
}
