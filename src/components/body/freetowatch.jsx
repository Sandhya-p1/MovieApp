import React from "react";
import CardTemplate from "./card-template/cardtemplate";

export default function FreeToWatch() {
  const title = {
    headings: "Free To Watch",
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
