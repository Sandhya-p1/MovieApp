import React from "react";
import SubListMoviesCollection from "./sublistmoviescollection";
import { Loader2 } from "lucide-react";
import Typography from "../ui/typography";
import { useQuery } from "@tanstack/react-query";
import { tmdb } from "@/assets/config/tmdb-client";

function SublistTVShowsOnTVGallery() {
  const { data: movies, isLoading } = useQuery({
    queryKey: ["ontvgallery"],
    queryFn: async () =>
      tmdb.get("tv/on_the_air").then((res) => res.data.results),
  });
  if (isLoading)
    return (
      <div className="flex gap-x-1 items-center">
        <Loader2 className="animate-spin" />
        <Typography>Loading...</Typography>
      </div>
    );
  return (
    <div className="w-[70%]">
      <SubListMoviesCollection movies={movies} />
    </div>
  );
}

export default SublistTVShowsOnTVGallery;
