import { Loader2 } from "lucide-react";
import React from "react";
import Typography from "../ui/typography";
import SubListMoviesCollection from "./sublistmoviescollection";
import useInfiniteMovies from "@/loadmore";
import useSortedData from "@/sortingMovies";

export function MoviesListType({ sortType, queryKey }) {
  console.log(queryKey);
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteMovies(`/movie/${queryKey}`);
  const movies = data?.pages.flatMap((page) => page.results) || [];

  const sortedMovies = useSortedData(movies, sortType);

  if (isLoading)
    return (
      <div className="flex items-center gap-x-1">
        <Loader2 className="animate-spin" />
        <Typography>Loading...</Typography>
      </div>
    );

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
