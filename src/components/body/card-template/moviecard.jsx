import React from "react";
import MoreIcon from "@/components/body/card-template/moreicon";
import Typography from "@/components/ui/typography";
export default function MovieCard({ src, movieName, desc }) {
  return (
    <div>
      <div className="w-40 h-fit rounded-xl shadow-sm">
        <div className="h-[220px] w-40 rounded-xl relative hover:scale-110 duration-200 transition-transform ease-out ">
          {/* movie banner */}
          <img src={src} className="object-cover rounded-xl w-full h-full" />
          <MoreIcon />
        </div>
        {/* movie content */}
        <div className="pt-4 text-black px-2 space-y-1 text-start">
          <Typography
            size="h5"
            className="font-bold leading-4 hover:text-green-600 cursor-pointer "
          >
            {movieName}
          </Typography>
          <Typography size="h6" className="text-slate-500">
            {desc}
          </Typography>
        </div>
      </div>
    </div>
  );
}
