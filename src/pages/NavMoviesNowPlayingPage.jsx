import React from "react";
import { useState } from "react";
import NavSublistPageLeftSide from "@/components/nav-sublist-page/sublist_page_leftside";
import SublistMoviesNowPlayingGallery from "@/components/nav-sublist-page/sublistmoviesnowplayinggallery";

function NavMoviesNowPlayingPage() {
  const [sortType, setSortType] = useState("ascending");
  const handleSort = () => {
    setSortType(sortType);
  };
  return (
    <div className="h-full flex gap-9  py-14 px-20 ">
      {/*leftside  */}
      <NavSublistPageLeftSide
        heading="Now Playing"
        sortType={sortType}
        setSortType={handleSort}
      />
      {/* rightside */}
      <SublistMoviesNowPlayingGallery sortType={sortType} />
    </div>
  );
}

export default NavMoviesNowPlayingPage;
