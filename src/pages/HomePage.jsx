import Banner from "@/components/body/banner";

import FreeToWatch from "@/components/body/freetowatch";
import JoinUs from "@/components/body/joinus";
import LatestTrailers from "@/components/body/latest-trailers/latesttrailers";
import MostVisited from "@/components/body/mostvisited";
import Popular from "@/components/body/popular";
import React from "react";

function HomePage() {
  return (
    <div>
      <div className="mx-0 md:mx-20 space-y-4 ">
        <Banner />
        <MostVisited />
        <LatestTrailers />
        <Popular />
        <FreeToWatch />
        <JoinUs />
      </div>
    </div>
  );
}

export default HomePage;
