import MoreIcon from "@/components/body/movies-collection/moreicon";
import Typography from "@/components/ui/typography";
import { Play } from "lucide-react";
import React from "react";
import { IMG_BASE } from "../movies-collection/moviecard";

export function MovieCardLarge({ movie }) {
  return (
    <div className="min-w-[280px] text-white hover:scale-105 transition-all duration-150 ease-out   h-44 mt-4 rounded-xl text-center relative">
      <img
        src={IMG_BASE + movie?.poster_path}
        className="rounded-xl object-cover h-full w-full "
      />
      <MoreIcon />
      <div className="absolute inset-0 flex items-center justify-center">
        <Play className="text-white fill-white h-16 w-20 cursor-pointer" />
      </div>
      <div className="line-clamp-2 py-2 ">
        <Typography size="h3" className="font-semibold">
          {movie.title || movie.name}
        </Typography>
        <Typography size="h6" className="text-gray-300">
          {movie?.release_date}
        </Typography>
      </div>
    </div>
  );
}
