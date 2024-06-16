import Typography from "@/components/ui/typography";
import React from "react";
import TrailersList from "./trailerslist";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function LatestTrailers() {
  return (
    <div className="h-96 bg-latestTrailers relative w-full  rounded-sm  bg-zinc-900 bg-opacity-100">
      <div className="absolute z-20 h-full top-0 right-0 w-20 bg-whiteGradient" />
      <div className="p-7 z-0 w-full h-full text-white">
        {/* heading */}

        <div className="flex items-center gap-x-4">
          <Typography size="h2" className="font-semibold ">
            Latest Trailers
          </Typography>
          {/* tabs */}
          <div className="flex items-center gap-x-5">
            <Typography>Popular</Typography>
            <Typography>Streamed</Typography>
            <Typography>Serials</Typography>
          </div>
        </div>

        {/* movies list */}
        <div className="flex relative items-center max-w-full no-scrollbar overflow-x-auto gap-x-4">
          <TrailersList />
          <TrailersList />
          <TrailersList />
          <TrailersList />
          <TrailersList />
          <TrailersList />
          <TrailersList />
          <TrailersList />
        </div>
      </div>
    </div>
  );
}
