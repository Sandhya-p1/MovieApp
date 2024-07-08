import React from "react";
import Typography from "@/components/ui/typography";
import { useQuery } from "@tanstack/react-query";
import { tmdb } from "@/assets/config/tmdb-client";

import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useFavorites } from "@/context/favorite-movies.context";

export const IMG_BASE = "https://media.themoviedb.org/t/p/w220_and_h330_face";

export const useMovieQuery = (id) =>
  useQuery({
    queryKey: ["movie", id],
    queryFn: async () => tmdb.get(`/movie/${id}`).then((res) => res.data),
  });

export default function MovieCard({ movie }) {
  const navigate = useNavigate();
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  if (!movie || !movie.poster_path) return null;

  const isFavorite = favorites?.includes(movie.id);

  const handleFavoriteClick = async (e) => {
    e.stopPropagation();
    if (isFavorite) {
      await removeFavorite(movie.id);
    } else {
      addFavorite(movie.id);
    }
  };

  return (
    <div
      onClick={() => navigate(`/movie/${movie.id}`)}
      className="min-w-[160px] relative group hover:scale-100 scale-90  transition-all ease-out duration-200"
    >
      <img
        src={IMG_BASE + movie.poster_path}
        className="object-cover rounded-xl w-full mb-2  shadow-md"
      />

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
      <Heart
        className={cn(
          "absolute top-2 right-2 cursor-pointer  h-5 w-5",
          isFavorite
            ? "fill-red-600 text-red-600"
            : "text-white  hover:text-red-600 hover:scale-105"
        )}
        onClick={handleFavoriteClick}
      />
    </div>
  );
}
