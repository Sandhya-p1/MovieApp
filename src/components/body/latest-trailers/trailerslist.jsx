import MoreIcon from "@/components/body/card-template/moreicon";
import Typography from "@/components/ui/typography";
import { Play } from "lucide-react";
import React from "react";

export default function TrailersList() {
  return (
    <div className="min-w-[300px] text-white  h-fit mt-4 rounded-xl text-center relative">
      <img
        src="https://i.ytimg.com/vi/xwKhpcCY798/maxresdefault.jpg"
        className="rounded-xl object-cover h-full w-full "
      />
      <MoreIcon />
      <div className="absolute inset-0 flex items-center justify-center">
        <Play className="text-white fill-white h-16 w-20 " />
      </div>
      <div className="line-clamp-2">
        <Typography size="h3" className="font-semibold">
          Guardians
        </Typography>
        <Typography size="h4">There is no joy here.</Typography>
      </div>
    </div>
  );
}
