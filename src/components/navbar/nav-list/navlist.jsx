import React from "react";

import MoviesList from "./movieslist";
import Serials from "./serials";
import People from "./people";
import Next from "./next";

export default function NavList() {
  return (
    <div className=" px-10 flex items-center gap-x-5  text-nowrap font-medium text-gray-100">
      <MoviesList />
      <Serials />
      <People />
      <Next />
    </div>
  );
}
