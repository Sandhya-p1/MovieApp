import NavSublistPageLeftSide from "@/components/nav-sublist-page/sublist_page_leftside";
import SublistMoviesPopularGallery from "@/components/nav-sublist-page/sublistmoviespopulargallery";
import React from "react";

function NavMoviesPopularPage() {
  return (
    <div className="h-full flex gap-9  py-14 px-20 ">
      {/*leftside  */}
      <NavSublistPageLeftSide heading="Popular Movies" />
      {/* rightside */}
      <SublistMoviesPopularGallery />
    </div>
  );
}

export default NavMoviesPopularPage;
