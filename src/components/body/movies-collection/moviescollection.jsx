import React from "react";

import MovieCard from "./moviecard";

export default function MoviesCollection({ title, movies }) {
  return (
    <div className="flex flex-col items-start justify-center gap-3 py-4 px-7 shadow-sm">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="flex gap-x-5 overflow-x-scroll no-scrollbar w-full ">
        {movies &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
}
