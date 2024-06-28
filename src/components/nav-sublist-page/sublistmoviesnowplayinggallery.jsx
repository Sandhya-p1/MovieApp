import React from "react";
import { Loader2 } from "lucide-react";
import Typography from "../ui/typography";
import SubListMoviesCollection from "./sublistmoviescollection";
import useInfiniteMovies from "@/loadmore";
import useSortMovies from "@/sortingMovies";

function SublistMoviesNowPlayingGallery({ sortOption }) {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteMovies("/movie/now_playing");

  const movies = data?.pages.flatMap((page) => page.results) || [];
  const sortedMovies = useSortMovies(movies, sortOption);
  if (isLoading)
    return (
      <div className="flex gap-x-1 items-center">
        <Loader2 className="animate-spin" />
        <Typography size="h3">Loading</Typography>
      </div>
    );
  console.log("movies:", movies);
  console.log("sortedMovies:", sortedMovies);

  return (
    <div className="w-[70%]">
      <SubListMoviesCollection movies={sortedMovies} />
      {hasNextPage && (
        <button
          className="px-6 py-3 text-lg flex justify-center mx-auto font-semibold mt-10 rounded-md text-white bg-green-600 cursor-pointer hover:brightness-95"
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage ? "Loading more..." : "Load More"}
        </button>
      )}
      <div>{isLoading && !isFetchingNextPage ? "Fetching..." : null}</div>
    </div>
  );
}

export default SublistMoviesNowPlayingGallery;
