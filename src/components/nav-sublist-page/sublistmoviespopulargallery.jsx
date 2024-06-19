import { tmdb } from "@/assets/config/tmdb-client";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import React from "react";
import Typography from "../ui/typography";
import SubListMoviesCollection from "./sublistmoviescollection";

//right side of the popular  movies page of navsublist
function SublistMoviesPopularGallery() {
  const { data: movies, isLoading } = useQuery({
    queryKey: ["popularmoviesgallery"],
    queryFn: async () => tmdb.get("/movie/popular").then((res) => res.data),
  });
  if (isLoading)
    return (
      <div className="flex gap-x-1 items-center">
        <Loader2 className="animate-spin" />
        <Typography size="h3">Loading</Typography>
      </div>
    );
  return (
    <div className="w-[70%]">
      <SubListMoviesCollection movies={movies.results} />
    </div>
  );
}

export default SublistMoviesPopularGallery;
