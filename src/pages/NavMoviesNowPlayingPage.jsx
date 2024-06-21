import React from "react";
import NavSublistPageLeftSide from "@/components/nav-sublist-page/sublist_page_leftside";
import SublistMoviesNowPlayingGallery from "@/components/nav-sublist-page/sublistmoviesnowplayinggallery";

function NavMoviesNowPlayingPage() {
  return (
    <div className="h-full flex gap-9  py-14 px-20 ">
      {/*leftside  */}
      <NavSublistPageLeftSide heading="Now Playing" />
      {/* rightside */}
      <SublistMoviesNowPlayingGallery />
    </div>
  );
}

export default NavMoviesNowPlayingPage;
