import NavSublistPageLeftSide from "@/components/nav-sublist-page/sublist_page_leftside";
import SublistTVShowsPopularGallery from "@/components/nav-sublist-page/sublisttvshowspopulargallery";

import React from "react";

function NavTVShowsPopularPage() {
  return (
    <div className="h-full flex gap-9  py-14 px-20 ">
      {/* left side */}
      <NavSublistPageLeftSide heading="Popular" />
      {/* right side */}
      <SublistTVShowsPopularGallery />
    </div>
  );
}

export default NavTVShowsPopularPage;
