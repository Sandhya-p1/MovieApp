import React from "react";
import MoreIcon from "@/components/body/movies-collection/moreicon";
import Typography from "@/components/ui/typography";
import { useQuery } from "@tanstack/react-query";
import { tmdb } from "@/assets/config/tmdb-client";
import { Skeleton } from "@/components/ui/skeleton";

const IMG_BASE = "https://media.themoviedb.org/t/p/w220_and_h330_face/";
export default function MovieCard({ id }) {
  const {
    data: movie,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movie", id],
    queryFn: async () => tmdb.get(`/movie/${id}`).then((res) => res.data),
  });
  if (error) return null;
  if (isLoading) {
    return (
      <div>
        <Skeleton className="h-[12rem] w-[120px] rounded-md bg-foreground/20 mb-4" />
        <Skeleton className="h-8 w-20 bg-foreground/20" />
      </div>
    );
  }
  if (!movie) return null;
  return (
    <div className="min-w-[140px] relative">
      <img
        src={IMG_BASE + movie.poster_path}
        className="object-cover rounded-xl w-[140px] h-[170px] mb-2 hover:scale-110  transition-all ease-out duration-200"
      />
      <MoreIcon />
      <div>
        <Typography
          size="h5"
          className="font-bold leading-4 hover:text-green-600 cursor-pointer "
        >
          {movie.title}
        </Typography>
        <Typography size="h6" className="text-slate-500">
          {movie.release_date}
        </Typography>
      </div>
    </div>
  );
}
