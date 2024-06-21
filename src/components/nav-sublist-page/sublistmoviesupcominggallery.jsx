import { tmdb } from "@/assets/config/tmdb-client";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import React from "react";
import Typography from "../ui/typography";
import SubListMoviesCollection from "./sublistmoviescollection";

function SublistMoviesUpcomingGallery() {
  const { data: movies, isLoading } = useQuery({
    queryKey: ["upcominggallery"],
    queryFn: async () =>
      tmdb.get("movie/upcoming").then((res) => res.data.results),
  });
  if (isLoading)
    return (
      <div className="flex items-center gap-x-1">
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

export default SublistMoviesUpcomingGallery;
