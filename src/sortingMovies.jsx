import { useMemo } from "react";

function useSortMovies(movies, sortOption) {
  const sortedMovies = useMemo(() => {
    if (!movies) return;
    console.log("Sorting movies with option:", sortOption);
    console.log("Movies before sorting:", movies);
    const sorted = [...movies].sort((a, b) => {
      const dateA = new Date(a.release_date);
      const dateB = new Date(b.release_date);
      if (sortOption === "ascending") {
        return dateA - dateB;
      } else if (sortOption === "descending") {
        return dateB - dateA;
      }
      return 0;
    });
    console.log("Movies after sorting:", sorted);
    return sorted;
  }, [movies, sortOption]);
  return sortedMovies;
}
export default useSortMovies;
