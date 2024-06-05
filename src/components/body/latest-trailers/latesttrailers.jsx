import Typography from "@/components/ui/typography";
import React from "react";
import TrailersList from "./trailerslist";

export default function LatestTrailers() {
  return (
    <div className="h-96 relative overflow-y-hidden no-scrollbar w-full rounded-sm  bg-zinc-900 bg-opacity-100">
      <img
        src="https://c.ndtvimg.com/2024-04/rskpmkvg_vicky-_625x300_15_April_24.jpeg"
        className="object-fill object-center  w-full h-full opacity-5"
      />
      <div className="p-7 absolute top-0  h-full text-white">
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
        <div className="flex items-center gap-x-4  overflow-x-scroll no-scrollbar w-full">
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
