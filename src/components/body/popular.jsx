import React from "react";
import CardTemplate from "./card-template/cardtemplate";

export default function Popular() {
  const title = {
    headings: "Popular",
    children: null,
  };
  const movies = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFhqGQe10fJ7wqKelULN9HnbHpbPIdJGaeFg&s",
      movieName: "Movie1",
      desc: "description",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFhqGQe10fJ7wqKelULN9HnbHpbPIdJGaeFg&s",
      movieName: "Movie1",
      desc: "description",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFhqGQe10fJ7wqKelULN9HnbHpbPIdJGaeFg&s",
      movieName: "Movie1",
      desc: "description",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFhqGQe10fJ7wqKelULN9HnbHpbPIdJGaeFg&s",
      movieName: "Movie1",
      desc: "description",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFhqGQe10fJ7wqKelULN9HnbHpbPIdJGaeFg&s",
      movieName: "Movie1",
      desc: "description",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFhqGQe10fJ7wqKelULN9HnbHpbPIdJGaeFg&s",
      movieName: "Movie1",
      desc: "description",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFhqGQe10fJ7wqKelULN9HnbHpbPIdJGaeFg&s",
      movieName: "Movie1",
      desc: "description",
    },
  ];
  return (
    <div>
      <CardTemplate title={title} movies={movies} />
    </div>
  );
}
