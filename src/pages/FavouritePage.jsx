import { tmdb } from "@/assets/config/tmdb-client";
import { useQuery } from "@tanstack/react-query";
import React from "react";

function FavouritesPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["favorites"],
    queryFn: () => tmdb.get("/"),
  });
  return <div></div>;
}

export default FavouritesPage;

// export const MoviesGallery = ({ movies }) => {
//   return <div>

//   </div>;
// };
