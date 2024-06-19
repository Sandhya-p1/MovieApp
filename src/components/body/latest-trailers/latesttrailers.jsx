import Typography from "@/components/ui/typography";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import React from "react";
import { tmdb } from "@/assets/config/tmdb-client";
import { MovieCardLarge } from "./movie-card-large";

export default function Upcoming() {
  const {
    data: movies,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["upcoming"],
    queryFn: async () => tmdb.get("/movie/upcoming").then((res) => res.data),
    refetchInterval: 60 * 60 * 1000,
  });
  console.log(movies);

  if (error) {
    return <div>Error loading data</div>;
  }

  if (isLoading)
    return (
      <h1 className="text-xl flex items-center gap-2 px-4 py-2">
        <Loader2 className="animate-spin" />
        Loading....
      </h1>
    );
  if (movies?.results?.length == 0) {
    return <div>No Upcoming Movies</div>;
  }
  return (
    <div className="h-full bg-latestTrailers relative w-full  rounded-sm  bg-zinc-900 bg-opacity-100">
      <div className="absolute z-20 h-full top-0 right-0 w-20 bg-whiteGradient" />
      <div className="px-6 pt-9 z-0 w-full  text-white">
        {/* heading */}

        <Typography size="h2" className="font-semibold ">
          Upcoming
        </Typography>

        {/* movies list */}
        <div className="flex relative  h-64 max-w-full no-scrollbar overflow-x-auto gap-x-4">
          {movies?.results?.map((movie) => (
            <MovieCardLarge key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
      //{" "}
    </div>
  );
}
