import React from "react";
import NavSublistPageLeftSide from "@/components/nav-sublist-page/sublist_page_leftside";
import SublistTVShowsOnTVGallery from "@/components/nav-sublist-page/sublisttvshowsontvgallery";

function NavTVShowsOnTVPage() {
  return (
    <div className="h-full flex gap-9  py-14 px-20 ">
      {/* leftside */}
      <NavSublistPageLeftSide heading="On TV" />
      {/* rightside */}
      <SublistTVShowsOnTVGallery />
    </div>
  );
}

export default NavTVShowsOnTVPage;
