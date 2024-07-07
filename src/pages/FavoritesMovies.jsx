import MovieCard, {
  useMovieQuery,
} from "@/components/body/movies-collection/moviecard";
import Typography from "@/components/ui/typography";
import { useFavorites } from "@/context/favorite-movies.context";
import React from "react";

function FavoritesMovies() {
  const { favorites } = useFavorites();

  return (
    <div className="px-9 pt-6">
      <Typography size="h3" className="mx-5 font-bold">
        Favorite Movies
      </Typography>
      <div className="grid grid-cols-6 gap-4">
        {favorites.map((id) => {
          return <MovieFetched key={id} id={id} />;
        })}
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
  if (error) {
    console.log(error);
    return null;
  }
  if (!data) return null;

  return <MovieCard movie={data} />;
};
