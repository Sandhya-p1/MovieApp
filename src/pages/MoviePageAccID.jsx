import {
  IMG_BASE,
  useMovieQuery,
} from "@/components/body/movies-collection/moviecard";
import Typography from "@/components/ui/typography";
import React from "react";
import { useParams } from "react-router-dom";

function MoviePageAccID() {
  const { id } = useParams();
  const { data, isLoading, isError } = useMovieQuery(id);
  console.log(data);
  if (isLoading) return "Loading...";
  if (isError || !data)
    return (
      <Typography size="h3" className="flex-1 h-full">
        Error Loading data, Please try again
      </Typography>
    );

  return (
    <div
      key={data.id}
      className="flex items-start gap-x-6 w-full h-full relative "
    >
      <div
        className="bg-cover bg-center z-0 inset-0 absolute  "
        style={{
          backgroundImage: `url(${IMG_BASE + data.poster_path})`,
        }}
      >
        <div className="absolute inset-0 bg-white/80 z-10 backdrop-blur-sm"></div>
      </div>

      <div className="relative  px-16 py-8 flex items-start gap-x-7">
        <img
          src={IMG_BASE + data.poster_path}
          className=" rounded-lg h-1/2 hover:scale-105 transition-all duration-150 ease-linear"
        />
        <div className="flex flex-col w-2/3">
          <h1 className="text-4xl font-bold font-serif">{data?.title}</h1>
          <Typography size="h3" className="font-medium">
            ({data.release_date})
          </Typography>
          <Typography className=" text-gray-700 py-1" size="h5">
            {data.tagline}
          </Typography>
          <div className="py-4 flex flex-col gap-1">
            <Typography size="lg">Overview</Typography>
            <Typography size="sm" className="text-gray-900 text-wrap">
              {data.overview}
            </Typography>
            <Typography className="pt-7 font-bold" size="sm">
              {data.status}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviePageAccID;
