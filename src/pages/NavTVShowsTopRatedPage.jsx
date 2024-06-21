import NavSublistPageLeftSide from "@/components/nav-sublist-page/sublist_page_leftside";
import SublistTVShowsTopRatedGallery from "@/components/nav-sublist-page/sublisttvshowstopratedgallery";
import React from "react";

function NavTVShowsTopRatedPage() {
  return (
    <div className="h-full flex gap-9  py-14 px-20 ">
      {/* left side */}
      <NavSublistPageLeftSide heading="Top Rated" />
      {/* right side */}
      <SublistTVShowsTopRatedGallery />
    </div>
  );
}

export default NavTVShowsTopRatedPage;
