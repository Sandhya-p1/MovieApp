import React from "react";
import Title from "./title";
import MovieCard from "./moviecard";

export default function MoviesCollection({ title, movies }) {
  return (
    <div className="flex flex-col items-start justify-center gap-3 py-4 px-7 shadow-sm">
      <Title headings={title.headings}>{title.children}</Title>
      <div className="flex gap-x-5 overflow-x-scroll no-scrollbar w-full ">
        {movies &&
          movies.map((movie) => <MovieCard key={movie.id} id={movie.id} />)}
      </div>
    </div>
  );
}
