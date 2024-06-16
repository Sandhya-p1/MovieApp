import React from "react";
import MoviesCollection from "./movies-collection/moviescollection";
import { useQuery } from "@tanstack/react-query";
import { tmdb } from "@/assets/config/tmdb-client";
import { Loader2 } from "lucide-react";

export default function TopRated() {
  const title = {
    headings: "Top Rated",
    children: null,
  };

  const { data: movies, isLoading } = useQuery({
    queryKey: ["OnTheAir"],
    queryFn: async () => tmdb.get("/tv/top_rated").then((res) => res.data),
    refetchInterval: 60 * 60 * 1000,
  });

  console.log(movies);

  if (isLoading)
    return (
      <h1 className="text-xl flex items-center gap-2 px-4 py-2">
        <Loader2 className="animate-spin" />
        Loading....
      </h1>
    );

  return (
    <div>
      <MoviesCollection title={title} movies={movies.results} />
    </div>
  );
}
