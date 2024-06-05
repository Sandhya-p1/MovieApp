import React from "react";
import Banner from "./banner";
import MostVisited from "./mostvisted-movies/mostvisited";
import LatestTrailers from "./latest-trailers/latesttrailers";
export default function Body() {
  return (
    <div className="mx-0 md:mx-20 space-y-4 ">
      <Banner />
      <MostVisited />
      <LatestTrailers />
    </div>
  );
}
