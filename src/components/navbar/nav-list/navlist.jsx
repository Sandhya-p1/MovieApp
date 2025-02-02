import React from "react";

import People from "./people";
import Next from "./next";
import Movies from "./movies";
// import TvShows from "./tvshows";
import Typography from "@/components/ui/typography";
import { Link } from "react-router-dom";

export default function NavList() {
  return (
    <div className=" px-10 flex items-center gap-x-5  text-nowrap font-medium text-gray-100">
      <Movies />
      {/* <TvShows /> */}
      <People />
      <Next />
      <Link to="/favorites">
        <Typography>Favorites</Typography>
      </Link>
    </div>
  );
}
