import React from "react";
import Banner from "./banner";

import LatestTrailers from "./latest-trailers/latesttrailers";

import MostVisited from "./mostvisited";
import Popular from "./popular";
import FreeToWatch from "./freetowatch";
import JoinUs from "./joinus";
export default function Body() {
  return (
    <div className="mx-0 md:mx-20 space-y-4 ">
      <Banner />
      <MostVisited />
      <LatestTrailers />
      <Popular />
      <FreeToWatch />
      <JoinUs />
    </div>
  );
}
