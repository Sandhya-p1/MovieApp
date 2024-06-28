import React from "react";
import MovieCard from "../body/movies-collection/moviecard";
function SubListMoviesCollection({ movies }) {
  return (
    <div className="grid grid-cols-5 gap-x-4 gap-y-5">
      {movies &&
        movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  );
}

export default SubListMoviesCollection;
