import { tmdb } from "@/assets/config/tmdb-client";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import React from "react";
import Typography from "../ui/typography";
import SubListMoviesCollection from "./sublistmoviescollection";

function SublistTVShowsAiringTodayGallery() {
  const { data: movies, isLoading } = useQuery({
    queryKey: ["airingtodaygallery"],
    queryFn: async () =>
      tmdb.get("tv/airing_today").then((res) => res.data.results),
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

export default SublistTVShowsAiringTodayGallery;
