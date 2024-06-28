import { tmdb } from "@/assets/config/tmdb-client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Loader2 } from "lucide-react";
import Typography from "../ui/typography";
import SubListMoviesCollection from "./sublistmoviescollection";
import useInfiniteMovies from "@/loadmore";
import useSortedData from "@/sortingMovies";

function SublistMoviesNowPlayingGallery({ sortType }) {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteMovies("/movie/now_playing");

  const movies = data?.pages.flatMap((page) => page.results) || [];
  const sortedMovies = useSortedData(movies, sortType);
  console.log("sortedmovies:", sortedMovies);
  if (isLoading)
    return (
      <div className="flex gap-x-1 items-center">
        <Loader2 className="animate-spin" />
        <Typography size="h3">Loading</Typography>
      </div>
    );
  console.log(movies);

  return (
    <div className="w-[70%]">
      <SubListMoviesCollection movies={sortedMovies} />
      <div className="flex justify-center py-4">
        {hasNextPage && (
          <button
            className="px-3 py-2 rounded-md text-white bg-blue-600 cursor-pointer hover:brightness-95"
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
          >
            {isFetchingNextPage ? "Loading more..." : "Load More"}
          </button>
        )}
      </div>
      <div> {isLoading && !isFetchingNextPage ? "Fetching..." : null}</div>
    </div>
  );
}

export default SublistMoviesNowPlayingGallery;
