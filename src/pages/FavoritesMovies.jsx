import { useMovieQuery } from "@/components/body/movies-collection/moviecard";

import { useFavoriteMovies } from "@/context/favorite-movies.context";
import React, { useMemo } from "react";

function FavoritesMovies() {
  const [favorite, setFavorite] = useFavoriteMovies();
  const favoriteMoviesIds = useMemo(() => {
    return Object.keys(favorite).filter((movieId) => favorite[movieId]);
  }, [favorite]);

  return (
    <div>
      {favoriteMoviesIds.map((movieId) => {
        return <MovieCard key={movieId} id={movieId} />;
      })}
    </div>
  );
}

export default FavoritesMovies;

const MovieCard = ({ id }) => {
  const { data, isLoading } = useMovieQuery(id);

  return <div>{data.name}</div>;
};
