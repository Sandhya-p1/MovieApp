import Banner from "@/components/body/banner";

import JoinUs from "@/components/body/joinus";

import Popular from "@/components/body/popular";
import React from "react";
import TopRated from "@/components/body/toprated";
import Upcoming from "@/components/body/latest-trailers/latesttrailers";
import NowPlaying from "@/components/body/nowplaying";

function HomePage() {
  return (
    <div>
      <div className="mx-0 md:mx-20 flex flex-col gap-y-4 ">
        <Banner />
        <TopRated />
        <Upcoming />
        <Popular />
        <NowPlaying />
        <JoinUs />
      </div>
    </div>
  );
}

export default HomePage;
