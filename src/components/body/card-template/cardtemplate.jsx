import React from "react";
import Title from "./title";
import MovieCard from "./moviecard";

export default function CardTemplate({ title, movies }) {
  return (
    <div className="flex flex-col items-start justify-center gap-3 py-4 px-7 shadow-sm">
      <Title headings={title.headings}>{title.children}</Title>
      <div className="flex items-center gap-x-5   overflow-x-scroll no-scrollbar w-full ">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            src={movie.src}
            movieName={movie.movieName}
            desc={movie.desc}
          />
        ))}
      </div>
    </div>
  );
}
