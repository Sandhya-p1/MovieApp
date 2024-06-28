import { useInfiniteQuery } from "@tanstack/react-query";
import { tmdb } from "./assets/config/tmdb-client";

const fetchMovies = async ({ pageParam = 1, queryKey }) => {
  const endpoint = queryKey[1];
  const response = await tmdb.get(`${endpoint}?page=${pageParam}`);
  return response.data;
};
const useInfiniteMovies = (endpoint) => {
  return useInfiniteQuery({
    queryKey: ["infiniteMovies", endpoint],
    queryFn: fetchMovies,
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
      return undefined;
    },

    keepPreviousData: true,
  });
};
export default useInfiniteMovies;
