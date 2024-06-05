import MoreIcon from "@/components/ui/moreicon";
import Typography from "@/components/ui/typography";

import React from "react";

export default function MoviesList() {
  return (
    <div className="w-40 h-fit rounded-xl shadow-sm">
      <div className="h-[220px] w-40 rounded-xl relative  ">
        {/* movie banner */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFhqGQe10fJ7wqKelULN9HnbHpbPIdJGaeFg&s"
          className="object-cover rounded-xl w-full h-full"
        />
        <MoreIcon />
      </div>
      {/* movie content */}
      <div className="pt-4 text-black px-2 space-y-1">
        <Typography
          size="h5"
          className="font-bold leading-4 hover:text-green-600 cursor-pointer "
        >
          Furiosa: The Mad Max Saga
        </Typography>
        <Typography size="h6" className="text-slate-500">
          May 23 2024
        </Typography>
      </div>
    </div>
  );
}
