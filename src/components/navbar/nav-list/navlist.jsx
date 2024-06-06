import React from "react";

import Serials from "./serials";
import People from "./people";
import Next from "./next";
import Movies from "../movies";

export default function NavList() {
  return (
    <div className=" px-10 flex items-center gap-x-5  text-nowrap font-medium text-gray-100">
      <Movies />
      <Serials />
      <People />
      <Next />
    </div>
  );
}
