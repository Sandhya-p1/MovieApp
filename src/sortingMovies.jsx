import { useMemo } from "react";

const useSortedData = (movies, sortType) => {
  const sortedData = useMemo(() => {
    let result = [...movies];
    console.log(result);

    if (sortType === ORDER.ASC) {
      result.sort(
        (a, b) => new Date(a.release_date) - new Date(b.release_date)
      );
    } else if (sortType === ORDER.DSC) {
      result.sort(
        (a, b) => new Date(b.release_date) - new Date(a.release_date)
      );
    }
    return result;
  }, [movies, sortType]);

  return sortedData;
};
export default useSortedData;

export const ORDER = {
  ASC: "asc",
  DSC: "des",
};
