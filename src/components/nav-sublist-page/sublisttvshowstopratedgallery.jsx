import React from "react";
import SubListMoviesCollection from "./sublistmoviescollection";
import { useQuery } from "@tanstack/react-query";
import { tmdb } from "@/assets/config/tmdb-client";
import { Loader2 } from "lucide-react";
import Typography from "../ui/typography";

function SublistTVShowsTopRatedGallery() {
  const { data: movies, isLoading } = useQuery({
    queryKey: ["topratedgallery"],
    queryFn: async () =>
      tmdb.get("tv/top_rated").then((res) => res.data.results),
  });
  if (isLoading)
    return (
      <div className="gap-x-1 flex items-center">
        <Loader2 className="animate-spin" />
        <Typography size="h3">Loading...</Typography>
      </div>
    );

  return (
    <div className="w-[70%]">
      <SubListMoviesCollection movies={movies} />
    </div>
  );
}

export default SublistTVShowsTopRatedGallery;
