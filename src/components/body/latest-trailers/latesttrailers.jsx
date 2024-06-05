import Typography from "@/components/ui/typography";
import React from "react";

export default function LatestTrailers() {
  return (
    <div className="h-80 relative w-full rounded-sm  overscroll-scroll no-scrollbar bg-zinc-900 bg-opacity-100">
      <img
        src="https://c.ndtvimg.com/2024-04/rskpmkvg_vicky-_625x300_15_April_24.jpeg"
        className="object-fill object-center w-full h-full opacity-5"
      />
      <div className="p-7 absolute top-0 text-white">
        <div>
          <Typography size="h2" className="font-semibold ">
            Latest Trailers
          </Typography>
        </div>
      </div>
    </div>
  );
}
