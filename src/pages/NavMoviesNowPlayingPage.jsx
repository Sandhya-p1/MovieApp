import React from "react";
import NavSublistPageLeftSide from "@/components/nav-sublist-page/sublist_page_leftside";
import SublistMoviesNowPlayingGallery from "@/components/nav-sublist-page/sublistmoviesnowplayinggallery";
import { useState } from "react";
function NavMoviesNowPlayingPage() {
  const [sortOption, setSortOption] = useState("descending");
  const handleSortChange = (value) => {
    if (value !== sortOption) {
      setSortOption(value);
    }
  };
  return (
    <div className="h-full flex gap-9  py-14 px-20 ">
      {/*leftside  */}
      <NavSublistPageLeftSide
        heading="Now Playing"
        onSortChange={handleSortChange}
        sortOption={sortOption}
      />
      {/* rightside */}
      <SublistMoviesNowPlayingGallery sortOption={sortOption} />
    </div>
  );
}

export default NavMoviesNowPlayingPage;
