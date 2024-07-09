import { tmdb } from "@/assets/config/tmdb-client";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import React from "react";
import Typography from "../ui/typography";
import SubListMoviesCollection from "./sublistmoviescollection";

export const TvShowsListType = function ({ queryKey }) {
  const { data: movies, isLoading } = useQuery({
    queryKey: ["tvshowspopulargallery"],
    queryFn: async () =>
      tmdb.get(`tv/${queryKey}`).then((res) => res.data.results),
  });
  if (isLoading)
    return (
      <div>
        <Loader2 className="animate-spin" />
        <Typography>Loading....</Typography>
      </div>
    );
  return (
    <div className="w-[70%]">
      <SubListMoviesCollection movies={movies} />
    </div>
  );
};
