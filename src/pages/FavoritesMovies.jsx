import MovieCard, {
  useMovieQuery,
} from "@/components/body/movies-collection/moviecard";
import Typography from "@/components/ui/typography";
import { useFavorites } from "@/context/favorite-movies.context";
import React from "react";

function FavoritesMovies() {
  const { favorites } = useFavorites();

  return (
    <div className="px-7 py-5">
      <Typography size="xl">Favorite Movies</Typography>
      <div className="grid grid-cols-6 gap-4">
        {favorites.map((id) => (
          <MovieFetched id={id} />
        ))}
      </div>
    </div>
  );
}

export default FavoritesMovies;

const MovieFetched = ({ id }) => {
  const { data, loading, error } = useMovieQuery(id);

  if (loading) {
    return "loading..";
  }
  if (error) return null;

  return <MovieCard movie={data} />;
};
