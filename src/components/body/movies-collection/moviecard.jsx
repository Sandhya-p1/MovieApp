import React from "react";
import MoreIcon from "@/components/body/movies-collection/moreicon";
import Typography from "@/components/ui/typography";
import { useQuery } from "@tanstack/react-query";
import { tmdb } from "@/assets/config/tmdb-client";

import { useNavigate, useParams } from "react-router-dom";

export const IMG_BASE = "https://media.themoviedb.org/t/p/w220_and_h330_face";

export const useMovieQuery = (id) =>
  useQuery({
    queryKey: ["movie", id],
    queryFn: async () => tmdb.get(`/movie/${id}`).then((res) => res.data),
  });

export default function MovieCard({ movie }) {
  const navigate = useNavigate();

  if (!movie || !movie.poster_path) return null;
  return (
    <div
      onClick={() => navigate(`movie/${movie.id}`)}
      className="min-w-[160px] relative group hover:scale-100 scale-90  transition-all ease-out duration-200"
    >
      <img
        src={IMG_BASE + movie.poster_path}
        className="object-cover rounded-xl w-full mb-2 shadow-md"
      />
      <MoreIcon />
      <div>
        <Typography
          size="h5"
          className="font-bold leading-4 hover:text-green-600 cursor-pointer "
        >
          {movie.title || movie.name}
        </Typography>
        <Typography size="h6" className="text-slate-500">
          {movie.release_date}
        </Typography>
      </div>
    </div>
  );
}

// page of each movie when click on moviecard
export const MoviePage = () => {
  const { id } = useParams();
  const { data, isLoading } = useMovieQuery(id);
  if (isLoading) return "Loading...";
  return (
    <div>
      <img src={IMG_BASE + data.poster_path} />
      <h1 className="text-2xl font-bold">{data?.title}</h1>
    </div>
  );
};
